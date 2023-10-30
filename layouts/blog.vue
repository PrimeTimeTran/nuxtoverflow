<template>
  <div
    class="flex flex-col min-h-screen justify-between dark:bg-slate-700 dark:text-white"
  >
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
