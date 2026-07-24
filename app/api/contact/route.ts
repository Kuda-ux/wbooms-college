import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { success: false, error: 'Name and message are required.' },
        { status: 400 }
      );
    }

    // eslint-disable-next-line no-console
    console.log('[Contact Form]', { ...body, receivedAt: new Date().toISOString() });

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting W Booms College. We will respond soon.',
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Unable to send message. Please call us directly.' },
      { status: 500 }
    );
  }
}
