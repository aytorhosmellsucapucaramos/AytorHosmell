interface VercelRequest {
  method?: string
  body?: {
    name?: string
    email?: string
    message?: string
    website?: string
  }
}

interface VercelResponse {
  status: (code: number) => {
    json: (body: unknown) => void
  }
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  const { name = '', email = '', message = '', website = '' } = req.body ?? {}

  if (website) {
    return res.status(200).json({ ok: true })
  }

  if (!name.trim() || !email.trim() || !message.trim() || !isEmail(email)) {
    return res.status(400).json({ error: 'invalid_payload' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>'

  if (!apiKey || !to) {
    return res.status(500).json({ error: 'missing_contact_env' })
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Nuevo mensaje de portafolio: ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  })

  if (!response.ok) {
    return res.status(502).json({ error: 'email_provider_failed' })
  }

  return res.status(200).json({ ok: true })
}
