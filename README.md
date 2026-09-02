# Aytor Hosmell Sucapuca Ramos - Portfolio

Portafolio editorial y minimalista construido con React, TypeScript, Vite, Tailwind CSS y Cloudflare Workers.

## Rutas

- `/`
- `/about`
- `/skills`
- `/projects`
- `/contact`

Wrangler está configurado con `not_found_handling: single-page-application`, por lo que las rutas internas funcionan al abrirlas directamente o al refrescar el navegador.

## Contenido

El copy editable está en `content.json`.

Actualiza ahí:

- Nombre, rol, correo, WhatsApp y GitHub.
- Textos en español e inglés.
- Proyectos destacados del inicio.
- Casos de estudio de `/projects`.
- URL canónica del sitio.

## Desarrollo

```bash
npm install
npm run dev
```

## Calidad

```bash
npm run type-check
npm run lint
npm test
npm run build
```

## Preview con Cloudflare

```bash
npm run preview
```

## Deploy en Cloudflare Workers

```bash
npm run deploy
```

La configuración principal está en `wrangler.jsonc`.

## Actualizar CV

Reemplaza `public/CV_Aytor_Sucapuca.pdf` por el PDF real manteniendo el mismo nombre.

Si quieres usar otro nombre, cambia `site.cvPdfPath` en `content.json`.
