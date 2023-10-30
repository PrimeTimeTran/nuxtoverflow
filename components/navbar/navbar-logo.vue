<template>
  <div class="flex items-center">
    <NuxtLink
      class="cursor-pointer"
      href="/"
    >
      <h3 class="text-2xl font-medium">
        <img
          alt="Store Logo"
          :src="imageSource"
          class="h-10 object-cover"
        />
      </h3>
    </NuxtLink>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
import { useDark } from '@vueuse/core'

export default {
  setup() {
    const isDark = useDark()
    const imageSource = ref('https://i.imgur.com/XOSnv20.png')

    const initializeImageSource = () => {
      imageSource.value = isDark.value
        ? 'https://i.imgur.com/QgWZit7.png'
        : 'https://i.imgur.com/XOSnv20.png'
    }

    onMounted(() => {
      initializeImageSource()
    })

    // Watch for changes in dark mode and update imageSource accordingly
    watch(isDark, () => {
      initializeImageSource()
    })

    return {
      imageSource,
    }
  },
}
</script>
