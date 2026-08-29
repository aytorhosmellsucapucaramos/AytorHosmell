/**
 * content.ts — Fuente única de verdad para todo el copy del portafolio.
 * Edita este archivo para actualizar textos sin tocar componentes.
 * Para edición sin código, usa /content.json (generado en npm run build:content).
 */

import type { SiteConfig, Project, Experience, SkillCategory } from '../types'

// ─── Configuración del sitio ──────────────────────────────────────────────
export const siteConfig: SiteConfig = {
  name: 'Aytor Hosmell Sucapuca Ramos',
  role: 'Ingeniero de Software · IA & Cloud',
  tagline: 'Construyo soluciones web e inteligentes para instituciones que necesitan transformar procesos manuales en sistemas digitales eficientes.',
  email: 'REEMPLAZAR@email.com',           // TODO: actualizar
  whatsapp: '51XXXXXXXXX',                  // TODO: número con código de país
  whatsappMessage: 'Hola Aytor, vi tu portafolio y me gustaría conversar contigo.',
  linkedin: 'https://linkedin.com/in/REEMPLAZAR', // TODO: actualizar
  github: 'https://github.com/REEMPLAZAR',         // TODO: actualizar
  cvPdfPath: '/CV_Aytor_Sucapuca.pdf',
  formspreeId: import.meta.env.VITE_FORMSPREE_ID ?? '', // TODO: configurar en Vercel
  location: 'Arequipa / Puno, Perú',
  openGraph: {
    title: 'Aytor Sucapuca — Ingeniero de Software | IA & Cloud',
    description:
      'Portafolio de Aytor Hosmell Sucapuca Ramos. Especializado en desarrollo web, integración de IA y soluciones cloud para el sector público y privado.',
    image: '/og-image.png',
    url: 'https://aytor.dev',              // TODO: actualizar con dominio real
  },
}

// ─── Hero Copy ────────────────────────────────────────────────────────────
export const heroCopy = {
  // 3 variantes de titular (short / medium / long)
  headlineShort: 'Software civico, IA util y cloud medible.',
  headlineMedium: 'Digitalizo procesos publicos sin convertirlos en software dificil de usar.',
  headlineLong:
    'Construyo soluciones web y de IA para instituciones que necesitan pasar de procesos manuales a digitales.',
  // Subtítulo (propuesta de valor)
  subtitle:
    'Ingeniero de Software con experiencia en proyectos públicos, chatbots conversacionales y optimización cloud.',
  ctaCV: 'Descargar CV',
  ctaContact: 'Hablemos',
  badge: 'Arequipa / Puno - Peru',
  evidenceLabel: 'Dossier tecnico',
  evidenceItems: ['Registro publico', 'Chatbot IA', 'Cloud & FinOps'],
}

// ─── About Copy ───────────────────────────────────────────────────────────
export const aboutCopy = {
  heading: 'Sobre mí',
  paragraphs: [
    'Soy Aytor Sucapuca, Ingeniero de Software formado en SENATI y con estudios en la Universidad Tecnológica del Perú (UTP). Me especializo en desarrollo web full-stack, integración de inteligencia artificial y soluciones cloud orientadas a resultados reales.',
    'He colaborado con instituciones públicas —como la Municipalidad Provincial de Puno— y empresas privadas, digitalizando procesos que antes dependían de registros físicos o flujos ineficientes. Creo que la tecnología debe resolver problemas concretos.',
    'Mi enfoque combina arquitecturas cloud modernas (GCP, Azure), prácticas de seguridad robustas (WebAuthn, JWT) y automatización de despliegues —todo con atención al detalle de usuario final.',
    'No publico cifras de impacto que no pueda verificar: cualquier porcentaje, cantidad de usuarios o ahorro operativo queda marcado como “No puedo confirmarlo” hasta contar con evidencia.',
  ],
  stats: [
    { label: 'Sector publico', value: 'Puno' },
    { label: 'Formacion', value: 'SENATI / UTP' },
    { label: 'Cloud', value: 'GCP / Azure' },
    { label: 'Metricas', value: 'No puedo confirmarlo' },
  ],
}

