import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateEmailHtml } from '@/lib/email-template';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    // Basic validation
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER, // Sender address
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Receiver address
      replyTo: email,
      subject: `New Inquiry: ${firstName} ${lastName}`,
      html: generateEmailHtml({ firstName, lastName, email, message }),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
