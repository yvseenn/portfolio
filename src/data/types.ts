export interface Content {
  lang: 'es' | 'en';
  meta: { title: string; description: string };
  nav: { work: string; experience: string; contact: string; switchLabel: string; switchTo: string; theme: string; skip: string };
  hero: {
    role: string;
    title: string;
    lead: string;
    brands: string[];
    cta: string;
    diagram: { center: [string, string]; nodes: string[]; label: string };
  };
  stats: { value: string; label: string }[];
  work: {
    heading: string;
    intro: string;
    areas: { title: string; text: string; built?: string[]; tags: string[] }[];
    builtLabel: string;
    quote: string;
  };
  experience: {
    heading: string;
    jobs: { role: string; where: string; date: string; text: string }[];
    educationHeading: string;
    education: { name: string; where: string; date: string }[];
    languagesHeading: string;
    languages: string;
    background: string;
  };
  earlier: { heading: string; intro: string; source: string; projects: { title: string; url: string }[] };
  contact: { heading: string; text: string };
}

export const links = {
  email: 'yaseenimad1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yaseen-al-koja-8906221a1/',
  github: 'https://github.com/yvseenn',
};

export const name = 'Yaseen Al Koja';
