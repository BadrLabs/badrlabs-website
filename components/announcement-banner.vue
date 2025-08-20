<template>
  <div
    class="w-full z-50 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 
           text-white text-center text-base sm:text-lg font-extrabold 
           py-4 px-6 shadow-md"
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
        From Concept to Prototype: Starting at $5K, delivered in just 2 months!
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
