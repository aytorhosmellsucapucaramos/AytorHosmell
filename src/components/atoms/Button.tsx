import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Variante visual del botón */
  variant?: ButtonVariant
  /** Tamaño del botón */
  size?: ButtonSize
  /** Icono a la izquierda del texto */
  leftIcon?: React.ReactNode
  /** Icono a la derecha del texto */
  rightIcon?: React.ReactNode
  /** Estado de carga */
  isLoading?: boolean
  /** Convierte en enlace externo */
  as?: 'a'
  href?: string
  target?: string
  rel?: string
  /** Ancho completo */
  fullWidth?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent dark:bg-accent-dark text-white hover:shadow-accent hover:brightness-110 active:brightness-95',
  secondary:
    'bg-accent-subtle dark:bg-accent-subtle-dark text-accent dark:text-accent-dark hover:bg-blue-100 dark:hover:bg-blue-900/60',
  ghost:
    'bg-transparent text-text-muted dark:text-text-muted-dark hover:bg-surface-elevated dark:hover:bg-surface-elevated-dark hover:text-text-primary dark:hover:text-text-primary-dark',
  outline:
    'border border-border dark:border-border-dark bg-transparent text-text-primary dark:text-text-primary-dark hover:bg-surface-elevated dark:hover:bg-surface-elevated-dark',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-base gap-2',
  lg: 'px-7 py-3.5 text-lg gap-2.5',
}

/**
 * Button — Componente atómico de botón.
 *
 * @example
 * <Button variant="primary" leftIcon={<Download />}>Descargar CV</Button>
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      leftIcon,
      rightIcon,
      isLoading = false,
      as,
      href,
      target,
      rel,
      fullWidth = false,
      children,
      className = '',
      disabled,
      ...rest
    },
    ref,
  ) => {
    const baseClasses = [
      'inline-flex items-center justify-center',
      'font-body font-semibold rounded-pill',
      'transition-all duration-300 ease-out-expo',
      'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
      'select-none cursor-pointer',
      isLoading || disabled ? 'opacity-60 cursor-not-allowed pointer-events-none' : '',
      fullWidth ? 'w-full' : '',
      variantStyles[variant],
      sizeStyles[size],
      className,
    ]
      .filter(Boolean)
      .join(' ')

    const content = (
      <>
        {isLoading ? (
          <span
            className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
            aria-hidden="true"
          />
        ) : (
          leftIcon && <span aria-hidden="true">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && <span aria-hidden="true">{rightIcon}</span>}
      </>
    )

    if (as === 'a' && href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
          className={baseClasses}
          aria-disabled={disabled}
        >
          {content}
        </a>
      )
    }

    return (
      <button ref={ref} className={baseClasses} disabled={disabled || isLoading} {...rest}>
        {content}
      </button>
    )
  },
)

Button.displayName = 'Button'
