<template>
  <p
    class="font-sans p-8 text-start md:text-center md:text-lg md:p-4 text-gray-600"
  >
    © {{ currentYear }}
    <a
      href="https://ltran.net"
      class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
    >
      PrimeTimeTran
    </a>
    . All rights reserved.
  </p>
</template>
<script>
export default {
  data() {
    return {
      frameworks: [
        {
          name: 'Vue',
          url: 'https://nuxtoverflow.ltran.net',
        },
        {
          name: 'Nuxt',
          url: 'https://nuxtoverflow.ltran.net',
        },
        {
          name: 'React',
          url: 'https://react-blog.ltran.net',
        },
        {
          name: 'Next',
          url: 'https://strapi-blog.ltran.net',
        },
        {
          name: 'React Native',
          url: '',
        },
        {
          name: 'Flutter',
          url: '',
        },
        {
          name: 'Svelte',
          url: 'https://svelte-blog.ltran.net',
        },
      ],
      backends: ['NodeJS', 'Ruby On Rails', 'Django', '.NET'],
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>
