import React from 'react'
import { GraduationCap, Briefcase, MapPin } from 'lucide-react'
import { useInView } from '../../hooks/useInView'
import type { Experience } from '../../types'

interface TimelineItemProps {
  experience: Experience
  index?: number
  isLast?: boolean
}

/**
 * TimelineItem — Elemento del timeline de experiencia/educación.
 */
export const TimelineItem: React.FC<TimelineItemProps> = ({
  experience,
  index = 0,
  isLast = false,
}) => {
  const { ref, inView } = useInView({ threshold: 0.15 })
  const delay = index * 100
  const isWork = experience.type === 'work'

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'relative flex gap-6',
        'transition-all duration-700',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      ].join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center shrink-0">
        {/* Icon dot */}
        <div
          className={[
            'w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10',
            isWork
              ? 'bg-accent dark:bg-accent-dark text-white'
              : 'bg-accent-subtle dark:bg-accent-subtle-dark text-accent dark:text-accent-dark border-2 border-accent dark:border-accent-dark',
          ].join(' ')}
          aria-hidden="true"
        >
          {isWork ? <Briefcase size={18} /> : <GraduationCap size={18} />}
        </div>
        {/* Vertical line */}
        {!isLast && (
          <div
            className="w-px flex-1 mt-2 bg-border dark:bg-border-dark min-h-[2rem]"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        {/* Period badge */}
        <span className="inline-block text-xs font-semibold text-accent dark:text-accent-dark bg-accent-subtle dark:bg-accent-subtle-dark px-2.5 py-0.5 rounded-pill font-body mb-3">
          {experience.period}
        </span>

        <h3 className="text-base font-heading text-text-primary dark:text-text-primary-dark mb-0.5">
          {experience.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-muted dark:text-text-muted-dark font-body mb-3">
          <span className="font-medium">{experience.organization}</span>
          <span className="flex items-center gap-1">
            <MapPin size={12} aria-hidden="true" />
            {experience.location}
          </span>
        </div>

        <p className="text-sm text-text-muted dark:text-text-muted-dark font-body leading-relaxed mb-3">
          {experience.description}
        </p>

        {experience.highlights.length > 0 && (
          <ul className="space-y-1" role="list">
            {experience.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-text-primary dark:text-text-primary-dark font-body"
              >
                <span
                  className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent dark:bg-accent-dark"
                  aria-hidden="true"
                />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
