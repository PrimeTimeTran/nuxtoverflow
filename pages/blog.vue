<template>
  <div id="app">
    <nav class="main-nav visible lg:block md:invisible">
      <div class="logo text-white">Nuxt Blog</div>
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
  <div class="flex flex-row min-h-full">
    <div
      class="flex flex-col bg-gray-100 p-3 min-h-screen hidden invisible lg:block lg:visible"
    >
      <menu-table-of-contents :categories="categories" />
    </div>
    <div class="flex pt-24 sm:px-0 md:px-6 visible">
      <ContentDoc class="prose" />
    </div>
  </div>
</template>

<script setup>
const name = useState('name')
const counter = useState('counter')
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
  display: flex;
  padding: 0.5rem 0.8rem;
  justify-content: space-between;
}
</style>
