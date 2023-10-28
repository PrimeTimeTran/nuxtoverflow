<template>
  <NuxtLayout>
    <ContentDoc class="prose">
      <template #not-found>
        <h2>Blog slug ({{ $route.params.slug }}) not found</h2>
      </template>
    </ContentDoc>
  </NuxtLayout>
</template>