// ─── Skills / Tech Stack ─────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
    skills: [
      { name: 'Angular' },
      { name: 'React' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
      { name: 'TypeScript' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
    skills: [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'REST APIs' },
      { name: 'Python' },
    ],
  },
  {
    id: 'database',
    label: 'Base de Datos',
    color: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
    skills: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
    ],
  },
  {
    id: 'ai',
    label: 'IA / ML',
    color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
    skills: [
      { name: 'Azure Bot Service' },
      { name: 'QnA Maker' },
      { name: 'OpenAI API' },
      { name: 'Chatbots conversacionales' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Infra',
    color: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300',
    skills: [
      { name: 'Google Cloud Platform' },
      { name: 'Azure' },
      { name: 'Docker' },
      { name: 'GitHub Actions' },
      { name: 'Vercel' },
      { name: 'FinOps / Cost Optimization' },
    ],
  },
  {
    id: 'security',
    label: 'Seguridad',
    color: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300',
    skills: [
      { name: 'WebAuthn' },
      { name: 'JWT' },
      { name: 'bcrypt' },
      { name: 'Auth por hardware (USB)' },
    ],
  },
]

// ─── Proyectos ─────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'registro-canino',
    title: 'Sistema Digital de Registro Canino',
    organization: 'Municipalidad Provincial de Puno',
    role: 'Diseñador y Desarrollador Principal',
    year: 'No puedo confirmarlo',
    status: 'completed',
    category: ['Sector público', 'Web', 'Backend'],
    featured: true,
    problem:
      'La Municipalidad Provincial de Puno gestionaba el padrón y control de registros caninos de forma manual, lo que generaba inconsistencias en la información, dificultad para rastrear el historial de cada animal y procesos de atención lentos para los ciudadanos.',
    solution:
      'Diseñé y desarrollé un sistema web integral que digitaliza el padrón canino municipal. La plataforma permite registrar mascotas con sus datos de propietario, historial veterinario y estado sanitario, y genera reportes para el personal municipal. La arquitectura prioriza la trazabilidad completa del ciclo de vida de cada registro.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript'],
    responsibilities: [
      'Relevamiento y análisis de requerimientos con personal municipal',
      'Diseño del modelo de datos y esquema de base de datos relacional',
      'Desarrollo del API REST para gestión de registros caninos',
      'Implementación del panel web de administración',
      'Generación de reportes y listados exportables',
      'Pruebas de integración y despliegue del sistema',
    ],
    architecture:
      'Stack web full-stack con arquitectura cliente-servidor. Backend en Node.js + Express exponiendo API REST. Base de datos PostgreSQL para persistencia de registros. Frontend HTML/CSS/JS consumiendo el API. Despliegue en servidor local de la institución.',
    architectureSteps: ['Ciudadano / operador', 'Panel web', 'API REST', 'PostgreSQL', 'Reportes'],
    howDidIt:
      'Partio del flujo municipal existente, modelo los datos del padron, separo la captura operativa de la persistencia y dejo reportes consultables para trazabilidad.',
    metricsNote: 'No puedo confirmarlo',
  },
  {
    id: 'innovventas-chatbot',
    title: 'Chatbot Inteligente InnovVentas',
    organization: 'InnovVentas',
    role: 'Desarrollador de Integración Conversacional',
    year: 'No puedo confirmarlo',
    status: 'completed',
    category: ['IA', 'Chatbot', 'Azure'],
    featured: true,
    problem:
      'InnovVentas necesitaba un canal de atención automatizado que pudiera responder preguntas frecuentes de clientes, gestionar consultas de ventas y derivar casos complejos a agentes humanos.',
    solution:
      'Implementé un chatbot conversacional integrado en la plataforma de InnovVentas usando Azure Bot Service como motor de orquestación y QnA Maker (o equivalente) como base de conocimiento. El flujo incluye detección de intención, respuestas dinámicas y un mecanismo de fallback que escala al agente humano cuando la confianza de la respuesta es baja.',
    stack: ['Azure Bot Service', 'QnA Maker', 'Node.js', 'REST APIs', 'Microsoft Bot Framework'],
    responsibilities: [
      'Diseño del árbol de conversaciones y flujos de diálogo',
      'Configuración y entrenamiento de la base de conocimiento en QnA Maker',
      'Implementación del bot con Azure Bot Service y Microsoft Bot Framework',
      'Desarrollo del mecanismo de fallback y escalamiento a agente humano',
      'Integración del canal de despliegue con la plataforma web',
      'Pruebas de conversación y ajuste de umbrales de confianza',
    ],
    architecture:
      'Azure Bot Service como capa de orquestación. QnA Maker como repositorio de preguntas/respuestas con scoring de confianza. Lógica de fallback implementada en Node.js. Canal web integrado vía Direct Line API. Variables de entorno seguras para claves de Azure.',
    architectureSteps: ['Canal web', 'Azure Bot Service', 'QnA Maker', 'Fallback', 'Agente humano'],
    howDidIt:
      'Definio intents y preguntas frecuentes, conecto la base de conocimiento al bot, calibro respuestas por confianza y agrego fallback para no forzar respuestas cuando el sistema no tenia certeza.',
    metricsNote: 'No puedo confirmarlo',
  },
  {
    id: 'kusay-tech',
    title: 'Desarrollo Web & Soporte de Infraestructura',
    organization: 'Kusay Tech S.A.C.',
    role: 'Practicante Pre-Profesional',
    year: 'No puedo confirmarlo',
    status: 'completed',
    category: ['Web', 'Infraestructura', 'Empresa privada'],
    featured: false,
    problem:
      'Kusay Tech requería apoyo en el desarrollo e implementación de soluciones web para sus clientes, así como mantenimiento y soporte de la infraestructura tecnológica interna de la empresa.',
    solution:
      'Como practicante pre-profesional, participé activamente en el ciclo de desarrollo de soluciones web: desde el análisis de requerimientos hasta el despliegue. Apoyé también en tareas de infraestructura y soporte técnico, consolidando habilidades prácticas en entornos de producción reales.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'Node.js', 'Git'],
    responsibilities: [
      'Desarrollo e implementación de interfaces web para clientes',
      'Soporte técnico en infraestructura y servidores',
      'Participación en reuniones de análisis y entrega de requerimientos',
      'Control de versiones con Git y flujos de trabajo colaborativos',
      'Documentación técnica de componentes desarrollados',
    ],
    architecture:
      'Entorno de desarrollo colaborativo con control de versiones Git. Proyectos web con stack HTML/CSS/JS y Angular según requerimiento del cliente. Infraestructura gestionada con herramientas internas de la empresa.',
    architectureSteps: ['Requerimiento', 'Interfaz web', 'Git', 'Despliegue', 'Soporte'],
    howDidIt:
      'Acompano tareas de desarrollo e infraestructura, documentando componentes y manteniendo control de versiones para que las entregas pudieran revisarse y mantenerse.',
    metricsNote: 'No puedo confirmarlo',
  },
  {
    id: 'seguridad-webauthn',
    title: 'Seguridad y autenticacion avanzada',
    organization: 'No puedo confirmarlo',
    role: 'No puedo confirmarlo',
    year: 'No puedo confirmarlo',
    status: 'completed',
    category: ['Seguridad', 'Autenticacion', 'WebAuthn'],
    featured: false,
    problem:
      'Los sistemas web que manejan informacion sensible necesitan controles de acceso mas robustos que una autenticacion basada solo en contrasenas.',
    solution:
      'Implemente practicas de autenticacion avanzada con WebAuthn, autenticacion por hardware mediante llaves USB, JWT y bcrypt para proteger flujos de acceso y credenciales.',
    stack: ['WebAuthn', 'Llaves USB', 'JWT', 'bcrypt'],
    responsibilities: [
      'Analisis de flujos de autenticacion',
      'Implementacion de autenticacion basada en hardware',
      'Uso de JWT para sesiones o tokens de acceso',
      'Hash seguro de credenciales con bcrypt',
    ],
    architecture:
      'Flujo de acceso con navegador compatible WebAuthn, verificacion de credenciales publicas y manejo de sesion mediante tokens. Las claves privadas permanecen en el autenticador del usuario.',
    architectureSteps: ['Usuario', 'WebAuthn', 'Llave USB', 'Backend', 'Sesion segura'],
    howDidIt:
      'Separando el registro del autenticador, el desafio criptografico y la verificacion del backend para reducir dependencia de contrasenas reutilizables.',
    metricsNote: 'No puedo confirmarlo',
  },
  {
    id: 'gcp-finops',
    title: 'Gestion Cloud & FinOps',
    organization: 'Google Cloud Platform',
    role: 'No puedo confirmarlo',
    year: 'No puedo confirmarlo',
    status: 'completed',
    category: ['Cloud', 'GCP', 'FinOps'],
    featured: false,
    problem:
      'Los despliegues cloud pueden crecer en coste y complejidad si no se revisan recursos, automatizaciones y criterios de gasto desde el inicio.',
    solution:
      'Aplique practicas de gestion cloud y FinOps en Google Cloud Platform para organizar recursos, optimizar costes y automatizar despliegues sin exponer claves ni configuraciones sensibles.',
    stack: ['Google Cloud Platform', 'Docker', 'GitHub Actions', 'Vercel', 'Variables de entorno'],
    responsibilities: [
      'Revision de recursos cloud y configuraciones de despliegue',
      'Separacion de secretos mediante variables de entorno',
      'Automatizacion de build y despliegue',
      'Documentacion de pasos de publicacion y mantenimiento',
    ],
    architecture:
      'Pipeline con control de versiones, build automatizado, variables de entorno para configuracion sensible y despliegue en plataforma cloud. Las decisiones FinOps se documentan para evitar recursos innecesarios.',
    architectureSteps: ['Repositorio', 'CI/CD', 'Build', 'Cloud', 'Revision FinOps'],
    howDidIt:
      'Conectando practicas de automatizacion con revision de costes: cada despliegue debe poder reproducirse, auditar configuracion y evitar secretos en el codigo.',
    metricsNote: 'No puedo confirmarlo',
  },
]

