import React from 'react'
import { SectionTitle } from '../atoms/SectionTitle'
import { Badge } from '../atoms/Badge'
import { useInView } from '../../hooks/useInView'
import { skillCategories } from '../../content/content'

/**
 * TechStack — Sección de habilidades técnicas organizadas por categoría.
 */
export const TechStack: React.FC = () => {
  return (
    <section
      id="skills"
      className="section-padding bg-bg dark:bg-bg-dark"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="02 — Habilidades"
          title="Tech Stack"
          subtitle="Tecnologías que uso para construir soluciones completas."
          align="center"
          id="skills-heading"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <SkillCategoryCard
              key={category.id}
              category={category}
              index={catIdx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Sub-component ────────────────────────────────────────────────────────
interface SkillCategoryCardProps {
  category: (typeof skillCategories)[0]
  index: number
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, index }) => {
  const { ref, inView } = useInView({ threshold: 0.15 })

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={[
        'bg-surface dark:bg-surface-dark border border-border dark:border-border-dark',
        'rounded-card p-6 card-hover',
        'transition-all duration-700',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      ].join(' ')}
      style={{ transitionDelay: `${index * 80}ms` }}
      role="region"
      aria-label={`Habilidades de ${category.label}`}
    >
      <h3 className="text-sm font-semibold uppercase tracking-widest text-text-muted dark:text-text-muted-dark font-body mb-4">
        {category.label}
      </h3>
      <div className="flex flex-wrap gap-2" role="list" aria-label={`Lista de tecnologías de ${category.label}`}>
        {category.skills.map(skill => (
          <div key={skill.name} role="listitem">
            <Badge colorClass={category.color}>
              {skill.name}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  )
}
