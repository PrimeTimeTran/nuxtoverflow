<template>
  <div>
    <img
      width="600"
      height="300"
      v-if="thumbnailPath"
      :src="thumbnailPath"
    />
    <ContentDoc class="prose dark:prose-invert md:w-screen pb-32" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'blog-layout',
})
const { gtag } = useGtag()
gtag('event', 'screen_view', {
  app_name: 'Nuxt-Blog',
  screen_name: 'Blog',
})
const route = useRoute()
let data = await queryContent(route.fullPath).find()

const weird = data[data.length - 1]._path == route.fullPath
if (weird) {
  const currentLast = data.pop()
  data.unshift(currentLast)
}
</script>
