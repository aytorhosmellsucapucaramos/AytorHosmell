import { content, type Language, type ProjectItem } from '../../content/content'

interface ProjectsProps {
  language?: Language
}

export function Projects({ language = 'es' }: ProjectsProps) {
  return (
    <section className="mx-auto min-h-[calc(100vh-65px)] max-w-6xl px-4 py-14 sm:px-6 lg:py-20" aria-labelledby="projects-title">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted dark:text-text-muted-dark">/projects</p>
        <h1 id="projects-title" className="mt-4 font-heading text-3xl font-extrabold leading-tight sm:text-5xl">
          {content.projects.title[language]}
        </h1>
        <p className="mt-4 text-base leading-8 text-text-muted dark:text-text-muted-dark">{content.projects.intro[language]}</p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {content.projects.items.map((project) => (
          <ProjectCard key={project.title} project={project} language={language} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, language }: { project: ProjectItem; language: Language }) {
  return (
    <article className="group border border-border bg-bg p-5 transition-transform hover:-translate-y-1 hover:border-accent dark:border-border-dark dark:bg-bg-dark">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-heading text-xl font-extrabold">{project.title}</h2>
          <p className="mt-1 text-sm text-text-muted dark:text-text-muted-dark">{project.organization}</p>
        </div>
        <span className="shrink-0 text-xs font-semibold text-text-muted transition-colors group-hover:text-accent dark:text-text-muted-dark">
          ↗
        </span>
      </div>

      <dl className="mt-6 space-y-4 text-sm leading-7">
        <div>
          <dt className="font-semibold text-text-primary dark:text-text-primary-dark">{language === 'es' ? 'Problema' : 'Problem'}</dt>
          <dd className="text-text-muted dark:text-text-muted-dark">{project.problem[language]}</dd>
        </div>
        <div>
          <dt className="font-semibold text-text-primary dark:text-text-primary-dark">{language === 'es' ? 'Solución técnica' : 'Technical solution'}</dt>
          <dd className="text-text-muted dark:text-text-muted-dark">{project.solution[language]}</dd>
        </div>
        <div>
          <dt className="font-semibold text-text-primary dark:text-text-primary-dark">{language === 'es' ? 'Rol' : 'Role'}</dt>
          <dd className="text-text-muted dark:text-text-muted-dark">{project.role[language]}</dd>
        </div>
      </dl>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li key={tech} className="border border-border px-2.5 py-1 text-xs font-semibold text-text-muted dark:border-border-dark dark:text-text-muted-dark">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  )
}
