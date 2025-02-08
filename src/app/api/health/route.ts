import { NextResponse } from 'next/server';
import { getAllDocs } from '@/lib/docs';

export async function GET() {
  try {
    const docs = await getAllDocs();
    return NextResponse.json({
      status: 'healthy',
      docsCount: docs.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        error: process.env.NODE_ENV === 'production' ? 'Internal error' : error,
      },
      { status: 500 }
    );
  }
} 