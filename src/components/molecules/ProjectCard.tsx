import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Building2, Calendar } from 'lucide-react'
import { Badge } from '../atoms/Badge'
import { useInView } from '../../hooks/useInView'
import type { Project } from '../../types'
import { uiCopy } from '../../content/content'

interface ProjectCardProps {
  project: Project
  index?: number
}

/**
 * ProjectCard — Tarjeta expandible con detalles del proyecto.
 * Hover: translateY(-8px) + shadow elevation.
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const [expanded, setExpanded] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.1 })

  const delay = index * 120

  return (
    <article
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'group relative bg-surface dark:bg-surface-dark rounded-[1.5rem] border border-border dark:border-border-dark',
        'card-hover overflow-hidden shadow-card',
        project.id === 'registro-canino' ? 'lg:col-span-2' : '',
        'transition-all duration-700',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      ].join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
      aria-expanded={expanded}
      role="article"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-cyan-400 to-violet-500 opacity-80" />

      {/* Featured badge */}
      {project.featured && (
        <span
          className="absolute top-5 right-5 text-xs font-semibold px-2 py-0.5 rounded-pill bg-accent text-white dark:bg-accent-dark"
          aria-label="Proyecto destacado"
        >
          Destacado
        </span>
      )}

      {/* Card header — always visible */}
      <div className="p-6 pb-4">
        {/* Category chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.category.map(cat => (
            <Badge
              key={cat}
              colorClass="bg-accent-subtle dark:bg-accent-subtle-dark text-accent dark:text-accent-dark text-xs"
            >
              {cat}
            </Badge>
          ))}
        </div>

        <h3 className="text-xl font-heading text-text-primary dark:text-text-primary-dark mb-1 pr-20 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">
          {project.title}
        </h3>

        <p className="mb-3 text-sm font-medium text-accent dark:text-accent-dark font-body">
          {project.role}
        </p>

        <div className="flex items-center gap-4 text-sm text-text-muted dark:text-text-muted-dark mb-4 font-body">
          <span className="flex items-center gap-1">
            <Building2 size={14} aria-hidden="true" />
            {project.organization}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={14} aria-hidden="true" />
            {project.year}
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
          {/* Problem preview */}
          <p className="text-text-muted dark:text-text-muted-dark text-sm leading-relaxed font-body line-clamp-3">
            {project.problem}
          </p>

          <div className="hidden md:block rounded-2xl border border-border dark:border-border-dark bg-bg dark:bg-bg-dark px-4 py-3 text-xs font-body text-text-muted dark:text-text-muted-dark">
            <span className="block font-semibold text-text-primary dark:text-text-primary-dark">Impacto medible</span>
            {project.metricsNote}
          </div>
        </div>
      </div>

      {/* Expanded content */}
      <div
        className={[
          'overflow-hidden transition-all duration-500 ease-out-expo',
          expanded ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
        aria-hidden={!expanded}
      >
        <div className="px-6 pb-6 space-y-5 border-t border-border dark:border-border-dark pt-5">

          {/* Problem */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted dark:text-text-muted-dark mb-2 font-body">
              {uiCopy.projects.problem}
            </h4>
            <p className="text-sm text-text-primary dark:text-text-primary-dark font-body leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted dark:text-text-muted-dark mb-2 font-body">
              {uiCopy.projects.solution}
            </h4>
            <p className="text-sm text-text-primary dark:text-text-primary-dark font-body leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted dark:text-text-muted-dark mb-2 font-body">
              {uiCopy.projects.stack}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <Badge key={tech} colorClass="bg-surface-elevated dark:bg-surface-elevated-dark text-text-muted dark:text-text-muted-dark">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* How */}
          <div className="rounded-2xl border border-border dark:border-border-dark bg-bg dark:bg-bg-dark p-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted dark:text-text-muted-dark mb-3 font-body">
              Como lo hizo
            </h4>
            <p className="text-sm text-text-primary dark:text-text-primary-dark font-body leading-relaxed mb-4">
              {project.howDidIt}
            </p>
            <div className="flex flex-wrap items-center gap-2" aria-label="Diagrama resumido de arquitectura">
              {project.architectureSteps.map((step, i) => (
                <React.Fragment key={step}>
                  <span className="rounded-pill border border-border dark:border-border-dark bg-surface dark:bg-surface-dark px-3 py-1 text-xs font-medium text-text-muted dark:text-text-muted-dark">
                    {step}
                  </span>
                  {i < project.architectureSteps.length - 1 && (
                    <span className="text-accent dark:text-accent-dark" aria-hidden="true">-&gt;</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted dark:text-text-muted-dark mb-2 font-body">
              {uiCopy.projects.responsibilities}
            </h4>
            <ul className="space-y-1" role="list">
              {project.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-primary dark:text-text-primary-dark font-body">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture */}
          <div className="bg-surface-elevated dark:bg-surface-elevated-dark rounded-2xl p-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted dark:text-text-muted-dark mb-2 font-body">
              {uiCopy.projects.architecture}
            </h4>
            <p className="text-sm text-text-muted dark:text-text-muted-dark font-body leading-relaxed">
              {project.architecture}
            </p>
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setExpanded(prev => !prev)}
        className={[
          'w-full flex items-center justify-center gap-2 py-3',
          'text-sm font-medium text-text-muted dark:text-text-muted-dark',
          'hover:text-accent dark:hover:text-accent-dark',
          'border-t border-border dark:border-border-dark',
          'transition-colors duration-200',
          'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset',
          'rounded-b-card',
        ].join(' ')}
        aria-label={expanded ? uiCopy.projects.viewLess : uiCopy.projects.viewMore}
      >
        <span className="font-body">
          {expanded ? uiCopy.projects.viewLess : uiCopy.projects.viewMore}
        </span>
        {expanded ? (
          <ChevronUp size={16} aria-hidden="true" />
        ) : (
          <ChevronDown size={16} aria-hidden="true" />
        )}
      </button>
    </article>
  )
}
