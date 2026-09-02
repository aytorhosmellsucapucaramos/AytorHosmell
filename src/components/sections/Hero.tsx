import { ArrowRight, Download, Github, Mail, MapPin, MessageCircle } from 'lucide-react'
import { FadeIn } from '../atoms/FadeIn'
import {
  content,
  mailtoHref,
  whatsappHref,
  type FeaturedProject,
  type Language,
} from '../../content/content'

interface HeroProps {
  language: Language
  onNavigate: (href: string) => void
}

export function Hero({ language, onNavigate }: HeroProps) {
  const whatsapp = whatsappHref(language)

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:pb-20 lg:pt-18">
      <div className="grid gap-12 border-b border-border pb-14 dark:border-border-dark lg:grid-cols-[1fr_320px] lg:gap-16">
        <div>
          <FadeIn>
            <p className="text-sm font-semibold text-accent">{content.hero.greeting[language]}</p>
          </FadeIn>
          <FadeIn delay={90}>
            <h1 className="mt-5 max-w-4xl font-heading text-5xl font-extrabold leading-[0.98] text-text-primary sm:text-6xl lg:text-7xl dark:text-text-primary-dark">
              {content.site.name}
            </h1>
          </FadeIn>
          <FadeIn delay={170}>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-text-primary sm:text-2xl dark:text-text-primary-dark">
              {content.hero.profession[language]}
            </p>
          </FadeIn>
          <FadeIn delay={250}>
            <p className="mt-5 max-w-2xl text-base leading-8 text-text-muted dark:text-text-muted-dark">
              {content.hero.summary[language]}
            </p>
          </FadeIn>
        </div>

        <FadeIn className="self-end" delay={300}>
          <div className="flex flex-col space-y-5 border-l border-border pl-5 dark:border-border-dark">
            <a className="editorial-link text-lg font-semibold" href={mailtoHref}>
              {content.hero.primaryCta[language]}
              <ArrowRight size={17} />
            </a>
            <button
              className="editorial-link text-lg font-semibold"
              onClick={() => onNavigate('/projects')}
              type="button"
            >
              {content.hero.projectsCta[language]}
              <ArrowRight size={17} />
            </button>
            <div className="space-y-3 pt-4 text-sm text-text-muted dark:text-text-muted-dark">
              <a className="flex items-center gap-2 link-underline w-fit" href={mailtoHref}>
                <Mail size={16} />
                {content.site.email}
              </a>
              <a
                className="flex items-center gap-2 link-underline w-fit"
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} />
                {content.site.whatsappDisplay}
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                {content.site.location}
              </p>
              <a
                className="flex items-center gap-2 link-underline w-fit"
                href={content.site.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                className="flex items-center gap-2 link-underline w-fit"
                href={content.site.cvPdfPath}
                target="_blank"
                rel="noreferrer"
              >
                <Download size={16} />
                {content.hero.cvCta[language]}
              </a>
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn className="pt-10" delay={120}>
        <div className="mb-3 flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted dark:text-text-muted-dark">
            {content.hero.featuredTitle[language]}
          </p>
          <button
            className="link-underline text-sm font-semibold"
            onClick={() => onNavigate('/projects')}
            type="button"
          >
            {content.hero.projectsCta[language]}
          </button>
        </div>

        <div className="border-t border-border dark:border-border-dark">
          {content.hero.featuredProjects.map((project) => (
            <FeaturedRow key={project.number} language={language} project={project} />
          ))}
        </div>
      </FadeIn>
    </section>
  )
}

function FeaturedRow({ language, project }: { language: Language; project: FeaturedProject }) {
  return (
    <article className="group grid gap-3 border-b border-border py-6 transition-colors duration-200 hover:bg-surface dark:border-border-dark dark:hover:bg-surface-dark sm:grid-cols-[56px_1fr_auto] sm:items-center">
      <span className="text-sm font-semibold text-text-muted dark:text-text-muted-dark">
        {project.number}
      </span>
      <div>
        <h2 className="font-heading text-2xl font-extrabold transition-transform duration-200 group-hover:translate-x-1">
          {project.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-text-muted dark:text-text-muted-dark">
          {project.description[language]}
        </p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {project.stack}
        </p>
      </div>
      <span
        className="opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
        aria-hidden="true"
      >
        <ArrowRight size={22} />
      </span>
    </article>
  )
}
