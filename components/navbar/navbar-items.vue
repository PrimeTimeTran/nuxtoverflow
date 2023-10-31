<template>
  <ul class="flex flex-col lg:flex-row list-none m-auto w-full">
    <NuxtLink
      :to="item.url"
      :key="item.name"
      v-for="item in navItems"
      class="flex items-center text-gray-500 dark:text-white hover:text-gray-900 hover:border-b-2 hover:border-b-gray-900 dark:hover:border-b-2 dark:hover:border-b-white cursor-pointer transition-colors duration-300 px-12 text-xs font-bold hover:opacity-75 py-3"
    >
      <font-awesome-icon
        :icon="item.icon"
        class="mr-3"
      />
      {{ item.name }}
    </NuxtLink>
  </ul>
  <navbar-right id="navItems-right" />
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          url: '/',
          name: 'Home',
          icon: 'fa-house',
        },
        {
          url: '/blog/blogs',
          name: 'Blog',
          icon: 'fa-blog',
        },
        {
          url: '/tag',
          name: 'Tags',
          icon: 'fa-tags',
        },
        {
          url: '/project',
          name: 'Projects',
          icon: 'fa-diagram-project',
        },
        {
          url: '/about',
          name: 'About',
          icon: 'fa-user',
        },
      ],
    }
  },
}
</script>
