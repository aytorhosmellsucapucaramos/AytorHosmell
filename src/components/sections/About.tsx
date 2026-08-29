import React from 'react'
import { SectionTitle } from '../atoms/SectionTitle'
import { useInView } from '../../hooks/useInView'
import { aboutCopy } from '../../content/content'

/**
 * About — Sección de presentación personal con párrafos y stats.
 */
export const About: React.FC = () => {
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.2 })

  return (
    <section
      id="about"
      className="section-padding bg-surface dark:bg-surface-dark"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ─── Text content ─── */}
          <div>
            <SectionTitle
              eyebrow="01 — Sobre mí"
              title={aboutCopy.heading}
              id="about-heading"
            />

            <div className="space-y-5">
              {aboutCopy.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base text-text-muted dark:text-text-muted-dark font-body leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* ─── Stats grid ─── */}
          <div
            ref={statsRef as React.RefObject<HTMLDivElement>}
            className="grid grid-cols-2 gap-4 lg:mt-24"
          >
            {aboutCopy.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={[
                  'bg-bg dark:bg-bg-dark border border-border dark:border-border-dark',
                  'rounded-card p-6 text-center card-hover',
                  'transition-all duration-700',
                  statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
                ].join(' ')}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="text-2xl font-heading font-bold text-accent dark:text-accent-dark mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-text-muted dark:text-text-muted-dark font-body">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
