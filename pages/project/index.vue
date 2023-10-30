<template>
  <div class="pt-24">
    <ContentDoc class="prose dark:prose-invert" />
    <li
      v-for="item in projects"
      class="my-3 list-none"
    >
      <a
        :href="item._path"
        class="text-blue-500"
      >
        {{ item.title }}
      </a>
    </li>
  </div>
</template>

<script setup>
let projects = await queryContent('project').find()
projects.pop()
const { gtag } = useGtag()
gtag('event', 'screen_view', {
  app_name: 'Nuxt-Blog',
  screen_name: 'Projects',
})
</script>
