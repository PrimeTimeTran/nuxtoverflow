<template>
  <div class="container pt-1 rounded-xl">
    <div
      v-if="filename || languageText"
      class="flex justify-between border-b-2 border-gray-600 p-1"
    >
      <span
        v-if="filename"
        class="file-name-text ml-3 text-gray-600"
      >
        {{ filename }}
      </span>
      <span
        v-if="languageText"
        class="language-text mr-3 rounded px-1"
        :style="{ background: languageBackground, color: languageColor }"
      >
        {{ languageText }}
      </span>
    </div>
    <slot />
    <div class="flex justify-end relative right-4 bottom-12 h-0">
      <span
        v-if="copied"
        class="mr-3 text-gray-300 h-0"
      >
        Copied
      </span>
      <button @click="copy(code)">
        <font-awesome-icon
          color="white"
          icon="fa-solid fa-copy"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const { copy, copied, text } = useClipboard()

const props = withDefaults(
  defineProps<{
    code?: string
    language?: string | null
    filename?: string | null
    highlights?: Array<number>
  }>(),
  { code: '', language: null, filename: null, highlights: () => [] }
)

const languageMap: Record<
  string,
  { text: string; color: string; background: string }
> = {
  vue: {
    text: 'vue',
    background: '#42b883',
    color: 'white',
  },
  javascript: {
    text: 'javascript',
    color: 'black',
    background: '#f7df1e',
  },
  js: {
    text: 'js',
    color: 'black',
    background: '#f7df1e',
  },
  dart: {
    text: 'dart',
    color: 'white',
    background: '#0075BA',
  },
}

const languageText = computed(() =>
  props.language ? languageMap[props.language]?.text : null
)

const languageBackground = computed(() =>
  props.language ? languageMap[props.language]?.background : null
)
const languageColor = computed(() =>
  props.language ? languageMap[props.language]?.color : null
)
</script>

<style scoped>
.container {
  position: relative;
  margin-bottom: 1rem;
  background: #1f2937;
}

.language-text  {
  top: 0;
  right: 1em;
  font-size: 14px;
  position: absolute;
  padding: 0.25em 0.5em;
  text-transform: uppercase;
  border-bottom-left-radius: 0.25em;
  border-bottom-right-radius: 0.25em;
}

:slotted(pre) {
  flex: 1 1 0%;
  display: flex;
  overflow-x: auto;
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 1.625;
  counter-reset: lines;
}

:slotted(pre code) {
  width: 100%;
  display: flex;
  flex-direction: column;
}

:slotted(pre code .line) {
  display: inline-table;
  min-height: 1rem;
}

:slotted(pre code .line::before) {
  width: 1rem;
  text-align: left;
  margin-right: 1.5rem;
  display: inline-block;
  content: counter(lines);
  counter-increment: lines;
  color: rgba(115, 138, 148, 0.4);
}

:slotted(pre code .highlight) {
  display: block;
  margin-left: -1em;
  margin-right: -1em;
  padding-right: 1em;
  padding-left: 0.75em;
  background-color: #363b46;
  border-left: 0.25em solid red;
}
</style>
