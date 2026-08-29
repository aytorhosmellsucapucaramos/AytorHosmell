import { HelmetProvider, Helmet } from 'react-helmet-async'
import { useTheme } from './hooks/useTheme'
import { siteConfig } from './content/content'
import { Navbar }     from './components/sections/Navbar'
import { Hero }       from './components/sections/Hero'
import { About }      from './components/sections/About'
import { TechStack }  from './components/sections/TechStack'
import { Projects }   from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Contact }    from './components/sections/Contact'
import { Footer }     from './components/sections/Footer'

/**
 * App — Componente raíz. Gestiona tema, SEO y composición de secciones.
 */
function App() {
  const { toggleTheme, isDark } = useTheme()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.openGraph.url,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PE',
      addressRegion: 'Arequipa',
    },
    knowsAbout: [
      'Software Engineering',
      'Web Development',
      'Artificial Intelligence',
      'Cloud Computing',
      'Google Cloud Platform',
      'Azure',
      'WebAuthn',
      'Node.js',
      'React',
      'Angular',
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'SENATI',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Universidad Tecnológica del Perú',
      },
    ],
    sameAs: [siteConfig.linkedin, siteConfig.github],
  }

  return (
    <HelmetProvider>
      <Helmet>
        {/* ─── Primary Meta ─── */}
        <html lang="es" />
        <title>{siteConfig.openGraph.title}</title>
        <meta name="description" content={siteConfig.openGraph.description} />
        <meta name="author" content={siteConfig.name} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteConfig.openGraph.url} />

        {/* ─── Open Graph ─── */}
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content={siteConfig.openGraph.url} />
        <meta property="og:title"       content={siteConfig.openGraph.title} />
        <meta property="og:description" content={siteConfig.openGraph.description} />
        <meta property="og:image"       content={siteConfig.openGraph.image} />
        <meta property="og:locale"      content="es_PE" />

        {/* ─── Twitter Card ─── */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={siteConfig.openGraph.title} />
        <meta name="twitter:description" content={siteConfig.openGraph.description} />
        <meta name="twitter:image"       content={siteConfig.openGraph.image} />

        {/* ─── JSON-LD Structured Data ─── */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>

        {/* ─── Theme color ─── */}
        <meta name="theme-color" content={isDark ? '#0A0D14' : '#F8F9FC'} />
      </Helmet>

      {/* Skip-to-content for keyboard users */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Saltar al contenido principal
      </a>

      <div className="min-h-screen bg-bg dark:bg-bg-dark transition-colors duration-300">
        <Navbar onThemeToggle={toggleTheme} isDark={isDark} />

        <main id="main-content">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default App
