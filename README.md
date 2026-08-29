# Portafolio CV — Aytor Hosmell Sucapuca Ramos

> **Ingeniero de Software · IA & Cloud** | React 18 + TypeScript + Vite + Tailwind CSS v3

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/REEMPLAZAR/portfolio)

---

## 🚀 Inicio rápido

```bash
# 1. Clonar el repositorio
git clone https://github.com/REEMPLAZAR/portfolio.git
cd portfolio

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
# → http://localhost:5173
```

---

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── atoms/
│   │   ├── Button.tsx       # Botón polimórfico (4 variantes, 3 tamaños)
│   │   ├── Badge.tsx        # Etiqueta de skill/tecnología
│   │   └── SectionTitle.tsx # Encabezado de sección con animación
│   ├── molecules/
│   │   ├── ProjectCard.tsx  # Tarjeta expandible de proyecto
│   │   ├── TimelineItem.tsx # Elemento de timeline experiencia/educación
│   │   └── ContactForm.tsx  # Formulario con Formspree + validación
│   └── sections/
│       ├── Navbar.tsx       # Navegación sticky + mobile + dark mode
│       ├── Hero.tsx         # Sección principal con avatar y CTAs
│       ├── About.tsx        # Presentación personal + stats
│       ├── TechStack.tsx    # Habilidades por categoría
│       ├── Projects.tsx     # Grid de proyectos
│       ├── Experience.tsx   # Timeline filtrable
│       ├── Contact.tsx      # Formulario + links sociales
│       └── Footer.tsx       # Pie de página + privacidad
├── content/
│   └── content.ts           # Fuente de verdad del copy usado por React
├── hooks/
│   ├── useTheme.ts          # Dark/light mode con localStorage
│   └── useInView.ts         # Intersection Observer para animaciones
├── types/
│   └── index.ts             # Tipos TypeScript del dominio
├── test/                    # Setup de Vitest + Testing Library
├── App.tsx                  # Raíz: SEO (Helmet), composición, tema
└── index.css                # Estilos globales + design tokens CSS
```

Documentacion adicional:

- `docs/design-guide.md`: tokens, concepto visual, microinteracciones y prototipo equivalente.
- `docs/accessibility-lighthouse.md`: checklist WCAG 2.1 AA y pasos de Lighthouse.
- `content.json`: referencia editable del copy bilingue y politica de metricas.

---

## ✏️ Cómo actualizar el contenido

**Todo el texto editable está en un solo archivo:**

```
src/content/content.ts
```

### Actualizar información de contacto

```typescript
// src/content/content.ts → siteConfig
export const siteConfig = {
  email: 'tu@email.com',           // ← Cambiar
  whatsapp: '51XXXXXXXXX',         // ← Número con código de país (sin +)
  linkedin: 'https://linkedin.com/in/tu-perfil',  // ← Cambiar
  github: 'https://github.com/tu-usuario',        // ← Cambiar
  formspreeId: 'xyzabcde',         // ← ID de tu formulario en formspree.io
}
```

### Actualizar titulares Hero

```typescript
// src/content/content.ts → heroCopy
export const heroCopy = {
  headlineShort: 'Software · IA · Cloud.',   // ← Cambiar
  headlineMedium: 'Tu titular corto aquí.',  // ← Cambiar
  headlineLong:   'Tu titular largo aquí.',  // ← Cambiar
  subtitle:       'Tu subtítulo aquí.',      // ← Cambiar
}
```

### Añadir un nuevo proyecto

```typescript
// src/content/content.ts → projects
export const projects: Project[] = [
  // ... proyectos existentes ...
  {
    id: 'mi-nuevo-proyecto',
    title: 'Nombre del proyecto',
    organization: 'Organización',
    role: 'Tu rol',
    year: '2025',
    status: 'completed',
    category: ['Web', 'Backend'],
    featured: false,
    problem: 'Descripción del problema...',
    solution: 'Descripción de la solución...',
    stack: ['React', 'Node.js'],
    responsibilities: ['Tarea 1', 'Tarea 2'],
    architecture: 'Descripción de la arquitectura...',
  },
]
```

### Actualizar CV PDF

1. Nombra tu archivo `CV_Aytor_Sucapuca.pdf`
2. Cópialo a la carpeta `/public/`
3. El botón de descarga lo tomará automáticamente

---

## 🛠️ Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en localhost:5173 |
| `npm run build` | Build de producción en `/dist` |
| `npm run preview` | Preview del build de producción |
| `npm run lint` | Linting con oxlint |
| `npm run type-check` | Verificación de tipos TypeScript |
| `npm run test` | Tests unitarios con Vitest |
| `npm run storybook` | Storybook local en localhost:6006 |
| `npm run build-storybook` | Build estático de Storybook |

---

## 🌐 Despliegue en Vercel

Ver instrucciones detalladas en [deploy.md](./deploy.md).

---

## 🎨 Design System

| Token | Light | Dark |
|-------|-------|------|
| Fondo principal | `#F8F9FC` | `#0A0D14` |
| Superficie (cards) | `#FFFFFF` | `#111827` |
| Acento | `#2563EB` | `#3B82F6` |
| Texto principal | `#0F172A` | `#F1F5F9` |
| Texto secundario | `#64748B` | `#94A3B8` |
| Borde | `#E2E8F0` | `#1E293B` |

**Tipografías:**
- Headings: `Plus Jakarta Sans` (700/800)
- Body: `Inter` (400/500/600)

---

## ♿ Accesibilidad

- Contraste de texto ≥ 4.5:1 (WCAG 2.1 AA)
- `focus-visible` visible en todos los elementos interactivos
- Roles ARIA en componentes (navbar, formulario, timeline)
- Labels asociados en todos los inputs del formulario
- Skip-to-content link para navegación por teclado
- `aria-live` en feedback asíncrono del formulario

---

## 📦 Dependencias principales

| Paquete | Versión | Uso |
|---------|---------|-----|
| React | 18 | Framework UI |
| TypeScript | 5.7 | Tipado estático |
| Vite | 5 | Build tool |
| Tailwind CSS | 3 | Estilos |
| react-helmet-async | 2 | SEO meta tags |
| lucide-react | latest | Iconografía |
| Vitest | 2 | Tests unitarios |
| Storybook | latest | Documentación visual de componentes |

---

## 📝 Licencia

MIT — Aytor Hosmell Sucapuca Ramos, 2025.
