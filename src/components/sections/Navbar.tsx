import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { content, type Language } from '../../content/content'

interface NavbarProps {
  language: Language
  onLanguageChange: (language: Language) => void
  path: string
  onNavigate: (href: string) => void
}

export function Navbar({ language, onLanguageChange, path, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const nav = content.nav[language]

  const go = (href: string) => {
    setOpen(false)
    onNavigate(href)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur dark:border-border-dark dark:bg-bg-dark/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6" aria-label="Navegación principal">
        <button
          className="group text-left font-heading text-base font-extrabold text-text-primary transition-colors hover:text-accent dark:text-text-primary-dark dark:hover:text-accent-dark"
          onClick={() => go('/')}
        >
          <span className="block leading-none">Aytor</span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-text-muted dark:text-text-muted-dark">
            Software
          </span>
        </button>

        <ul className="hidden items-center gap-1 md:flex" role="list">
          {nav.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => go(item.href)}
                aria-current={path === item.href ? 'page' : undefined}
                className={[
                  'px-3 py-2 text-sm font-medium transition-colors',
                  path === item.href
                    ? 'text-text-primary dark:text-text-primary-dark'
                    : 'text-text-muted hover:text-text-primary dark:text-text-muted-dark dark:hover:text-text-primary-dark',
                ].join(' ')}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="flex border border-border dark:border-border-dark" aria-label="Cambiar idioma">
            {(['es', 'en'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={[
                  'px-2.5 py-1.5 text-xs font-semibold uppercase transition-colors',
                  language === lang
                    ? 'bg-accent text-white'
                    : 'text-text-muted hover:text-text-primary dark:text-text-muted-dark dark:hover:text-text-primary-dark',
                ].join(' ')}
              >
                {lang}
              </button>
            ))}
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center border border-border text-text-primary md:hidden dark:border-border-dark dark:text-text-primary-dark"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={open ? 'border-t border-border bg-bg dark:border-border-dark dark:bg-bg-dark md:hidden' : 'hidden'}>
        <div className="mx-auto grid max-w-6xl gap-1 px-4 py-3">
          {nav.map((item) => (
            <button
              key={item.href}
              onClick={() => go(item.href)}
              className="py-3 text-left text-sm font-medium text-text-primary dark:text-text-primary-dark"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
