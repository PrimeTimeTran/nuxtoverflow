<template>
  <div class="md:pt-24">
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li
          class="list-none"
          :key="category._path"
          v-for="category in navigation[1].children"
        >
          <ul class="list-none">
            <NuxtLink
              :to="category._path"
              @click="$emit('toggled')"
              class="text-white hover:text-gray-500"
            >
              {{ category.title }}
            </NuxtLink>
            <div class="py-3 ml-1">
              <li
                class="border-l dark:border-l-white"
                v-for="child in callExposedFunction(category)"
              >
                <NuxtLink
                  :to="child._path"
                  @click="$emit('toggled')"
                  class="text-white hover:text-gray-500 ml-6 min-w-full"
                >
                  {{ child.title }}
                </NuxtLink>
                <div
                  class="w-1/12 border-b-white border-b overflow-visible relative bottom-3"
                />
              </li>
            </div>
          </ul>
        </li>
      </ul>
    </ContentNavigation>
  </div>
</template>

<script setup>
const emit = defineEmits(['toggled'])
// Note: Sometimes the index.md of a directory is the last item
// in the list. This ensures the structure of the table of contents is correct.
// Known cases are Flutter, GCP, Business
const callExposedFunction = (category) => {
  const items = category.children
  if (category._path == '') {
  }
  const weird = items[items.length - 1]._path == category._path
  if (weird) {
    const last = items.pop()
    items.unshift(last)
  }

  return items
}
</script>
