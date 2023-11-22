<script setup>
definePageMeta({
  layout: false,
})
const { entities } = useEntities()
</script>
<template>
  <NuxtLayout name="entities-layout">
    <div class="absolute left-0 grid grid-cols-12 gap-2 p-2 w-screen h-screen">
      <!-- 
        Easier layout change when containers are together
      -->
      <div
        class="hidden invisible md:flex md:visible md:col-span-2 lg:col-span-2 border-r-2 overflow-auto scrollbar-hide"
      >
        <EntitiesBodyLeft />
      </div>
      <div
        class="col-span-12 md:col-span-10 lg:col-span-7 overflow-auto scrollbar-hide flex flex-col"
      >
        <EntitiesBodyCenter :entities="entities" />
      </div>
      <div
        class="hidden invisible col-span-0 lg:col-span-3 lg:flex lg:flex-col lg:visible lg:justify-start lg:items-start overflow-auto scrollbar-hide border-l-2"
      >
        <EntitiesBodyRight
          :entities="entities"
          v-if="store.stateViewer"
        />
      </div>
    </div>
  </NuxtLayout>
</template>
