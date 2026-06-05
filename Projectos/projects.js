// ============================================================
//  OMNI VIBE — projects.js
//  Agrega o edita tus proyectos aquí.
//  Cada objeto es una tarjeta en la página.
// ============================================================

const PROJECTS = [

  {
    title: "Landing Page — Barbería El Rey",
    description: "Página de venta para barbería local. Incluye formulario de reserva, galería de trabajos y sección de precios. CTR aumentó 40% vs el link de Instagram anterior.",
    type: "landing",                   // landing | automatizacion | sistema | bot
    tags: ["HTML", "CSS", "JS", "WhatsApp API"],
    icon: "✂️",                        // emoji si no tienes imagen
    image: "",                         // URL de screenshot (deja vacío si usas icon)
    demo: "",                          // URL del sitio en vivo (o deja vacío)
    repo: ""                           // URL del repo en GitHub (o deja vacío)
  },

  {
    title: "Bot de Cotizaciones — Empresa de Logística",
    description: "Bot de WhatsApp que recibe solicitudes de cotización, calcula precios automáticamente y responde al cliente en segundos. Ahorra 3 horas diarias al equipo de ventas.",
    type: "bot",
    tags: ["Python", "Twilio", "WhatsApp"],
    icon: "🤖",
    image: "",
    demo: "",
    repo: ""
  },

  {
    title: "Sistema de Gestión — Clínica Dental",
    description: "Dashboard para gestionar citas, pacientes e historial de tratamientos. Reemplazó hojas de Excel caóticas por un sistema centralizado y accesible desde el celular.",
    type: "sistema",
    tags: ["Node.js", "JavaScript", "CSS"],
    icon: "🦷",
    image: "",
    demo: "",
    repo: ""
  },

  {
    title: "Scraper de Precios — Retail",
    description: "Extrae precios de competidores en tiempo real y genera un reporte diario por email. El cliente puede reaccionar a cambios de precios en horas, no en días.",
    type: "bot",
    tags: ["Python", "BeautifulSoup", "Pandas"],
    icon: "📊",
    image: "",
    demo: "",
    repo: ""
  },

  {
    title: "Automatización de Reportes — Agencia de Marketing",
    description: "Genera reportes de métricas de clientes automáticamente cada semana y los envía por email en PDF. Lo que tomaba 4 horas ahora toma 0 minutos.",
    type: "automatizacion",
    tags: ["Python", "Google Sheets API", "Gmail API"],
    icon: "📈",
    image: "",
    demo: "",
    repo: ""
  },

  {
    title: "Landing Page — Academia de Inglés",
    description: "Página de captura para cursos online con formulario de registro, testimonios y video de presentación. Tasa de conversión del 8.3% en el primer mes.",
    type: "landing",
    tags: ["HTML", "CSS", "JS"],
    icon: "🎓",
    image: "",
    demo: "",
    repo: ""
  }

];

// ============================================================
//  CÓMO AGREGAR UN PROYECTO NUEVO:
//
//  1. Copia uno de los bloques de arriba
//  2. Pega al final del array (antes del ];)
//  3. Cambia los datos
//  4. Para la imagen: sube un screenshot a /proyectos/img/
//     y pon la ruta en image: "img/mi-proyecto.png"
//  5. Guarda y haz push al repo
// ============================================================
