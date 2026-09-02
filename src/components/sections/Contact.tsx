import { Download, Github, Globe, Mail, MessageCircle } from 'lucide-react'
import { FadeIn } from '../atoms/FadeIn'
import { content, mailtoHref, whatsappHref, type Language } from '../../content/content'

interface ContactProps {
  language: Language
}

export function Contact({ language }: ContactProps) {
  const links = [
    { label: content.site.email, href: mailtoHref, icon: Mail },
    { label: content.site.whatsappDisplay, href: whatsappHref(language), icon: MessageCircle },
    { label: 'GitHub', href: content.site.github, icon: Github },
    { label: content.hero.cvCta[language], href: content.site.cvPdfPath, icon: Download },
    { label: content.contact.portfolioLabel[language], href: content.site.url, icon: Globe },
  ]

  return (
    <section
      aria-labelledby="contact-title"
      className="mx-auto min-h-[calc(100vh-73px)] max-w-6xl px-4 py-14 sm:px-6 lg:py-20"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_420px]">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted dark:text-text-muted-dark">
            /contact
          </p>
          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-extrabold leading-tight sm:text-5xl" id="contact-title">
            {content.contact.title[language]}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-text-muted dark:text-text-muted-dark">
            {content.contact.intro[language]}
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="border-t border-border dark:border-border-dark">
            {links.map(({ href, icon: Icon, label }) => (
              <a
                className="group flex items-center justify-between gap-4 border-b border-border py-5 text-sm font-semibold transition-colors duration-200 hover:bg-surface dark:border-border-dark dark:hover:bg-surface-dark"
                href={href}
                key={href}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                target={href.startsWith('http') ? '_blank' : undefined}
              >
                <span className="flex items-center gap-3">
                  <Icon size={18} />
                  {label}
                </span>
                <span className="opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
