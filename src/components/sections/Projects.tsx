import React from 'react'
import { SectionTitle } from '../atoms/SectionTitle'
import { ProjectCard } from '../molecules/ProjectCard'
import { projects, uiCopy } from '../../content/content'

/**
 * Projects — Sección con grid de ProjectCards.
 * Proyectos "featured" primero, luego el resto.
 */
export const Projects: React.FC = () => {
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })

  return (
    <section
      id="projects"
      className="section-padding bg-surface dark:bg-surface-dark"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="03 — Proyectos"
          title={uiCopy.projects.heading}
          subtitle={uiCopy.projects.subheading}
          id="projects-heading"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
