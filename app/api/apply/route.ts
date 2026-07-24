import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { studentName, formLevel, parentName, phone, email, message } = body;

    if (!studentName || !formLevel || !parentName || !phone) {
      return NextResponse.json(
        { success: false, error: 'Please complete all required fields.' },
        { status: 400 }
      );
    }

    const ref = `WBC-${Date.now().toString(36).toUpperCase()}`;

    // eslint-disable-next-line no-console
    console.log('[Enrolment Application]', { ref, ...body, receivedAt: new Date().toISOString() });

    return NextResponse.json({
      success: true,
      ref,
      message:
        'Application received. Our admissions team will contact you within two working days.',
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request. Please try again.' },
      { status: 500 }
    );
  }
}
