<template>
  <NuxtLayout>
    <div>
      <h1 class="text-2xl">Welcome to my blog!</h1>
      <br />
      <div class="text-2xl">Built using the following</div>
      <br />
      <ul>
        <li><a href="https://vuejs.org/">https://vuejs.org/</a></li>
        <li><a href="https://nuxt.com/">https://nuxt.com/</a></li>
        <li><a href="https://decapcms.org/">https://decapcms.org/</a></li>
      </ul>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  script: [
    { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
  ],
})
</script>
