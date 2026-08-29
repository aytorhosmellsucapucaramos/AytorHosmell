import React from 'react'
import { useInView } from '../../hooks/useInView'

interface SectionTitleProps {
  /** Etiqueta pequeña sobre el título (e.g. "01 — Proyectos") */
  eyebrow?: string
  /** Título principal */
  title: string
  /** Subtítulo opcional */
  subtitle?: string
  /** Alineación */
  align?: 'left' | 'center'
  /** id para ancla de navegación */
  id?: string
}

/**
 * SectionTitle — Encabezado estandarizado de sección con animación de entrada.
 */
export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  id,
}) => {
  const { ref, inView } = useInView()

  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      id={id}
      className={[
        'flex flex-col gap-3 mb-12',
        alignClass,
        'transition-all duration-700',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
      ].join(' ')}
    >
      {eyebrow && (
        <span className="text-sm font-semibold tracking-widest uppercase text-accent dark:text-accent-dark font-body">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-heading text-text-primary dark:text-text-primary-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-muted dark:text-text-muted-dark max-w-xl font-body">
          {subtitle}
        </p>
      )}
      {/* Decorative line */}
      <div
        className={[
          'mt-1 h-1 w-12 rounded-pill bg-accent dark:bg-accent-dark',
          align === 'center' ? 'self-center' : '',
        ].join(' ')}
        aria-hidden="true"
      />
    </div>
  )
}
