<template>
  <div
    x-cloak
    :x-data="appData()"
    :x-init="appInit()"
    :class="navClasses"
  >
    <div class="flex flex-col">
      <div
        class="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5 bg-blue-500"
        :style="`width: ${percent}%`"
      ></div>
      <nav
        class="flex justify-around py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10"
      >
        <div class="flex items-center">
          <NuxtLink class="cursor-pointer">
            <h3 class="text-2xl font-medium text-blue-500">
              <img
                class="h-10 object-cover"
                src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
                alt="Store Logo"
              />
            </h3>
          </NuxtLink>
        </div>

        <div class="items-center hidden space-x-8 lg:flex">
          <NuxtLink
            v-for="item in navItems"
            :href="item.url"
            :key="item.name"
            class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <div class="flex items-center space-x-5">
          <a
            class="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
          >
            <svg
              class="fill-current h-5 w-5 mr-2 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0L11.34 .03L15.15 3.84L16.5 2.5C19.75 4.07 22.09 7.24 22.45 11H23.95C23.44 4.84 18.29 0 12 0M12 4C10.07 4 8.5 5.57 8.5 7.5C8.5 9.43 10.07 11 12 11C13.93 11 15.5 9.43 15.5 7.5C15.5 5.57 13.93 4 12 4M12 6C12.83 6 13.5 6.67 13.5 7.5C13.5 8.33 12.83 9 12 9C11.17 9 10.5 8.33 10.5 7.5C10.5 6.67 11.17 6 12 6M.05 13C.56 19.16 5.71 24 12 24L12.66 23.97L8.85 20.16L7.5 21.5C4.25 19.94 1.91 16.76 1.55 13H.05M12 13C8.13 13 5 14.57 5 16.5V18H19V16.5C19 14.57 15.87 13 12 13M12 15C14.11 15 15.61 15.53 16.39 16H7.61C8.39 15.53 9.89 15 12 15Z"
              />
            </svg>

            Register
          </a>

          <NuxtLink
            class="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold text-blue-600"
            href="/login"
          >
            <svg
              class="fill-current h-5 w-5 mr-2 mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z"
              />
            </svg>
            Login
          </NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
const browser = process.browser
export default {
  data() {
    return {
      navItems: [
        {
          url: '/',
          name: 'Logo',
        },
        {
          url: '/',
          name: 'Home',
        },
        {
          url: '/blog',
          name: 'Blog',
        },
        {
          url: '/tag',
          name: 'Tags',
        },
        {
          url: '/project',
          name: 'Projects',
        },
      ],
    }
  },
  computed: {
    navClasses() {
      const isLogin = browser && window.location.pathname === '/login'
      return {
        flex: true,
        'flex-col': true,
        'items-center': true,
        'justify-center': true,
        'mt-32': !isLogin,
      }
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
