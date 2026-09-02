import { FadeIn } from '../atoms/FadeIn'
import { content, type Language } from '../../content/content'

interface AboutProps {
  language: Language
}

export function About({ language }: AboutProps) {
  return (
    <section
      aria-labelledby="about-title"
      className="mx-auto min-h-[calc(100vh-73px)] max-w-6xl px-4 py-14 sm:px-6 lg:py-20"
    >
      <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted dark:text-text-muted-dark">
            /about
          </p>
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight sm:text-5xl" id="about-title">
            {content.about.title[language]}
          </h1>
        </FadeIn>

        <div className="max-w-3xl divide-y divide-border border-y border-border dark:divide-border-dark dark:border-border-dark">
          {content.about.paragraphs[language].map((paragraph, index) => (
            <FadeIn delay={index * 70} key={paragraph}>
              <p className="py-6 text-lg leading-9 text-text-muted dark:text-text-muted-dark">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
