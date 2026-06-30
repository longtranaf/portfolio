# Portfolio — Nuxt 3

A modern, responsive single-page portfolio built with **Nuxt 3** and plain CSS (no UI framework, no build-time surprises). Dark theme, scroll-reveal animations, mobile nav, and a content layer you edit in one file.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

Everything you'll want to change lives in **`data/portfolio.ts`**:

| What | Where |
| --- | --- |
| Name, role, tagline, email, socials | `profile` |
| Projects (title, description, tags, links) | `projects` |
| Skills, grouped by category | `skills` |
| Work history / timeline | `experience` |

Other things you might touch:

- **Colors / theme** — CSS variables at the top of `assets/css/main.css` (`--accent`, `--bg`, etc.).
- **Page metadata / SEO** — `nuxt.config.ts` (`app.head`).
- **Sections shown / order** — `pages/index.vue`.
- **Résumé** — drop a PDF in `public/` and set `profile.resumeUrl` to `/resume.pdf`.
- **Favicon** — `public/favicon.svg`.

## Structure

```
data/portfolio.ts        ← all content (edit me)
pages/index.vue          ← composes the sections
components/               ← Header, Hero, About, Projects, Skills, Experience, Contact, Footer
composables/useReveal.ts  ← scroll-reveal animation
assets/css/main.css       ← design tokens + global styles
```

## Build & deploy

```bash
npm run build      # SSR build (Node server) → .output/
npm run generate   # fully static site → .output/public/
npm run preview    # preview a build locally
```

`npm run generate` produces static files you can host anywhere — **Netlify, Vercel, Cloudflare Pages, GitHub Pages**, or any static host. For Vercel/Netlify, just point them at the repo; Nuxt is auto-detected.

## Tech

- [Nuxt 3](https://nuxt.com) / Vue 3 + TypeScript
- Zero runtime UI dependencies — just CSS
- Accessible: reduced-motion support, keyboard-friendly nav, semantic markup
