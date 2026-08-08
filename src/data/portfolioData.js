export const personalInfo = {
  name: "Jaime Ramírez Navarro",
  title: "Desarrollador Web & Software Engineer",
  tagline: "Apasionado por la tecnología, la innovación en software y la creación de soluciones eficientes.",
  about: "Soy un desarrollador activo, curioso, ambicioso y altamente creativo. Me apasiona el mundo de la informática, desde el hardware hasta el desarrollo de software moderno (Full Stack, Backend y Bases de Datos). Me caracteriza mi constante deseo de aprender, superar nuevos retos técnicos y aportar energía, ideas y compromiso en proyectos de alto impacto.",
  location: "Sevilla, España (Disponible para Trabajo Presencial, Remoto o Híbrido)",
  email: "Jaimeramireznavarro16@gmail.com",
  phone: "+34 654 21 13 69",
  github: "https://github.com/JaimeRamirezNavarro",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  status: "🟢 Buscando Oportunidades como Desarrollador Web / Software Engineer",
  stats: [
    { label: "Pasión por la Tech", value: "100%" },
    { label: "Ambición & Crecimiento", value: "Full" },
    { label: "Tecnologías & Tools", value: "15+" },
    { label: "Trabajo en Equipo", value: "100%" }
  ]
};

export const techCategories = [
  { id: "all", name: "Todas las Tecnologías" },
  { id: "backend", name: "Backend & Frameworks" },
  { id: "frontend", name: "Frontend & UI" },
  { id: "database", name: "Bases de Datos" },
  { id: "systems", name: "Sistemas, DevOps & Cripto" }
];

export const skills = [
  // Backend & Frameworks
  { name: "PHP 8.3+ & Laravel 13", category: "backend", level: 92, icon: "Server", color: "#10b981", desc: "Arquitectura MVC, Eloquent ORM, Sanctum Auth, Queues, Middlewares y Livewire 4." },
  { name: "Python 3 & Scripting", category: "backend", level: 90, icon: "Terminal", color: "#38bdf8", desc: "Agentes autónomos de telemetría (psutil), llamadas a kernel, FastAPI y scripts de automatización." },
  { name: "Java (POO & Core)", category: "backend", level: 85, icon: "Code2", color: "#f59e0b", desc: "Programación Orientada a Objetos, estructuras de datos, algoritmos y diseño modular." },
  { name: "WebSockets (Laravel Reverb)", category: "backend", level: 88, icon: "Zap", color: "#34d399", desc: "Canales de comunicación bidireccional en tiempo real sin sobrecarga de memoria." },

  // Frontend & UI
  { name: "Laravel Livewire 4", category: "frontend", level: 90, icon: "Workflow", color: "#6366f1", desc: "Reactividad completa en el servidor sin sobrecarga de JS pesado en cliente." },
  { name: "JavaScript (ES6+)", category: "frontend", level: 90, icon: "FileCode2", color: "#f59e0b", desc: "Manipulación DOM, peticiones asíncronas AJAX/Fetch, eventos y lógica cliente." },
  { name: "HTML5 & CSS3 Vanilla", category: "frontend", level: 95, icon: "Layout", color: "#10b981", desc: "Maquetación semántica, diseño responsivo Mobile First, Flexbox y Grid." },
  { name: "Tailwind CSS v4 & Mary UI / DaisyUI", category: "frontend", level: 92, icon: "Palette", color: "#38bdf8", desc: "Compilación nativa ultra-rápida, dashboards en modo oscuro y componentes reactivos." },

  // Bases de Datos
  { name: "SQLite 3 (Embebido)", category: "database", level: 92, icon: "DatabaseZap", color: "#6366f1", desc: "Optimización con 0% RAM en reposo, unificación de sesiones y colas (Queue Driver)." },
  { name: "MySQL & SQL Relacional", category: "database", level: 88, icon: "Database", color: "#10b981", desc: "Diseño de esquemas E-R, indexación, consultas avanzadas con Joins y transacciones." },

  // Sistemas, DevOps & Cripto
  { name: "Docker & Docker Compose", category: "systems", level: 85, icon: "Box", color: "#38bdf8", desc: "Contenerización de microservicios y apps, volúmenes de datos y redes aisladas en ZimaBlade/Linux." },
  { name: "Administración Linux & Systemd", category: "systems", level: 88, icon: "Cpu", color: "#f59e0b", desc: "Gestión de demonios systemd, monitorización de hardware, supervisión de procesos y bash scripting." },
  { name: "SSH Remoto & Criptografía / 2FA", category: "systems", level: 85, icon: "ShieldCheck", color: "#10b981", desc: "Túneles SSH en vivo con phpseclib 3, autenticación multifactor TOTP con Google2FA y cifrado." },
  { name: "Git & GitHub Actions", category: "systems", level: 90, icon: "GitBranch", color: "#6366f1", desc: "Control de versiones, Conventional Commits, integración continua (CI/CD) y ramas." }
];

