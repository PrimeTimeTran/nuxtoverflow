<template>
  <div class="md:pt-24">
    <li
      v-for="category in categories[1].children"
      class="list-none"
    >
      <ul
        class="list-none"
        v-if="category.children?.length > 0"
      >
        <NuxtLink
          :href="category._path"
          class="text-gray-100 hover:text-gray-500"
        >
          {{ category.title }}
        </NuxtLink>
        <div class="py-3 ml-1">
          <li
            class="border-l dark:border-l-white"
            v-for="child in category.children.slice(1)"
          >
            <NuxtLink
              :href="child._path"
              class="text-gray-500 hover:text-gray-100 ml-6 min-w-full"
            >
              {{ child.title }}
            </NuxtLink>
            <div
              class="w-1/12 border-b-white border-b overflow-visible relative bottom-3"
            />
          </li>
        </div>
      </ul>
      <div v-else>
        <NuxtLink
          :href="category._path"
          class="text-gray-500 hover:text-gray-100"
        >
          {{ category.title }}
        </NuxtLink>
      </div>
    </li>
  </div>
</template>

<script setup>
const props = defineProps(['categories'])
</script>
