export const NAVIGATION = [
  { name: "Sobre Mí", href: "#sobre-mi" },
  //{ name: "Enfoque", href: "#enfoque" },
  { name: "Servicios", href: "#servicios" },
  { name: "Casos de Éxito", href: "#casos-de-exito" },
  //{ name: "Contacto", href: "#contacto" },
];

export const HERO_DATA = {
  title: "Eliza Espinosa",
  subtile: "by Claudia Hernández Espinosa",
  role: "Arquitecta de Soluciones",
  tagline: "Precisión Analítica",
  predescription:"Más de una década transformando ecosistemas digitales complejos en flujos de datos eficientes y estratégicos.",
  description: "Mi enfoque se centra en observar los flujos de datos, entender las dependencias del negocio y diagnosticar el problema real antes de proponer una arquitectura.",
  ctaMain: "Trabajemos juntos",
  ctaSecondary: "Ver Casos de Éxito",
};

export const ABOUT_DATA = {
  title: "El Valor",
  titleHighlight: "de la Observación",
  description: [
    "Mi enfoque como Arquitecta de Soluciones se centra en la precisión analítica: observar los flujos de datos, entender las dependencias del negocio y diagnosticar el problema real antes de proponer una arquitectura.",
    "Desde implementaciones complejas en Salesforce hasta el rescate de proyectos web críticos, mi prioridad es la estabilidad, la seguridad y la escalabilidad.",
  ],
  stats: [
    { label: "Precisión Analítica",
      value: "Diagnóstico exhaustivo antes de la ejecución técnica",
      icon: "target",
      color: "bg-purple-100 text-purple-600"
    },
    { label: "Estabilidad Garantizada",
      value: "Arquitecturas robustas que resisten el paso del tiempo",
      icon: "shield",
      color: "bg-blue-100 text-blue-600"
    },
    { label: "Escalabilidad Real",
      value: "Soluciones que crecen con tu negocio",
      icon: "trendingUp",
      color: "bg-pink-100 text-pink-600"
    },
  ],
};

import { Layout, Database, ShieldAlert, LucideFlashlight, Zap } from "lucide-react";

export const SERVICES_DATA = [
  {
    title: "Arquitectura Web de Alto Rendimiento",
    description: "Diseño y desarrollo de plataformas escalables utilizando Next.js y arquitecturas híbridas. Enfoque en Core Web Vitals, SEO técnico y seguridad absoluta.",
    icon: Layout,
  },
  {
    title: "Ecosistemas CRM & Flujos de Datos",
    description: "Especialista en la integración y optimización de Salesforce, Fonteva y manejo de datos. Conecto la operación del negocio con sus flujos de información sin fricciones ni pérdidas de datos.",
    icon: Database,
  },
  {
    title: "Rescate Técnico & Auditoría",
    description: "Diagnóstico y recuperación de proyectos en estado crítico. Auditoría de código, optimización de deuda técnica y estabilización de plataformas.",
    icon: ShieldAlert,
  },
  {
    title: "Presencia Digital Ágil",
    description: "Desarrollo de landing pages y sitios corporativos con diseño modular, optimizados para conversión, accesibilidad y máxima velocidad de carga.",
    icon: Zap,
  }
];

