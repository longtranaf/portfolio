<script setup lang="ts">
import { profile } from '~/data/portfolio'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
]

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="header" :class="{ scrolled }">
    <div class="container bar">
      <a href="#top" class="brand">
        {{ profile.name.split(' ')[0] }}<span class="dot">.</span>
      </a>

      <nav class="nav" :class="{ open: menuOpen }">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </a>
      </nav>

      <button
        class="burger"
        :aria-expanded="menuOpen"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <span :class="{ x: menuOpen }"></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto 0;
  height: var(--header-h);
  z-index: 50;
  display: flex;
  align-items: center;
  transition: background 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease;
  border-bottom: 1px solid transparent;
}

.header.scrolled {
  background: rgba(11, 15, 23, 0.72);
  backdrop-filter: blur(12px);
  border-bottom-color: var(--border);
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
}

.brand .dot {
  color: var(--accent);
}

.nav {
  display: flex;
  gap: 28px;
}

.nav a {
  color: var(--text-muted);
  font-size: 0.95rem;
  font-weight: 500;
  position: relative;
  transition: color 0.18s ease;
}

.nav a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background: var(--gradient);
  transition: width 0.22s ease;
}

.nav a:hover {
  color: var(--text);
}

.nav a:hover::after {
  width: 100%;
}

.burger {
  display: none;
  width: 40px;
  height: 40px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--surface);
  cursor: pointer;
  position: relative;
}

.burger span,
.burger span::before,
.burger span::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 18px;
  height: 2px;
  background: var(--text);
  transform: translateX(-50%);
  transition: transform 0.22s ease, opacity 0.22s ease;
}

.burger span {
  top: 50%;
  margin-top: -1px;
}
.burger span::before {
  top: -6px;
}
.burger span::after {
  top: 6px;
}
.burger span.x {
  background: transparent;
}
.burger span.x::before {
  transform: translateX(-50%) translateY(6px) rotate(45deg);
}
.burger span.x::after {
  transform: translateX(-50%) translateY(-6px) rotate(-45deg);
}

@media (max-width: 760px) {
  .burger {
    display: block;
  }
  .nav {
    position: absolute;
    top: var(--header-h);
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: rgba(11, 15, 23, 0.96);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  .nav.open {
    max-height: 320px;
  }
  .nav a {
    padding: 16px 24px;
    border-top: 1px solid var(--border);
  }
}
</style>