// ─── Experiencia & Educación ──────────────────────────────────────────────
export const timeline: Experience[] = [
  // Experiencia laboral
  {
    id: 'kusay-work',
    type: 'work',
    title: 'Practicante Pre-Profesional — Desarrollo Web',
    organization: 'Kusay Tech S.A.C.',
    period: 'No puedo confirmarlo',
    description:
      'Desarrollo e implementación de soluciones web y soporte en infraestructura tecnológica para clientes del sector privado.',
    highlights: [
      'Desarrollo de interfaces web (Angular, HTML/CSS/JS)',
      'Soporte de infraestructura y servidores',
      'Trabajo en equipo ágil y control de versiones Git',
    ],
    location: 'Perú',
  },
  {
    id: 'puno-work',
    type: 'work',
    title: 'Desarrollador — Sistema de Registro Canino',
    organization: 'Municipalidad Provincial de Puno',
    period: 'No puedo confirmarlo',
    description:
      'Diseño y desarrollo del sistema web para digitalizar el padrón canino municipal, mejorando la trazabilidad de registros y la eficiencia operativa.',
    highlights: [
      'Análisis de requerimientos con personal municipal',
      'Arquitectura y desarrollo full-stack (Node.js, PostgreSQL)',
      'Digitalización del padrón y control de registros caninos',
    ],
    location: 'Puno, Perú',
  },
  {
    id: 'innovventas-work',
    type: 'work',
    title: 'Desarrollador de Integración IA — Chatbot',
    organization: 'InnovVentas',
    period: 'No puedo confirmarlo',
    description:
      'Implementación de chatbot conversacional con Azure Bot Service y QnA Maker para automatizar la atención al cliente.',
    highlights: [
      'Diseño de flujos conversacionales',
      'Integración Azure Bot Service + QnA Maker',
      'Mecanismo de fallback y escalamiento humano',
    ],
    location: 'Perú (remoto)',
  },
  // Educación
  {
    id: 'utp-edu',
    type: 'education',
    title: 'Ingeniería de Software',
    organization: 'Universidad Tecnológica del Perú (UTP)',
    period: 'En curso',
    description:
      'Convalidación y continuación de estudios de Ingeniería de Software. Formación en fundamentos de ingeniería, matemáticas aplicadas y desarrollo de sistemas a escala.',
    highlights: [
      'Convalidación de estudios técnicos',
      'Formación en ingeniería de sistemas',
    ],
    location: 'Perú',
  },
  {
    id: 'senati-edu',
    type: 'education',
    title: 'Profesional Técnico — Ingeniería de Software con Inteligencia Artificial',
    organization: 'SENATI',
    period: 'No puedo confirmarlo',
    description:
      'Formación técnica profesional con énfasis en desarrollo de software, integración de IA y cloud computing. Base práctica de todos los proyectos desarrollados.',
    highlights: [
      'Desarrollo web full-stack',
      'Integración de servicios de IA (Azure, GCP)',
      'Cloud & infraestructura',
      'Seguridad en aplicaciones web',
    ],
    location: 'Arequipa, Perú',
  },
]

