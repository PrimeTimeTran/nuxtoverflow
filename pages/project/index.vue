<template>
  <ContentDoc class="prose" />
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
</template>

<script setup>
let projects = await queryContent('project').find()
projects.pop()
console.log({
  projects,
})
</script>
