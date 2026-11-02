<script setup lang="ts">
defineProps<{
  name: 'arrow-up-right' | 'arrow-right' | 'code' | 'mail' | 'pin' | 'linkedin' | 'facebook'
}>()
</script>

<template>
  <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
    <template v-if="name === 'arrow-up-right'">
      <path d="M7 17 17 7" /><path d="M8 7h9v9" />
    </template>
    <template v-else-if="name === 'arrow-right'">
      <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
    </template>
    <template v-else-if="name === 'code'">
      <path d="M16 18l6-6-6-6" /><path d="M8 6l-6 6 6 6" />
    </template>
    <template v-else-if="name === 'mail'">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
    </template>
    <template v-else-if="name === 'pin'">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" />
    </template>
    <template v-else-if="name === 'linkedin'">
      <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v6" /><path d="M8 7v.01" />
      <path d="M12 17v-6" /><path d="M16 17v-3.5a2.5 2.5 0 0 0-4 0" />
    </template>
    <path v-else d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />
  </svg>
</template>