export const projectCategories = [
  { id: "all", name: "Todos los Proyectos" },
  { id: "featured", name: "⭐ Destacados & TFG" },
  { id: "fullstack", name: "Full Stack & Web" },
  { id: "recommended", name: "🚀 Recomendados para Empresas" }
];

export const projects = [
  // Real Projects
  {
    id: "uptime-server",
    title: "⚡ Uptime Server - Observabilidad & Telemetría en Tiempo Real (TFG)",
    shortDesc: "Plataforma distribuida de observabilidad de servidores, ingesta de telemetría y administración remota SSH en tiempo real.",
    description: "Trabajo Final de Grado (TFG) en DAW. Plataforma 100% autohospedada para monitorizar servidores (ZimaBlade, Raspberry Pi, VPS). Incluye agente autónomo en Python 3 (psutil), backend monolítico modular en Laravel 13 + PHP 8.3, reactividad en tiempo real con Laravel Reverb (WebSockets) y Livewire 4, terminal SSH integrado (phpseclib), 2FA TOTP (Google2FA), alertas por WhatsApp (CallMeBot) y empaquetado en Docker.",
    category: "featured",
    categoryLabel: "Sistemas & TFG",
    badge: "⭐ TFG Destacado",
    icon: "Activity",
    color: "#10b981",
    tags: ["Laravel 13", "PHP 8.3", "Livewire 4", "WebSockets (Reverb)", "Python 3 (psutil)", "SQLite 3", "SSH (phpseclib)", "2FA TOTP", "Docker"],
    metrics: ["⚡ Latencia < 5ms", "🧠 0 Megabytes RAM en Reposo", "🔒 SSH Inline & 2FA", "📱 Alertas WhatsApp"],
    highlights: [
      "Agente autónomo independiente en Python (monitor.py) que lee métricas del kernel mediante psutil.",
      "Servidor WebSocket nativo Laravel Reverb 1 para actualización en vivo del DOM sin refrescar la página.",
      "Terminal de comandos SSH inline integrado en la propia web mediante phpseclib 3.",
      "Persistencia ultra-optimizada en SQLite 3 integrando base de datos, sesiones y colas (Queue Worker).",
      "Infraestructura contenerizada con Docker y Docker Compose para placas ligeras como ZimaBlade."
    ],
    githubUrl: "https://github.com/JaimeRamirezNavarro/Tfg-Uptime"
  },
  {
    id: "teamhub-app",
    title: "👥 TeamHub - Gestión de Equipos y Proyectos Colaborativos",
    shortDesc: "Plataforma web para coordinar flujos de trabajo en equipos de desarrollo con tableros de control y asignación de tareas.",
    description: "Aplicación de gestión de proyectos diseñada para facilitar la colaboración ágil. Incluye organización de tareas por estados, asignación de responsables, seguimiento de entregables y métricas de avance del equipo.",
    category: "fullstack",
    categoryLabel: "Full Stack Web",
    badge: "Web App",
    icon: "Users",
    color: "#6366f1",
    tags: ["JavaScript", "PHP", "Laravel", "MySQL", "Tailwind CSS", "Git"],
    metrics: ["📋 Tableros Kanban", "👥 Colaboración Multi-usuario", "📊 Reportes de Estado"],
    highlights: [
      "Diseño de interfaz intuitiva orientada a la productividad con filtrado rápido de tareas.",
      "Backend estructurado con control de acceso mediante roles y permisos de usuario.",
      "Base de datos relacional MySQL optimizada con índices para consultas veloces."
    ],
    githubUrl: "https://github.com/JaimeRamirezNavarro/TeamHub"
  },
  {
    id: "zadarma-marketing",
    title: "📞 Marketing & Telefonía VoIP Zadarma",
    shortDesc: "Sistema de integración de la API de telefonía IP Zadarma con métricas de marketing y registro de llamadas.",
    description: "Solución de integración entre la centralita virtual PBX Zadarma y herramientas de gestión comercial. Permite registrar historiales de llamadas, auditar métricas de atención al cliente y automatizar notificaciones de seguimiento.",
    category: "fullstack",
    categoryLabel: "Integración VoIP & API",
    badge: "Integración API",
    icon: "PhoneCall",
    color: "#14b8a6",
    tags: ["PHP", "API Zadarma VoIP", "MySQL", "Webhooks", "JavaScript"],
    metrics: ["📞 Webhook Processing", "📈 Analítica de Llamadas", "⚡ Automatización PBX"],
    highlights: [
      "Consumo de APIs RESTful de Zadarma para extracción de eventos de llamadas entrantes/salientes.",
      "Recepción y procesamiento asíncrono de Webhooks de estado de llamada.",
      "Panel visual de control de volumen de atención telefónica y tiempos de respuesta."
    ],
    githubUrl: "https://github.com/JaimeRamirezNavarro/MarketingZadarma"
  },

  // 6 Recommended High-Impact Projects for Companies
  {
    id: "auto-rental-saas",
    title: "🚗 SaaS de Gestión y Reserva de Vehículos",
    shortDesc: "Sistema web completo de alquiler de coches con calendario de reservas en vivo, prevención de solapamientos y pasarela de pago.",
    description: "Plataforma SaaS para empresas de alquiler de vehículos. Implementa lógica de bloqueo transaccional en MySQL para evitar reservas dobles, cálculo dinámico de tarifas según fechas/temporadas, pasarela de pago Stripe y envío automatizado de confirmaciones en PDF.",
    category: "recommended",
    categoryLabel: "Recomendado para Empresas",
    badge: "🚀 Recomendado Full Stack",
    icon: "ShieldCheck",
    color: "#10b981",
    tags: ["Laravel 13", "PHP 8.3", "Livewire 4", "MySQL", "Stripe API", "Dompdf"],
    metrics: ["🔒 Transacciones SQL Anti-Solapamiento", "💳 Pagos Stripe", "📄 Facturación PDF"],
    highlights: [
      "Lógica de validación avanzada de disponibilidad de flota por rango de fechas.",
      "Integración de pasarela de pago Stripe con gestión de reembolsos y recibos.",
      "Panel de administración para gestión de mantenimiento de vehículos y contratos."
    ],
    githubUrl: "https://github.com"
  },
  {
    id: "price-scraper-bot",
    title: "📊 Monitor de Precios & Scraping Asíncrono de Competidores",
    shortDesc: "Plataforma de extracción masiva de datos e historial de precios con alertas automáticas cuando un producto baja de precio.",
    description: "Herramienta backend desarrollada en Python (FastAPI/Playwright) que rastrea catálogos de e-commerce a intervalos configurados. Almacena el historial de precios en base de datos y despacha alertas por Email/Telegram al detectar ofertas o cambios significativos.",
    category: "recommended",
    categoryLabel: "Recomendado para Empresas",
    badge: "🚀 Recomendado Backend",
    icon: "Bot",
    color: "#38bdf8",
    tags: ["Python 3", "FastAPI", "Playwright", "Redis Queue", "SQLite/MySQL", "Telegram API"],
    metrics: ["🤖 Extracción Asíncrona", "⚡ Alertas Telegram", "📈 Series Temporales de Precios"],
    highlights: [
      "Orquestación de tareas en segundo plano mediante Redis y colas asíncronas.",
      "Estructuración de datos no estructurados en esquemas relacionales limpios.",
      "Sistema de notificaciones push instantáneas ante variaciones del mercado."
    ],
    githubUrl: "https://github.com"
  },
  {
    id: "java-hospital-system",
    title: "🏥 Sistema de Gestión Clínica & Citas Médicas en Java",
    shortDesc: "Aplicación empresarial desarrollada en Java Spring Boot para administración de expedientes médicos y agenda de citas.",
    description: "Sistema robusto de gestión hospitalaria estructurado en Java Spring Boot. Implementa arquitectura limpia por capas (Controller, Service, Repository), seguridad con autenticación JWT, gestión de historial clínico por paciente y roles diferenciados (Médico, Paciente, Recepción).",
    category: "recommended",
    categoryLabel: "Recomendado para Empresas",
    badge: "🚀 Recomendado Java",
    icon: "Code2",
    color: "#f59e0b",
    tags: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "JWT Tokens", "Swagger"],
    metrics: ["☕ Java Enterprise POO", "🔐 Seguridad JWT", "📘 OpenAPI / Swagger"],
    highlights: [
      "Diseño de arquitectura limpia basada en principios SOLID y patrones de diseño en Java.",
      "Documentación completa de la API interactiva generada con Swagger/OpenAPI.",
      "Control estricto de permisos y acceso a historias clínicas sensibles."
    ],
    githubUrl: "https://github.com"
  },
  {
    id: "ecommerce-storefront",
    title: "🛒 Storefront E-Commerce & Panel de Inventario",
    shortDesc: "Tienda online de alto rendimiento con catálogo filtrable por características, carrito persistente y facturación.",
    description: "Plataforma e-commerce centrada en la velocidad y conversión. Cuenta con filtros instantáneos por categorías/marcas/precios, carrito de compra guardado en sesión/localStorage, checkout rápido y panel de control de stock de productos.",
    category: "recommended",
    categoryLabel: "Recomendado para Empresas",
    badge: "🚀 Recomendado E-Commerce",
    icon: "Users",
    color: "#6366f1",
    tags: ["Laravel 13", "PHP", "Tailwind CSS v4", "MySQL", "JavaScript ES6+", "Alpine.js"],
    metrics: ["🚀 Tiempo de Carga < 300ms", "🛒 Carrito Persistente", "📦 Control de Inventario"],
    highlights: [
      "Optimización de consultas SQL para carga instantánea de catálogos con cientos de productos.",
      "Generación automática de albaranes de envío y facturas de venta.",
      "Diseño responsivo Mobile First adaptado a teléfonos y ordenadores."
    ],
    githubUrl: "https://github.com"
  },
  {
    id: "customer-support-chat",
    title: "💬 Central de Atención al Cliente & Chat en Tiempo Real",
    shortDesc: "Plataforma de chat en vivo entre usuarios y agentes de soporte mediante WebSockets y cola de espera.",
    description: "Aplicación de mensajería interactiva pensada para soporte técnico. Permite a los visitantes abrir chats inmediatos, asigna automáticamente las conversaciones a los agentes disponibles según su carga de trabajo y mantiene métricas de tiempo medio de respuesta.",
    category: "recommended",
    categoryLabel: "Recomendado para Empresas",
    badge: "🚀 Recomendado WebSockets",
    icon: "PhoneCall",
    color: "#14b8a6",
    tags: ["Node.js / Express", "WebSockets", "JavaScript ES6+", "MySQL", "Tailwind CSS"],
    metrics: ["💬 WebSockets Bidireccional", "⚡ Asignación en Vivo", "📊 KPIs de Atención"],
    highlights: [
      "Comunicación en tiempo real con latencia imperceptible mediante sockets.",
      "Sistema de estados de agentes (Disponible, En Pausa, Ocupado) y transferencia de chat.",
      "Persistencia de historial de conversaciones para auditoría de calidad."
    ],
    githubUrl: "https://github.com"
  },
  {
    id: "cloud-drive-manager",
    title: "📁 Drive Cloud & Gestor de Archivos Privado",
    shortDesc: "Plataforma privada de almacenamiento en la nube con subida en segundo plano, carpetas compartidas y descargas seguras.",
    description: "Solución autohospedada para la gestión y almacenamiento de documentos corporativos en la nube (estilo Google Drive / Dropbox). Incluye subida de archivos en fragmentos (chunks) para ficheros grandes, generación de enlaces de descarga con clave y temporizador de expiración.",
    category: "recommended",
    categoryLabel: "Recomendado para Empresas",
    badge: "🚀 Recomendado Cloud & DevOps",
    icon: "Activity",
    color: "#8b5cf6",
    tags: ["PHP / Laravel", "AWS S3 / MinIO", "Docker", "JavaScript", "SQLite/MySQL"],
    metrics: ["📁 Subida en Chunks", "🔒 Enlaces Temporales Cifrados", "☁️ Integración S3"],
    highlights: [
      "Gestión de almacenamiento en servicios compatibles con AWS S3 / MinIO local.",
      "Subida asíncrona de archivos pesados sin bloquear la navegación del usuario.",
      "Previsualización integrada de documentos PDF, imágenes y código en el propio navegador."
    ],
    githubUrl: "https://github.com"
  }
];

