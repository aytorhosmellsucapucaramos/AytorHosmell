# Guía de Despliegue — Portafolio Aytor Sucapuca

## 1. Despliegue en Vercel (Recomendado)

### Opción A: Desde la interfaz de Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub
2. Haz clic en **"Add New Project"**
3. Importa el repositorio `portfolio` desde tu cuenta de GitHub
4. Vercel detectará automáticamente que es un proyecto Vite
5. Confirma la configuración:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Agrega las variables de entorno (ver sección abajo)
7. Haz clic en **"Deploy"**

### Opción B: Desde Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desde el directorio del proyecto
vercel

# Para producción
vercel --prod
```

---

## 2. Variables de entorno

En el panel de Vercel → Settings → Environment Variables, agrega:

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `VITE_FORMSPREE_ID` | `xyzabcde` | ID de tu formulario en formspree.io |

> **Importante:** Las variables de entorno de Vite deben comenzar con `VITE_` para ser accesibles desde el frontend.

### Cómo obtener tu ID de Formspree

1. Crea una cuenta en [formspree.io](https://formspree.io)
2. Crea un nuevo formulario
3. Copia el ID (ej: `xyzabcde`) de la URL `https://formspree.io/f/xyzabcde`
4. Configura `VITE_FORMSPREE_ID` en Vercel y, para desarrollo local, en un archivo `.env.local`

---

## 3. Dominio personalizado en Vercel

1. Ve a tu proyecto en Vercel → Settings → Domains
2. Agrega tu dominio: `aytor.dev` (o el que tengas)
3. Actualiza los DNS de tu registrador con los registros que Vercel indica
4. Actualiza `siteConfig.openGraph.url` en `src/content/content.ts` con tu dominio real

---

## 4. GitHub Actions CI/CD

El archivo `.github/workflows/ci.yml` ejecuta automáticamente en cada push:
- `npm run type-check` — verificación de tipos TypeScript
- `npm run lint` — linting
- `npm run build` — build de producción

Vercel también puede configurarse para hacer deploy automático en cada push a `main`.

---

## 5. Build local y preview

```bash
# Build de producción
npm run build

# Preview local del build
npm run preview
# → http://localhost:4173
```

El build genera la carpeta `/dist` con todos los archivos estáticos listos para producción.

---

## 6. Checklist antes de publicar

- [ ] Actualizar `email` en `siteConfig`
- [ ] Actualizar `whatsapp` en `siteConfig`
- [ ] Actualizar `linkedin` en `siteConfig`
- [ ] Actualizar `github` en `siteConfig`
- [ ] Crear cuenta en formspree.io y actualizar `formspreeId`
- [ ] Subir `CV_Aytor_Sucapuca.pdf` real a `/public/`
- [ ] Subir `og-image.png` (1200×630px) a `/public/`
- [ ] Actualizar `siteConfig.openGraph.url` con dominio real
- [ ] Ejecutar `npm run build` sin errores
- [ ] Verificar Lighthouse score ≥ 90 en Performance y Accessibility
