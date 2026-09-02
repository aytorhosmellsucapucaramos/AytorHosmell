import { FadeIn } from '../atoms/FadeIn'
import { content, type Language } from '../../content/content'

interface TechStackProps {
  language: Language
}

export function TechStack({ language }: TechStackProps) {
  return (
    <section
      aria-labelledby="skills-title"
      className="mx-auto min-h-[calc(100vh-73px)] max-w-6xl px-4 py-14 sm:px-6 lg:py-20"
    >
      <FadeIn className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted dark:text-text-muted-dark">
          /skills
        </p>
        <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight sm:text-5xl" id="skills-title">
          {content.skills.title[language]}
        </h1>
        <p className="mt-5 text-base leading-8 text-text-muted dark:text-text-muted-dark">
          {content.skills.intro[language]}
        </p>
      </FadeIn>

      <div className="mt-12 border-t border-border dark:border-border-dark">
        {content.skills.categories.map((category, index) => (
          <FadeIn delay={index * 60} key={category.label}>
            <section className="grid gap-4 border-b border-border py-6 dark:border-border-dark md:grid-cols-[220px_1fr]">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-text-primary dark:text-text-primary-dark">
                {category.label}
              </h2>
              <ul className="flex flex-wrap gap-x-4 gap-y-2" aria-label={category.label}>
                {category.items.map((skill) => (
                  <li className="text-base text-text-muted dark:text-text-muted-dark" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
