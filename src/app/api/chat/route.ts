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
    const userMessage = messages[messages.length - 1].content;
    console.log(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
    console.log(process.env.NEXT_PUBLIC_API_URL);

    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      throw new Error('Missing Gemini API key');
    }

    // Initialize the model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    // Start a chat
    const chat = model.startChat();
    
    // Send message and get response
    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    
    return NextResponse.json({ message: response.text() });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: error || 'Failed to process request' },
      { status: 500 }
    );
  }
} 

