<template>
  <div
    x-cloak
    :x-data="appData()"
    :x-init="appInit()"
    class="flex flex-col items-center justify-center"
  >
    <navbar-scroll-spy :percent="percent" />
    <nav
      class="fixed top-0 left-0 right-0 z-10 w-screen flex flex-wrap items-center justify-around bg-white dark:bg-slate-800 backdrop-blur-md shadow-md"
    >
      <div
        class="container px-4 mx-auto flex flex-wrap items-center justify-between"
      >
        <div
          class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start py-3"
        >
          <navbar-logo />
          <NuxtLink
            type="button"
            class="flex items-center text-gray-500 cursor-pointer text-xl leading-none border border-solid border-transparent rounded bg-transparent lg:hidden outline-none focus:outline-none hover:cursor-pointer hover:text-blue-500"
          >
            <font-awesome-icon icon="fa-solid fa-bars" />
          </NuxtLink>
        </div>
        <div
          v-bind:class="{ hidden: !showMenu, flex: showMenu }"
          class="lg:flex lg:flex-grow items-center"
        >
          <navbar-items />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
const browser = process.browser

export default {
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu
    },
  },
}
</script>

<script setup>
import { ref } from 'vue'
const percent = ref(0)

function appInit() {
  if (browser && window.location.pathname != '/login') {
    window?.addEventListener('scroll', () => {
      let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
      let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      percent.value = Math.round((winScroll / height) * 100)
    })
  }
}

function appData() {
  if (browser && window.location.pathname != '/login') {
    return {
      percent,
    }
  }
}
</script>
