# Design System — UX Factory Cotización

<!-- impeccable:design-schema 1 -->

## World

**Atelier Ledger** — documento comercial de estudio digital: papel piedra frío, tinta carbón y un acento slate-teal. Se conserva la identidad visual de la plantilla para que la propuesta lea como una decisión de inversión, no como una landing promocional.

## Color strategy

| Token | Value | Uso |
|---|---|---|
| `paper` | `#ECEAE6` | Fondo de página |
| `paper-deep` | `#E0DDD6` | Atmósfera inferior |
| `sheet` | `#F7F6F3` | Documento |
| `ink` | `#12141A` | Texto principal |
| `ink-soft` | `#3D424C` | Cuerpo secundario |
| `ink-faint` | `#6A707A` | Meta labels |
| `line` | `#C5C1B8` | Divisores |
| `accent` | `#1F4E5F` | Inversión y énfasis |
| `accent-soft` | `#D4E3E8` | Fondos informativos |
| `accent-ink` | `#F4FAFB` | Texto sobre acento |

## Typography

- Display: Cabinet Grotesk 500–800.
- Body: Satoshi 400–700.
- Meta: Satoshi 500 en mayúsculas.

## Layout

- Documento centrado, máximo 1240 px para aprovechar mejor pantallas grandes.
- Secciones en grid `220px | 1fr` desde desktop.
- Separadores hairline; banda de inversión en color acento.
- Títulos laterales sticky en pantalla, estáticos en impresión.
- Navegación inferior contextual en móvil.

## Information hierarchy

1. Contexto y diagnóstico.
2. UX Research, UX Design y UI Design antes del desarrollo.
3. Alcance funcional y tecnología.
4. Responsabilidades, fases e inversión.
5. Condiciones y siguiente paso.

## Print / PDF

- `@page` con margen de 14 mm.
- Ocultar atmósfera, navegación y controles.
- Conservar colores de la banda de inversión.
- Evitar cortes de tablas y bloques críticos.

## Source of truth

- Tokens y componentes: `src/styles/global.css`.
- Contenido comercial: `src/data/quote.ts`.
- Comparativa técnica: `src/data/stacks.ts`.
