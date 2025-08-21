<template>
  <div
    class="w-full z-50 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 
           text-white text-center text-base sm:text-lg font-black 
           py-4 px-6 shadow-md"
  >
    <div class="inline-flex items-center flex-nowrap">
      <!-- Mobile: Clickable short text -->
      <button 
        @click="scrollToContact"
        class="inline whitespace-nowrap sm:hidden transition-colors duration-300 hover:text-yellow-200"
      >
        Prototype your ideas! Starting at $5K!
    </button>
      <!-- Desktop: Full text and separate link -->
      <span class="hidden whitespace-nowrap sm:inline">
        Turn concepts into prototypes in as little as 2 months! Starting from just $5K.
      </span>
      <button 
        @click="scrollToContact" 
        class="hidden whitespace-nowrap underline ml-2 sm:inline transition-colors duration-300 hover:text-yellow-200"
      >
        Find Out More!
    </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { scrollToContact } from '~/lib/utils';
</script>