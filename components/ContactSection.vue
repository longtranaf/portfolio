<script setup lang="ts">
import {
  education,
  languages,
  profile,
  ui
} from '~/data/portfolio'

const setLocale = useLocalized()

const icons = {
  GitHub: 'code',
  LinkedIn: 'linkedin',
  Facebook: 'facebook'
} as const
</script>

<template>
  <section id="contact" class="section">
    <div class="container inner">
      <div class="main glass reveal">
        <p class="eyebrow">
          {{ setLocale(ui.contact.eyebrow) }}
        </p>
        <h2 class="headline">
          {{ setLocale(ui.contact.headlineTop) }}

          <br>

          {{ setLocale(ui.contact.headlineBottom) }}
        </h2>

        <div class="details">
          <a :href="`mailto:${profile.email}`">
            <AppIcon name="mail" />
            {{ profile.email }}
          </a>

          <span>
            <AppIcon name="pin" />
            {{ setLocale(profile.location) }}
          </span>
        </div>

        <ul class="socials">
          <li v-for="social in profile.socials" :key="social.label">
            <a :href="social.url" target="_blank" rel="noopener">
              <AppIcon :name="icons[social.label as keyof typeof icons]" />

              <span>
                {{ social.label }}
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div class="side">
        <div class="info glass reveal">
          <span class="label">
            {{ setLocale(ui.contact.education) }} · {{ education.period }}
          </span>
          <h3 class="info-title">
            {{ setLocale(education.school) }}
          </h3>
          <span class="info-note">
            {{ setLocale(education.major) }}
          </span>
        </div>

        <div class="info glass reveal">
          <span class="label">
            {{ setLocale(ui.contact.languages) }}
          </span>
          <h3 class="info-title">
            {{ setLocale(languages.spoken) }}
          </h3>
          <span class="info-note">
            {{ setLocale(languages.note) }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.inner {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.main {
  flex: 999 1 35rem;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: clamp(1.5rem, 5vw, 3rem);
  background: rgba(255, 255, 255, 0.07);
  border-color: var(--border);
  border-radius: var(--radius-xl);
  box-shadow: 0 0.75rem 2.5rem rgba(2, 6, 23, 0.4), inset 0 0.0625rem 0 rgba(255, 255, 255, 0.14);
}

.headline {
  font-family: var(--display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--white);
}

.details {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.details a,
.details span {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 2.75rem;
  font-size: clamp(1rem, 2.4vw, 1.125rem);
  font-weight: 600;
  overflow-wrap: anywhere;
}

.details a {
  align-self: flex-start;
  transition: color 0.18s ease;
}

.details a:hover,
.socials a:hover {
  color: var(--white);
}

.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 0 1.25rem;
}

.socials a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  font-size: 0.9375rem;
  color: var(--text-dim);
  transition: color 0.18s ease;
}

.side {
  flex: 1 1 18.75rem;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: clamp(1.25rem, 4vw, 1.75rem);
}

.label {
  font-family: var(--mono);
  font-size: 0.8125rem;
  color: var(--text-dim);
}

.info-title {
  font-family: var(--display);
  font-size: 1.25rem;
  color: var(--white);
}

.info-note {
  color: var(--text-soft);
}
</style>
