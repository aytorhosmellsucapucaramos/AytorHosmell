import { Mail, MessageCircle } from 'lucide-react'
import { content, mailtoHref, whatsappHref, type Language } from '../../content/content'

interface FooterProps {
  language?: Language
  onNavigate?: (href: string) => void
}

export function Footer({ language = 'es', onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-border bg-surface py-8 dark:border-border-dark dark:bg-surface-dark">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 text-sm text-text-muted dark:text-text-muted-dark sm:px-6 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-semibold text-text-primary dark:text-text-primary-dark">{content.site.name}</p>
          <p className="mt-1">{content.site.role[language]}</p>
          <p className="mt-3 max-w-2xl text-xs leading-6">{content.footer.privacy[language]}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a className="inline-flex items-center gap-2 underline-offset-4 hover:text-text-primary hover:underline dark:hover:text-text-primary-dark" href={mailtoHref}>
            <Mail size={16} />
            Email
          </a>
          <a className="inline-flex items-center gap-2 underline-offset-4 hover:text-text-primary hover:underline dark:hover:text-text-primary-dark" href={whatsappHref(language)} target="_blank" rel="noreferrer">
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <button className="underline-offset-4 hover:text-text-primary hover:underline dark:hover:text-text-primary-dark" onClick={() => onNavigate?.('/contact')}>
            {content.nav[language].find((item) => item.href === '/contact')?.label}
          </button>
        </div>
      </div>
    </footer>
  )
}
