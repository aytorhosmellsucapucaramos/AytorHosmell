# Deploy - Cloudflare Workers

## Requisitos

- Node.js 22.
- Dependencias instaladas con `npm install`.
- Sesión de Wrangler autenticada si vas a publicar.

## Build local

```bash
npm run build
```

## Preview local con Workers

```bash
npm run preview
```

## Deploy

```bash
npm run deploy
```

## Configuración relevante

`wrangler.jsonc` define:

- Nombre del Worker: `aytor-sucapuca-portfolio`.
- `compatibility_date`.
- Assets SPA con `not_found_handling: single-page-application`.

## Checklist antes de publicar

- Confirmar que `content.json` tenga la URL final `https://aytor.hosmell.workers.dev/`.
- Confirmar que `public/CV_Aytor_Sucapuca.pdf` sea el CV final.
- Ejecutar `npm run type-check`, `npm run lint`, `npm test` y `npm run build`.
