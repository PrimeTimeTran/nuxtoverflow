<template>
  <ul class="flex flex-col lg:flex-row list-none m-auto w-full">
    <NuxtLink
      :href="item.url"
      :key="item.name"
      v-for="item in navItems"
      class="flex items-center text-gray-500 hover:text-blue-500 cursor-pointer transition-colors duration-300 px-12 text-xs font-bold hover:opacity-75 py-3"
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
          url: '/blog',
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