export const PROJECTS_DATA = [
  {
    priority: 2,
    title: "Papalote Museo del Niño Mty",
    client: "Papalote Museo del Niño Mty",
    category: "Educación & Cultura",
    image: "https://nxcgnisajkspmrjdesys.supabase.co/storage/v1/object/public/src/papalote-mty-06.png",
    roles: "Colaboración con Agencia",
    summary: "Implementación y personalización del CMS MODX para la gestión de contenido educativo interactivo y migración crítica de infraestructura.",
    tags: ["MODX CMS", "Migración"],
    challenge: "Migración de un CMS de nicho (MODX) con documentación escasa, garantizando cero pérdida de datos en una cartelera activa de alto tráfico.",
    strategy: "Auditoría forense del sistema original, desarrollo de protocolos de backup personalizados y optimización de arquitectura multimedia pre-migración.",
    results: [
      "100% Integridad de datos.",
      "Cero tiempo de inactividad.",
      "Gestión autónoma del equipo."
    ]
  },
  {
    priority: 4,
    title: "Farmacia Proderma",
    client: "Farmacia Proderma",
    category: "Salud & BioTech",
    image: "https://nxcgnisajkspmrjdesys.supabase.co/storage/v1/object/public/src/proderma-01.png",
    roles: "Colaboración con Agencia | Desarrollo y Soporte Técnico Continuo",
    summary: "Desarrollo web de alta fidelidad con enfoque en experiencia de usuario y mantenimiento técnico continuo.",
    tags: ["E-commerce", "Wordpress/Woocommerce", "UI/UX design", "Frontend", "Soporte Técnico"],
    challenge: "Rediseño total (2020) y gestión de fixes constantes para una plataforma de dermatología y venta en línea.",
    strategy: "Desarrollo robusto (sobre diseño de agencia aliada) priorizando la limpieza de código.",
    results: [
      "Sitio web de alta conversión para e-commerce.",
      "Plataforma de alta disponibilidad para comercio electrónico.",
      "Despliegue continuo de mejoras y mantenimiento preventivo sin interrupción operativa."
      ]
  },
  {
    priority: 1,
    title: "Institución Educativa de Alto Nivel",
    client: "Institución Educativa de Alto Nivel",
    category: "Educación & Cultura",
    image: "https://nxcgnisajkspmrjdesys.supabase.co/storage/v1/object/public/src/ian-02.png",
    roles: "Gestión de datos a nivel nacional e internacional",
    summary: "Conexión de interfaces web de alto rendimiento con motores de datos complejos para la gestión de ventas y registros.",
    tags: ["Salesforce", "Web Development", "Fonteva", "Custom Solutions", "Data Analytics"],
    challenge: "Crear una experiencia digital que complemente la visita física optimizando la gestión y análisis de datos para eventos masivos con flujos de información.",
    strategy: "Diseño de interfaz intuitiva y arquitectura de contenido. Implementación de arquitectura basada en Salesforce/Fonteva y procesamiento de datos.",
    results: [
      "Digitalización total del proceso de venta.",
      "Centralización de datos y dashboards analíticos en tiempo real.",
      "Automatización de procesos."
      ]
  },
  {
    priority: 3,
    title: "Memorygotshi (Caja Mágica)",
    client: "Memorygotshi (Caja Mágica)",
    category: "E-COMMERCE & RETAIL",
    image: "https://nxcgnisajkspmrjdesys.supabase.co/storage/v1/object/public/src/caja-magica-03.png",
    roles: "Digitalización operativa, trazabilidad de producción y gestión de clientes",
    summary: "Transformación de procesos análogos a un sistema digital escalable en la nube.",
    tags: ["Product Design", "Digitalization", "Data Architecture", "TRAZABILIDAD"],
    challenge: "Migrar procesos físicos (papel) a bases de datos y desarrollar un sistema seguro de legado digital.",
    strategy: "Migración a agenda colaborativa con recordatorios, sistema de control de entregables (Pipeline) y centralización de clientes para análisis de datos y campañas.",
    results: [
      "Procesos 100% digitales y escalables en la nube.",
      "Implementación de base de datos centralizada para clientes y citas.",
      "Trazabilidad total del ciclo de producción y estatus de entrega por cliente."
      ]
  },
  {
    priority: 5,
    title: "Más Gasolineras & Energéticos San Roberto",
    category: "Energía & Utilities",
    image: "https://nxcgnisajkspmrjdesys.supabase.co/storage/v1/object/public/src/mas-gas-02.png",
    roles: "Plataformas Informativas e Interactivas",
    summary: "Desarrollo de portales web orientados al servicio al cliente, conectando la infraestructura física con soluciones de facturación digital.",
    tags: ["Diseño", "Desarrolo web", "Geolocalización"],
    challenge: "Crear canales digitales para estaciones de servicio con necesidades de facturación y mapas interactivos.",
    strategy: "Implementación de mapas de ubicación, integración de enlaces de facturación y diseño de interfaces informativas claras.",
    results: [
      "Mejora en la experiencia de usuario post-carga.",
      "Facilidad de acceso a información crítica de estaciones."
    ]
  },
  {
    priority: 6,
    title: "Grupo Petrum & Tent",
    category: "Energía & Utilities",
    image: "https://nxcgnisajkspmrjdesys.supabase.co/storage/v1/object/public/src/petrum-02.webp",
    roles: "Gestión de Identidad y Presencia Digital",
    summary: "Estrategia de comunicación integral, administración técnica, diseño web y coherencia digital para dos marcas independientes de un mismo grupo empresarial.",
    tags: ["Gestión Multimarca", "Marketing Digital", "Administración CMS", "Diseño Web (UI)", "Geolocalización"],
    challenge: "Administrar el presupuesto de marketing y la estructura web de la tienda de conveniencia Tent y estaciones Petrum.",
    strategy: "Mantenimiento y actualización continua de los sitios web independientes (CMS), diseño de interfaz visual (UI), integración de mapas para ubicación de sucursales y soporte gráfico/digital para ambas marcas.",
    results: [
      "Consolidación de marca en redes.",
      "Sitios web funcionales y actualizados con información clara de servicios y sucursales.",
      "Mantenimiento técnico continuo y soporte visual centralizado para dos líneas de negocio."
    ]
  },
];

