export const stacks = {
  clientWant: {
    name: "WordPress + Elementor",
    tagline: "Lo que el cliente conoce",
    verdict:
      "Funciona para sitios simples, pero para un hotel premium con multiidioma, SEO/AEO y reserva directa, limita la velocidad, la escalabilidad y la experiencia móvil.",
    pros: [
      "El equipo ya conoce WordPress; curva de aprendizaje mínima",
      "Gran ecosistema de plugins (formularios, SEO, traducción)",
      "Elementor permite editar contenido visualmente sin código",
      "Comunidad enorme: soporte, documentación, freelance disponible",
    ],
    cons: [
      "Rendimiento limitado: muchos plugins = más JavaScript y más requests",
      "Multiidioma con WPML u otros: costoso, propenso a conflictos entre plugins",
      "SEO técnico depende de plugins; no tiene control fino sobre HTML generado",
      "Seguridad: plugins de terceros son la principal fuente de vulnerabilidades",
      "Edición visual (Elementor) genera código pesado y difícil de mantener a largo plazo",
      "No preparado nativamente para AEO (Answer Engine Optimization)",
    ],
    bestFor:
      "Sitios informativos simples, blogs personales, tiendas pequeñas con WooCommerce.",
    hotelScore: "3/5",
    hotelNote:
      "Adecuado si el presupuesto es muy limitado y no se requiere multiidioma robusto ni SEO avanzado.",
  },
  recommended: {
    name: "Astro + Sanity",
    tagline: "Nuestra recomendación",
    verdict:
      "Máximo rendimiento, SEO/AEO nativo, CMS moderno para el hotel y arquitectura preparada para crecer. El mejor equilibrio para un hotel de marca premium.",
    pros: [
      "HTML estático por defecto: carga ultra rápida, Core Web Vitals excelentes",
      "SEO/AEO de base: sin plugins, el HTML ya es limpio y semántico",
      "Sanity: panel moderno, roles, versiones, previsualización, campos SEO por página",
      "Multiidioma nativo con hreflang correcto (sin plugins de traducción)",
      "Sin dependencia de plugins de terceros para seguridad o rendimiento",
      "Frontend portable: el CMS es del cliente; el front puede evolucionar",
      "Ideal para integrar TravelClick sin sobrecarga de JavaScript",
    ],
    cons: [
      "Curva de aprendizaje para el equipo editorial (Sanity vs WordPress)",
      "Requiere desarrollo personalizado (no hay themes listos como en WP)",
      "Si el hotel quiere editar el layout visualmente, Sanity no lo ofrece nativamente",
      "Menor ecosistema de plugins; cada funcionalidad se construye a medida",
    ],
    bestFor:
      "Sitios de marca, hoteles, empresas que necesitan velocidad, SEO real y control editorial profesional.",
    hotelScore: "5/5",
    hotelNote:
      "Ideal para Dazzler: marca premium, multiidioma, SEO/AEO como diferencial, reserva directa con TravelClick.",
  },
  hybrid: {
    name: "Astro + WordPress headless",
    tagline: "El punto medio",
    verdict:
      "Combina la velocidad de Astro con el CMS familiar de WordPress. Buena opción si el equipo insiste en WP, pero agrega complejidad técnica.",
    pros: [
      "El hotel sigue usando WordPress como CMS (familiar)",
      "Frontend en Astro: rápido, limpio, preparado para SEO/AEO",
      "Se pueden reutilizar contenidos existentes de WordPress",
      "El equipo editorial no cambia de herramienta",
    ],
    cons: [
      "WordPress sigue corriendo como backend: hosting, mantenimiento y actualizaciones",
      "Dos sistemas que mantener en vez de uno",
      "API de WordPress para headless puede ser lenta sin caché agresivo",
      "Multiidioma sigue dependiendo de plugins WP (WPML, etc.)",
      "La complejidad de operación aumenta: WP + API + Astro + deploy",
      "No elimina los problemas de seguridad de WordPress",
    ],
    bestFor:
      "Equipos que ya tienen contenido en WordPress y quieren mejorar performance sin migrar CMS.",
    hotelScore: "3.5/5",
    hotelNote:
      "Interesante si el hotel tiene mucho contenido existente en WP, pero agrega complejidad sin resolver los problemas de multiidioma y SEO.",
  },
} as const;

export const decisionMatrix = [
  {
    dimension: "Velocidad de carga",
    wpElementor: "2",
    astroSanity: "5",
    astroWpHeadless: "4",
  },
  {
    dimension: "SEO técnico",
    wpElementor: "3",
    astroSanity: "5",
    astroWpHeadless: "4",
  },
  {
    dimension: "AEO (asistentes IA)",
    wpElementor: "2",
    astroSanity: "5",
    astroWpHeadless: "4",
  },
  {
    dimension: "Multiidioma (3 idiomas)",
    wpElementor: "2",
    astroSanity: "5",
    astroWpHeadless: "3",
  },
  {
    dimension: "Control editorial",
    wpElementor: "4",
    astroSanity: "4",
    astroWpHeadless: "4",
  },
  {
    dimension: "Seguridad",
    wpElementor: "2",
    astroSanity: "5",
    astroWpHeadless: "3",
  },
  {
    dimension: "Costo de mantenimiento",
    wpElementor: "3",
    astroSanity: "4",
    astroWpHeadless: "2",
  },
  {
    dimension: "Escalabilidad",
    wpElementor: "2",
    astroSanity: "5",
    astroWpHeadless: "4",
  },
  {
    dimension: "Experiencia móvil",
    wpElementor: "2",
    astroSanity: "5",
    astroWpHeadless: "4",
  },
  {
    dimension: "Edición visual",
    wpElementor: "5",
    astroSanity: "3",
    astroWpHeadless: "4",
  },
] as const;
