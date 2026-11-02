// Edit everything about your portfolio here — one source of truth.
// Text shown to visitors is a `Localized` pair; read it with `useLocalized()`.

export type Locale = 'en' | 'vi'
export type Localized = Record<Locale, string>

export const site = {
  title: {
    en: 'Tran Duc Long — Portfolio',
    vi: 'Tran Duc Long — Portfolio'
  },
  description: {
    en: 'Tran Duc Long — Frontend Developer building clean, responsive, multilingual web apps with Vue.js & Nuxt.',
    vi: 'Tran Duc Long — Frontend Developer xây dựng web app gọn gàng, responsive, đa ngôn ngữ với Vue.js và Nuxt.'
  }
}

// Labels that belong to the page rather than to your content
export const ui = {
  nav: {
    about: {
      en: 'About',
      vi: 'Giới thiệu'
    },
    skills: {
      en: 'Skills',
      vi: 'Kỹ năng'
    },
    experience: {
      en: 'Experience',
      vi: 'Kinh nghiệm'
    },
    projects: {
      en: 'Projects',
      vi: 'Dự án'
    },
    contact: {
      en: 'Contact',
      vi: 'Liên hệ'
    }
  },
  menu: {
    en: 'Toggle menu',
    vi: 'Đóng/mở menu'
  },
  hero: {
    viewProjects: {
      en: 'View projects',
      vi: 'Xem dự án'
    },
    getInTouch: {
      en: 'Get in touch',
      vi: 'Liên hệ với tôi'
    }
  },
  skills: {
    eyebrow: {
      en: '01 — Skills',
      vi: '01 — Kỹ năng'
    },
    title: {
      en: 'Tools I ship with',
      vi: 'Công cụ tôi sử dụng'
    }
  },
  experience: {
    eyebrow: {
      en: '02 — Experience',
      vi: '02 — Kinh nghiệm'
    },
    title: {
      en: 'Where I’ve worked',
      vi: 'Nơi tôi đã làm việc'
    }
  },
  projects: {
    eyebrow: {
      en: '03 — Selected projects',
      vi: '03 — Dự án tiêu biểu'
    },
    title: {
      en: 'Recent work',
      vi: 'Dự án gần đây'
    },
    private: {
      en: 'Private client project',
      vi: 'Dự án riêng của khách hàng'
    }
  },
  contact: {
    eyebrow: {
      en: '04 — Contact',
      vi: '04 — Liên hệ'
    },
    headlineTop: {
      en: 'Let’s build something',
      vi: 'Cùng nhau xây dựng'
    },
    headlineBottom: {
      en: 'clean together.',
      vi: 'những sản phẩm chỉn chu.'
    },
    education: {
      en: 'Education',
      vi: 'Học vấn'
    },
    languages: {
      en: 'Languages',
      vi: 'Ngôn ngữ'
    }
  },
  footer: {
    builtWith: {
      en: 'Built with Nuxt 3',
      vi: 'Xây dựng bằng Nuxt 3'
    }
  }
}

export const profile = {
  name: 'Tran Duc Long',
  role: 'Frontend Developer',
  tagline: {
    en: 'I build production web apps with Vue.js, Nuxt.js and TypeScript — learning platforms, AI concierge products, multilingual corporate sites — with a focus on clean UI and maintainable code.',
    vi: 'Tôi xây dựng các web app production với Vue.js, Nuxt.js và TypeScript — nền tảng học tập, sản phẩm AI concierge, website doanh nghiệp đa ngôn ngữ — chú trọng giao diện gọn gàng và code dễ bảo trì.'
  },
  availability: {
    status: 1,
    content: {
      en: 'Open to new frontend roles',
      vi: 'Đang tìm vị trí frontend mới'
    },
    location: {
      en: 'Hanoi',
      vi: 'Hà Nội'
    }
  },
  location: {
    en: 'Tu Liem, Hanoi',
    vi: 'Từ Liêm, Hà Nội'
  },
  email: 'longtd1999@gmail.com',
  socials: [
    {
      label: 'GitHub',
      url: 'https://github.com/longtranaf'
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tran-long-235443253/'
    },
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/LongTranaf'
    }
  ]
}

export const stats = [
  {
    value: '3+',
    label: {
      en: 'years building',
      vi: 'năm kinh nghiệm'
    }
  },
  {
    value: '3',
    label: {
      en: 'companies',
      vi: 'công ty'
    }
  },
  {
    value: '3',
    label: {
      en: 'UI languages',
      vi: 'ngôn ngữ UI'
    }
  }
]

export interface Project {
  title: string
  description: Localized
  tags: Array<string>
  link?: string
  repo?: string
  year: string
}