// ─── Microcopy UI ─────────────────────────────────────────────────────────
export const uiCopy = {
  // Formulario de contacto
  form: {
    heading: 'Envíame un mensaje',
    namePlaceholder: 'Tu nombre completo',
    emailPlaceholder: 'tu@email.com',
    messagePlaceholder: '¿En qué puedo ayudarte? Cuéntame sobre tu proyecto...',
    nameLabel: 'Nombre',
    emailLabel: 'Email',
    messageLabel: 'Mensaje',
    submit: 'Enviar mensaje',
    submitting: 'Enviando...',
    successTitle: '¡Mensaje enviado!',
    successMessage:
      'Gracias por escribirme. Te responderé a la brevedad, normalmente en menos de 24 horas.',
    errorTitle: 'Error al enviar',
    errorMessage:
      'Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo o escríbeme directamente por email.',
    requiredError: 'Este campo es obligatorio',
    emailError: 'Ingresa un email válido',
  },
  // Navegación
  nav: {
    about: 'Sobre mí',
    skills: 'Tech Stack',
    projects: 'Proyectos',
    experience: 'Experiencia',
    contact: 'Contacto',
  },
  // Sección proyectos
  projects: {
    heading: 'Proyectos Destacados',
    subheading: 'Soluciones reales construidas para problemas reales.',
    problem: 'Problema',
    solution: 'Solución',
    stack: 'Stack',
    responsibilities: 'Responsabilidades',
    architecture: 'Arquitectura',
    viewMore: 'Ver detalles',
    viewLess: 'Cerrar',
  },
  // Footer
  footer: {
    rights: `© ${new Date().getFullYear()} Aytor Hosmell Sucapuca Ramos. Todos los derechos reservados.`,
    sourceCode: 'Código fuente',
    privacy: 'Privacidad',
    madeWith: 'Hecho con React, TypeScript y Tailwind CSS.',
  },
  // Accesibilidad
  a11y: {
    toggleTheme: 'Cambiar tema claro/oscuro',
    openMenu: 'Abrir menú de navegación',
    closeMenu: 'Cerrar menú de navegación',
    downloadCV: 'Descargar CV en PDF (abre nueva pestaña)',
    externalLink: 'Abre en nueva ventana',
  },
}

