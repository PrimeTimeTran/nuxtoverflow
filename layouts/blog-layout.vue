<template>
  <div
    class="flex flex-col min-h-screen justify-between dark:bg-gray-900 dark:text-white"
  >
    <div class="min-h-screen">
      <navbar />
      <div class="flex flex-row min-h-full">
        <div
          class="flex flex-col min-h-screen p-3 hidden invisible lg:block lg:visible bg-blue-400 dark:bg-slate-800"
        >
          <menu-toc @toggled="handleToggle" />
        </div>
        <div class="flex w-full pt-24 px-4 md:px-6 visible">
          <slot />
          <menu-burger
            :isOpen="isOpen"
            @toggled="toggleOpen"
          />
          <menu-sidebar
            :isOpen="isOpen"
            @toggled="toggleOpen"
          >
            <menu-toc @toggled="handleToggle" />
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
const { isOpen, toggleOpen } = useToggleOpen()

const handleToggle = () => {
  if (window.innerWidth > 768) return
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
