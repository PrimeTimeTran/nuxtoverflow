<template>
  <div class="pt-24">
    <ContentDoc class="prose" />
  </div>
</template>

<script setup>
useHead({
  script: [
    { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
  ],
})
</script>
