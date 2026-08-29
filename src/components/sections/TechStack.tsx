import { content, type Language } from '../../content/content'

interface TechStackProps {
  language?: Language
}

export function TechStack({ language = 'es' }: TechStackProps) {
  return (
    <section className="mx-auto min-h-[calc(100vh-65px)] max-w-6xl px-4 py-14 sm:px-6 lg:py-20" aria-labelledby="skills-title">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted dark:text-text-muted-dark">/skills</p>
      <h1 id="skills-title" className="mt-4 max-w-4xl font-heading text-3xl font-extrabold leading-tight sm:text-5xl">
        {content.skills.title[language]}
      </h1>

      <div className="mt-12 grid gap-px border border-border bg-border dark:border-border-dark dark:bg-border-dark sm:grid-cols-2 lg:grid-cols-3">
        {content.skills.categories.map((category) => (
          <article key={category.label} className="bg-bg p-5 transition-colors hover:bg-surface dark:bg-bg-dark dark:hover:bg-surface-dark">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-text-muted dark:text-text-muted-dark">
              {category.label}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={category.label}>
              {category.items.map((skill) => (
                <li key={skill} className="border border-border px-3 py-1.5 text-sm font-medium dark:border-border-dark">
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
