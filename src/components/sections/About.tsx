import { content, type Language } from '../../content/content'

interface AboutProps {
  language?: Language
}

export function About({ language = 'es' }: AboutProps) {
  return (
    <section className="mx-auto min-h-[calc(100vh-65px)] max-w-6xl px-4 py-14 sm:px-6 lg:py-20" aria-labelledby="about-title">
      <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted dark:text-text-muted-dark">/about</p>
          <h1 id="about-title" className="mt-4 font-heading text-3xl font-extrabold leading-tight sm:text-5xl">
            {content.about.subtitle[language]}
          </h1>
        </div>

        <div className="max-w-3xl">
          <div className="space-y-6 text-lg leading-9 text-text-muted dark:text-text-muted-dark">
            {content.about.paragraphs[language].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {['SENATI / UTP', 'Web + IA + Cloud', 'No puedo confirmarlo'].map((item) => (
              <div key={item} className="border border-border p-4 text-sm font-semibold dark:border-border-dark">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
