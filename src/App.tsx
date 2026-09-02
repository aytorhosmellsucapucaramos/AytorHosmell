import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'
import { Hero } from './components/sections/Hero'
import { Navbar } from './components/sections/Navbar'
import { Projects } from './components/sections/Projects'
import { TechStack } from './components/sections/TechStack'
import { content, type Language } from './content/content'
import { useTheme } from './hooks/useTheme'

const routes = new Set(['/', '/about', '/skills', '/projects', '/contact'])

function currentPath() {
  const path = window.location.pathname
  return routes.has(path) ? path : '/'
}

function App() {
  const [language, setLanguage] = useState<Language>('es')
  const [path, setPath] = useState(currentPath())
  const { isDark, toggleTheme } = useTheme()

  const navigate = useCallback((href: string) => {
    if (href === window.location.pathname) return
    window.history.pushState({}, '', href)
    setPath(currentPath())
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const syncPath = () => setPath(currentPath())
    window.addEventListener('popstate', syncPath)
    return () => window.removeEventListener('popstate', syncPath)
  }, [])

  const canonical = `${content.site.url.replace(/\/$/, '')}${path === '/' ? '/' : path}`

  const pageTitle = useMemo(() => {
    const active = content.nav[language].find((item) => item.href === path)
    return active && path !== '/'
      ? `${active.label} | ${content.site.name}`
      : content.seo.title[language]
  }, [language, path])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: content.site.name,
    jobTitle: content.site.role[language],
    url: content.site.url,
    email: content.site.email,
    sameAs: [content.site.github],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PE',
      addressLocality: content.site.location,
    },
    knowsAbout: content.skills.categories.flatMap((category) => category.items),
  }

  return (
    <HelmetProvider>
      <Helmet>
        <html lang={language} />
        <title>{pageTitle}</title>
        <meta name="description" content={content.seo.description[language]} />
        <meta name="author" content={content.site.name} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={content.seo.description[language]} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="/hero.png" />
        <meta property="og:image:alt" content={content.seo.imageAlt[language]} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content={isDark ? '#101211' : '#fbfaf7'} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        href="#main"
      >
        Saltar al contenido
      </a>

      <div className="min-h-screen bg-bg text-text-primary transition-colors duration-300 dark:bg-bg-dark dark:text-text-primary-dark">
        <Navbar
          isDark={isDark}
          language={language}
          onLanguageChange={setLanguage}
          onNavigate={navigate}
          onThemeToggle={toggleTheme}
          path={path}
        />
        <main
          id="main"
          className="motion-safe:animate-[page-in_320ms_ease-out_both]"
          key={`${path}-${language}`}
        >
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
