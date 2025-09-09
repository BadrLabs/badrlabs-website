<template>
  <div
    class="w-full fixed top-16 z-50 bg-gradient-to-r from-[#002844] via-blue-900 to-blue-900 text-white text-center text-base sm:text-lg font-black py-4 px-6 shadow-md"
  >
    <div class="inline-flex items-center flex-nowrap">
      <!-- Mobile: Clickable short text -->
      <a
        href="#contact-section"
        class="inline whitespace-nowrap sm:hidden transition-colors duration-300 hover:text-yellow-200"
      >
        Concept to Prototype starting at $5K!
      </a>
      <!-- Desktop: Full text and separate link -->
      <span class="hidden whitespace-nowrap sm:inline">
        Turn concepts into prototypes in as little as 2 months! Starting from
        just $5K.
      </span>
      <a
        href="#contact-section"
        class="hidden whitespace-nowrap underline ml-2 sm:inline transition-colors duration-300 hover:text-yellow-200"
      >
        Find Out More!
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { scrollToContact } from "~/lib/utils";
</script>

