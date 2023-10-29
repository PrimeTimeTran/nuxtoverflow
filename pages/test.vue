<template>
  <div class="pt-24 bg-gray-900 p-16">
    <h1 class="text-white text-6xl">Counter</h1>
    <p class="text-3xl mt-3">Counter: {{ count }}</p>
    <p class="text-3xl mt-3">Same Counter: {{ sameCounter }}</p>
    <p class="mt-8">
      <button
        class="bg-cyan-500 w-32 h-16 rounded text-5xl"
        @click="count--"
      >
        -
      </button>
      <button
        class="bg-cyan-500 ml-6 w-32 h-16 rounded text-5xl"
        @click="count++"
      >
        +
      </button>
    </p>
    <input
      class="text-black mt-6 rounded p-3"
      @input="(e) => (name = e.target.value)"
    />
    <p class="text-3xl mt-3">Name: {{ name }}</p>
  </div>
</template>

<script setup>
const count = useState('counter', () => Math.round(Math.random() * 1000))
const sameCounter = useState('counter')

const name = useState('name', '')
</script>
