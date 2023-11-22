<script>
definePageMeta({
  layout: 'landing-layout',
})
</script>
<template>
  <div class="overflow-auto scrollbar-hide">
    <section
      class="flex items-center justify-center w-screen h-screen odd:bg-orange-100 even:bg-green-100 dark:odd:bg-slate-900 dark:even:bg-zinc-900 dark:text-white"
    >
      <div
        class="flex justify-center items-center md:mx-auto md:pl-24 overflow-hidden"
      >
        <div
          class="flex flex-col-reverse space-y-4 md:flex-row md:items-center md:justify-between lg:flex-row md:py-16"
        >
          <div class="flex-4 md:pl-24">
            <p class="flex text-sm uppercase text-g1">Turboship</p>
            <h2
              class="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug"
            >
              We help you
              <span
                class="my-1 inline-block border-b-8 border-b-green-400 px-4 font-bold text-g4 animate__animated animate__flash"
              >
                deliver
              </span>
            </h2>
            <p class="text-base text-gray-700 dark:text-white">
              Focus on what makes your business stand out. We've got foundation
              covered
            </p>
            <div class="mt-10 flex flex-col items-center md:flex-row">
              <a
                href="/"
                class="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-600 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto"
              >
                View More
              </a>
              <a
                href="/"
                aria-label=""
                class="group inline-flex items-center font-semibold text-g1"
              >
                Watch how it works
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="block md:relative md:overflow-hidden">
            <img
              width="1500"
              height="900"
              class="flex-1 md:ml-64 md:relative"
              src="~/assets/images/Mockups/MacbookAir.png"
            />
          </div>
        </div>
      </div>
      <div
        class="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40"
      >
        About Us
      </div>
    </section>
    <section class="w-screen h-screen odd:bg-red-100 even:bg-green-100">
      2
    </section>
    <section class="w-screen h-screen odd:bg-red-100 even:bg-green-100">
      3
    </section>
    <section class="w-screen h-screen odd:bg-red-100 even:bg-green-100">
      4
    </section>
  </div>
  <ContentDoc class="prose dark:prose-invert" />
</template>