// ─── Copy final bilingue para publicacion ─────────────────────────────────
export const publicationCopy = {
  es: {
    heroHeadlines: [
      'Software civico, IA util y cloud medible.',
      'Desarrollo web inteligente para instituciones que necesitan ordenar datos, procesos y atencion.',
      'Construyo soluciones web y de IA para instituciones que necesitan pasar de procesos manuales a digitales.',
    ],
    heroSubtitle:
      'Ingeniero de Software con experiencia en proyectos publicos, chatbots conversacionales y optimizacion cloud.',
    about:
      'Soy Aytor Hosmell Sucapuca Ramos, Ingeniero de Software con formacion tecnica en SENATI y estudios en la Universidad Tecnologica del Peru. Mi trabajo se enfoca en desarrollo web, integracion de inteligencia artificial, seguridad aplicada y soluciones cloud para organizaciones publicas y privadas. Me interesa construir sistemas que ordenen informacion, reduzcan friccion operativa y puedan mantenerse con claridad. No publico metricas, porcentajes ni cifras de impacto sin evidencia verificable; cuando un dato no esta confirmado, lo marco como “No puedo confirmarlo”.',
    projectDescriptions: {
      registroCanino:
        'El Sistema Digital de Registro Canino para la Municipalidad Provincial de Puno parte de un problema comun en instituciones publicas: informacion distribuida, registros manuales y baja trazabilidad para consultar el historial de una mascota o su propietario. El objetivo del proyecto fue digitalizar el padron y el control de registros caninos mediante una plataforma web orientada al uso operativo del personal municipal. La solucion propone un flujo cliente-servidor con panel web, API REST y base de datos relacional en PostgreSQL, permitiendo registrar mascotas, asociarlas a propietarios, mantener datos sanitarios y generar consultas o reportes. Mi responsabilidad incluyo el analisis del flujo existente, modelado de datos, desarrollo del backend con Node.js y Express, implementacion del panel administrativo y pruebas de integracion. El valor principal esta en convertir un proceso manual en un sistema consultable y trazable. No puedo confirmarlo respecto a porcentajes de mejora, cantidad de usuarios, horas ahorradas o volumen real de registros procesados.',
      innovVentas:
        'InnovVentas requeria una integracion conversacional capaz de responder preguntas frecuentes, orientar consultas de ventas y derivar casos que no debian resolverse de forma automatica. La propuesta fue construir un chatbot usando Azure Bot Service como capa de orquestacion y QnA Maker, o un servicio equivalente, como base de conocimiento para respuestas estructuradas. El diseno del flujo considero intenciones, preguntas frecuentes, respuestas dinamicas y un mecanismo de fallback para evitar respuestas forzadas cuando la confianza del sistema fuera baja. Mi rol se centro en la integracion conversacional: diseno del arbol de dialogo, configuracion de la base de conocimiento, conexion con canal web y pruebas de conversacion para ajustar el comportamiento. La arquitectura separa la experiencia del usuario, la orquestacion del bot y la base de conocimiento. No puedo confirmarlo respecto a cantidad de conversaciones atendidas, reduccion de carga de soporte, conversiones de venta o tiempos de respuesta.',
      kusayTech:
        'En Kusay Tech S.A.C. participe como Practicante Pre-Profesional apoyando el desarrollo e implementacion de soluciones web y tareas de soporte en infraestructura. La experiencia estuvo orientada a trabajo real de equipo: entender requerimientos, construir interfaces, colaborar con control de versiones y apoyar actividades tecnicas necesarias para mantener servicios o entornos internos. El stack trabajado incluye HTML, CSS, JavaScript, Angular, Node.js y Git, segun el contexto de cada requerimiento. Mi aporte combino ejecucion tecnica y orden: documentar componentes, revisar cambios, mantener trazabilidad en Git y asistir en despliegues o soporte. Esta experiencia consolido una forma de trabajo practica, donde el software debe funcionar para usuarios reales y tambien ser entendible para el equipo que lo mantiene. No puedo confirmarlo respecto a fechas exactas, numero de clientes, metricas de entrega, impacto economico o indicadores operativos.',
    },
    microcopy: {
      ctaCv: 'Descargar CV',
      ctaContact: 'Hablemos por WhatsApp o email',
      namePlaceholder: 'Tu nombre completo',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Cuentame brevemente que necesitas construir o mejorar.',
      success: 'Mensaje enviado. Te respondere a la brevedad.',
      error: 'No se pudo enviar el mensaje. Usa WhatsApp o email directo.',
    },
  },
  en: {
    heroHeadlines: [
      'Civic software, useful AI and measurable cloud.',
      'Intelligent web development for institutions that need cleaner data, processes and service channels.',
      'I build web and AI solutions for institutions moving from manual workflows to digital systems.',
    ],
    heroSubtitle:
      'Software Engineer with experience in public-sector projects, conversational chatbots and cloud optimization.',
    about:
      'I am Aytor Hosmell Sucapuca Ramos, a Software Engineer with technical training at SENATI and ongoing studies at Universidad Tecnologica del Peru. My work focuses on web development, AI integration, applied security and cloud solutions for public and private organizations. I care about systems that organize information, reduce operational friction and remain maintainable. I do not publish impact percentages, usage numbers or business results without verifiable evidence; when a data point is not confirmed, I mark it as “No puedo confirmarlo”.',
    projectDescriptions: {
      registroCanino:
        'The Digital Dog Registration System for the Provincial Municipality of Puno addresses a common public-sector problem: scattered information, manual records and limited traceability when checking a pet or owner history. The goal was to digitize the municipal dog registry through a web platform designed for operational use by municipal staff. The solution follows a client-server flow with a web panel, REST API and PostgreSQL relational database, enabling pet registration, owner association, health-related data management and reports. My responsibilities included understanding the existing workflow, designing the data model, building the Node.js and Express backend, implementing the administrative panel and running integration checks. Its value is the transformation of a manual workflow into a searchable and traceable system. I cannot confirm improvement percentages, user counts, saved hours or the real number of processed records.',
      innovVentas:
        'InnovVentas needed a conversational integration capable of answering frequent questions, supporting sales inquiries and escalating cases that should not be solved automatically. The approach was to build a chatbot using Azure Bot Service as the orchestration layer and QnA Maker, or an equivalent service, as the structured knowledge base. The flow design considered intents, frequently asked questions, dynamic responses and fallback behavior to avoid forced answers when confidence was low. My role focused on conversational integration: dialog tree design, knowledge base configuration, web channel connection and conversation testing to refine behavior. The architecture separates the user experience, bot orchestration and knowledge base. I cannot confirm the number of conversations handled, support workload reduction, sales conversions or response-time improvements.',
      kusayTech:
        'At Kusay Tech S.A.C., I worked as a Pre-Professional Intern supporting web solution development, implementation tasks and infrastructure support. The experience was based on real team workflows: understanding requirements, building interfaces, collaborating through version control and supporting technical tasks needed to maintain services or internal environments. The stack included HTML, CSS, JavaScript, Angular, Node.js and Git, depending on each requirement. My contribution combined execution and order: documenting components, reviewing changes, keeping traceability in Git and assisting with deployments or support. This experience strengthened a practical engineering mindset where software must work for real users and remain understandable for the team maintaining it. I cannot confirm exact dates, number of clients, delivery metrics, economic impact or operational indicators.',
    },
    microcopy: {
      ctaCv: 'Download CV',
      ctaContact: 'Contact via WhatsApp or email',
      namePlaceholder: 'Your full name',
      emailPlaceholder: 'you@email.com',
      messagePlaceholder: 'Briefly describe what you need to build or improve.',
      success: 'Message sent. I will reply as soon as possible.',
      error: 'The message could not be sent. Use WhatsApp or direct email.',
    },
  },
}
