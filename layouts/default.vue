<template>
  <div class="flex flex-col min-h-screen justify-between">
    <div class="min-h-screen px-6 md:px-8 lg:px-64">
      <navbar />
      <slot />
    </div>
    <div>
      <my-footer />
    </div>
  </div>
</template>

<script setup></script>
