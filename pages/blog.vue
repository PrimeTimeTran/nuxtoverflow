<template>
  <div class="flex flex-row min-h-full">
    <div
      class="flex flex-col bg-gray-100 p-3 min-h-screen hidden invisible lg:block lg:visible"
    >
      <menu-table-of-contents :categories="categories" />
    </div>
    <div class="flex px-0 md:px-6 visible pt-24">
      <ContentDoc class="prose" />
      <nav
        class="main-nav visible lg:block md:invisible rounded border-blue-600 border-2 z-10 shadow"
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
