<script setup lang="ts">
import { profile } from '~/data/portfolio'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container row">
      <p>© {{ year }} {{ profile.name }}. Built with Nuxt 3.</p>
      <a href="#top" class="top">Back to top ↑</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding-block: 28px;
  color: var(--text-dim);
  font-size: 0.85rem;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
}

.top {
  font-family: var(--mono);
  transition: color 0.18s ease;
}

.top:hover {
  color: var(--accent);
}
</style>
