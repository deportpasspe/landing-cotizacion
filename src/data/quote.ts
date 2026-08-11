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
    title: "Propuesta digital: canal directo",
    reference: "COT-DAZ-2026-001",
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
    "Una presencia digital a la altura de la marca: experiencia premium, contenido que el hotel controla y una arquitectura pensada para ser encontrada por Google y por asistentes de IA, y convertir en reserva directa vía TravelClick.",
  summarySupport:
    "Diseño a medida, tres idiomas y CMS Sanity. Front en Astro, con buen rendimiento, HTML limpio y señales técnicas que favorecen SEO y AEO (Answer Engine Optimization).",
  scope: [
    "Experiencia web alineada a la marca: home, habitaciones, promociones, eventos, restaurante y corporativo",
    "Tres idiomas con estructura SEO/AEO por mercado (p. ej. ES / EN / PT)",
    "Blog / noticias como activo de autoridad y descubrimiento",
    "Fundamentos SEO + AEO: metadata, schema, hreflang, sitemap, rendimiento y contenido estructurado para respuestas de IA",
    "Integración TravelClick para tarifas, disponibilidad y reserva en canal directo",
    "CMS headless Sanity: el equipo del hotel publica sin intermediarios",
    "Capacitación editorial (1–2 sesiones) y handoff documentado",
  ],
  stackPitch: {
    title: "Por qué este stack",
    lead: "Recomendamos Astro + Sanity + TravelClick porque encaja con un hotel de marca premium que necesita belleza, control editorial y conversión, no una app compleja.",
    points: [
      {
        name: "Astro (frontend)",
        why: "Genera HTML ligero por defecto y solo carga JavaScript donde hace falta. Eso se traduce en carga más rápida, mejor Core Web Vitals y una base técnica que Google y los motores de respuesta recompensan. Para un sitio hotelero de marketing y reserva, es la elección más limpia hoy.",
      },
      {
        name: "Sanity (CMS headless)",
        why: "El contenido deja de vivir “dentro” del diseño fijo. Habitaciones, promos, eventos y blog se editan con un panel moderno, roles claros y previsualización. El hotel gana autonomía; nosotros nos enfocamos en la experiencia y las integraciones.",
      },
      {
        name: "TravelClick (reservas)",
        why: "El motor que ya gobierna inventario y tarifas sigue siendo la fuente de verdad. La web refuerza la marca y empuja al huésped hacia el canal directo con el contexto correcto (idioma, habitación, promo).",
      },
      {
        name: "SEO + AEO",
        why: "No basta con “aparecer en Google”. Estructuramos la información (schema, headings, FAQs naturales, claridad de ofertas) para que también pueda citarse en resúmenes y asistentes. Tres idiomas con hreflang evitan canibalización y señalan el mercado correcto.",
      },
    ],
  },
  tech: [
    {
      layer: "Frontend",
      value: "Astro",
      note: "Páginas estáticas de alto rendimiento; JS mínimo; ideal para marca + conversión.",
    },
    {
      layer: "CMS",
      value: "Sanity",
      note: "Contenido multiidioma, modelos de habitación/promo/blog y campos SEO editables.",
    },
    {
      layer: "Reservas",
      value: "TravelClick",
      note: "Deep link / widget según la propiedad; tarifas e inventario centralizados.",
    },
    {
      layer: "Descubrimiento",
      value: "SEO + AEO",
      note: "Metadata, schema, hreflang, sitemap y contenido estructurado para buscadores y AA.",
    },
    {
      layer: "Idiomas",
      value: "3 idiomas",
      note: "URLs y copy por mercado; edición desde Sanity.",
    },
  ],
  advantages: [
    "Control editorial del hotel: campañas y tarifas destacadas se publican sin esperar al desarrollador",
    "Rendimiento premium: menos fricción hasta la reserva, mejor percepción de marca",
    "Visibilidad preparada para Google y answer engines (contenido claro, estructurado y multiidioma)",
    "Canal directo potenciado: la marca guía; TravelClick cierra la reserva",
    "Arquitectura durable: el contenido es del cliente; el front puede evolucionar sin rehacer el CMS",
    "Operación con roles: marketing y recepción pueden coexistir sin romper el sitio",
  ],
  clientRole: {
    during: [
      "Validar arquitectura de navegación e idiomas",
      "Aportar textos, fotografía oficial y lineamientos Wyndham/Dazzler",
      "Facilitar configuración TravelClick (códigos, URLs del engine, parámetros de promo)",
      "Validar el recorrido de reserva en staging",
      "Participar en la capacitación de Sanity",
    ],
    daily: [
      "Promociones y destacados de home por idioma",
      "Fichas de habitaciones: copy, amenities y galerías",
      "Blog / noticias y piezas de autoridad",
      "Eventos, banquetes y contenido corporativo",
      "Titles, descriptions y datos estructurados básicos por página",
      "Testimonios, banners y llamados a la acción",
    ],
    travelclick: [
      "Disponibilidad e inventarios",
      "Tarifas base y restricciones",
      "Reglas y políticas del motor de reservas",
    ],
    uxFactory: [
      "Nuevas secciones o rediseños de experiencia",
      "Cambios profundos en la integración TravelClick",
      "Idiomas adicionales a los 3 acordados",
      "Optimizaciones de tracking, performance o landings de campaña",
    ],
  },
  timeline: {
    total: "Aprox. 9–13 semanas",
    phases: [
      {
        name: "Discovery y arquitectura de contenidos",
        duration: "1–1,5 sem.",
        deliverable: "Mapa de sitio, modelo Sanity, flujo TravelClick",
      },
      {
        name: "Diseño UI/UX (desktop + mobile)",
        duration: "2–3 sem.",
        deliverable: "Templates clave aprobados",
      },
      {
        name: "Desarrollo Astro + Sanity + TravelClick",
        duration: "4–6,5 sem.",
        deliverable: "Staging multiidioma con reserva",
      },
      {
        name: "Migración, SEO/AEO y QA",
        duration: "2–3 sem.",
        deliverable: "Contenido ×3 idiomas, schema, hreflang, pruebas",
      },
      {
        name: "Capacitación + go-live",
        duration: "0,5–1 sem.",
        deliverable: "Lanzamiento y handoff",
      },
    ],
  },
  investment: {
    currency: "USD",
    packageRange: "11.000 – 14.000",
    totalLabel: "Total aproximado del proyecto",
    totalNote:
      "Rango orientativo para Perú / LATAM del paquete completo (diseño, Astro + Sanity, 3 idiomas, TravelClick, migración SEO/AEO y capacitación). Se fija al cerrar idiomas e integración. No incluye IGV ni costos de plataforma.",
    note: "Los precios no incluyen IGV. UX Factory emite factura.",
    platformNote:
      "Costos de plataforma (Sanity / hosting) van a cargo del cliente, según el plan contratado.",
    items: [
      {
        concept: "Diseño + desarrollo Astro + Sanity (incluye base multiidioma)",
        range: "8.500 – 11.000",
      },
      {
        concept: "Integración TravelClick",
        range: "1.000 – 1.800",
      },
      {
        concept: "Migración + SEO/AEO técnico (×3 idiomas)",
        range: "1.000 – 1.800",
      },
      {
        concept: "Capacitación + documentación",
        range: "Incluida",
      },
      {
        concept: "Soporte mensual (opcional)",
        range: "150 – 400 / mes",
      },
    ],
  },
  terms: [
    "Forma de pago sugerida: 40% al inicio, 40% al staging y 20% al go-live",
    "Validez de la propuesta: 30 días desde la fecha de emisión",
    "Alcance sujeto a confirmación de idiomas, volumen de migración y modalidad de integración TravelClick",
    "Dependencias del cliente: contenidos/traducciones, accesos TravelClick y aprobaciones en plazos acordados",
  ],
  nextStep:
    "Definir los tres idiomas y validar la modalidad TravelClick de la propiedad para fijar inversión e iniciar discovery.",
} as const;
