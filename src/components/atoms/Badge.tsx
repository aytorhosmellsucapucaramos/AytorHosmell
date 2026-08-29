import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  /** Color class (full Tailwind string) */
  colorClass?: string
}

/**
 * Badge — Etiqueta de skill/categoría.
 *
 * @example
 * <Badge colorClass="bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">React</Badge>
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  colorClass = 'bg-surface-elevated dark:bg-surface-elevated-dark text-text-muted dark:text-text-muted-dark',
}) => {
  return (
    <span
      className={[
        'inline-flex items-center px-3 py-1 rounded-pill text-sm font-medium',
        'transition-transform duration-200 hover:scale-105',
        colorClass,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}
