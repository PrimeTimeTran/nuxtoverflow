<script setup>
import { useClipboard } from '@vueuse/core'

const { entities } = useEntities()

const source = ref('')
const { text, copy, copied } = useClipboard({ source })

const copyer = (values) => {
  copy(JSON.stringify(values))
  setTimeout(() => {
    text.value = 'Done'
  }, 1500)
}

const sparse = ref(false)
</script>
<template>
  <div
    role="group"
    class="align-middle items-center text-center ml-6 rounded-md"
  >
    <button
      id="actionDense"
      type="button"
      @click="
        () => {
          sparse = !sparse
        }
      "
      class="rounded-l-lg border px-4 py-2 hover:bg-gray-100"
    >
      <span
        v-if="sparse"
        class="mr-2"
        v-text="'Full'"
      />
      <span
        v-else
        class="mr-2"
      >
        <u>D</u>ense
      </span>
      <font-awesome-icon
        color="grey"
        icon="fa-solid fa-sort"
      ></font-awesome-icon>
    </button>
    <button
      v-if="sparse"
      id="actionCopy"
      type="button"
      class="rounded-r-md border px-4 py-2 hover:bg-gray-100"
      @click="copyer(sparseEntities(entities))"
    >
      <span v-if="!copied">Copy</span>
      <span v-else>Copied!</span>
      <font-awesome-icon
        color="grey"
        class="ml-2"
        icon="fa-solid fa-clipboard"
      />
    </button>
    <button
      v-else
      id="actionCopy"
      type="button"
      class="rounded-r-md border px-4 py-2 hover:bg-gray-100"
      @click="copyer(entities)"
    >
      <span v-if="!copied">C<u>o</u>py</span>
      <span v-else>Copied!</span>
      <font-awesome-icon
        class="ml-2"
        color="grey"
        icon="fa-solid fa-clipboard"
      />
    </button>
  </div>
  <pre v-if="sparse">{{ sparseEntities(entities) }}</pre>
  <pre v-else>{{ entities }}</pre>
</template>