export const projects: Array<Project> = [
  {
    title: 'ORT Homepage',
    description: {
      en: 'Server-rendered multilingual corporate site in English, Japanese and Vietnamese, with contact and recruitment integrations.',
      vi: 'Website doanh nghiệp render phía server bằng tiếng Anh, tiếng Nhật và tiếng Việt, tích hợp liên hệ và tuyển dụng.'
    },
    tags: [
      'Nuxt 3',
      '@nuxt/content',
      'i18n',
      'Mailgun'
    ],
    link: 'https://openreach.tech',
    year: '2025—2026'
  },
  {
    title: 'Hennyu Online',
    description: {
      en: 'Online coaching platform with separate Admin, Coach and Student apps — new features, GraphQL data and safe content rendering.',
      vi: 'Nền tảng coaching trực tuyến với các ứng dụng riêng cho Admin, Coach và Student — phát triển tính năng mới, dữ liệu GraphQL và hiển thị nội dung an toàn.'
    },
    tags: [
      'Nuxt 3',
      'GraphQL',
      'sanitize-html'
    ],
    year: '2025—2026'
  },
  {
    title: 'Linoa AI Concierge',
    description: {
      en: 'Multilingual voice-and-text AI concierge for hospitality — categories, locale-aware content, services and maps.',
      vi: 'AI concierge đa ngôn ngữ qua giọng nói và văn bản cho ngành khách sạn — danh mục, nội dung theo ngôn ngữ, dịch vụ và bản đồ.'
    },
    tags: [
      'Nuxt 3',
      'GraphQL',
      'Leaflet',
      'PrimeVue'
    ],
    link: 'https://linoa-dev.openreach.tech',
    year: '2026'
  }
]

export interface SkillGroup {
  category: Localized
  items: Array<string>
}

export const skills: Array<SkillGroup> = [
  {
    category: {
      en: 'Languages',
      vi: 'Ngôn ngữ'
    },
    items: [
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3'
    ]
  },
  {
    category: {
      en: 'Frameworks',
      vi: 'Framework'
    },
    items: [
      'Vue.js',
      'Nuxt 2 / 3',
      'React Native',
      'GraphQL'
    ]
  },
  {
    category: {
      en: 'UI & Styling',
      vi: 'UI & Styling'
    },
    items: [
      'Tailwind CSS',
      'Vuetify',
      'PrimeVue',
      'Responsive design'
    ]
  },
  {
    category: {
      en: 'Libraries & more',
      vi: 'Thư viện & khác'
    },
    items: [
      'Chart.js',
      'Leaflet',
      'i18n',
      'lodash',
      'WordPress',
      'Git'
    ]
  }
]

export interface ExperienceItem {
  role: string
  company: string
  period: string
  highlights: Array<Localized>
}

export const experience: Array<ExperienceItem> = [
  {
    role: 'Frontend Developer',
    company: 'OpenReachTech Hanoi',
    period: '11/2024 — 06/2026',
    highlights: [
      {
        en: 'Built and maintained production Nuxt apps across learning, task management, AI assistant, customer-service and corporate products.',
        vi: 'Xây dựng và bảo trì các ứng dụng Nuxt production cho sản phẩm học tập, quản lý công việc, trợ lý AI, chăm sóc khách hàng và doanh nghiệp.'
      },
      {
        en: 'Implemented new page structures and features from customer requirements.',
        vi: 'Triển khai cấu trúc trang và tính năng mới theo yêu cầu của khách hàng.'
      },
      {
        en: 'Investigated and fixed customer-reported issues, improving stability and UX.',
        vi: 'Điều tra và xử lý các lỗi khách hàng báo cáo, cải thiện độ ổn định và trải nghiệm người dùng.'
      }
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'Wakesize Co. Ltd',
    period: '02/2023 — 04/2024',
    highlights: [
      {
        en: 'Designed and implemented interfaces with HTML, CSS and Vuetify.',
        vi: 'Thiết kế và xây dựng giao diện với HTML, CSS và Vuetify.'
      },
      {
        en: 'Developed learning management systems with Nuxt 2 and Nuxt 3, including Chart.js data visualisation.',
        vi: 'Phát triển hệ thống quản lý học tập với Nuxt 2 và Nuxt 3, bao gồm trực quan hóa dữ liệu bằng Chart.js.'
      },
      {
        en: 'Built and maintained WordPress blog sites; supported users and resolved errors.',
        vi: 'Xây dựng và bảo trì các trang blog WordPress; hỗ trợ người dùng và xử lý lỗi.'
      }
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'CY Vietnam Software',
    period: '03/2022 — 09/2022',
    highlights: [
      {
        en: 'Developed an e-commerce management system with Nuxt 2 and Tailwind CSS.',
        vi: 'Phát triển hệ thống quản lý thương mại điện tử với Nuxt 2 và Tailwind CSS.'
      },
      {
        en: 'Built a cross-platform mobile app with React Native and Tailwind CSS.',
        vi: 'Xây dựng ứng dụng di động đa nền tảng với React Native và Tailwind CSS.'
      }
    ]
  }
]

export const education = {
  major: {
    en: 'Information Technology',
    vi: 'Công nghệ thông tin'
  },
  school: {
    en: 'People’s Security Academy',
    vi: 'Học viện An ninh Nhân dân'
  },
  period: '2017 — 2022'
}

export const languages = {
  spoken: {
    en: 'Vietnamese · English',
    vi: 'Tiếng Việt · Tiếng Anh'
  },
  note: {
    en: 'English: intermediate',
    vi: 'Tiếng Anh: trung cấp'
  }
}
