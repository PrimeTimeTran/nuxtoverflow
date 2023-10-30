<template>
  <div class="flex flex-col min-h-screen justify-between">
    <div class="min-h-screen">
      <navbar />
      <slot />
    </div>
    <div>
      <my-footer />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'blog',
})
</script>
