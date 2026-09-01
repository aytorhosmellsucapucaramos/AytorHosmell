import { ArrowRight, Download, Mail, MessageCircle } from 'lucide-react'
import { content, mailtoHref, whatsappHref, type Language } from '../../content/content'

interface HeroProps {
  language?: Language
  onNavigate?: (href: string) => void
}

export function Hero({ language = 'es', onNavigate }: HeroProps) {
  const whatsapp = whatsappHref(language)

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid min-h-[calc(100vh-65px)] max-w-6xl content-between px-4 py-10 sm:px-6 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-text-muted dark:text-text-muted-dark">
              {content.hero.eyebrow[language]}
            </p>
            <h1 className="max-w-4xl font-heading text-5xl font-extrabold leading-none text-text-primary sm:text-6xl lg:text-7xl dark:text-text-primary-dark">
              {content.site.name}
            </h1>
            <p className="mt-4 max-w-2xl text-xl font-semibold text-text-primary dark:text-text-primary-dark">
              {content.site.role[language]}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-text-muted dark:text-text-muted-dark">
              {content.hero.summary[language]}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                {content.hero.primaryCta[language]}
              </a>
              <a
                className="inline-flex items-center gap-2 border border-border px-5 py-3 text-sm font-semibold text-text-primary transition-transform hover:-translate-y-0.5 hover:border-accent dark:border-border-dark dark:text-text-primary-dark"
                href={content.site.cvPdfPath}
                target="_blank"
                rel="noreferrer"
              >
                <Download size={18} />
                {content.hero.secondaryCta[language]}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-muted dark:text-text-muted-dark">
              <a className="inline-flex items-center gap-2 underline-offset-4 hover:underline" href={mailtoHref}>
                <Mail size={16} />
                {content.site.email}
              </a>
              <a className="inline-flex items-center gap-2 underline-offset-4 hover:underline" href={whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          <aside className="border-l border-border pl-5 dark:border-border-dark" aria-label="Resumen del portafolio">
            <p className="text-sm leading-7 text-text-muted dark:text-text-muted-dark">
              {content.hero.availability[language]}
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-3">
              {content.hero.quickFacts[language].map((fact, index) => (
                <div key={fact} className="group border border-border p-3 transition-colors hover:border-accent dark:border-border-dark">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted dark:text-text-muted-dark">
                    0{index + 1}
                  </dt>
                  <dd className="mt-2 text-sm font-semibold text-text-primary dark:text-text-primary-dark">{fact}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border pt-5 text-sm text-text-muted dark:border-border-dark dark:text-text-muted-dark">
          <span>{content.site.location}</span>
          <button className="inline-flex items-center gap-2 font-semibold hover:text-text-primary dark:hover:text-text-primary-dark" onClick={() => onNavigate?.('/projects')}>
            {language === 'es' ? 'Ver proyectos' : 'View projects'}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
