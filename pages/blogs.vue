<template>
  <h1 class="mt-24">Blogs</h1>
  <pre class="text-black">
    {{ data }}
  </pre>
</template>

<script setup>
// Query all the content inside of content/blog
const data = await queryContent('blog/blogging').find()

console.log({
  data,
})
</script>
