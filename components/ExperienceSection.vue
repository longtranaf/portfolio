<script setup lang="ts">
import { 
  experience,
} from '~/data/portfolio'
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <div class="section-head reveal">
        <p class="eyebrow">04 — Path</p>
        <h2 class="section-title">Experience</h2>
      </div>

      <ol class="timeline">
        <li v-for="item in experience" :key="item.role + item.company" class="item reveal">
          <div class="marker" aria-hidden="true"></div>
          <div class="content">
            <div class="row">
              <h3 class="role">
                {{ item.role }}
                <span class="at">@ {{ item.company }}</span>
              </h3>
              <span class="period">{{ item.period }}</span>
            </div>
            <p class="desc" v-for="(description, index) in item.descriptions" :key="index">
              {{ description }}
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  padding-left: 28px;
  list-style: none;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 6px;
  bottom: 6px;
  width: 2px;
  background: var(--border);
}

.item {
  position: relative;
  padding-bottom: 36px;
}

.item:last-child {
  padding-bottom: 0;
}

.marker {
  position: absolute;
  left: -28px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--gradient);
  box-shadow: 0 0 0 4px var(--bg);
}

.row {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
}

.role {
  font-size: 1.15rem;
  font-weight: 700;
}

.at {
  color: var(--accent);
}

.period {
  font-family: var(--mono);
  font-size: 0.82rem;
  color: var(--text-dim);
}

.desc {
  color: var(--text-muted);
  margin-top: 8px;
  max-width: 65ch;
}
</style>
