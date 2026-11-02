<script setup lang="ts">
import {
  profile,
  ui
} from '~/data/portfolio'

const year = new Date().getFullYear()
const setLocale = useLocalized()
</script>

<template>
  <footer class="footer container">
    <div class="row">
      <p>
        © {{ year }} {{ profile.name }}
      </p>

      <p>
        {{ setLocale(ui.footer.builtWith) }}
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding-block: 1.25rem 3rem;
  font-size: 0.875rem;
  color: var(--text-dim);
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: space-between;
  padding-top: 1.5rem;
  border-top: 0.0625rem solid var(--line);
}
</style>
