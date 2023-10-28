<template>
  <li
    v-for="category in categories[0].children"
    class="my-3 list-none"
  >
    <ul v-if="category.children?.length > 0">
      <h1>
        <NuxtLink
          :href="category._path"
          class="text-blue-500"
        >
          {{ category.title }}
        </NuxtLink>
      </h1>
      <div>
        <li
          class="my-3 list-none ml-6"
          v-for="child in category.children.slice(1)"
        >
          <NuxtLink
            :href="child._path"
            class="text-blue-500"
          >
            {{ child.title }}
          </NuxtLink>
        </li>
      </div>
    </ul>
    <div v-else>
      <NuxtLink
        :href="category._path"
        class="text-blue-500"
      >
        {{ category.title }}
      </NuxtLink>
    </div>
  </li>
  <ContentDoc class="prose" />
</template>

<script setup>
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
)

let categories = navigation
</script>
