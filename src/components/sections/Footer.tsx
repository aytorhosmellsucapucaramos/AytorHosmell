import { Github, Mail, MessageCircle } from 'lucide-react'
import { content, mailtoHref, whatsappHref, type Language } from '../../content/content'

interface FooterProps {
  language: Language
}

export function Footer({ language }: FooterProps) {
  return (
    <footer className="border-t border-border py-8 dark:border-border-dark">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 text-sm text-text-muted dark:text-text-muted-dark sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-semibold text-text-primary dark:text-text-primary-dark">
            {content.site.name}
          </p>
          <p className="mt-1">{content.site.shortRole[language]}</p>
          <p className="mt-1">© {new Date().getFullYear()}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a className="link-underline inline-flex items-center gap-2" href={content.site.github} target="_blank" rel="noreferrer">
            <Github size={15} />
            GitHub
          </a>
          <a className="link-underline inline-flex items-center gap-2" href={mailtoHref}>
            <Mail size={15} />
            Email
          </a>
          <a className="link-underline inline-flex items-center gap-2" href={whatsappHref(language)} target="_blank" rel="noreferrer">
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
