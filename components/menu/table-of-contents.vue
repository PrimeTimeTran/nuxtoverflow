<template>
  <div class="md:pt-24">
    <li
      v-for="category in categories[1].children"
      class="list-none"
    >
      <ul v-if="category.children?.length > 0">
        <NuxtLink
          :href="category._path"
          class="text-blue-500"
        >
          {{ category.title }}
        </NuxtLink>
        <div>
          <li
            class="list-none ml-6"
            v-for="child in category.children.slice(1)"
          >
            >
            <NuxtLink
              :href="child._path"
              class="text-blue-500"
            >
              {{ child.shortName != null ? child.shortName : child.title }}
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
  </div>
</template>

<script setup>
const props = defineProps(['categories'])
</script>
