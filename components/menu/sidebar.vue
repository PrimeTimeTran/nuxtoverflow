<template>
  <div class="sidebar">
    <div
      v-if="isOpen"
      class="sidebar-backdrop"
      @click="$emit('toggled')"
    />
    <transition name="slide">
      <div
        v-if="isOpen"
        class="sidebar-panel min-w-full"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>
<script setup>
const props = defineProps(['isOpen'])
const emit = defineEmits(['toggled'])
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  position: fixed;
  background-color: rgba(19, 15, 64, 0.4);
}

.sidebar-panel {
  top: 0;
  left: 0;
  z-index: 999;
  height: 100vh;
  position: fixed;
  overflow-y: auto;
  background-color: #130f40;
  padding: 3rem 20px 2rem 20px;
}
</style>
