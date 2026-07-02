// Edit everything about your portfolio here — one source of truth.

export const profile = {
  name: 'Tran Long',
  role: 'Software Engineer',
  tagline: 'I build thoughtful, fast, and accessible web experiences.',
  intro:
    'I’m a software engineer who enjoys turning complex problems into clean, intuitive products. I care about performance, developer experience, and the small details that make software feel great to use.',
  location: 'Remote',
  email: 'longtd1999@gmail.com',
  resumeUrl: '#', // link to a PDF in /public, e.g. '/resume.pdf'
  socials: [
    { label: 'GitHub', url: 'https://github.com/longtranaf' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/' },
    { label: 'Twitter', url: 'https://twitter.com/' }
  ]
}

export interface Project {
  title: string
  description: string
  tags: Array<string>
  link?: string
  repo?: string
  year: string
}

export const projects: Array<Project> = [
  {
    title: 'Realtime Analytics Dashboard',
    description:
      'A streaming dashboard handling 50k events/sec with sub-second updates. Built a custom WebSocket layer and virtualized charts to keep the UI smooth under load.',
    tags: ['Vue 3', 'WebSockets', 'TypeScript', 'D3'],
    link: '#',
    repo: '#',
    year: '2025'
  },
  {
    title: 'Headless Commerce Platform',
    description:
      'An API-first storefront with a Nuxt frontend and edge caching. Cut time-to-first-byte by 60% and improved Lighthouse scores to 98+.',
    tags: ['Nuxt 3', 'Node', 'PostgreSQL', 'Redis'],
    link: '#',
    repo: '#',
    year: '2024'
  },
  {
    title: 'Design System & Component Library',
    description:
      'A themeable component library used across five product teams, with accessibility baked in and automated visual regression testing.',
    tags: ['Vue', 'Storybook', 'a11y', 'CI'],
    link: '#',
    repo: '#',
    year: '2024'
  },
  {
    title: 'CLI Developer Toolkit',
    description:
      'An open-source CLI that scaffolds projects and automates release workflows. 1k+ stars and a small but active contributor community.',
    tags: ['Node', 'TypeScript', 'OSS'],
    repo: '#',
    year: '2023'
  }
]

export interface SkillGroup {
  category: string
  items: Array<string>
}

export const skills: Array<SkillGroup> = [
  {
    category: 'Frontend',
    items: ['Vue 3', 'Nuxt 3', 'TypeScript', 'React Native', 'Tailwind CSS', 'Vite']
  },
  {
    category: 'Tooling & Cloud',
    items: ['Docker', 'CI/CD', 'AWS', 'Cloudflare', 'Vitest', 'Playwright']
  }
]

export interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
}

export const experience: Array<ExperienceItem> = [
  {
    role: 'Senior Software Engineer',
    company: 'Acme Corp',
    period: '2023 — Present',
    description:
      'Lead frontend architecture for the core product, mentor engineers, and drive performance initiatives across the platform.'
  },
  {
    role: 'Software Engineer',
    company: 'Startup Inc',
    period: '2021 — 2023',
    description:
      'Shipped the first version of the product end-to-end and helped grow the engineering team from 3 to 12.'
  },
  {
    role: 'Frontend Developer',
    company: 'Agency Studio',
    period: '2019 — 2021',
    description:
      'Built marketing sites and web apps for a range of clients with a focus on motion and accessibility.'
  }
]
