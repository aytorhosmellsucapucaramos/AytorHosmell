import React, { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { siteConfig, uiCopy } from '../../content/content'

const NAV_LINKS = [
  { href: '#about',      label: uiCopy.nav.about },
  { href: '#skills',     label: uiCopy.nav.skills },
  { href: '#projects',   label: uiCopy.nav.projects },
  { href: '#experience', label: uiCopy.nav.experience },
  { href: '#contact',    label: uiCopy.nav.contact },
]

interface NavbarProps {
  onThemeToggle: () => void
  isDark: boolean
}

/**
 * Navbar — Barra de navegación sticky con scroll-detection, mobile menu y theme toggle.
 */
export const Navbar: React.FC<NavbarProps> = ({ onThemeToggle, isDark }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-300',
        scrolled
          ? 'glass shadow-sm py-3'
          : 'bg-transparent py-5',
      ].join(' ')}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo / Name */}
        <a
          href="#top"
          className="font-heading font-bold text-lg text-text-primary dark:text-text-primary-dark hover:text-accent dark:hover:text-accent-dark transition-colors animated-underline"
          onClick={closeMenu}
        >
          <span className="text-accent dark:text-accent-dark">A</span>ytor
          <span className="text-accent dark:text-accent-dark">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-text-muted dark:text-text-muted-dark hover:text-text-primary dark:hover:text-text-primary-dark animated-underline transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={onThemeToggle}
            aria-label={uiCopy.a11y.toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-surface-elevated dark:hover:bg-surface-elevated-dark transition-colors text-text-muted dark:text-text-muted-dark"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? uiCopy.a11y.closeMenu : uiCopy.a11y.openMenu}
            aria-controls="mobile-menu"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-surface-elevated dark:hover:bg-surface-elevated-dark transition-colors text-text-muted dark:text-text-muted-dark"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={[
          'md:hidden glass border-t border-border dark:border-border-dark',
          'transition-all duration-300 overflow-hidden',
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <ul className="flex flex-col px-4 py-4 gap-4" role="list">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block text-sm font-medium text-text-primary dark:text-text-primary-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* CV download in mobile menu */}
          <li>
            <a
              href={siteConfig.cvPdfPath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="block text-sm font-semibold text-accent dark:text-accent-dark"
            >
              Descargar CV ↓
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
