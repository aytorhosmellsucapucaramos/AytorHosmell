export interface Project {
  id: string
  title: string
  organization: string
  role: string
  problem: string
  solution: string
  stack: string[]
  responsibilities: string[]
  architecture: string
  architectureSteps: string[]
  howDidIt: string
  metricsNote: string
  status: 'completed' | 'in-progress'
  year: string
  category: string[]
  featured: boolean
}

export interface Experience {
  id: string
  type: 'work' | 'education'
  title: string
  organization: string
  period: string
  description: string
  highlights: string[]
  location: string
}

export interface Skill {
  name: string
  icon?: string
  level?: 'basic' | 'intermediate' | 'advanced'
}

export interface SkillCategory {
  id: string
  label: string
  color: string
  skills: Skill[]
}

export interface ContactFormData {
  name: string
  email: string
  message: string
  website?: string
}

export interface SiteConfig {
  name: string
  role: string
  tagline: string
  email: string
  whatsapp: string
  whatsappMessage: string
  linkedin: string
  github: string
  cvPdfPath: string
  formspreeId: string
  location: string
  openGraph: {
    title: string
    description: string
    image: string
    url: string
  }
}
