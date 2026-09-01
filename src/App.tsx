import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useEffect, useMemo, useState } from 'react'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'
import { Hero } from './components/sections/Hero'
import { Navbar } from './components/sections/Navbar'
import { Projects } from './components/sections/Projects'
import { TechStack } from './components/sections/TechStack'
import { content, type Language } from './content/content'

const routes = new Set(['/', '/about', '/skills', '/projects', '/contact'])

function currentPath() {
  const path = window.location.pathname
  return routes.has(path) ? path : '/'
}

function App() {
  const [language, setLanguage] = useState<Language>('es')
  const [path, setPath] = useState(currentPath())

  const navigate = (href: string) => {
    window.history.pushState({}, '', href)
    setPath(currentPath())
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const syncPath = () => setPath(currentPath())
    window.addEventListener('popstate', syncPath)
    return () => window.removeEventListener('popstate', syncPath)
  }, [])

  const title = useMemo(() => {
    const suffix = content.nav[language].find((item) => item.href === path)?.label
    return suffix && path !== '/'
      ? `${suffix} | ${content.site.name}`
      : `${content.site.name} | ${content.site.role[language]}`
  }, [language, path])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: content.site.name,
    jobTitle: content.site.role[language],
    url: content.site.url,
    email: content.site.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PE',
      addressLocality: content.site.location,
    },
    knowsAbout: content.skills.categories.flatMap((category) => category.items),
    sameAs: [content.site.linkedin, content.site.github],
  }

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={language} />
        <title>{title}</title>
        <meta name="description" content={content.hero.summary[language]} />
        <meta name="author" content={content.site.name} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${content.site.url}${path === '/' ? '' : path}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={content.hero.summary[language]} />
        <meta property="og:url" content={`${content.site.url}${path === '/' ? '' : path}`} />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white" href="#main">
        Saltar al contenido
      </a>

      <div className="min-h-screen bg-bg text-text-primary antialiased dark:bg-bg-dark dark:text-text-primary-dark">
        <Navbar language={language} onLanguageChange={setLanguage} path={path} onNavigate={navigate} />
        <main id="main">
          {path === '/' && <Hero language={language} onNavigate={navigate} />}
          {path === '/about' && <About language={language} />}
          {path === '/skills' && <TechStack language={language} />}
          {path === '/projects' && <Projects language={language} />}
          {path === '/contact' && <Contact language={language} />}
        </main>
        <Footer language={language} />
      </div>
    </HelmetProvider>
  )
}

export default App
