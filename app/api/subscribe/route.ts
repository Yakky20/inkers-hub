import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { firstName, email } = await req.json()

  if (!firstName || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  const listId = process.env.BREVO_LIST_ID

  if (!apiKey || !listId) {
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 })
  }

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      attributes: { FIRSTNAME: firstName },
      listIds: [Number(listId)],
      updateEnabled: true,
    }),
  })

  if (res.ok || res.status === 204) {
    return NextResponse.json({ success: true })
  }

  const data = await res.json().catch(() => ({}))
  const message = data?.message || 'Failed to subscribe. Please try again.'
  return NextResponse.json({ error: message }, { status: 400 })
}
