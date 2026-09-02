import rawContent from '../../content.json'

export type Language = 'es' | 'en'
export type Localized = Record<Language, string>

export interface FeaturedProject {
  number: string
  title: string
  description: Localized
  stack: string
}

export interface ProjectLink {
  label: string
  href: string
}

export interface ProjectItem {
  title: string
  organization: string
  context: Localized
  description: Localized
  stack: string[]
  links: ProjectLink[]
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
    shortRole: Localized
    email: string
    whatsapp: string
    whatsappDisplay: string
    whatsappMessage: Localized
    github: string
    location: string
    cvPdfPath: string
    url: string
  }
  seo: {
    title: Localized
    description: Localized
    imageAlt: Localized
  }
  nav: Record<Language, Array<{ href: string; label: string }>>
  hero: {
    greeting: Localized
    profession: Localized
    summary: Localized
    primaryCta: Localized
    projectsCta: Localized
    cvCta: Localized
    featuredTitle: Localized
    featuredProjects: FeaturedProject[]
  }
  about: {
    title: Localized
    paragraphs: Record<Language, string[]>
  }
  skills: {
    title: Localized
    intro: Localized
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
    portfolioLabel: Localized
  }
}

export const content = rawContent as PortfolioContent
export const mailtoHref = `mailto:${content.site.email}`

export function whatsappHref(language: Language) {
  return `https://wa.me/${content.site.whatsapp}?text=${encodeURIComponent(
    content.site.whatsappMessage[language],
  )}`
}
