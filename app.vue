<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script>
import { createHead } from 'unhead'

createHead()

import { useHead } from 'unhead'
useHead({
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/alpinejs/3.8.1/cdn.min.js',
      defer: true,
    },
  ],
})
</script>
