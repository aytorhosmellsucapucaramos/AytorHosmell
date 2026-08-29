# Accesibilidad y Lighthouse

## Checklist WCAG 2.1 AA

- Contraste objetivo minimo `4.5:1` para texto normal.
- Foco visible global con `:focus-visible`.
- Skip link al contenido principal.
- Navegacion con `aria-label` y botones con `aria-expanded` cuando aplica.
- Formulario con `label`, `aria-required`, `aria-invalid` y mensajes de error asociados.
- Feedback asincrono del formulario con `aria-live`.
- Iconos decorativos marcados con `aria-hidden`.
- Estados reducidos para usuarios con `prefers-reduced-motion`.
- Enlaces externos con `rel="noopener noreferrer"`.
- No se usan metricas no verificadas; el copy marca esos datos como `No puedo confirmarlo`.

## Prueba Lighthouse Local

1. Ejecutar `npm run build`.
2. Ejecutar `npm run preview`.
3. Abrir Chrome DevTools > Lighthouse.
4. Seleccionar Performance, Accessibility, Best Practices y SEO.
5. Medir mobile y desktop.

Meta: `>=90` en Performance y Accessibility si la red/fuentes externas no penalizan.

## Riesgos Pendientes

- Reemplazar placeholders de email, WhatsApp, LinkedIn, GitHub y dominio.
- Subir imagen Open Graph real en `/public/og-image.png`.
- Reemplazar el CV placeholder por el PDF final.
- Configurar `VITE_FORMSPREE_ID` antes de publicar el formulario.
- Ejecutar Lighthouse en navegador real; desde esta terminal no se ejecuto auditoria visual.
