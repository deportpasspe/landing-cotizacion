export const quote = {
  issuer: {
    name: "UX Factory",
    ruc: "20615046923",
    contacts: [
      {
        name: "Martín Ramírez",
        whatsapp: "+54 9 11 6594-0247",
        whatsappHref: "https://wa.me/5491165940247",
      },
      {
        name: "Efraín Briceño",
        whatsapp: "+51 971 679 504",
        whatsappHref: "https://wa.me/51971679504",
      },
    ],
  },
  meta: {
    title: "Propuesta digital: canal directo + SEO/AEO",
    reference: "COT-DAZ-2026-001",
    relatedReference: "Referencia cliente: DAZ004 (01-09-2023)",
    issuedAt: "11 de agosto de 2026",
    validDays: 30,
    language: "es",
  },
  client: {
    name: "Dazzler by Wyndham Lima Miraflores",
    site: "https://dazzlermiraflores.com/",
    siteLabel: "dazzlermiraflores.com",
  },
  summary:
    "Rediseño y desarrollo del sitio Dazzler Miraflores con diseño UX/UI profesional y foco en SEO/AEO: más usable, más visible en Google y en asistentes de IA, administrable por el hotel y conectado a TravelClick.",
  summarySupport:
    "Incluye servicio de diseño UX/UI (flujos, UI responsive y alineación a brand book), desarrollo en Astro + Sanity, SEO/AEO técnico y reserva directa. Inversión del paquete: S/. 7.250 (sin IGV).",
  priorWork: {
    title: "Referencia del trabajo anterior (DAZ004)",
    points: [
      "Diseño y desarrollo web con look & feel de cadena / brand book",
      "Sitio administrable, multiidioma, blog, promociones, habitaciones y reserva externa",
      "GTM, Analytics, Pixel, WhatsApp, formulario y libro de reclamaciones",
      "SEO de plugins (preparación básica); estrategia SEO no incluida en ese presupuesto",
      "Presupuesto histórico de referencia: S/. 3.240 (Miraflores + San Isidro, WordPress)",
    ],
  },
  scope: [
    "Diseño UX/UI: arquitectura de información, wireframes clave, UI desktop/mobile y validación con brand book Dazzler / Wyndham",
    "Desarrollo del sitio Miraflores en Astro + CMS Sanity (reemplazo moderno de WordPress)",
    "Sitemap hotelero: Inicio, El Hotel, Habitaciones, Restaurante, Ubicación, Promociones, Blog, Libro de reclamaciones",
    "Reserva vía TravelClick (enlace / integración según la propiedad)",
    "SEO + AEO como eje del proyecto: titles/descriptions, schema Hotel/Room/FAQ, hreflang, sitemap.xml, HTML semántico y contenido preparado para answer engines",
    "Migración de contenidos actuales y redirecciones 301 si cambian URLs",
    "GTM, Analytics y Pixel (con códigos del cliente), modal, contacto y botón WhatsApp",
    "Multiidioma (hasta 3 idiomas) administrable desde Sanity",
    "Capacitación editorial breve y handoff",
  ],
  sitemap: [
    "Inicio (banner, accesos, servicios, promociones)",
    "El Hotel (información, amenities, listado de servicios)",
    "Habitaciones (fichas + CTA de reserva TravelClick)",
    "Restaurante (descripción, horarios, galería)",
    "Ubicación (mapa, puntos de interés, contacto)",
    "Promociones",
    "Blog",
    "Libro de reclamaciones",
  ],
  stackPitch: {
    title: "Por qué este enfoque",
    lead: "Sumamos diseño UX/UI dedicado, un stack moderno y SEO/AEO real. El salto frente a DAZ004 no es solo tecnológico: es usabilidad, conversión y visibilidad.",
    points: [
      {
        name: "Diseño UX/UI",
        why: "Definimos flujos, jerarquía visual y pantallas responsive antes de construir. Menos improvisación en desarrollo y una experiencia más clara hacia la reserva.",
      },
      {
        name: "SEO + AEO (prioridad)",
        why: "En DAZ004 el sitio se entregó con plugins, pero sin estrategia SEO. Aquí SEO/AEO va en el núcleo: metadata, schema, headings, FAQs naturales, hreflang y contenido que Google y asistentes puedan citar.",
      },
      {
        name: "Astro + Sanity",
        why: "HTML ligero, mejor performance que WordPress cargado de plugins, y un CMS limpio para que el hotel edite habitaciones, promos, blog e idiomas.",
      },
      {
        name: "TravelClick",
        why: "La web vende marca y demanda; el motor cierra disponibilidad y tarifa en canal directo.",
      },
    ],
  },
  tech: [
    {
      layer: "Diseño",
      value: "UX/UI",
      note: "Flujos, UI desktop/mobile y entrega para implementación.",
    },
    {
      layer: "Frontend",
      value: "Astro",
      note: "Sitio rápido, HTML limpio, base sólida para SEO/AEO.",
    },
    {
      layer: "CMS",
      value: "Sanity",
      note: "Contenido, idiomas y campos SEO administrables por el hotel.",
    },
    {
      layer: "Reservas",
      value: "TravelClick",
      note: "Reserva directa con el motor de la propiedad.",
    },
    {
      layer: "Descubrimiento",
      value: "SEO + AEO",
      note: "Schema, hreflang, sitemap, metadata y contenido estructurado.",
    },
  ],
  advantages: [
    "Diseño UX/UI incluido como servicio: no solo “maquetar”, sino decidir la experiencia",
    "SEO/AEO incluido de verdad: estructura y señal técnica para buscar y ser respondido",
    "Paquete cerrado en S/. 7.250, con diseño UX/UI y SEO/AEO incluidos",
    "El hotel edita promos, habitaciones y blog sin depender del desarrollador para lo cotidiano",
    "Mejor performance móvil y camino más corto a la reserva",
    "Redirecciones 301 y cuidado de autoridad al migrar URLs",
  ],
  clientRole: {
    during: [
      "Aprobar look & feel según brand book / dirección de marketing",
      "Entregar textos, imágenes oficiales y números de WhatsApp",
      "Proveer códigos GTM, Analytics y Pixel",
      "Facilitar accesos TravelClick y validar el flujo de reserva",
      "Confirmar idiomas y revisar contenidos antes del go-live",
    ],
    daily: [
      "Actualizar promociones y destacados",
      "Editar habitaciones, restaurante y páginas del hotel",
      "Publicar en blog",
      "Ajustar titles/descriptions SEO por página",
      "Mantener datos de contacto y WhatsApp",
    ],
    travelclick: [
      "Disponibilidad e inventarios",
      "Tarifas y restricciones",
      "Reglas del motor de reservas",
    ],
    uxFactory: [
      "Nuevas plantillas o rediseños mayores",
      "Cambios profundos de integración TravelClick",
      "Idiomas adicionales fuera del alcance acordado",
      "Campañas SEO de contenidos continuas (opcional, post go-live)",
    ],
  },
  timeline: {
    total: "Aprox. 40–48 días hábiles",
    phases: [
      {
        name: "Kick off y arquitectura (sitemap + SEO/AEO)",
        duration: "5–7 días",
        deliverable: "Alcance cerrado, mapa de sitio y modelo de contenidos",
      },
      {
        name: "Diseño UX/UI responsive",
        duration: "8–12 días",
        deliverable: "Wireframes clave + UI desktop/mobile aprobada",
      },
      {
        name: "Maquetación y desarrollo Astro + Sanity + TravelClick",
        duration: "16–20 días",
        deliverable: "Staging funcional",
      },
      {
        name: "Carga de contenido, SEO/AEO, 301 y medición",
        duration: "5–7 días",
        deliverable: "Contenido migrado, schema, hreflang, GTM/GA/Pixel",
      },
      {
        name: "QA, capacitación y go-live",
        duration: "2–3 días",
        deliverable: "Sitio en producción y handoff",
      },
    ],
  },
  investment: {
    currency: "PEN",
    currencyLabel: "S/.",
    packageRange: "7.250",
    totalLabel: "Total del proyecto",
    totalNote:
      "Inversión del paquete: S/. 7.250 (sin IGV). Incluye diseño UX/UI, desarrollo Astro + Sanity, TravelClick, multiidioma base, SEO/AEO técnico, medición y capacitación. No incluye hosting, dominio ni producciones fotográficas.",
    note: "Los precios no incluyen IGV. UX Factory emite factura.",
    platformNote:
      "Hosting, dominio y plan Sanity quedan a cargo del cliente. Textos, fotos oficiales y códigos de medición los provee el hotel.",
    items: [
      {
        concept: "Diseño UX/UI (flujos, UI desktop/mobile, brand book)",
        range: "2.450",
      },
      {
        concept: "Desarrollo Astro + Sanity + carga de contenido",
        range: "3.300",
      },
      {
        concept: "SEO + AEO técnico (schema, metadata, hreflang, 301, sitemap)",
        range: "1.050",
      },
      {
        concept: "Integración TravelClick + medición (GTM/GA/Pixel)",
        range: "450",
      },
      {
        concept: "Capacitación + documentación",
        range: "Incluida",
      },
    ],
    optionalSupport: {
      concept: "Soporte mensual post go-live (opcional)",
      range: "350 – 500 / mes",
    },
  },
  terms: [
    "Forma de pago sugerida: 50% al inicio y 50% al go-live, o 40% / 40% / 20% con hito de staging tras aprobación de UX/UI",
    "Validez de la propuesta: 30 días desde la fecha de emisión",
    "Total del paquete: S/. 7.250. Los precios no incluyen IGV",
    "No incluye hosting, dominio ni producciones / compra de imágenes",
    "Cambios de alcance en etapa de desarrollo pueden generar horas adicionales",
    "Dependencias del cliente: textos, imágenes, WhatsApp, códigos de medición, accesos TravelClick y aprobaciones en plazo",
  ],
  nextStep:
    "Confirmar idiomas y páginas prioritarias para SEO/AEO, aceptar el paquete de S/. 7.250 e iniciar kick off de diseño UX/UI.",
} as const;
