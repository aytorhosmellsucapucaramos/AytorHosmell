import React from 'react'
import { siteConfig, uiCopy } from '../../content/content'

const GithubIcon: React.FC<{ size?: number }> = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

/**
 * Footer — Pie de página con derechos, link al código fuente y política de privacidad.
 */
export const Footer: React.FC = () => {
  return (
    <footer
      className="border-t border-border dark:border-border-dark bg-surface dark:bg-surface-dark py-8"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted dark:text-text-muted-dark font-body">

          {/* Left */}
          <div className="text-center sm:text-left">
            <p>{uiCopy.footer.rights}</p>
            <p className="text-xs mt-0.5 opacity-75">{uiCopy.footer.madeWith}</p>
          </div>

          {/* Right links */}
          <div className="flex items-center gap-5">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver código fuente en GitHub (abre en nueva ventana)"
              className="flex items-center gap-1.5 hover:text-text-primary dark:hover:text-text-primary-dark transition-colors"
            >
              <GithubIcon size={15} />
              {uiCopy.footer.sourceCode}
            </a>
            <a
              href="#privacy"
              className="hover:text-text-primary dark:hover:text-text-primary-dark transition-colors"
            >
              {uiCopy.footer.privacy}
            </a>
          </div>

        </div>

        {/* Minimal privacy notice */}
        <p
          id="privacy"
          className="mt-6 pt-6 border-t border-border dark:border-border-dark text-xs text-text-muted dark:text-text-muted-dark text-center"
        >
          Este sitio no utiliza cookies de seguimiento. El formulario de contacto es gestionado por{' '}
          <a
            href="https://formspree.io/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent dark:hover:text-accent-dark"
          >
            Formspree
          </a>
          . Los datos enviados por el formulario se usan únicamente para responder tu consulta.
        </p>
      </div>
    </footer>
  )
}
