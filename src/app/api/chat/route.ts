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
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      throw new Error('Missing Gemini API key');
    }

    const { messages } = await req.json();
    
    // Get only the last user message and previous context
    const lastMessage = messages[messages.length - 1];
    const previousMessages = messages.slice(0, -1)
      .filter((msg: ChatMessage) => msg.role !== 'system')
      .map((msg: ChatMessage) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const chat = model.startChat({
      history: previousMessages,
      generationConfig: {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      }
    });

    // Create a streaming response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          const result = await chat.sendMessageStream(lastMessage.content);
          let previousChunk = '';

          for await (const chunk of result.stream) {
            const chunkText = chunk.text().trim();
            
            // Only send non-empty and non-duplicate chunks
            if (chunkText && chunkText !== previousChunk) {
              controller.enqueue(encoder.encode(chunkText + ' '));
              previousChunk = chunkText;
            }
          }
          controller.close();
        } catch (error) {
          console.error('Streaming error:', error);
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

