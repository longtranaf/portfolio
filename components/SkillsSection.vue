<script setup lang="ts">
import { skills } from '~/data/portfolio'
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">03 — Toolkit</p>
        <h2 class="section-title">Skills &amp; tools</h2>
        <p class="section-subtitle">
          The technologies I reach for most often, grouped by where they fit.
        </p>
      </div>

      <div class="grid">
        <div v-for="group in skills" :key="group.category" class="group reveal">
          <h3 class="cat">{{ group.category }}</h3>
          <ul class="items">
            <li v-for="item in group.items" :key="item">
              <span class="bullet">▹</span>{{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.group {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
}

.cat {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 18px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.items li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.bullet {
  color: var(--accent);
  font-family: var(--mono);
}
</style>
