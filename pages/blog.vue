<template>
  <div class="flex flex-row min-h-full">
    <div class="flex flex-col bg-gray-100 p-3 min-h-screen">
      <table-of-contents :categories="categories" />
    </div>
    <div class="flex pt-24 px-6">
      <ContentDoc class="prose" />
    </div>
  </div>
</template>

<script setup>
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
)

let categories = navigation
</script>

<script>
export default {
  computed() {
    const pagesNoPadding = ['/login', '/blog/blogs']
    return {}
  },
}
</script>
