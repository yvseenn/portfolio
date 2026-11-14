import type { Content } from './types';

export const es: Content = {
  lang: 'es',
  meta: {
    title: 'Yaseen Al Koja — Administrador de IT',
    description:
      'Administrador de IT en Think Ahead Education. Zoho One, Google Workspace y Jamf; automatización y desarrollo de herramientas internas.',
  },
  nav: {
    work: 'Qué hago',
    experience: 'Experiencia',
    contact: 'Contacto',
    switchLabel: 'EN',
    switchTo: 'Read in English',
    theme: 'Cambiar entre tema claro y oscuro',
    skip: 'Saltar al contenido',
  },
  hero: {
    role: 'Administrador de IT · Think Ahead Education',
    title: 'Hago que la tecnología de un grupo educativo funcione como un solo sistema.',
    lead: 'Llevo toda la tecnología de un grupo con varias marcas. Mi trabajo es que deje de ser un conjunto de herramientas sueltas.',
    brands: [
      'Think Ahead Academy',
      'Virtus College',
      'Think Ahead Online',
      'Asesoría universitaria',
      'Centro de exámenes',
    ],
    cta: 'Escríbeme',
    diagram: {
      center: ['un solo', 'sistema'],
      nodes: ['CRM y procesos', 'Identidad', 'Dispositivos', 'Desarrollo interno', 'Seguridad', 'IA'],
      label:
        'Diagrama: CRM y procesos, identidad, dispositivos, desarrollo interno, seguridad e IA conectados a un solo sistema.',
    },
  },
  stats: [
    { value: '17+', label: 'dominios en Google Workspace' },
    { value: '150+', label: 'usuarios, más los iPads de alumnado y profesorado' },
    { value: '3 → 1', label: 'Monday, Zapier y Adobe Sign, migrando a Zoho One' },
  ],
  work: {
    heading: 'Qué hago',
    intro: 'Cinco frentes que llevo a la vez, porque en la práctica son el mismo.',
    builtLabel: 'Construido',
    areas: [
      {
        title: 'CRM y procesos',
        text: 'Lidero la migración de Monday, Zapier y Adobe Sign a Zoho One. Diseño el modelo de datos, los procesos comerciales y las automatizaciones entre CRM, facturación y gestión académica.',
        tags: ['Zoho One', 'Modelo de datos', 'Automatización'],
      },
      {
        title: 'Identidad y dispositivos',
        text: 'Administro Google Workspace con más de 17 dominios, Jamf School y Apple School Manager: más de 150 usuarios y los iPads de alumnado y profesorado.',
        tags: ['Google Workspace', 'Jamf School', 'Apple School Manager'],
      },
      {
        title: 'Desarrollo interno',
        text: 'Construyo las herramientas que no compensa comprar.',
        built: [
          'App de control horario',
          'Generador de remesas SEPA',
          'Cuadros de mando para dirección',
          'Las webs del grupo',
        ],
        tags: [],
      },
      {
        title: 'Infraestructura y seguridad',
        text: 'DNS en Cloudflare, autenticación de correo, SSO, VPN y auditorías de seguridad web.',
        tags: ['Cloudflare', 'SPF · DKIM · DMARC', 'SSO', 'VPN'],
      },
      {
        title: 'IA aplicada',
        text: 'Despliego y gobierno Claude en la organización, y creo agentes y automatizaciones para los equipos.',
        tags: ['Claude', 'Agentes', 'Automatización'],
      },
    ],
    quote:
      'Trabajo directamente con dirección, ventas, marketing y administración, y traduzco lo que necesita cada área en sistemas que se usan de verdad.',
  },
  experience: {
    heading: 'Experiencia',
    jobs: [
      {
        role: 'Administrador de IT',
        where: 'Think Ahead Education',
        date: 'Actualidad',
        text: 'Responsable de la tecnología del grupo: CRM y procesos, identidad y dispositivos, desarrollo interno, infraestructura, seguridad e IA.',
      },
      {
        role: 'Desarrollador web freelance',
        where: 'Autónomo',
        date: 'Desde 2023',
        text: 'Webs para particulares y pequeños negocios.',
      },
      {
        role: 'Técnico de IT en prácticas',
        where: 'Escuela Ideo',
        date: 'Abr. – jun. 2021',
        text: 'Soporte de hardware y software, instalación de sistemas operativos e inventario.',
      },
      {
        role: 'Encargado',
        where: "Papa John's",
        date: 'Nov. 2018 – ene. 2021',
        text: 'Inventario, control de presupuesto y turnos del equipo.',
      },
    ],
    educationHeading: 'Formación',
    education: [
      { name: 'Bootcamp Full Stack Developer', where: 'Upgrade Hub', date: '2023' },
      {
        name: 'Sistemas Microinformáticos y Redes',
        where: 'IES Clara del Rey, Madrid',
        date: '2018 – 2020',
      },
    ],
    languagesHeading: 'Idiomas',
    languages: 'Español, inglés y árabe, los tres nativos.',
    background: 'Estudié en Amán, Karlskrona y Madrid.',
  },
  earlier: {
    heading: 'Antes de esto',
    intro: 'Proyectos de mi etapa de formación como desarrollador.',
    source: 'Código',
    projects: [
      { title: 'PokeDex', url: 'https://github.com/yvseenn/PokeDex' },
      { title: 'Rick and Morty API', url: 'https://github.com/yvseenn/rickAndMortyApi' },
      { title: 'Flex Shop', url: 'https://github.com/yvseenn/mitiendaflex' },
    ],
  },
  contact: {
    heading: '¿Hablamos?',
    text: 'Si quieres hablar de sistemas, automatización o de un proyecto concreto, escríbeme.',
  },
};
