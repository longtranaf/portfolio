<script setup lang="ts">
import {
  profile,
  stats,
  ui
} from '~/data/portfolio'

const setLocale = useLocalized()

const [
  roleFirst,
  ...roleRest
] = profile.role.split(' ')

const {
  status,
  content,
  location
} = profile.availability

function isOpenToWork() {
  return status === 1
}

function generateAvailabilityContent() {
  return `${setLocale(content)} · ${setLocale(location)}`
}

function generateAvailabilityActiveDotClass() {
  return isOpenToWork()
    ? 'active'
    : 'inactive'
}
</script>

<template>
  <section id="about" class="hero">
    <div class="container inner">
      <div class="copy">
        <p class="badge reveal">
          <i class="dot" :class="generateAvailabilityActiveDotClass()" aria-hidden="true">
          </i>

          <span>
            {{ generateAvailabilityContent() }}
          </span>
        </p>
        <h1 class="title reveal">
          {{ profile.name }}
          <br>
          <span class="accent">
            {{ roleFirst }}
          </span>

          {{ roleRest.join(' ') }}
        </h1>
        <p class="lede reveal">
          {{ setLocale(profile.tagline) }}
        </p>

        <div class="actions reveal">
          <a href="#projects" class="btn btn-primary">
            {{ setLocale(ui.hero.viewProjects) }}
            <AppIcon name="arrow-right" />
          </a>
          <a href="#contact" class="btn btn-ghost">
            {{ setLocale(ui.hero.getInTouch) }}
          </a>
        </div>
      </div>

      <div class="code-card glass reveal">
        <div class="lights" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <pre class="code"><span class="kw">const</span> long = {
  role: <span class="str">'{{ profile.role }}'</span>,
  stack: [<span class="str">'Vue'</span>, <span class="str">'Nuxt 3'</span>, <span class="str">'TS'</span>],
  locales: [<span class="str">'en'</span>, <span class="str">'ja'</span>, <span class="str">'vi'</span>],
  based: <span class="str">'Hanoi, VN'</span>,
}</pre>
        <dl class="stats">
          <div v-for="stat in stats" :key="stat.label.en" class="stat">
            <dd>{{ stat.value }}</dd>
            <dt>{{ setLocale(stat.label) }}</dt>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-block: clamp(3rem, 8vw, 5rem) clamp(2.5rem, 7vw, 3.75rem);
}

.inner {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: stretch;
}

.copy {
  flex: 999 1 35rem;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.75rem;
}

.badge {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 1rem;
  border-radius: 999rem;
  background: var(--surface);
  border: 0.0625rem solid var(--border);
  font-size: 0.875rem;
  font-weight: 600;
}

.badge .dot {
  width: 0.5rem;
  height: 0.5rem;
  flex: none;
  border-radius: 50%;
  background: #d2d0d0;
  box-shadow: 0 0 0.75rem #4ade80;
}

.badge .dot.active {
  background: #4ade80;
}

.title {
  font-family: var(--display);
  font-size: clamp(2.5rem, 7vw, 5.25rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.05;
  color: var(--white);
}

.accent {
  color: var(--accent);
}

.lede {
  max-width: 38.75rem;
  font-size: clamp(1.0625rem, 2.4vw, 1.1875rem);
  color: var(--text-muted);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

/* stagger the reveals */
.copy>.reveal:nth-child(1) {
  transition-delay: 0.05s;
}

.copy>.reveal:nth-child(2) {
  transition-delay: 0.12s;
}

.copy>.reveal:nth-child(3) {
  transition-delay: 0.19s;
}

.copy>.reveal:nth-child(4) {
  transition-delay: 0.26s;
}

.code-card.reveal {
  transition-delay: 0.3s;
}

.code-card {
  flex: 1 1 24rem;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: clamp(1.25rem, 4vw, 1.75rem);
  border-radius: var(--radius-lg);
  box-shadow: var(--glass-shadow), var(--glass-highlight);
}

.lights {
  display: flex;
  gap: 0.5rem;
}

.lights i {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: #f87171;
}

.lights i:nth-child(2) {
  background: #fbbf24;
}

.lights i:nth-child(3) {
  background: #4ade80;
}

.code {
  flex: 1;
  font-family: var(--mono);
  font-size: 0.875rem;
  line-height: 1.75;
  color: var(--text-soft);
  white-space: pre-wrap;
}

.kw {
  color: var(--accent-2);
}

.str {
  color: var(--accent);
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.625rem;
}

.stat {
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0.5rem;
  border-radius: 1rem;
  text-align: center;
  background: var(--surface);
  border: 0.0625rem solid var(--line);
}

.stat dd {
  font-family: var(--display);
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--white);
}

.stat dt {
  font-size: 0.75rem;
  line-height: 1.3;
  color: var(--text-dim);
}

@media (max-width: 26.25rem) {
  .actions .btn {
    flex: 1 1 100%;
  }

  .stats {
    gap: 0.375rem;
  }

  .stat {
    padding-inline: 0.25rem;
  }
}
</style>
