<script setup lang="ts">
import { profile } from '~/data/portfolio'
</script>

<template>
  <section id="top" class="hero">
    <div class="container inner">
      <p class="eyebrow reveal">
        Hi, my name is
      </p>

      <h1 class="title reveal">

        {{ profile.name }}
        
        <span class="dot">.</span>
      </h1>

      <h2 class="subtitle gradient-text reveal">
        {{ profile.role }}
      </h2>

      <p class="lede reveal">
        {{ profile.tagline }}
      </p>

      <div class="actions reveal">
        <a href="#projects" class="btn btn-primary">
          View my work
        </a>

        <a :href="`mailto:${profile.email}`" class="btn btn-ghost">
          Get in touch
        </a>
      </div>

      <ul class="socials reveal">
        <li v-for="s in profile.socials" :key="s.label">
          <a :href="s.url" target="_blank" rel="noopener">
            {{ s.label }}
          </a>
        </li>
      </ul>
    </div>

    <a href="#about" class="scroll-hint" aria-label="Scroll down">
      <span></span>
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--header-h);
}

.inner {
  max-width: 760px;
}

.title {
  font-size: clamp(2.6rem, 8vw, 5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  margin-top: 6px;
}

.title .dot {
  color: var(--accent);
}

.subtitle {
  font-size: clamp(1.6rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin-top: 4px;
}

.lede {
  margin-top: 22px;
  font-size: 1.15rem;
  color: var(--text-muted);
  max-width: 56ch;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.socials {
  display: flex;
  gap: 22px;
  margin-top: 36px;
}

.socials a {
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--text-dim);
  transition: color 0.18s ease;
}

.socials a:hover {
  color: var(--accent);
}

/* stagger the reveals */
.reveal:nth-child(1) { transition-delay: 0.05s; }
.reveal:nth-child(2) { transition-delay: 0.12s; }
.reveal:nth-child(3) { transition-delay: 0.19s; }
.reveal:nth-child(4) { transition-delay: 0.26s; }
.reveal:nth-child(5) { transition-delay: 0.33s; }
.reveal:nth-child(6) { transition-delay: 0.4s; }

.scroll-hint {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 40px;
  border: 2px solid var(--border);
  border-radius: 14px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.scroll-hint span {
  width: 4px;
  height: 8px;
  border-radius: 4px;
  background: var(--accent);
  animation: scroll-bob 1.6s ease-in-out infinite;
}

@keyframes scroll-bob {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(8px); opacity: 0.3; }
}
</style>
