<script setup lang="ts">
import {
  experience,
  ui
} from '~/data/portfolio'

const setLocale = useLocalized()
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">
          {{ setLocale(ui.experience.eyebrow) }}
        </p>
        <h2 class="section-title">
          {{ setLocale(ui.experience.title) }}
        </h2>
      </div>

      <div class="list">
        <article
          v-for="item in experience"
          :key="item.role + item.company"
          class="job glass reveal"
        >
          <div class="meta">
            <span class="period">{{ item.period }}</span>
            <h3 class="company">{{ item.company }}</h3>
            <span class="role">{{ item.role }}</span>
          </div>
          <ul class="highlights">
            <li v-for="highlight in item.highlights" :key="highlight.en">
              {{ setLocale(highlight) }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.job {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: clamp(1.25rem, 4vw, 2rem);
}

.meta {
  flex: 1 1 13.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.period {
  font-family: var(--mono);
  font-size: 0.875rem;
  color: var(--text-dim);
}

.company {
  font-family: var(--display);
  font-size: 1.375rem;
  color: var(--white);
}

.role {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--accent);
}

.highlights {
  flex: 999 1 30rem;
  min-width: 0;
  list-style: disc;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--text-soft);
}
</style>
