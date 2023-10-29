<template>
  <h1>Hm Im a blog slug</h1>
  <NuxtLayout name="blog">
    <h1>Hm Im a blog slug</h1>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { gtag } = useGtag()
gtag('event', 'screen_view', {
  app_name: 'Nuxt-Blog',
  screen_name: 'Blog/BlogPost',
})
</script>
