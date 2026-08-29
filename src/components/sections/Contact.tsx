import React from 'react'
import {
  Mail, MessageCircle, Download, MapPin,
} from 'lucide-react'
import { SectionTitle } from '../atoms/SectionTitle'
import { ContactForm } from '../molecules/ContactForm'
import { Button } from '../atoms/Button'
import { siteConfig, uiCopy } from '../../content/content'

// ─── Brand Icons (SVG inline — lucide-react dropped brand icons) ──────────
const LinkedinIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
)

const GithubIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
)

const socialLinks = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`,
    icon: <MessageCircle size={20} />,
    colorClass: 'hover:text-emerald-500 hover:border-emerald-500',
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${siteConfig.email}`,
    icon: <Mail size={20} />,
    colorClass: 'hover:text-blue-500 hover:border-blue-500',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: siteConfig.linkedin,
    icon: <LinkedinIcon size={20} />,
    colorClass: 'hover:text-sky-500 hover:border-sky-500',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: siteConfig.github,
    icon: <GithubIcon size={20} />,
    colorClass: 'hover:text-text-primary dark:hover:text-text-primary-dark hover:border-text-primary dark:hover:border-text-primary-dark',
  },
]

/**
 * Contact — Sección de contacto con formulario Formspree + social links.
 */
export const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="section-padding bg-surface dark:bg-surface-dark"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* ─── Left info ─── */}
          <div>
            <SectionTitle
              eyebrow="05 — Contacto"
              title={uiCopy.form.heading}
              subtitle="¿Tienes un proyecto? Me interesa escucharte."
              id="contact-heading"
            />

            {/* Location */}
            <div className="flex items-center gap-2 text-text-muted dark:text-text-muted-dark mb-8 font-body">
              <MapPin size={16} aria-hidden="true" />
              <span>{siteConfig.location}</span>
            </div>

            {/* Direct contact links */}
            <div className="flex flex-wrap gap-3 mb-8">
              {socialLinks.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} (abre en nueva ventana)`}
                  className={[
                    'flex items-center gap-2 px-4 py-2.5 rounded-pill border border-border dark:border-border-dark',
                    'text-sm font-medium font-body text-text-muted dark:text-text-muted-dark',
                    'transition-all duration-200',
                    link.colorClass,
                  ].join(' ')}
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>

            {/* CV Download */}
            <Button
              as="a"
              href={siteConfig.cvPdfPath}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
              leftIcon={<Download size={18} />}
              aria-label={uiCopy.a11y.downloadCV}
            >
              Descargar CV
            </Button>
          </div>

          {/* ─── Right form ─── */}
          <div className="bg-bg dark:bg-bg-dark rounded-card border border-border dark:border-border-dark p-6 sm:p-8">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}
