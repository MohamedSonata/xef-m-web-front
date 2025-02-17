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
    
    // Ensure we're not processing duplicate messages
    const uniqueMessages = messages.reduce((acc: ChatMessage[], curr: ChatMessage) => {
      const isDuplicate = acc.some(msg => 
        msg.content === curr.content && 
        msg.role === curr.role &&
        // Only consider messages from the last 2 positions to avoid removing valid historical duplicates
        acc.indexOf(msg) >= acc.length - 2
      );
      return isDuplicate ? acc : [...acc, curr];
    }, []);
    
    // Get only the last user message
    const lastUserMessage = uniqueMessages[uniqueMessages.length - 1].content;
    
    // Format previous messages for context (excluding the last message)
    const previousMessages = uniqueMessages.slice(0, -1)
      .filter((msg: ChatMessage) => msg.role !== 'system')
      .map((msg: ChatMessage) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      throw new Error('Missing Gemini API key');
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    const chat = model.startChat({
      history: previousMessages,
      generationConfig: {
        maxOutputTokens: 1024,
      },
    });

    // Create a streaming response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const result = await chat.sendMessageStream(lastUserMessage);
          let previousText = ''; // Used to prevent duplication

          for await (const chunk of result.stream) {
            const chunkText = chunk.text().trim(); // Trim to clean up extra spaces

            // Prevent duplicate responses
            if (chunkText && chunkText !== previousText) {
              controller.enqueue(encoder.encode(chunkText + ' '));
              previousText = chunkText;
            }
          }
          
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache',
        'X-Content-Type-Options': 'nosniff',
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

