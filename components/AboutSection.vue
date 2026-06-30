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
        <p class="para">{{ profile.intro }}</p>
        <p class="para">
          When I’m not shipping, I’m usually exploring new tools, contributing to
          open source, or refining my craft. I believe great software comes from
          caring about both the big picture and the tiny details.
        </p>

        <div class="facts">
          <div class="fact">
            <span class="num gradient-text">5+</span>
            <span class="label">Years building</span>
          </div>
          <div class="fact">
            <span class="num gradient-text">30+</span>
            <span class="label">Projects shipped</span>
          </div>
          <div class="fact">
            <span class="num gradient-text">∞</span>
            <span class="label">Curiosity</span>
          </div>
        </div>
      </div>

      <div class="card reveal">
        <div class="avatar">{{ profile.name.split(' ').map(n => n[0]).join('') }}</div>
        <h3>{{ profile.name }}</h3>
        <p class="role">{{ profile.role }}</p>
        <p class="loc">📍 {{ profile.location }}</p>
        <a :href="profile.resumeUrl" class="btn btn-ghost resume">Download résumé</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 48px;
  align-items: start;
}

.para {
  color: var(--text-muted);
  margin-bottom: 18px;
  max-width: 60ch;
}

.facts {
  display: flex;
  gap: 36px;
  margin-top: 28px;
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
  margin-top: 6px;
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px;
  text-align: center;
  box-shadow: var(--shadow);
  position: sticky;
  top: calc(var(--header-h) + 24px);
}

.avatar {
  width: 92px;
  height: 92px;
  border-radius: 50%;
  margin: 0 auto 18px;
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
  margin-top: 4px;
}

.loc {
  color: var(--text-dim);
  font-size: 0.9rem;
  margin-top: 10px;
}

.resume {
  margin-top: 22px;
}

@media (max-width: 820px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .card {
    position: static;
  }
}
</style>
