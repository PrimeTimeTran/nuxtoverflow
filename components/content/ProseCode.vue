<template>
  <div class="container">
    <div>
      <span
        v-if="languageText"
        :style="{ background: languageBackground, color: languageColor }"
        class="language-text ml-3 text-white"
      >
        {{ languageText }}
      </span>
      <span
        v-if="filename"
        class="file-name-text ml-3 text-gray-600"
      >
        {{ filename }}
      </span>
    </div>
    <slot />
    <div class="flex justify-end relative right-4 bottom-12 h-0">
      <span
        class="mr-3 text-gray-300 h-0"
        v-if="copied"
      >
        Copied
      </span>
      <button @click="copy(code)">
        <font-awesome-icon
          icon="fa-solid fa-copy"
          color="gray"
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
    text: 'js',
    color: 'black',
    background: '#f7df1e',
  },
  dart: {
    text: 'js',
    color: 'black',
    background: '#f7df1e',
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
  margin-top: 1rem;
  padding-top: 1em;
  overflow: hidden;
  position: relative;
  margin-bottom: 1rem;
  background: #1e1e1e;
  border-radius: 0.5rem;
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
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  flex: 1 1 0%;
  overflow-x: auto;
  padding: 1rem;
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
  counter-increment: lines;
  content: counter(lines);
  width: 1rem;
  margin-right: 1.5rem;
  display: inline-block;
  text-align: left;
  color: rgba(115, 138, 148, 0.4);
}

:slotted(pre code .highlight) {
  background-color: #363b46;
  display: block;
  margin-right: -1em;
  margin-left: -1em;
  padding-right: 1em;
  padding-left: 0.75em;
  border-left: 0.25em solid red;
}
</style>