export const INDUSTRIES_DATA = [
  "Energía & Utilities",
  "Salud & BioTech",
  "Educación & Cultura",
  "E-commerce & Retail"
];

export const CONTACT_DATA = {
  title: "¿Tienes un reto técnico?",
  subtitle: "Si tu proyecto requiere un enfoque analítico, diagnóstico profundo y arquitectura sólida, conversemos.",
  email: "hola@elizaespinosa.com", // Puedes cambiarlo después
  linkedin: "https://www.linkedin.com/in/claudia-ehe",
};

export const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "https://linkedin.com/in/elizaespinosa", icon: "Linkedin" },
  { name: "GitHub", href: "https://github.com/tu-usuario", icon: "Github" },
  { name: "Email", href: "mailto:thola@elizaespinosa.com", icon: "Mail" },
];

export const EVOLUTION_DATA = [
  {
    phase: "Fase Creativa",
    role: "Diseño & UI",
    period: "Inicios",
    description: "Comprensión profunda de la jerarquía visual, identidad de marca y la psicología del usuario. La base de la estética.",
    icon: "Palette",
  },
  {
    phase: "Fase Estratégica",
    role: "Marketing & Growth",
    period: "Evolución",
    description: "Análisis del comportamiento del usuario, optimización de conversión y toma de decisiones estratégicas basadas en datos.",
    icon: "TrendingUp",
  },
  {
    phase: "Fase Arquitectónica",
    role: "Dev & CRM Architect",
    period: "Actualidad",
    description: "Consolidación en Salesforce, Fonteva, Next.js y WordPress. Construcción de ecosistemas robustos alineados al negocio.",
    icon: "Code2",
  }
];

export const HUMAN_DATA = [
  {
    title: "Fotografía",
    description: "Ejercicio de observación, detalle y composición. La misma metodología de diagnóstico que aplico a sistemas complejos.",
  },
  {
    title: "Meditación",
    description: "Herramienta de alto rendimiento para mantener claridad y enfoque en migraciones críticas.",
  }
];

export const ENFOQUE_DATA = {
  title: "El Enfoque",
  titleHighlight: " Multindustria",
  description: [
    "Mi trayectoria de más de 10 años no se define por un solo sector, sino por la capacidad de aplicar <b>precisión analítica en entornos de alta complejidad</b>.",
    "He demostrado una <b>calta adaptabilidad técnica ante sistemas de nicho y plataformas heredadas (legacy)</b> —como la migración en MODX para el Papalote Museo del Niño— así como en la digitalización de flujos operativos complejos.",
    "<span>Esta versatilidad me permite abordar proyectos en cualquier industria, diseñando soluciones que se adaptan a reglas de negocio únicas.</span>",
  ],
  stats: [
    { label: "Diagnóstico exhaustivo antes de la ejecución técnica", value: "Precisión Analítica" },
    { label: "Arquitecturas robustas que resisten el paso del tiempo", value: "Estabilidad Garantizada" },
    { label: "Soluciones que crecen con tu negocio", value: "Escalabilidad Real" },
  ],
};