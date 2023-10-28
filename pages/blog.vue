<template>
  <li
    v-for="category in categories[0].children"
    class="my-3 list-none"
  >
    <ul v-if="category.children?.length > 0">
      <h1>
        <a
          :href="category._path"
          class="text-blue-500"
        >
          {{ category.title }}
        </a>
      </h1>
      <div>
        <li
          class="my-3 list-none ml-6"
          v-for="child in category.children.slice(1)"
        >
          <a
            :href="child._path"
            class="text-blue-500"
          >
            {{ child.title }}
          </a>
        </li>
      </div>
    </ul>
    <div v-else>
      <a
        :href="category._path"
        class="text-blue-500"
      >
        {{ category.title }}
      </a>
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
