# Guia de Diseno

## Concepto

Urban Luxe / Minimalista Tech: el portafolio se presenta como un dossier tecnico, no como una landing generica. La composicion usa paneles de evidencia, lineas tipo blueprint, mucho espacio en blanco y microdiagramas para comunicar trabajo real en sector publico, IA y cloud.

## Tokens

| Token | Light | Dark | Uso |
| --- | --- | --- | --- |
| Fondo | `#F8F9FC` | `#0A0D14` | Canvas principal |
| Superficie | `#FFFFFF` | `#111827` | Cards y paneles |
| Superficie elevada | `#F1F5F9` | `#1E293B` | Inputs, chips, bloques internos |
| Acento | `#2563EB` | `#3B82F6` | CTAs, focus, lineas activas |
| Texto principal | `#0F172A` | `#F1F5F9` | Titulares y contenido clave |
| Texto secundario | `#64748B` | `#94A3B8` | Metadatos y descripciones |
| Borde | `#E2E8F0` | `#1E293B` | Separadores y cards |

## Tipografia

Headings: `Plus Jakarta Sans`, pesos 700/800, tracking negativo en hero.

Body: `Inter`, pesos 400/500/600, line-height amplio para lectura.

Escala base: `1rem`, con saltos modulares en Tailwind (`text-sm`, `text-base`, `text-lg`, `text-3xl`, `text-5xl`).

## Espaciado

Secciones desktop: `6rem` vertical.

Secciones mobile: `4rem` vertical.

Cards: padding `1.5rem` a `2rem`, radius entre `1rem` y `2rem`.

## Componentes Criticos

Button: variantes `primary`, `secondary`, `outline`, `ghost`; foco visible con ring azul.

ProjectCard: card expandible con rol, problema, solucion, stack, responsabilidades, arquitectura y diagrama compacto.

Hero: panel de dossier tecnico en lugar de avatar generico; comunica evidencia y ruta de trabajo.

ContactForm: labels visibles, validacion local y envio via Formspree usando `VITE_FORMSPREE_ID`.

## Microinteracciones

Cards: hover con `translateY(-8px)` y shadow elevada.

Badges: hover `scale(1.05)`.

Hero dossier: textura blueprint sutil, sin distraer del copy.

Entrada: fade + translateY pequena mediante Intersection Observer.

Reduced motion: se desactivan animaciones/transiciones prolongadas con `prefers-reduced-motion`.

## Iconografia

Libreria: `lucide-react`.

Estilo: lineal, 16-20px, sin mezclar iconos rellenos salvo marcas sociales inline.

## Prototipo Equivalente

Figma no esta incluido como archivo externo. La referencia de alta fidelidad esta implementada directamente en React + Tailwind y se puede revisar con:

```bash
npm run dev
```

Estados a validar:

1. Tema claro: fondo `#F8F9FC`, paneles blancos, acento azul.
2. Tema oscuro: fondo `#0A0D14`, paneles navy, contraste AA.
3. Mobile 360-430px: hero apilado, CTAs en wrap, cards a una columna.
4. Desktop 1024-1440px: hero en dos columnas, registro canino destacado en grid.
