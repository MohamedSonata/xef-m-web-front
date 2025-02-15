/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    // Format chat history according to Gemini's expected structure
    const chatHistory = messages
      .filter((msg: ChatMessage) => msg.role !== 'system')
      .map((msg: ChatMessage) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      throw new Error('Missing Gemini API key');
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    // Start a chat with history
    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 1024,
      },
    });
    
    // Create a new ReadableStream for streaming the response
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const userMessage = messages[messages.length - 1].content;
          const result = await chat.sendMessage(userMessage);
          const response = await result.response;
          const text = response.text();
          
          // Split the response into chunks and send them
          const chunks = text.split(' ');
          for (const chunk of chunks) {
            controller.enqueue(chunk + ' ');
            // Add a small delay to simulate typing
            await new Promise(resolve => setTimeout(resolve, 50));
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    // Return the stream with the appropriate headers
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain',
        'Transfer-Encoding': 'chunked',
      },
    });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: error || 'Failed to process request' },
      { status: 500 }
    );
  }
} 

