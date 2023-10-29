<template>
  <div class="pt-24">
    <ContentDoc class="prose" />
  </div>
</template>

<script setup>
const { gtag } = useGtag()
gtag('event', 'screen_view', {
  app_name: 'Nuxt-Blog',
  screen_name: 'About',
})
</script>
