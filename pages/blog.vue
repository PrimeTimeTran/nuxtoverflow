<template>
  <div id="app">
    <nav class="main-nav">
      <div class="logo">my.company</div>
      <menu-burger
        :isOpen="isOpen"
        @toggled="handleToggleOpen"
      />
    </nav>
    <menu-sidebar
      :isOpen="isOpen"
      @toggled="handleToggleOpen"
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
    <div class="flex pt-24 px-6 visible">
      <ContentDoc class="prose" />
    </div>
  </div>
</template>

<script setup>
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
)
let categories = navigation

const { isOpen, toggleOpen } = useToggleOpen()

const handleToggleOpen = () => {
  console.log('toggling!')
  toggleOpen()
}
</script>

<style scoped>
html {
  height: 100%;
  overflow: hidden;
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: 'Lato';
  height: 100%;
  background: rgb(101, 31, 87);
  background: linear-gradient(
    45deg,
    rgba(101, 31, 87, 1) 0%,
    rgba(225, 113, 87, 1) 48%,
    rgba(249, 248, 113, 1) 100%
  );
}

.logo {
  align-self: center;
  color: #fff;
  font-weight: bold;
  font-family: 'Lato';
}

.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.8rem;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li > a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  display: block;
  padding-bottom: 0.5em;
}
</style>
