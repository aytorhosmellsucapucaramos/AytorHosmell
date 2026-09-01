import { Mail, MessageCircle } from 'lucide-react'
import { content, mailtoHref, whatsappHref, type Language } from '../../content/content'

interface FooterProps {
  language?: Language
}

export function Footer({ language = 'es' }: FooterProps) {
  return (
    <footer className="border-t border-border bg-surface py-8 dark:border-border-dark dark:bg-surface-dark">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 text-sm text-text-muted dark:text-text-muted-dark sm:px-6 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-bold text-text-primary dark:text-text-primary-dark">
            {content.footer.privacy[language]}
          </p>
          <a
            className="inline-flex items-center gap-2 underline-offset-4 hover:underline"
            href={mailtoHref}
          >
            <Mail size={16} />
            {content.site.email}
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          
          <a
            className="inline-flex items-center gap-2 underline-offset-4 hover:text-text-primary hover:underline dark:hover:text-text-primary-dark"
            href={whatsappHref(language)}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
