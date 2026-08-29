# Aytor Hosmell Sucapuca Ramos - Portfolio/CV

Portafolio minimalista construido con React, TypeScript, Tailwind CSS y Vite.

## Estructura

- `/` resume el portafolio en el hero: contacto, resumen, WhatsApp/email y CV.
- `/about` incluye el subtítulo exacto: `Sobre mí — un breve resumen de mi`.
- `/skills` incluye el encabezado exacto solicitado.
- `/projects` muestra tarjetas con problema, solución técnica, rol y stack.
- `/contact` contiene formulario validado y contacto directo.

El copy editable está en `content.json`. Cambia ahí nombre, email, WhatsApp, enlaces, textos ES/EN y proyectos.

## Desarrollo local

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

## Deploy en Vercel

1. Sube el repositorio a GitHub.
2. Importa el proyecto en Vercel.
3. Usa el build command `npm run build`.
4. Usa output directory `dist`.
5. Agrega variables de entorno para el formulario:

```bash
RESEND_API_KEY=tu_api_key_de_resend
CONTACT_TO_EMAIL=tu_email_destino
CONTACT_FROM_EMAIL=Portfolio <contacto@tu-dominio.com>
```

El endpoint `api/contact.ts` valida campos requeridos, email y honeypot (`website`). Si no configuras las variables, el formulario mostrará error, pero email y WhatsApp seguirán visibles.

## Actualizar el CV PDF

Reemplaza `public/CV_Aytor_Sucapuca.pdf` por tu CV real manteniendo el mismo nombre. Si cambias el nombre, actualiza `site.cvPdfPath` en `content.json`.

## Política de contenido

No se inventan métricas, fechas ni KPIs. Cuando falta evidencia, el sitio usa: `No puedo confirmarlo`.
