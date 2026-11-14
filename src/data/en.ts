import type { Content } from './types';

export const en: Content = {
  lang: 'en',
  meta: {
    title: 'Yaseen Al Koja — IT Administrator',
    description:
      'IT Administrator at Think Ahead Education. Zoho One, Google Workspace and Jamf; automation and internal tool development.',
  },
  nav: {
    work: 'What I do',
    experience: 'Experience',
    contact: 'Contact',
    switchLabel: 'ES',
    switchTo: 'Leer en español',
    theme: 'Switch between light and dark theme',
    skip: 'Skip to content',
  },
  hero: {
    role: 'IT Administrator · Think Ahead Education',
    title: "I make an education group's technology work as one system.",
    lead: 'I run all the technology for a group with several brands. My job is to stop it being a collection of separate tools.',
    brands: [
      'Think Ahead Academy',
      'Virtus College',
      'Think Ahead Online',
      'University counselling',
      'Exam centre',
    ],
    cta: 'Email me',
    diagram: {
      center: ['one', 'system'],
      nodes: ['CRM & processes', 'Identity', 'Devices', 'Internal tools', 'Security', 'AI'],
      label:
        'Diagram: CRM and processes, identity, devices, internal tools, security and AI connected to one system.',
    },
  },
  stats: [
    { value: '17+', label: 'domains in Google Workspace' },
    { value: '150+', label: 'users, plus student and teacher iPads' },
    { value: '3 → 1', label: 'Monday, Zapier and Adobe Sign, moving to Zoho One' },
  ],
  work: {
    heading: 'What I do',
    intro: 'Five areas I run at once, because in practice they are the same one.',
    builtLabel: 'Built',
    areas: [
      {
        title: 'CRM and processes',
        text: 'I lead the migration from Monday, Zapier and Adobe Sign to Zoho One. I design the data model, the sales processes and the automations between CRM, invoicing and academic management.',
        tags: ['Zoho One', 'Data model', 'Automation'],
      },
      {
        title: 'Identity and devices',
        text: 'I administer Google Workspace across more than 17 domains, Jamf School and Apple School Manager: over 150 users and the iPads used by students and teachers.',
        tags: ['Google Workspace', 'Jamf School', 'Apple School Manager'],
      },
      {
        title: 'Internal development',
        text: 'I build the tools that are not worth buying.',
        built: [
          'Time-tracking app',
          'Dashboards for management',
          "The group's websites",
        ],
        tags: [],
      },
      {
        title: 'Infrastructure and security',
        text: 'DNS on Cloudflare, email authentication, SSO, VPN and web security audits.',
        tags: ['Cloudflare', 'SPF · DKIM · DMARC', 'SSO', 'VPN'],
      },
      {
        title: 'Applied AI',
        text: 'I deploy and govern Claude across the organisation, and build agents and automations for the teams.',
        tags: ['Claude', 'Agents', 'Automation'],
      },
    ],
    quote:
      'I work directly with management, sales, marketing and administration, turning what each area needs into systems people actually use.',
  },
  experience: {
    heading: 'Experience',
    jobs: [
      {
        role: 'IT Administrator',
        where: 'Think Ahead Education',
        date: 'Present',
        text: "Responsible for the group's technology: CRM and processes, identity and devices, internal development, infrastructure, security and AI.",
      },
      {
        role: 'Freelance web developer',
        where: 'Self-employed',
        date: 'Since 2023',
        text: 'Websites for individuals and small businesses.',
      },
      {
        role: 'IT technician (internship)',
        where: 'Escuela Ideo',
        date: 'Apr – Jun 2021',
        text: 'Hardware and software support, operating system installs and inventory.',
      },
      {
        role: 'Manager',
        where: "Papa John's",
        date: 'Nov 2018 – Jan 2021',
        text: 'Inventory, budget control and staff scheduling.',
      },
    ],
    educationHeading: 'Education',
    education: [
      { name: 'Full Stack Developer bootcamp', where: 'Upgrade Hub', date: '2023' },
      {
        name: 'Microcomputer Systems and Networks',
        where: 'IES Clara del Rey, Madrid',
        date: '2018 – 2020',
      },
    ],
    languagesHeading: 'Languages',
    languages: 'Spanish, English and Arabic, all three native.',
    background: 'I studied in Amman, Karlskrona and Madrid.',
  },
  earlier: {
    heading: 'Before this',
    intro: 'Projects from my training as a developer.',
    source: 'Code',
    projects: [
      { title: 'PokeDex', url: 'https://github.com/yvseenn/PokeDex' },
      { title: 'Rick and Morty API', url: 'https://github.com/yvseenn/rickAndMortyApi' },
      { title: 'Flex Shop', url: 'https://github.com/yvseenn/mitiendaflex' },
    ],
  },
  contact: {
    heading: 'Get in touch',
    text: 'If you want to talk about systems, automation or a specific project, email me.',
  },
};
