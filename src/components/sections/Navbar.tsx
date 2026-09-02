import { Menu, Moon, Sun, X } from 'lucide-react'
import type { MouseEvent } from 'react'
import { useState } from 'react'
import { content, type Language } from '../../content/content'

interface NavbarProps {
  isDark: boolean
  language: Language
  onLanguageChange: (language: Language) => void
  onNavigate: (href: string) => void
  onThemeToggle: () => void
  path: string
}

export function Navbar({
  isDark,
  language,
  onLanguageChange,
  onNavigate,
  onThemeToggle,
  path,
}: NavbarProps) {
  const [open, setOpen] = useState(false)
  const nav = content.nav[language]

  const navigate = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    setOpen(false)
    onNavigate(href)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm transition-colors duration-300 dark:border-border-dark dark:bg-bg-dark/95">
      <nav
        aria-label={language === 'es' ? 'Navegación principal' : 'Main navigation'}
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
      >
        <a
          className="link-underline font-heading text-sm font-extrabold uppercase tracking-[0.16em]"
          href="/"
          onClick={(event) => navigate(event, '/')}
        >
          Aytor
        </a>

        <ul className="hidden items-center gap-6 md:flex" role="list">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                aria-current={path === item.href ? 'page' : undefined}
                className={[
                  'link-underline text-sm font-medium',
                  path === item.href
                    ? 'text-text-primary dark:text-text-primary-dark'
                    : 'text-text-muted dark:text-text-muted-dark',
                ].join(' ')}
                href={item.href}
                onClick={(event) => navigate(event, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden border border-border dark:border-border-dark sm:flex">
            {(['es', 'en'] as const).map((option) => (
              <button
                aria-pressed={language === option}
                className={[
                  'px-2.5 py-1.5 text-xs font-semibold uppercase transition-colors duration-200',
                  language === option
                    ? 'bg-accent text-white'
                    : 'text-text-muted hover:text-text-primary dark:text-text-muted-dark dark:hover:text-text-primary-dark',
                ].join(' ')}
                key={option}
                onClick={() => onLanguageChange(option)}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>

          <button
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            className="inline-flex h-9 w-9 items-center justify-center border border-border text-text-muted transition-colors duration-200 hover:border-accent hover:text-text-primary dark:border-border-dark dark:text-text-muted-dark dark:hover:text-text-primary-dark"
            onClick={onThemeToggle}
            type="button"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-9 w-9 items-center justify-center border border-border text-text-muted transition-colors duration-200 hover:border-accent hover:text-text-primary dark:border-border-dark dark:text-text-muted-dark dark:hover:text-text-primary-dark md:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div
        className={[
          'overflow-hidden border-t border-border bg-bg transition-[max-height,opacity] duration-250 dark:border-border-dark dark:bg-bg-dark md:hidden',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
        id="mobile-menu"
      >
        <div className="mx-auto grid max-w-6xl gap-1 px-4 py-4">
          {nav.map((item) => (
            <a
              className="py-3 text-sm font-medium text-text-primary dark:text-text-primary-dark"
              href={item.href}
              key={item.href}
              onClick={(event) => navigate(event, item.href)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 flex border border-border dark:border-border-dark sm:hidden">
            {(['es', 'en'] as const).map((option) => (
              <button
                className={[
                  'flex-1 px-3 py-2 text-xs font-semibold uppercase transition-colors duration-200',
                  language === option ? 'bg-accent text-white' : 'text-text-muted dark:text-text-muted-dark',
                ].join(' ')}
                key={option}
                onClick={() => onLanguageChange(option)}
                type="button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
