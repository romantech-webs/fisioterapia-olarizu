export const clinic = {
  name: "Fisioterapia \"Olarizu\"",
  logo: "/images/logo.png",
  tagline: "Tu clínica de fisioterapia de confianza en Araba",
  description: "Fisioterapia Olarizu es tu clínica de referencia en Araba, Álava, con 4.6 estrellas y 199 reseñas en Google. Ofrecemos tratamientos de fisioterapia manual, deportiva, punción seca, electroterapia y suelo pélvico con equipamiento moderno y aparatología de última generación. Nuestras profesionales altamente cualificadas te ayudarán a recuperarte desde la primera sesión con un trato cercano y personalizado.",
  colors: {
    primary: "#77584a",
    secondary: "#3a1d12",
    accent: "#3a1d12",
    neutral: "#f4f2f1"
  },
  phone: "607 94 14 28",
  whatsapp: "+34607941428",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "Iturritxu Kalea, 11, 01006 Vitoria-Gasteiz, Araba, España",
    city: "Araba",
    province: "Álava",
    postalCode: "01006",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=16628768368179165435&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Fisioterapia%20%22Olarizu%22%20%4042.8345%2C-2.66256&z=16&output=embed",
  coordinates: {
    lat: 42.8345,
    lng: -2.66256
  },
  schedule: [
    {
      days: "Lunes - Viernes",
      hours: "09:00 - 20:00"
    },
    {
      days: "Sábado",
      hours: "Consultar"
    },
    {
      days: "Domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 4.6,
    count: 199,
    url: "https://maps.google.com/?cid=16628768368179165435&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Anderr Anderr",
        rating: 5,
        text: "Totalmente recomendable, instalación y equipamiento Moderno, además de un trato profesional Excelente.\nGracias, Leire",
        date: "Hace 12 meses"
      },
      {
        author: "Nuria De Bustos Simon",
        rating: 5,
        text: "Excelente.\nEn una sola sesión me han calmado los dolores,..\nEl que sabe … sabe…\nMuy buenas profesionales.\nGracias",
        date: "Hace 1 mes"
      },
      {
        author: "Pablo Niso",
        rating: 5,
        text: "Gran trato y grandes profesionales.sin duda un lugar xa tener muy en cuenta si hay algun problema físico.",
        date: "Hace 5 años"
      },
      {
        author: "Iñaki",
        rating: 4,
        text: "Son buenos profesionales y los precios están bastante ajustados,la verdad.El trato es agradable y cuentan con aparatología de última gama.El horario es amplio y es quizás que por ello hay que pedir cita con cierta antelación.",
        date: "Hace 6 años"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas aplicadas por profesionales expertas que saben exactamente cómo aliviar tu dolor. Tratamiento personalizado para cada paciente según su patología específica. Resultados visibles desde la primera sesión, tal como confirman nuestros pacientes.",
      benefits: [
        "Alivio del dolor desde la primera sesión",
        "Mejora inmediata de la movilidad articular",
        "Tratamiento 100% personalizado a tu lesión"
      ],
      icon: "Hand"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Recuperación y prevención de lesiones deportivas con técnicas avanzadas y aparatología de última generación. Tratamos desde lesiones agudas hasta problemas crónicos que limitan tu rendimiento. Programas específicos para cada deporte y nivel de actividad.",
      benefits: [
        "Recuperación más rápida de lesiones deportivas",
        "Prevención de recaídas y nuevas lesiones",
        "Vuelta segura a tu actividad deportiva"
      ],
      icon: "Dumbbell"
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación",
      description: "Programas de rehabilitación personalizados diseñados para recuperar completamente tu funcionalidad. Combinamos terapia manual con ejercicios terapéuticos y tecnología avanzada. Seguimiento continuo hasta alcanzar tus objetivos de recuperación.",
      benefits: [
        "Recuperación funcional completa",
        "Programa adaptado a tu ritmo y evolución",
        "Seguimiento profesional en cada fase"
      ],
      icon: "Activity"
    },
    {
      id: "puncion-seca",
      name: "Punción Seca",
      description: "Tratamiento específico de puntos gatillo miofasciales para eliminar contracturas y dolor crónico persistente. Técnica altamente efectiva para dolores musculares que no responden a otros tratamientos. Aplicada por fisioterapeutas especializadas y certificadas.",
      benefits: [
        "Eliminación de contracturas rebeldes",
        "Alivio del dolor crónico muscular",
        "Resultados duraderos y efectivos"
      ],
      icon: "Target"
    },
    {
      id: "electroterapia",
      name: "Electroterapia",
      description: "Tecnología de vanguardia con aparatología de última generación para acelerar tu recuperación. Utilizamos corrientes eléctricas terapéuticas adaptadas a cada tipo de lesión. Equipamiento moderno que garantiza tratamientos seguros y efectivos.",
      benefits: [
        "Aceleración del proceso de curación",
        "Reducción de inflamación y dolor",
        "Tecnología de última generación"
      ],
      icon: "Zap"
    },
    {
      id: "suelo-pelvico",
      name: "Suelo Pélvico",
      description: "Tratamiento especializado para disfunciones del suelo pélvico en hombres y mujeres con total privacidad y profesionalidad. Abordamos incontinencia, dolor pélvico, postparto y otras alteraciones. Terapia discreta y efectiva con resultados comprobados.",
      benefits: [
        "Mejora de la calidad de vida",
        "Tratamiento discreto y personalizado",
        "Solución a problemas de incontinencia"
      ],
      icon: "Heart"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con nosotras",
      description: "Llámanos al 607 94 14 28 o escríbenos por WhatsApp. Nuestro horario es amplio para adaptarnos a tu disponibilidad. Te recomendamos pedir cita con cierta antelación para garantizar el mejor hueco."
    },
    {
      step: 2,
      title: "Valoración profesional",
      description: "En tu primera visita realizamos una evaluación exhaustiva de tu estado físico y el origen de tu dolor. Diseñamos un plan de tratamiento personalizado con las técnicas más adecuadas para tu caso específico."
    },
    {
      step: 3,
      title: "Tratamiento especializado",
      description: "Aplicamos terapia manual avanzada combinada con nuestra aparatología de última generación. Cada sesión está enfocada en conseguir resultados desde el primer día, tal como confirman nuestros pacientes."
    },
    {
      step: 4,
      title: "Seguimiento hasta tu recuperación",
      description: "Te acompañamos durante todo el proceso con seguimiento continuo y ajustes en el tratamiento según tu evolución. No paramos hasta que recuperes completamente tu bienestar y movilidad."
    }
  ],
  whyUs: [
    {
      title: "4.6 estrellas con 199 reseñas en Google",
      description: "La confianza de nuestros pacientes es nuestra mejor carta de presentación. Con una valoración de 4.6 sobre 5 y casi 200 reseñas verificadas en Google, nuestros resultados hablan por sí solos. Pacientes reales confirman la efectividad de nuestros tratamientos y la profesionalidad de nuestro equipo.",
      icon: "Star"
    },
    {
      title: "Aparatología de última generación",
      description: "Invertimos continuamente en tecnología de vanguardia para ofrecerte los tratamientos más avanzados y efectivos. Nuestras instalaciones modernas cuentan con equipamiento de última gama que acelera tu recuperación. Combinamos lo mejor de la terapia manual con la innovación tecnológica.",
      icon: "Zap"
    },
    {
      title: "Resultados desde la primera sesión",
      description: "Nuestras pacientes destacan en sus reseñas cómo en una sola sesión consiguen calmar sus dolores. La experiencia y conocimiento de nuestras profesionales permite identificar rápidamente el origen del problema y aplicar el tratamiento más efectivo. Como dicen: 'el que sabe, sabe'.",
      icon: "TrendingUp"
    },
    {
      title: "Profesionales expertas y trato cercano",
      description: "Nuestro equipo combina una alta cualificación profesional con un trato humano y cercano que te hará sentir en confianza desde el primer momento. Formación continua, especialización en diferentes áreas y, sobre todo, verdadera vocación por ayudarte a recuperar tu bienestar.",
      icon: "Users"
    }
  ],
  team: [
    {
      name: "Leire",
      role: "Fisioterapeuta",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Fisioterapia \"Olarizu\" nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/gallery/1.webp",
      alt: "Fisioterapia \"Olarizu\" - Imagen 1"
    }
  ],
  faq: [
    {
      question: "¿Necesito cita previa para acudir a Fisioterapia Olarizu?",
      answer: "Sí, trabajamos con cita previa para garantizarte la mejor atención personalizada. Nuestro horario es amplio y flexible, pero te recomendamos solicitar tu cita con cierta antelación llamando al 607 94 14 28 o por WhatsApp. Así nos aseguramos de tener el tiempo necesario para dedicarte la atención que mereces."
    },
    {
      question: "¿Cuántas sesiones necesitaré para recuperarme?",
      answer: "Cada caso es único y depende del tipo de lesión o dolor que presentes. En Fisioterapia Olarizu realizamos una valoración inicial exhaustiva para determinar el número aproximado de sesiones. Muchos de nuestros pacientes experimentan alivio significativo desde la primera sesión, tal como reflejan nuestras reseñas. Durante el tratamiento ajustamos el plan según tu evolución."
    },
    {
      question: "¿Qué diferencia a Fisioterapia Olarizu de otras clínicas?",
      answer: "Contamos con instalaciones modernas y aparatología de última generación que nos permite ofrecer los tratamientos más avanzados. Nuestras profesionales tienen amplia experiencia y formación especializada. Además, nuestros pacientes destacan la efectividad desde la primera sesión y el trato profesional pero cercano. Con 4.6 estrellas en Google y 199 reseñas, nuestros resultados nos avalan."
    },
    {
      question: "¿Cuáles son los precios de los tratamientos?",
      answer: "En Fisioterapia Olarizu mantenemos precios ajustados y competitivos sin renunciar a la calidad del servicio ni a la tecnología más avanzada. El precio varía según el tipo de tratamiento que necesites. Te recomendamos llamarnos al 607 94 14 28 para informarte sobre las tarifas específicas de tu caso y posibles bonos de sesiones."
    },
    {
      question: "¿Tratáis lesiones deportivas y dolores crónicos?",
      answer: "Sí, en Fisioterapia Olarizu somos especialistas tanto en fisioterapia deportiva como en el tratamiento de dolores crónicos. Utilizamos técnicas como la punción seca para contracturas rebeldes, terapia manual avanzada y aparatología de última generación. Muchos pacientes con problemas físicos persistentes han encontrado solución en nuestra clínica gracias a nuestro enfoque profesional y personalizado."
    },
    {
      question: "¿Ofrecéis tratamiento de suelo pélvico?",
      answer: "Sí, disponemos de tratamiento especializado para disfunciones del suelo pélvico tanto en hombres como en mujeres. Abordamos problemas de incontinencia, dolor pélvico, recuperación postparto y otras alteraciones con total profesionalidad y discreción. Nuestras fisioterapeutas están especialmente formadas en esta área tan delicada."
    },
    {
      question: "¿Dónde está ubicada la clínica en Araba?",
      answer: "Fisioterapia Olarizu está ubicada en Araba, Álava, con fácil acceso y modernas instalaciones. Para conocer nuestra ubicación exacta y cómo llegar, te recomendamos contactarnos por teléfono al 607 94 14 28 o buscarnos en Google Maps donde podrás ver también las 199 reseñas de nuestros pacientes satisfechos."
    },
    {
      question: "¿Puedo ver resultados desde la primera sesión?",
      answer: "Muchos de nuestros pacientes experimentan alivio del dolor y mejora notable desde la primera sesión, tal como confirman las reseñas en Google. En Fisioterapia Olarizu combinamos técnicas manuales expertas con aparatología de última generación para conseguir resultados efectivos desde el inicio. Como dicen nuestros pacientes: 'el que sabe, sabe', y nuestras profesionales saben exactamente cómo ayudarte."
    }
  ],
  seo: {
    titleTemplate: "%s | Fisioterapia Olarizu",
    defaultTitle: "Fisioterapia Olarizu - Clínica en Araba, Álava",
    defaultDescription: "Clínica de fisioterapia en Araba con 4.6★ en Google. Fisioterapia manual, deportiva, punción seca, suelo pélvico. Tecnología avanzada. ☎️ 607 94 14 28",
    keywords: [
      "fisioterapia Araba",
      "fisioterapia Álava",
      "Fisioterapia Olarizu",
      "fisioterapeuta Araba",
      "clínica fisioterapia Álava",
      "punción seca Araba",
      "fisioterapia deportiva Álava",
      "suelo pélvico Araba",
      "rehabilitación Araba",
      "fisioterapia manual Álava",
      "electroterapia Araba",
      "fisio Olarizu"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Fisioterapia \"Olarizu\"",
    cif: "",
    registeredAddress: "Iturritxu Kalea, 11, 01006 Vitoria-Gasteiz, Araba, España, Araba, Álava"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Araba"
  ],
  heroDescription: "En Fisioterapia Olarizu combinamos técnicas manuales especializadas con la tecnología más avanzada para tu recuperación. Con instalaciones modernas, aparatología de última generación y un equipo de profesionales expertas, conseguimos aliviar tu dolor y mejorar tu movilidad desde la primera sesión.",
  specialty: "Fisioterapia Integral Avanzada",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperar tu bienestar y moverte sin dolor?",
  ctaDescription: "Solicita tu cita de valoración en Fisioterapia Olarizu. Te atenderemos con la profesionalidad y cercanía que nos avalan nuestras más de 199 reseñas. Llámanos o escríbenos por WhatsApp.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic
