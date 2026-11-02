<script setup lang="ts">
import {
  ui
} from '~/data/portfolio'

const links = [
  {
    label: ui.nav.about,
    href: '#about'
  },
  {
    label: ui.nav.skills,
    href: '#skills'
  },
  {
    label: ui.nav.experience,
    href: '#experience'
  },
  {
    label: ui.nav.projects,
    href: '#projects'
  },
  {
    label: ui.nav.contact,
    href: '#contact'
  }
]

const menuOpen = ref(false)

const setLocale = useLocalized()
const {
  locale,
  locales
} = useI18n()
const switchLocalePath = useSwitchLocalePath()
const otherLocale = computed(() => locales.value.find((item) => item.code !== locale.value)!)
</script>

<template>
  <header class="header container">
    <div class="bar">
      <a href="#about" class="brand">long<span class="dot">.</span>dev</a>

      <nav
        class="nav"
        :class="{
          open: menuOpen
        }"
        aria-label="Primary"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          @click="menuOpen = false"
        >
          {{
            setLocale(link.label)
          }}
        </a>
      </nav>

      <div class="end">
        <NuxtLink
          :to="switchLocalePath(otherLocale.code)"
          class="lang"
          :class="{
            'lang-end': locale === locales[1]?.code
          }"
          :lang="otherLocale.code"
          :hreflang="otherLocale.code"
          :aria-label="otherLocale.name"
        >
          <span class="lang-thumb" aria-hidden="true"></span>
          <span
            v-for="item in locales"
            :key="item.code"
            class="lang-option"
            :class="{
              active: item.code === locale
            }"
            aria-hidden="true"
          >
            {{ item.code.toUpperCase() }}
          </span>
        </NuxtLink>
        <button
          class="burger"
          :aria-expanded="menuOpen"
          :aria-label="setLocale(ui.menu)"
          @click="menuOpen = !menuOpen"
        >
          <span :class="{ x: menuOpen }"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 1rem;
  z-index: 50;
  margin-top: 1.5rem;
}

.bar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-height: var(--header-h);
  padding: 0.75rem 0.75rem 0.75rem 1.5rem;
}

/* Glass sits on a pseudo-element: a filter on .bar itself would stop the
   mobile menu inside it from blurring the page. */
.bar::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background: var(--surface);
  border: 0.0625rem solid var(--border);
  border-radius: 999rem;
  box-shadow: var(--glass-shadow);
  -webkit-backdrop-filter: var(--glass-blur);
  backdrop-filter: var(--glass-blur);
}

.brand {
  font-family: var(--display);
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--white);
}

.dot {
  color: var(--accent);
}

.nav {
  display: flex;
  gap: 0.25rem;
}

.nav a {
  padding: 0.625rem 1rem;
  border-radius: 999rem;
  font-size: 0.9375rem;
  font-weight: 600;
  transition: background 0.18s ease, color 0.18s ease;
}

.nav a:hover {
  background: var(--surface-2);
  color: var(--white);
}

.end {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lang {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 2.125rem);
  align-items: center;
  height: 2.75rem;
  flex: none;
  padding: 0.25rem;
  border: 0.0625rem solid var(--border);
  border-radius: 999rem;
  background: var(--surface-2);
  font-size: 0.8125rem;
  font-weight: 700;
}

.lang-thumb {
  position: absolute;
  top: 0.25rem;
  bottom: 0.25rem;
  left: 0.25rem;
  width: 2.125rem;
  border-radius: 999rem;
  background: var(--accent);
  transition: transform 0.22s ease;
}

.lang-end .lang-thumb {
  transform: translateX(100%);
}

.lang-option {
  position: relative;
  text-align: center;
  color: var(--text-dim);
  transition: color 0.22s ease;
}

.lang:hover .lang-option {
  color: var(--white);
}

.lang .lang-option.active {
  color: var(--bg);
}

.burger {
  display: none;
  width: 2.75rem;
  height: 2.75rem;
  flex: none;
  border: 0.0625rem solid var(--border);
  border-radius: 50%;
  background: var(--surface-2);
  cursor: pointer;
  position: relative;
}

.burger span,
.burger span::before,
.burger span::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 1.125rem;
  height: 0.125rem;
  background: var(--text);
  transform: translateX(-50%);
  transition: transform 0.22s ease, opacity 0.22s ease;
}

.burger span {
  top: 50%;
  margin-top: -0.0625rem;
}
.burger span::before {
  top: -0.375rem;
}
.burger span::after {
  top: 0.375rem;
}
.burger span.x {
  background: transparent;
}
.burger span.x::before {
  transform: translateX(-50%) translateY(0.375rem) rotate(45deg);
}
.burger span.x::after {
  transform: translateX(-50%) translateY(-0.375rem) rotate(-45deg);
}

@media (max-width: 56rem) {
  .burger {
    display: block;
  }
  .nav {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    right: 0;
    flex-direction: column;
    padding: 0.5rem;
    background: rgba(14, 20, 44, 0.84);
    border: 0.0625rem solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--glass-shadow);
    -webkit-backdrop-filter: var(--glass-blur);
    backdrop-filter: var(--glass-blur);
    max-height: calc(100vh - var(--header-h) - 2rem);
    max-height: calc(100svh - var(--header-h) - 2rem);
    overflow-y: auto;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-0.5rem);
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
  }
  .nav.open {
    opacity: 1;
    visibility: visible;
    transform: none;
  }
  .nav a {
    padding: 0.875rem 1rem;
  }
}
</style>
