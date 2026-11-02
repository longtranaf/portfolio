<script setup lang="ts">
import {
  site
} from '~/data/portfolio'

const {
  locale
} = useI18n()
const setLocale = useLocalized()

useHead({
  htmlAttrs: { lang: locale },
  title: () => setLocale(site.title),
  meta: [
    {
      name: 'description',
      content: () => setLocale(site.description)
    },
    {
      property: 'og:title',
      content: () => setLocale(site.title)
    },
    {
      property: 'og:description',
      content: () => setLocale(site.description)
    }
  ]
})
</script>

<template>
  <div class="app">
    <div class="blobs" aria-hidden="true">
      <span class="blob b1"></span>
      <span class="blob b2"></span>
      <span class="blob b3"></span>
      <span class="blob b4"></span>
      <span class="blob b5"></span>
    </div>

    <TheHeader />
    <main>
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.app {
  position: relative;
  isolation: isolate;
}

/* Kept in its own clipped layer so the sticky header has no overflow ancestor */
.blobs {
  position: absolute;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.blob {
  position: absolute;
  width: min(62rem, 170vw);
  aspect-ratio: 1;
  border-radius: 50%;
}

.b1 {
  top: -27rem;
  left: -30rem;
  background: radial-gradient(closest-side, var(--accent), transparent);
  opacity: 0.45;
}

.b2 {
  top: -12rem;
  right: -32rem;
  background: radial-gradient(closest-side, var(--accent-2), transparent);
  opacity: 0.45;
}

.b3 {
  top: 28%;
  left: 18%;
  background: radial-gradient(closest-side, var(--accent-3), transparent);
  opacity: 0.22;
}

.b4 {
  top: 52%;
  right: -28rem;
  background: radial-gradient(closest-side, var(--accent), transparent);
  opacity: 0.3;
}

.b5 {
  top: 72%;
  left: -30rem;
  background: radial-gradient(closest-side, var(--accent-2), transparent);
  opacity: 0.35;
}
</style>
