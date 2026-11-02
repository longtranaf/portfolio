<script setup lang="ts">
import { projects, ui } from '~/data/portfolio'

const l = useLocalized()

function initials(title: string) {
  return title.split(' ').slice(0, 2).map((word) => word[0]).join('')
}

function domain(url: string) {
  return url.replace(/^https?:\/\//, '')
}
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">{{ l(ui.projects.eyebrow) }}</p>
        <h2 class="section-title">{{ l(ui.projects.title) }}</h2>
      </div>

      <div class="grid">
        <article
          v-for="project in projects"
          :key="project.title"
          class="project glass reveal"
        >
          <div class="thumb" aria-hidden="true">{{ initials(project.title) }}</div>

          <div class="body">
            <div class="heading">
              <h3 class="title">{{ project.title }}</h3>
              <span class="year">{{ project.year }}</span>
            </div>
            <p class="desc">{{ l(project.description) }}</p>

            <ul class="tags">
              <li v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</li>
            </ul>

            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener"
              class="link"
            >
              {{ domain(project.link) }}
              <AppIcon name="arrow-up-right" />
            </a>
            <span v-else class="private">{{ l(ui.projects.private) }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
  gap: 1.25rem;
}

.project {
  display: flex;
  flex-direction: column;
  gap: 1.125rem;
  padding: 1rem 1rem 1.75rem;
  border-radius: var(--radius-lg);
  box-shadow: 0 0.5rem 2rem rgba(2, 6, 23, 0.3), var(--glass-highlight);
}

.thumb {
  height: 12.5rem;
  border-radius: 1.125rem;
  background: var(--surface);
  border: 0.0625rem solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--display);
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-dim);
}

.body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding-inline: 0.75rem;
}

.heading {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.75rem;
}

.title {
  font-family: var(--display);
  font-size: 1.375rem;
  color: var(--white);
}

.year {
  flex: none;
  font-family: var(--mono);
  font-size: 0.8125rem;
  color: var(--text-dim);
}

.desc {
  flex: 1;
  color: var(--text-soft);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.tag {
  padding: 0.25rem 0.625rem;
  border-radius: 999rem;
  background: var(--surface-2);
  border: 0.0625rem solid var(--border-soft);
  font-size: 0.8125rem;
}

.link,
.private {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
}

.link {
  align-self: flex-start;
  gap: 0.375rem;
  font-weight: 700;
  color: var(--accent);
  overflow-wrap: anywhere;
}

.private {
  font-size: 0.875rem;
  color: var(--text-dim);
}
</style>
