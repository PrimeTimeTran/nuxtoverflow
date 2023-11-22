<template>
  <div
    class="flex flex-col flex-grow items-center overflow-auto scrollbar-hide"
  >
    <ContentDoc class="prose dark:prose-invert pb-32 w-11/12 nuxt-content" />
    <pre>
      {{ toc }}
    </pre>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'articles-layout',
})
const route = useRoute()

let data = await queryContent(route.fullPath).find()

const weird = data[data.length - 1]._path == route.fullPath
if (weird) {
  const currentLast = data.pop()
  data.unshift(currentLast)
}
let thumbnail = ''
const setupThumbnail = () => {
  const article = data.find((i) => i._path == route.fullPath)
  if (article) {
    thumbnail = article.thumbnail?.slice(7)
  }
}
setupThumbnail()
</script>
