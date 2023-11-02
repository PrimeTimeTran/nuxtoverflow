<template>
  <div class="flex flex-col justify-between dark:bg-gray-900 dark:text-white">
    <div class="min-h-screen">
      <navbar />
      <div class="flex flex-row">
        <div
          class="flex flex-col flex-grow h-full max-h-screen overflow-y-auto min-w-fit p-3 hidden invisible lg:block lg:visible dark:bg-slate-800 border-r-2 border-gray dark:border-gray-950"
        >
          <menu-toc @toggled="handleToggle" />
        </div>
        <div
          class="flex md:justify-center w-full max-h-screen overflow-y-auto pt-24 px-4 md:px-6 visible"
        >
          <slot />
          <nav
            class="main-nav visible lg:block md:invisible rounded border-blue-100 border-2 z-10 shadow"
          >
            <menu-burger
              :isOpen="isOpen"
              @toggled="toggleOpen"
            />
          </nav>
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
