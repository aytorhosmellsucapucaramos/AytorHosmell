import React, { useState } from 'react'
import { SectionTitle } from '../atoms/SectionTitle'
import { TimelineItem } from '../molecules/TimelineItem'
import { timeline } from '../../content/content'

type FilterType = 'all' | 'work' | 'education'

/**
 * Experience — Timeline de experiencia y educación con filtro.
 */
export const Experience: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all')

  const filtered = timeline.filter(item =>
    filter === 'all' ? true : item.type === filter,
  )

  const filterButtons: { id: FilterType; label: string }[] = [
    { id: 'all',       label: 'Todo' },
    { id: 'work',      label: 'Experiencia' },
    { id: 'education', label: 'Educación' },
  ]

  return (
    <section
      id="experience"
      className="section-padding bg-bg dark:bg-bg-dark"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="04 — Trayectoria"
          title="Experiencia & Educación"
          subtitle="Mi camino profesional y formación académica."
          id="experience-heading"
        />

        {/* Filter tabs */}
        <div
          className="flex gap-2 mb-10 p-1 bg-surface dark:bg-surface-dark rounded-pill self-start w-fit border border-border dark:border-border-dark"
          role="group"
          aria-label="Filtrar por tipo"
        >
          {filterButtons.map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              aria-pressed={filter === btn.id}
              className={[
                'px-4 py-1.5 rounded-pill text-sm font-medium font-body transition-all duration-200',
                filter === btn.id
                  ? 'bg-accent dark:bg-accent-dark text-white shadow-sm'
                  : 'text-text-muted dark:text-text-muted-dark hover:text-text-primary dark:hover:text-text-primary-dark',
              ].join(' ')}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div
          className="max-w-2xl"
          role="feed"
          aria-label="Timeline de experiencia y educación"
          aria-live="polite"
        >
          {filtered.map((item, i) => (
            <TimelineItem
              key={item.id}
              experience={item}
              index={i}
              isLast={i === filtered.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
