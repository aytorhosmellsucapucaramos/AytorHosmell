import { ArrowRight } from 'lucide-react'
import { FadeIn } from '../atoms/FadeIn'
import { content, type Language, type ProjectItem } from '../../content/content'

interface ProjectsProps {
  language: Language
}

export function Projects({ language }: ProjectsProps) {
  return (
    <section
      aria-labelledby="projects-title"
      className="mx-auto min-h-[calc(100vh-73px)] max-w-6xl px-4 py-14 sm:px-6 lg:py-20"
    >
      <FadeIn className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted dark:text-text-muted-dark">
          /projects
        </p>
        <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight sm:text-5xl" id="projects-title">
          {content.projects.title[language]}
        </h1>
        <p className="mt-5 text-base leading-8 text-text-muted dark:text-text-muted-dark">
          {content.projects.intro[language]}
        </p>
      </FadeIn>

      <div className="mt-12 border-t border-border dark:border-border-dark">
        {content.projects.items.map((project, index) => (
          <FadeIn delay={index * 80} key={project.title}>
            <CaseStudy language={language} number={`0${index + 1}`} project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function CaseStudy({
  language,
  number,
  project,
}: {
  language: Language
  number: string
  project: ProjectItem
}) {
  return (
    <article className="group grid gap-6 border-b border-border py-8 transition-colors duration-200 hover:bg-surface dark:border-border-dark dark:hover:bg-surface-dark lg:grid-cols-[80px_1fr]">
      <p className="text-sm font-semibold text-accent">{number}</p>
      <div className="grid gap-6 lg:grid-cols-[1fr_260px]">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-heading text-3xl font-extrabold leading-tight transition-transform duration-200 group-hover:translate-x-1">
                {project.title}
              </h2>
              {project.organization && (
                <p className="mt-2 text-sm font-semibold text-text-muted dark:text-text-muted-dark">
                  {project.organization}
                </p>
              )}
            </div>
            <ArrowRight
              className="mt-1 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
              size={22}
              aria-hidden="true"
            />
          </div>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            {project.context[language]}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-text-muted dark:text-text-muted-dark">
            {project.description[language]}
          </p>
          {project.links.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a className="editorial-link text-sm font-semibold" href={link.href} key={link.href}>
                  {link.label}
                  <ArrowRight size={16} />
                </a>
              ))}
            </div>
          )}
        </div>

        <ul className="flex flex-wrap content-start gap-2 lg:justify-end" aria-label="Tecnologías">
          {project.stack.map((tech) => (
            <li
              className="border border-border px-2.5 py-1 text-xs font-semibold text-text-muted dark:border-border-dark dark:text-text-muted-dark"
              key={tech}
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
