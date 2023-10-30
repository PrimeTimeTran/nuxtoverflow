<template>
  <div class="flex flex-row min-h-full">
    <div
      class="flex flex-col min-w-fit min-h-screen p-3 hidden invisible lg:block lg:visible bg-gray-100 md:bg-blue-950"
    >
      <menu-table-of-contents :categories="categories" />
    </div>
    <div class="flex w-full pt-24 px-4 md:px-6 visible">
      <ContentDoc class="prose dark:prose-invert" />
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
</template>

<script setup>
definePageMeta({
  layout: 'blog',
})
const { gtag } = useGtag()
gtag('event', 'screen_view', {
  app_name: 'Nuxt-Blog',
  screen_name: 'Blog',
})

const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
)

let categories = navigation

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
