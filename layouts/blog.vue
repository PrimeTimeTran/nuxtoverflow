<template>
  <div
    class="flex flex-col min-h-screen justify-between dark:bg-slate-700 dark:text-white"
  >
    <div class="min-h-screen">
      <navbar />
      <div class="flex flex-row min-h-full">
        <div
          class="flex flex-col min-w-fit min-h-screen p-3 hidden invisible lg:block lg:visible bg-gray-100 md:bg-blue-950"
        >
          <menu-table-of-contents :categories="categories" />
        </div>
        <div class="flex w-full pt-24 px-4 md:px-6 visible">
          <slot />
          <nav
            class="main-nav visible lg:block md:invisible rounded border-blue-100 border-2 z-10 shadow"
          >
            <menu-burger
              :isOpen="isOpen"
              @toggled="handleToggle"
            />
          </nav>
          <menu-sidebar
            :isOpen="isOpen"
            @toggled="handleToggle"
          >
            <menu-table-of-contents :categories="categories" />
          </menu-sidebar>
        </div>
      </div>
    </div>
    <div>
      <my-footer />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

let categories = ref([])

const { data: navigation } = await useAsyncData(
  'navigation',
  () => fetchContentNavigation(),
  {},
  {
    watch: [categories],
  }
)
// Categories is not always up to date. It prints correctly but doesn't log correctly.
// Some categories have children "out of order". Flutter
categories = navigation

// watch(
//   () => categories,
//   (neww, oldd) => {
//     console.log({
//       neww,
//       oldd,
//     })
//   }
// )

const { isOpen, toggleOpen } = useToggleOpen()

const handleToggle = () => {
  toggleOpen()
}
</script>

<style scoped>
.main-nav {
  right: 10px;
  bottom: 10px;
  display: flex;
  position: fixed;
  padding: 0.5rem 0.8rem;
  justify-content: space-between;
  background-color: rgba(19, 15, 64);
}
</style>
