import { Send } from 'lucide-react'
import { useState } from 'react'
import { content, type Language } from '../../content/content'
import type { ContactFormData } from '../../types'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface ContactFormProps {
  language?: Language
}

const requiredMessage = 'Este campo es obligatorio'
const emailMessage = 'Ingresa un email válido'

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function ContactForm({ language = 'es' }: ContactFormProps) {
  const [data, setData] = useState<ContactFormData>({ name: '', email: '', message: '', website: '' })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [status, setStatus] = useState<Status>('idle')

  const update = (field: keyof ContactFormData, value: string) => {
    setData((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const validate = () => {
    const nextErrors: Partial<ContactFormData> = {}
    if (!data.name.trim()) nextErrors.name = requiredMessage
    if (!data.email.trim()) nextErrors.email = requiredMessage
    if (data.email.trim() && !isEmail(data.email)) nextErrors.email = emailMessage
    if (!data.message.trim()) nextErrors.message = requiredMessage
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('contact-failed')
      setData({ name: '', email: '', message: '', website: '' })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full border border-border bg-bg px-4 py-3 text-sm text-text-primary transition-colors placeholder:text-text-muted focus:border-accent focus:outline-none dark:border-border-dark dark:bg-bg-dark dark:text-text-primary-dark'

  return (
    <form className="space-y-4" onSubmit={submit} noValidate aria-label="Formulario de contacto">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={data.website} onChange={(event) => update('website', event.target.value)} />
      </div>

      {status === 'success' && <p className="border border-emerald-300 bg-emerald-50 p-3 text-sm text-emerald-800" role="status">{content.contact.success[language]}</p>}
      {status === 'error' && <p className="border border-red-300 bg-red-50 p-3 text-sm text-red-800" role="alert">{content.contact.error[language]}</p>}

      <div>
        <label className="mb-1.5 block text-sm font-semibold" htmlFor="name">{content.contact.fields.name[language]}</label>
        <input id="name" className={inputClass} value={data.name} placeholder={content.contact.placeholders.name[language]} onChange={(event) => update('name', event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
        {errors.name && <p id="name-error" className="mt-1 text-xs text-red-700">{errors.name}</p>}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold" htmlFor="email">{content.contact.fields.email[language]}</label>
        <input id="email" className={inputClass} type="email" value={data.email} placeholder={content.contact.placeholders.email[language]} onChange={(event) => update('email', event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
        {errors.email && <p id="email-error" className="mt-1 text-xs text-red-700">{errors.email}</p>}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold" htmlFor="message">{content.contact.fields.message[language]}</label>
        <textarea id="message" className={`${inputClass} min-h-36 resize-y`} value={data.message} placeholder={content.contact.placeholders.message[language]} onChange={(event) => update('message', event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} />
        {errors.message && <p id="message-error" className="mt-1 text-xs text-red-700">{errors.message}</p>}
      </div>

      <button className="inline-flex w-full items-center justify-center gap-2 bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70" disabled={status === 'submitting'} type="submit">
        {status === 'submitting' ? 'Enviando...' : content.contact.submit[language]}
        <Send size={17} />
      </button>
    </form>
  )
}
