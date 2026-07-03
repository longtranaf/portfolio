<script setup lang="ts">
import { profile } from '~/data/portfolio'
</script>

<template>
  <section id="contact" class="section">
    <div class="container inner reveal">
      <p class="eyebrow">
        05 — Contact
      </p>

      <h2 class="section-title">
        Let’s build something
      </h2>

      <p class="lede">
        I’m always open to interesting projects and conversations. Whether you have
        a question or just want to say hi, my inbox is open.
      </p>
      <a :href="`mailto:${profile.email}`" class="btn btn-primary big">
        Say hello
      </a>

      <ul class="socials">
        <li v-for="s in profile.socials" :key="s.label">
          <a :href="s.url" target="_blank" rel="noopener">
            {{ s.label }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.inner {
  max-width: 620px;
  margin-inline: auto;
  text-align: center;
}

.lede {
  color: var(--text-muted);
  margin-top: 18px;
  font-size: 1.1rem;
}

.big {
  margin-top: 32px;
  padding: 15px 34px;
  font-size: 1.05rem;
}

.socials {
  display: flex;
  justify-content: center;
  gap: 24px;
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
</style>
