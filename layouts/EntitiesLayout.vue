<script setup>
useHead({
  script: [
    // Inline
    {
      type: 'text/javascript',
      innerHTML: 'console.log("Hello There")',
      tagPosition: 'bodyClose',
    },
    // Public folder
    {
      type: 'text/javascript',
      src: 'js/AppScript.js',
      tagPosition: 'bodyClose',
    },
  ],
})
</script>
<template>
  <slot />
</template>
