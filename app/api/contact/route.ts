import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { fullName, email, subject, message } = await req.json()

  if (!fullName || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  const senderEmail = process.env.BREVO_SENDER_EMAIL
  const recipientEmail = process.env.BREVO_RECIPIENT_EMAIL

  if (!apiKey || !senderEmail || !recipientEmail) {
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
  }

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sender: { name: 'Inkers Hub Contact', email: senderEmail },
      to: [{ email: recipientEmail, name: 'Inkers Hub Team' }],
      replyTo: { email, name: fullName },
      subject: `[Contact Form] ${subject} — from ${fullName}`,
      htmlContent: `
        <div style="font-family:sans-serif;max-width:560px;margin:auto;padding:32px;border:1px solid #e5e7eb;border-radius:16px;">
          <h2 style="margin:0 0 8px;font-size:22px;color:#0a0f1a;">New Contact Form Submission</h2>
          <p style="margin:0 0 24px;color:#6b7280;font-size:14px;">Someone reached out via the Inkers Hub website.</p>

          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr>
              <td style="padding:10px 0;color:#6b7280;font-weight:600;width:120px;">Name</td>
              <td style="padding:10px 0;color:#0a0f1a;font-weight:700;">${fullName}</td>
            </tr>
            <tr style="border-top:1px solid #f3f4f6;">
              <td style="padding:10px 0;color:#6b7280;font-weight:600;">Email</td>
              <td style="padding:10px 0;"><a href="mailto:${email}" style="color:#ec3203;font-weight:700;">${email}</a></td>
            </tr>
            <tr style="border-top:1px solid #f3f4f6;">
              <td style="padding:10px 0;color:#6b7280;font-weight:600;">Subject</td>
              <td style="padding:10px 0;color:#0a0f1a;font-weight:700;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top:24px;padding:20px;background:#f9fafb;border-radius:12px;border:1px solid #f3f4f6;">
            <p style="margin:0 0 8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#9ca3af;">Message</p>
            <p style="margin:0;color:#374151;line-height:1.6;white-space:pre-wrap;">${message}</p>
          </div>

          <p style="margin:24px 0 0;font-size:12px;color:#9ca3af;">
            Sent from <strong>inkershub.com</strong> contact form. Reply directly to this email to respond to ${fullName}.
          </p>
        </div>
      `,
    }),
  })

  if (res.ok || res.status === 201) {
    return NextResponse.json({ success: true })
  }

  const data = await res.json().catch(() => ({}))
  const errMessage = data?.message || 'Failed to send message. Please try again.'
  return NextResponse.json({ error: errMessage }, { status: 400 })
}