export const experienceData = [
  {
    year: "02/02/2026 - 26/05/2026",
    role: "Desarrollador Web (Prácticas FCT)",
    company: "Grupo Dekeva (Sevilla)",
    description: "Desarrollo y mantenimiento de aplicaciones web Full Stack, construcción de interfaces dinámicas y responsivas (HTML, CSS, JavaScript), apoyo en desarrollo Backend e integración con bases de datos SQL relacionales, depuración de software (debugging) y trabajo en equipo."
  },
  {
    year: "12/2024 - 03/2025",
    role: "Desarrollador Web (Formación Dual)",
    company: "CodeArtsSolution (Sevilla)",
    description: "Desarrollo de componentes Front-End interactivos (HTML, CSS, JavaScript), apoyo en el diseño de esquemas y consultas SQL relacionales, realización de pruebas funcionales (testing) y depuración de errores. Coordinación en equipo bajo metodología ágil Daily Scrum y Git."
  },
  {
    year: "05/2019 - Presente",
    role: "Monitor de Tiempo Libre & Coordinador",
    company: "GranjaEscuelaCUNA (Sevilla)",
    description: "Liderazgo de grupos, dinamización de actividades lúdicas y formativas, trabajo en equipo, resolución de conflictos, gestión de recursos y supervisión de seguridad."
  },
  {
    year: "05/2025 - 07/2025",
    role: "Cocinero & Operaciones de Parrilla",
    company: "BacanalBurger (Sevilla)",
    description: "Gestión y control de inventario/stock, cumplimiento estricto de normativas de calidad (APPCC), trabajo bajo presión en horas punta y trabajo colaborativo."
  }
];

export const educationData = [
  {
    year: "09/2024 - Presente",
    title: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)",
    institution: "Cesur Formación Cartuja (Sevilla)",
    details: "Nivel EQF 5. Creador de Uptime Server (TFG). Formación en programación Java, desarrollo Web (HTML, CSS, JS), PHP/Laravel, bases de datos SQL, entornos de desarrollo y Git."
  },
  {
    year: "09/2019 - 06/2021",
    title: "Técnico Superior en Educación Infantil",
    institution: "I.E.S Majuelo (Sevilla)",
    details: "Nivel EQF 4. Formación en pedagogía, liderazgo de grupos, comunicación y organización."
  },
  {
    year: "09/2017 - 06/2019",
    title: "Bachillerato de Humanidades y Ciencias Sociales",
    institution: "I.E.S Majuelo (Sevilla)",
    details: "Nivel EQF 4."
  }
];

export const languagesData = [
  { language: "Español", level: "Nativo / Lengua materna" },
  { language: "Inglés", level: "B2 (Comprensión auditiva / Listening) - B1 (Lectura, Conversación y Escritura)" }
];
