# Design System — UX Factory Cotización

<!-- impeccable:design-schema 1 -->

## World

**Atelier Ledger** — documento comercial de atelier digital: papel piedra frío, tinta carbón y un solo acento slate-teal. Lee como folio de propuesta, no como landing SaaS.

Use scene: revisión diurna en laptop o impresión A4/letter; luz de oficina; prioriza claridad fiscal y jerarquía de secciones.

## Color strategy

**Restrained** — neutros + un acento.

| Token | Value | Uso |
|-------|-------|-----|
| `paper` | `#ECEAE6` | Fondo de página / atmósfera |
| `paper-deep` | `#E0DDD6` | Gradiente inferior |
| `sheet` | `#F7F6F3` | Superficie del documento |
| `ink` | `#12141A` | Texto principal, reglas fuertes |
| `ink-soft` | `#3D424C` | Cuerpo secundario |
| `ink-faint` | `#6A707A` | Meta labels |
| `line` | `#C5C1B8` | Divisores hairline |
| `accent` | `#1F4E5F` | Banda de inversión, enlaces, énfasis |
| `accent-soft` | `#D4E3E8` | Selection |
| `accent-ink` | `#F4FAFB` | Texto sobre accent |

Anti-referencias: púrpura/indigo AI, cream cálido `#F4F1EA` + terracotta, broadsheet denso, glow neón, glassmorphism.

## Typography

| Rol | Familia | Notas |
|-----|---------|-------|
| Display | Cabinet Grotesk (Fontshare) 500–800 | Tracking ≈ -0.03em; wordmark hero clamp 3.25–6.5rem |
| Body | Satoshi (Fontshare) 400–700 | ~17px base, line-height 1.65, measure ≤68ch |
| Meta | Satoshi 500 | 0.75rem, uppercase, letter-spacing 0.04em |

## Layout

- Documento centrado `sheet` max 1080px, sombra suave + borde hairline
- Secciones en grid `220px | 1fr` desde `md`
- Separación por `section-rule` (1px `line`), no cards en contenido principal
- Banda de inversión a full-bleed del sheet con fondo `accent`
- Sticky section titles en desktop (se desactiva en print)

## Components

- **Print button**: borde ink, hover invertido; oculto en print
- **Tables**: encabezado con borde ink; filas con borde `line`
- **Lists**: disc para roles; hairline list para alcance/ventajas
- **Footer**: RUC + placeholders de contacto

## Motion

- Una entrada `fade-rise` (opacity + translateY + blur breve) en header
- `prefers-reduced-motion`: animaciones anuladas
- Print: sin animación

## Print / PDF

- `@page` margin 14mm
- Ocultar atmósfera y controles `.no-print`
- Forzar color de banda de inversión (`print-color-adjust: exact`)
- Evitar cortes raros en filas de tabla y banda de inversión

## Surfaces

| Ruta | Modo | Brief |
|------|------|-------|
| `/` | Read (+ decisión comercial) | Cotización Dazzler Miraflores |

## Source of truth

Tokens en [`src/styles/global.css`](src/styles/global.css) (`@theme` + components).
Contenido comercial en [`src/data/quote.ts`](src/data/quote.ts).
