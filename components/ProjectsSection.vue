<script setup lang="ts">
import { projects } from '~/data/portfolio'
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">02 — Work</p>
        <h2 class="section-title">Selected projects</h2>
        <p class="section-subtitle">
          A few things I’ve built recently. Each one taught me something new.
        </p>
      </div>

      <div class="grid">
        <article
          v-for="project in projects"
          :key="project.title"
          class="project reveal"
        >
          <div class="top">
            <div class="folder" aria-hidden="true">▤</div>
            <div class="links">
              <a
                v-if="project.repo"
                :href="project.repo"
                target="_blank"
                rel="noopener"
                aria-label="Source code"
              >Code</a>
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                rel="noopener"
                aria-label="Live demo"
              >Live ↗</a>
            </div>
          </div>

          <h3 class="title">{{ project.title }}</h3>
          <p class="desc">{{ project.description }}</p>

          <ul class="tags">
            <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
          </ul>

          <span class="year">{{ project.year }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.project {
  position: relative;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 26px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.project:hover {
  transform: translateY(-6px);
  border-color: var(--accent);
  box-shadow: var(--shadow);
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.folder {
  font-size: 1.8rem;
  color: var(--accent);
}

.links {
  display: flex;
  gap: 14px;
}

.links a {
  font-family: var(--mono);
  font-size: 0.8rem;
  color: var(--text-dim);
  transition: color 0.18s ease;
}

.links a:hover {
  color: var(--accent);
}

.title {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-top: 10px;
  flex: 1;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.tags li {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--accent-3);
  background: var(--surface-2);
  border: 1px solid var(--border);
  padding: 4px 10px;
  border-radius: 999px;
}

.year {
  position: absolute;
  top: 26px;
  right: 26px;
  display: none;
}
</style>
