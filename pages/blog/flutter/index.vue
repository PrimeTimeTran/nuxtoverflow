<template>
  <NuxtLayout>
    <br />
    <h1 class="text-3xl">Blogs</h1>
    <li
      v-for="item in navigation[0].children[0].children"
      class="my-3 list-none"
    >
      <a
        :href="item._path"
        class="text-blue-500"
      >
        {{ item.title }}
      </a>
    </li>
    <ContentDoc class="prose" />
  </NuxtLayout>
</template>

<script setup>
let posts = await queryContent('blog').find()
posts.pop()
console.log({
  posts,
})
const flutterQuery = await queryContent('blog', 'flutter').find()
console.log({
  flutterQuery,
})

const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
)
</script>
