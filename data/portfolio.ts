// Edit everything about your portfolio here — one source of truth.

export const profile = {
  name: 'Tran Long',
  role: 'Frontend Developer',
  tagline: 'I build thoughtful, fast, and accessible web experiences.',
  intro:
    'Frontend Developer with 3 years of experience building responsive, user-focused web applications. Skilled in HTML, CSS, JavaScript, and modern frameworks such as Vue, Nuxt, with a strong eye for clean, maintainable code and pixel-perfect UI implementation. Experienced in collaborating with designers and backend teams to deliver fast, accessible, and cross-browser-compatible products. Passionate about performance optimization, intuitive user experiences, and staying current with evolving frontend technologies.',
  location: 'Tu Liem, Hanoi',
  email: 'longtd1999@gmail.com',
  resumeUrl: '#', // link to a PDF in /public, e.g. '/resume.pdf'
  socials: [
    { label: 'GitHub', url: 'https://github.com/longtranaf' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tran-long-235443253/' },
    { label: 'Facebook', url: 'https://www.facebook.com/LongTranaf' }
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
    title: 'ORT Homepage',
    description: "The official corporate website for Open Reach Tech, built as a modern server-rendered web application. It serves as the company's public presence — showcasing its products and solutions, publishing technical insights, and handling recruitment and customer inquiries — across three languages (English, Japanese, and Vietnamese).",
    tags: ['Nuxt', 'Mailgun', 'reCAPTCHA', '@nuxt/content', 'i18n'],
    link: 'https://openreach.tech/#',
    year: '10/2025 - 06/2026'
  },
  {
    title: 'Hennyu Online',
    description: '"Hennyu Online" (編入 = university transfer-admission tutoring) is an online education/coaching platform. The product is delivered as three separate frontends, one per user role, all living side-by-side.',
    tags: ['Nuxt', 'GraphQL', 'linkify-html', 'sanitize-html'],
    link: '#',
    year: '12/2025 - 06/2026'
  },
  {
    title: 'Linoa AI Concierge',
    description: 'Linoa AI, a multilingual, voice-and-text AI concierge for hospitality facilities (hotels/resorts). Guests interact with an AI avatar to chat, browse facility content, and navigate services.',
    tags: ['Nuxt', 'GraphQL', 'leaflet', 'Prime Vue', 'qrcode'],
    link: 'https://linoa-dev.openreach.tech/',
    year: '2/2026 - 06/2026'
  },
  {
    title: 'Happy Learn',
    description: '"Happy Learn" is an online education platform that connects learners with courses and classrooms. It features interactive map-based discovery of learning locations, QR-code check-in, and a rich UI built on a component library to deliver a smooth, accessible learning experience.',
    tags: ['Nuxt', 'Pinia', 'Tailwind', 'Vuetify', 'Chart.js', 'Scorm-again', 'xlsx', 'vue-pdf'],
    link: '',
    year: '10/2023 - 05/2024'
  },
  {
    title: 'MitalabSmart',
    description: '"MitalabSmart" is a learning management system for delivering online training and tracking learner progress. It supports SCORM-based course content, visual progress and performance dashboards, and data exports to Excel and PDF for reporting.',
    tags: ['Nuxt', 'Pinia', 'Tailwind', 'Vuetify', 'Chart.js', 'Element', 'Scorm-again', 'xlsx', 'vue-pdf'],
    link: 'https://academy.mitalab.com/trang-chu',
    year: '06/2023 - 10/2023'
  },
  {
    title: 'Toptrainer',
    description: '"Toptrainer" is a learning management system for delivering online training and tracking learner progress. It supports SCORM-based course content, visual progress and performance dashboards, and data exports to Excel and PDF for reporting.',
    tags: ['Nuxt', 'Pinia', 'Tailwind', 'Vuetify', 'Chart.js', 'Ckeditor', 'Scorm-again', 'xlsx', 'vue-pdf'],
    link: 'https://academy.mitalab.com/trang-chu',
    year: '03/2023 - 11/2023'
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
    category: 'Other',
    items: ['Claude', 'Research']
  }
]

export interface ExperienceItem {
  role: string
  company: string
  period: string
  descriptions: Array<string>
}

export const experience: Array<ExperienceItem> = [
  {
    role: 'Front-end Developer',
    company: 'OpenReachTech',
    period: '11/2024 - 6/2026',
    descriptions: [
      'Developing learning management systems, task management systems, AI assistants page, user service applications, and company homepages with Nuxt.',
      'Support and fix customer-reported issues to improve application stability and user experience.'
    ]
  },
  {
    role: 'Front-end Developer',
    company: 'Wakesize',
    period: '2/2023 - 4/2024',
    descriptions: [
      'Design user interfaces with HTML, CSS, and Vuetify',
      'Develop learning management systems with Nuxt 2, Nuxt 3, Chart.js,...',
      'Develop blogs with Wordpress',
      'Support users in resolving program errors during use'
    ]
  },
  {
    role: 'Front-end Developer',
    company: 'CY Vietnam',
    period: '3/2022 - 9/2022',
    descriptions: [
      'Develop E-commerce management system with Nuxt 2, Tailwind,...',
      'Develop mobile application with React Native, Tailwind'
    ]
  }
]
