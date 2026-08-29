import rawContent from '../../content.json'
import type { Experience } from '../types'

export type Language = 'es' | 'en'
export type Localized = Record<Language, string>

export interface ProjectItem {
  title: string
  organization: string
  problem: Localized
  solution: Localized
  role: Localized
  stack: string[]
}

export interface PortfolioContent {
  meta: {
    version: string
    lastUpdated: string
    metricsPolicy: string
  }
  site: {
    name: string
    role: Localized
    email: string
    whatsapp: string
    whatsappMessage: Localized
    linkedin: string
    github: string
    location: string
    cvPdfPath: string
    url: string
  }
  nav: Record<Language, Array<{ href: string; label: string }>>
  hero: {
    eyebrow: Localized
    summary: Localized
    availability: Localized
    primaryCta: Localized
    secondaryCta: Localized
    quickFacts: Record<Language, string[]>
  }
  about: {
    subtitle: Localized
    paragraphs: Record<Language, string[]>
  }
  skills: {
    title: Localized
    categories: Array<{ label: string; items: string[] }>
  }
  projects: {
    title: Localized
    intro: Localized
    items: ProjectItem[]
  }
  contact: {
    title: Localized
    intro: Localized
    fields: Record<'name' | 'email' | 'message', Localized>
    placeholders: Record<'name' | 'email' | 'message', Localized>
    submit: Localized
    success: Localized
    error: Localized
  }
  footer: {
    privacy: Localized
  }
}

export const content = rawContent as PortfolioContent
export const mailtoHref = `mailto:${content.site.email}`

export function whatsappHref(language: Language) {
  return `https://wa.me/${content.site.whatsapp}?text=${encodeURIComponent(
    content.site.whatsappMessage[language],
  )}`
}

export const siteConfig = {
  name: content.site.name,
  role: content.site.role.es,
  tagline: content.hero.summary.es,
  email: content.site.email,
  whatsapp: content.site.whatsapp,
  whatsappMessage: content.site.whatsappMessage.es,
  linkedin: content.site.linkedin,
  github: content.site.github,
  cvPdfPath: content.site.cvPdfPath,
  formspreeId: '',
  location: content.site.location,
  openGraph: {
    title: `${content.site.name} - ${content.site.role.es}`,
    description: content.hero.summary.es,
    image: '/og-image.png',
    url: content.site.url,
  },
}

export const heroCopy = {
  headlineShort: content.site.name,
  headlineMedium: content.site.role.es,
  headlineLong: content.hero.summary.es,
  subtitle: content.hero.summary.es,
  ctaCV: content.hero.secondaryCta.es,
  ctaContact: content.hero.primaryCta.es,
  badge: content.hero.availability.es,
  evidenceLabel: 'Resumen',
  evidenceItems: content.hero.quickFacts.es,
}

export const aboutCopy = {
  heading: content.about.subtitle.es,
  paragraphs: content.about.paragraphs.es,
  stats: [
    { label: 'Ubicación', value: content.site.location },
    { label: 'Formación', value: 'SENATI / UTP' },
    { label: 'Foco', value: 'Web / IA / Cloud' },
    { label: 'Métricas', value: 'No puedo confirmarlo' },
  ],
}

export const skillCategories = content.skills.categories.map((category) => ({
  id: category.label.toLowerCase().replace(/[^a-z0-9]+/gi, '-'),
  label: category.label,
  color: 'bg-accent-subtle text-text-primary dark:bg-accent-subtle-dark dark:text-text-primary-dark',
  skills: category.items.map((name) => ({ name })),
}))

export const projects = content.projects.items.map((project, index) => ({
  id: project.title.toLowerCase().replace(/[^a-z0-9]+/gi, '-'),
  title: project.title,
  organization: project.organization,
  role: project.role.es,
  problem: project.problem.es,
  solution: project.solution.es,
  stack: project.stack,
  responsibilities: [project.role.es],
  architecture: project.solution.es,
  architectureSteps: project.stack,
  howDidIt: project.solution.es,
  metricsNote: 'No puedo confirmarlo',
  status: 'completed' as const,
  year: 'No puedo confirmarlo',
  category: project.stack.slice(0, 3),
  featured: index < 2,
}))

export const timeline: Experience[] = []

export const uiCopy = {
  form: {
    heading: content.contact.title.es,
    namePlaceholder: content.contact.placeholders.name.es,
    emailPlaceholder: content.contact.placeholders.email.es,
    messagePlaceholder: content.contact.placeholders.message.es,
    nameLabel: content.contact.fields.name.es,
    emailLabel: content.contact.fields.email.es,
    messageLabel: content.contact.fields.message.es,
    submit: content.contact.submit.es,
    submitting: 'Enviando...',
    successTitle: 'Mensaje enviado',
    successMessage: content.contact.success.es,
    errorTitle: 'Error al enviar',
    errorMessage: content.contact.error.es,
    requiredError: 'Este campo es obligatorio',
    emailError: 'Ingresa un email válido',
  },
  nav: {
    about: 'Sobre mí',
    skills: 'Skills',
    projects: 'Proyectos',
    experience: 'Experiencia',
    contact: 'Contacto',
  },
  projects: {
    heading: content.projects.title.es,
    subheading: content.projects.intro.es,
    problem: 'Problema',
    solution: 'Solución técnica',
    stack: 'Stack',
    responsibilities: 'Rol',
    architecture: 'Arquitectura',
    viewMore: 'Ver detalles',
    viewLess: 'Cerrar',
  },
  footer: {
    rights: `© ${new Date().getFullYear()} ${content.site.name}.`,
    sourceCode: 'Código fuente',
    privacy: 'Privacidad',
    madeWith: 'React, TypeScript y Tailwind CSS.',
  },
  a11y: {
    toggleTheme: 'Cambiar tema',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    downloadCV: 'Descargar CV en PDF',
    externalLink: 'Abre en nueva ventana',
  },
}

export const publicationCopy = {
  es: {},
  en: {},
}
