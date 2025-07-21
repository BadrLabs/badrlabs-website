<template>
  <Transition
    enter-active-class="transition-opacity duration-500"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-500"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isVisible"
      class="fixed inset-0 z-50 flex items-center justify-center"
      :style="{ backgroundColor: backgroundColor }"
      @wheel.prevent
      @touchmove.prevent
    >
      <div class="relative flex items-center justify-center w-full h-full">
        <!-- Typing Dots/Letters -->
        <h1 class="text-5xl font-bold text-center tracking-widest" style="letter-spacing: 0.15em;">
          <span
            v-for="(char, idx) in displayChars"
            :key="idx"
            class="inline-block transition-all duration-150"
            :style="{ color: char === '.' ? secondaryColor : secondaryColor, opacity: 1 }"
          >
            {{ char }}
          </span>
        </h1>
        <!-- Shrinking Ring -->
        <div
          v-if="showCircle"
          class="absolute left-1/2 top-1/2 rounded-full pointer-events-none transition-all duration-1000 ease-out transform -translate-x-1/2 -translate-y-1/2"
          :class="ringClass"
        ></div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(true)
const word = 'BadrLabs'
const displayChars = ref<string[]>(Array(word.length).fill('.'))
const typingDuration = 700 // ms
const secondaryColor = 'var(--color-secondary)'
const primaryColor = 'var(--color-primary)'
const backgroundColor = 'var(--color-background)'
const showCircle = ref(false)
const ringClass = ref(`w-[200vw] h-[200vw] border-[50px] border-[${primaryColor}] bg-transparent rounded-full`)

function startTyping() {
  word.split('').forEach((letter, idx) => {
    setTimeout(() => {
      displayChars.value[idx] = letter
    }, (typingDuration / word.length) * idx)
  })
}

onMounted(() => {
  document.body.style.overflow = 'hidden'
  startTyping()
  // After typing animation, show shrinking ring
  setTimeout(() => {
    showCircle.value = true
    // Start with large ring covering the screen
    ringClass.value = `w-[200vw] h-[200vw] border-[50px] border-[${primaryColor}] bg-transparent rounded-full`
    // Animate the ring to shrink to the center
    setTimeout(() => {
      ringClass.value = `w-32 h-32 border-[50px] border-[${primaryColor}] bg-transparent rounded-full`
    }, 10)
    // Hide preloader after circle animation
    setTimeout(() => {
      isVisible.value = false
      document.body.style.overflow = ''
    }, 800)
  }, 1000)
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* No custom font, use default */
</style> 