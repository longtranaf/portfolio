<script setup lang="ts">
import { profile } from '~/data/portfolio'
</script>

<template>
  <section id="about" class="section">
    <div class="container grid">
      <div class="text reveal">
        <div class="section-head">
          <p class="eyebrow">01 — About</p>

          <h2 class="section-title">A bit about me</h2>
        </div>
        <p class="para">
          {{ profile.intro }}
        </p>

        <p class="para">
          When I’m not shipping, I’m usually exploring new tools, contributing to
          open source, or refining my craft. I believe great software comes from
          caring about both the big picture and the tiny details.
        </p>

        <div class="facts">
          <div class="fact">
            <span class="num gradient-text">3+</span>

            <span class="label">Years building</span>
          </div>

          <div class="fact">
            <span class="num gradient-text">15+</span>

            <span class="label">Projects shipped</span>
          </div>

          <div class="fact">
            <span class="num gradient-text">∞</span>

            <span class="label">Curiosity</span>
          </div>
        </div>
      </div>

      <div class="card reveal">
        <div class="avatar">
          {{ profile.name.split(' ').map(n => n[0]).join('') }}
        </div>

        <h3>
          {{ profile.name }}
        </h3>

        <p class="role">
          {{ profile.role }}
        </p>

        <p class="loc">
          📍 {{ profile.location }}
        </p>

        <a :href="profile.resumeUrl" class="btn btn-ghost resume">
          Download résumé
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 3rem;
  align-items: start;
}

.para {
  color: var(--text-muted);
  margin-bottom: 1.125rem;
  max-width: 60ch;
}

.facts {
  display: flex;
  gap: 2.25rem;
  margin-top: 1.75rem;
}

.fact {
  display: flex;
  flex-direction: column;
}

.num {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
}

.label {
  font-size: 0.85rem;
  color: var(--text-dim);
  margin-top: 0.375rem;
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow);
  position: sticky;
  top: calc(var(--header-h) + 1.5rem);
}

.avatar {
  width: 5.75rem;
  height: 5.75rem;
  border-radius: 50%;
  margin: 0 auto 1.125rem;
  display: grid;
  place-items: center;
  font-size: 1.8rem;
  font-weight: 800;
  color: #0b0f17;
  background: var(--gradient);
}

.card h3 {
  font-size: 1.3rem;
}

.role {
  color: var(--accent);
  font-weight: 600;
  margin-top: 0.25rem;
}

.loc {
  color: var(--text-dim);
  font-size: 0.9rem;
  margin-top: 0.625rem;
}

.resume {
  margin-top: 1.375rem;
}

@media (max-width: 51.25rem) {
  .grid {
    grid-template-columns: 1fr;
  }
  .card {
    position: static;
  }
}
</style>
