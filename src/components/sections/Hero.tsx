import React, { useEffect, useState } from 'react'
import { Download, MessageCircle, MapPin, Sparkles, Database, Bot, ShieldCheck } from 'lucide-react'
import { Button } from '../atoms/Button'
import { siteConfig, heroCopy } from '../../content/content'

/**
 * Hero — Sección principal con avatar, titular animado, CTAs y badge de disponibilidad.
 * Avatar: placeholder geométrico SVG minimalista con gradiente animado.
 */
export const Hero: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Staggered entrance on mount
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`



  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.10),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(6,182,212,0.10),transparent_30%)]"
      aria-label="Presentación principal"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-8 left-4 right-4 hidden h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent md:block" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 dark:bg-accent-dark/5 blur-3xl translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl -translate-x-1/4" />
        {/* Dot grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.035] dark:opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ─── Left: Text content ─── */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div
              className={[
                'flex items-center gap-2 self-start px-3 py-1.5 rounded-pill',
                'bg-accent-subtle dark:bg-accent-subtle-dark',
                'text-accent dark:text-accent-dark text-sm font-medium font-body',
                'transition-all duration-700',
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
              ].join(' ')}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <Sparkles size={14} aria-hidden="true" />
              {heroCopy.badge}
            </div>

            {/* Headline */}
            <h1
              className={[
                'max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-heading leading-[1.04] tracking-[-0.045em] text-text-primary dark:text-text-primary-dark',
                'transition-all duration-700',
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
              ].join(' ')}
              style={{ transitionDelay: '120ms' }}
            >
              <span className="gradient-text">{heroCopy.headlineShort}</span>
              <br />
              <span className="block mt-3 text-3xl sm:text-4xl lg:text-5xl">
                {heroCopy.headlineMedium}
              </span>
            </h1>

            <p
              className={[
                'max-w-xl border-l-2 border-accent/50 pl-4 text-sm text-text-muted dark:text-text-muted-dark font-body leading-relaxed',
                'transition-all duration-700',
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
              ].join(' ')}
              style={{ transitionDelay: '180ms' }}
            >
              {heroCopy.headlineLong}
            </p>

            {/* Subtitle */}
            <p
              className={[
                'text-lg text-text-muted dark:text-text-muted-dark font-body max-w-lg leading-relaxed',
                'transition-all duration-700',
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
              ].join(' ')}
              style={{ transitionDelay: '240ms' }}
            >
              {heroCopy.subtitle}
            </p>

            {/* Location */}
            <p
              className={[
                'flex items-center gap-1.5 text-sm text-text-muted dark:text-text-muted-dark font-body',
                'transition-all duration-700',
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
              ].join(' ')}
              style={{ transitionDelay: '320ms' }}
            >
              <MapPin size={14} aria-hidden="true" />
              {siteConfig.location}
            </p>

            {/* CTAs */}
            <div
              className={[
                'flex flex-wrap gap-3 mt-2',
                'transition-all duration-700',
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
              ].join(' ')}
              style={{ transitionDelay: '400ms' }}
            >
              <Button
                as="a"
                href={siteConfig.cvPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                leftIcon={<Download size={18} />}
                aria-label={uiCopy_a11y_downloadCV}
              >
                {heroCopy.ctaCV}
              </Button>
              <Button
                as="a"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                leftIcon={<MessageCircle size={18} />}
              >
                {heroCopy.ctaContact}
              </Button>
            </div>
          </div>

          {/* ─── Right: Technical dossier ─── */}
          <div
            className={[
              'flex justify-center md:justify-end',
              'transition-all duration-1000',
              visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
            ].join(' ')}
            style={{ transitionDelay: '200ms' }}
          >
            <aside className="technical-dossier w-full max-w-md rounded-[2rem] border border-border dark:border-border-dark bg-surface/80 p-5 shadow-card backdrop-blur-xl dark:bg-surface-dark/80" aria-label="Resumen técnico visual">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent dark:text-accent-dark">
                    {heroCopy.evidenceLabel}
                  </p>
                  <h2 className="mt-2 text-2xl font-heading tracking-[-0.035em] text-text-primary dark:text-text-primary-dark">
                    Aytor H. Sucapuca Ramos
                  </h2>
                </div>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-lg font-black text-white shadow-accent">
                  AH
                </div>
              </div>

              <div className="mb-5 grid grid-cols-3 gap-2" role="list" aria-label="Areas de evidencia">
                {heroCopy.evidenceItems.map((item, i) => (
                  <div key={item} className="rounded-2xl border border-border dark:border-border-dark bg-bg dark:bg-bg-dark p-3" role="listitem">
                    <span className="mb-3 block h-1 w-8 rounded-pill bg-accent dark:bg-accent-dark" aria-hidden="true" />
                    <p className="text-[0.68rem] font-semibold uppercase leading-snug tracking-wide text-text-muted dark:text-text-muted-dark">
                      0{i + 1} / {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.5rem] bg-bg dark:bg-bg-dark p-4">
                <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-text-muted dark:text-text-muted-dark">
                  <span>Arquitectura base</span>
                  <span>No metricas inventadas</span>
                </div>

                <div className="space-y-3">
                  <DossierRow icon={<MapPin size={16} />} label="Institucion" value="Municipalidad / empresa" />
                  <DossierRow icon={<Bot size={16} />} label="Interfaz" value="Web + conversacional" />
                  <DossierRow icon={<Database size={16} />} label="Datos" value="API REST + PostgreSQL" />
                  <DossierRow icon={<ShieldCheck size={16} />} label="Seguridad" value="WebAuthn / JWT / bcrypt" />
                </div>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-dashed border-accent/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent dark:text-accent-dark">
                  Ruta de trabajo
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-medium text-text-muted dark:text-text-muted-dark">
                  <span>Proceso manual</span>
                  <span aria-hidden="true">-&gt;</span>
                  <span>Modelo de datos</span>
                  <span aria-hidden="true">-&gt;</span>
                  <span>Sistema usable</span>
                </div>
              </div>
            </aside>
          </div>

        </div>

        {/* Scroll indicator */}
        <div
          className={[
            'absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2',
            'transition-all duration-700',
            visible ? 'opacity-60' : 'opacity-0',
          ].join(' ')}
          style={{ transitionDelay: '800ms' }}
          aria-hidden="true"
        >
          <span className="text-xs text-text-muted dark:text-text-muted-dark font-body tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent dark:from-accent-dark" />
        </div>
      </div>
    </section>
  )
}

interface DossierRowProps {
  icon: React.ReactNode
  label: string
  value: string
}

const DossierRow: React.FC<DossierRowProps> = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 rounded-2xl border border-border dark:border-border-dark bg-surface dark:bg-surface-dark px-3 py-2.5">
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-accent-subtle text-accent dark:bg-accent-subtle-dark dark:text-accent-dark" aria-hidden="true">
      {icon}
    </span>
    <div>
      <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-text-muted dark:text-text-muted-dark">{label}</p>
      <p className="text-sm font-medium text-text-primary dark:text-text-primary-dark">{value}</p>
    </div>
  </div>
)

// Import needed from uiCopy but avoiding circular, use string directly
const uiCopy_a11y_downloadCV = 'Descargar CV en PDF (abre nueva pestaña)'
