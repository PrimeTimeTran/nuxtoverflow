<template>
  <div class="bg-pink-900 p-24 text-3xl">
    <h1>Demo Dynamic Route</h1>
    <p class="m-3 text-2xl">Slug: {{ routeName }}</p>
    <p class="m-3 text-2xl">Query Params: {{ query }}</p>
  </div>
</template>

<script setup>
const { currentRoute } = useRouter()
const route = currentRoute.value
const query = route.query
const routeName = route.params.slug[0]
</script>
