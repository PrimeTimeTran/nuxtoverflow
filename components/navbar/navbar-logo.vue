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
import { useDark } from '@vueuse/core'
const isDark = useDark()

export default {
  computed: {
    imageSource() {
      return isDark.value
        ? 'https://i.imgur.com/D0epYhy.png'
        : 'https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg'
    },
  },
}
</script>
