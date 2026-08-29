import { Download, Mail, MessageCircle } from 'lucide-react'
import { ContactForm } from '../molecules/ContactForm'
import { content, mailtoHref, whatsappHref, type Language } from '../../content/content'

interface ContactProps {
  language?: Language
}

export function Contact({ language = 'es' }: ContactProps) {
  const whatsapp = whatsappHref(language)

  return (
    <section className="mx-auto min-h-[calc(100vh-65px)] max-w-6xl px-4 py-14 sm:px-6 lg:py-20" aria-labelledby="contact-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_420px]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted dark:text-text-muted-dark">/contact</p>
          <h1 id="contact-title" className="mt-4 font-heading text-3xl font-extrabold leading-tight sm:text-5xl">
            {content.contact.title[language]}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-text-muted dark:text-text-muted-dark">{content.contact.intro[language]}</p>

          <div className="mt-8 grid gap-3 text-sm">
            <a className="inline-flex items-center gap-3 border border-border p-4 font-semibold transition-colors hover:border-accent dark:border-border-dark" href={mailtoHref}>
              <Mail size={18} />
              {content.site.email}
            </a>
            <a className="inline-flex items-center gap-3 border border-border p-4 font-semibold transition-colors hover:border-accent dark:border-border-dark" href={whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a className="inline-flex items-center gap-3 border border-border p-4 font-semibold transition-colors hover:border-accent dark:border-border-dark" href={content.site.cvPdfPath} target="_blank" rel="noreferrer">
              <Download size={18} />
              {content.hero.secondaryCta[language]}
            </a>
          </div>
        </div>

        <div className="border border-border p-5 dark:border-border-dark sm:p-6">
          <ContactForm language={language} />
        </div>
      </div>
    </section>
  )
}
