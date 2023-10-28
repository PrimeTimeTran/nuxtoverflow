<template>
  <NuxtLayout>
    <br />
    <h1 class="text-3xl">Blogs</h1>
    <p>I chose to use this blogging tool because of syntax highlighting.</p>
    <p>
      It's been pretty cool so far. I'll see how everything else goes as well.
    </p>
    <li
      v-for="item in navigation[0].children"
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
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
)
</script>
