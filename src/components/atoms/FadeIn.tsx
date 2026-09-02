import type { HTMLAttributes, ReactNode, RefObject } from 'react'
import { useInView } from '../../hooks/useInView'

interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  delay?: number
}

export function FadeIn({ children, className = '', delay = 0, ...props }: FadeInProps) {
  const { ref, inView } = useInView({ threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={[
        'motion-safe:transition-all motion-safe:duration-[420ms] motion-safe:ease-out',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
        className,
      ].join(' ')}
      style={{ transitionDelay: `${delay}ms`, ...props.style }}
      {...props}
    >
      {children}
    </div>
  )
}
