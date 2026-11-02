<script setup lang="ts">
import {
  skills,
  ui
} from '~/data/portfolio'

const l = useLocalized()
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">{{ l(ui.skills.eyebrow) }}</p>
        <h2 class="section-title">{{ l(ui.skills.title) }}</h2>
      </div>

      <div class="grid">
        <div v-for="group in skills" :key="group.category.en" class="group glass reveal">
          <h3 class="cat">{{ l(group.category) }}</h3>
          <ul class="items">
            <li v-for="item in group.items" :key="item" class="chip">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(16.25rem, 100%), 1fr));
  gap: 1.25rem;
}

.group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: clamp(1.25rem, 4vw, 1.75rem);
}

.cat {
  font-family: var(--display);
  font-size: 1.25rem;
  color: var(--white);
}

.items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
