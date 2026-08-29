import React, { useState } from 'react'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '../atoms/Button'
import { uiCopy, siteConfig } from '../../content/content'
import type { ContactFormData } from '../../types'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * ContactForm — Formulario de contacto con Formspree y validación accesible.
 *
 * Props: ninguna (lee config de content.ts)
 * Estado interno: campos, errores, estado de envío.
 *
 * @accessibility
 * - Labels asociados con htmlFor
 * - Mensajes de error con aria-describedby
 * - aria-live para feedback asíncrono
 */
export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}
    if (!formData.name.trim()) newErrors.name = uiCopy.form.requiredError
    if (!formData.email.trim()) {
      newErrors.email = uiCopy.form.requiredError
    } else if (!validateEmail(formData.email)) {
      newErrors.email = uiCopy.form.emailError
    }
    if (!formData.message.trim()) newErrors.message = uiCopy.form.requiredError
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    if (!siteConfig.formspreeId) {
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      const formspreeUrl = `https://formspree.io/f/${siteConfig.formspreeId}`
      const res = await fetch(formspreeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputBase = [
    'w-full px-4 py-3 rounded-lg text-sm font-body',
    'bg-surface-elevated dark:bg-surface-elevated-dark',
    'text-text-primary dark:text-text-primary-dark',
    'border border-border dark:border-border-dark',
    'placeholder:text-text-muted dark:placeholder:text-text-muted-dark',
    'transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:border-transparent',
  ].join(' ')

  const inputError = 'border-red-400 dark:border-red-500 focus:ring-red-400'

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center gap-4 py-12 text-center"
      >
        <CheckCircle2
          size={48}
          className="text-emerald-500"
          aria-hidden="true"
        />
        <h3 className="text-xl font-heading text-text-primary dark:text-text-primary-dark">
          {uiCopy.form.successTitle}
        </h3>
        <p className="text-text-muted dark:text-text-muted-dark font-body">
          {uiCopy.form.successMessage}
        </p>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setStatus('idle')}
        >
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Formulario de contacto"
      className="space-y-5"
    >
      {/* Error banner */}
      {status === 'error' && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex items-start gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
        >
          <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-red-700 dark:text-red-400 font-body">
              {uiCopy.form.errorTitle}
            </p>
            <p className="text-sm text-red-600 dark:text-red-300 font-body">
              {uiCopy.form.errorMessage}
            </p>
          </div>
        </div>
      )}

      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5 font-body"
        >
          {uiCopy.form.nameLabel}
          <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={uiCopy.form.namePlaceholder}
          aria-required="true"
          aria-describedby={errors.name ? 'name-error' : undefined}
          aria-invalid={!!errors.name}
          className={[inputBase, errors.name ? inputError : ''].join(' ')}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-500 font-body">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="block text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5 font-body"
        >
          {uiCopy.form.emailLabel}
          <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={uiCopy.form.emailPlaceholder}
          aria-required="true"
          aria-describedby={errors.email ? 'email-error' : undefined}
          aria-invalid={!!errors.email}
          className={[inputBase, errors.email ? inputError : ''].join(' ')}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-500 font-body">
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5 font-body"
        >
          {uiCopy.form.messageLabel}
          <span className="text-red-500 ml-0.5" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder={uiCopy.form.messagePlaceholder}
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
          aria-invalid={!!errors.message}
          className={[inputBase, 'resize-y min-h-[120px]', errors.message ? inputError : ''].join(' ')}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-500 font-body">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        isLoading={status === 'submitting'}
        rightIcon={<Send size={18} />}
      >
        {status === 'submitting' ? uiCopy.form.submitting : uiCopy.form.submit}
      </Button>

      <p className="text-xs text-center text-text-muted dark:text-text-muted-dark font-body">
        * Campos obligatorios. Tu información no se compartirá con terceros.
      </p>
    </form>
  )
}
