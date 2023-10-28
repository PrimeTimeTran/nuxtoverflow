<template>
  <NuxtLayout>
    <br />
    <h1 class="text-3xl">Projects</h1>
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
    <ContentDoc class="prose" />
  </NuxtLayout>
</template>

<script setup>
let projects = await queryContent('project').find()
projects.pop()
console.log({
  projects,
})
</script>
