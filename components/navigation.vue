<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center text-2xl font-bold text-gray-900 hover:text-orange-600 transition-colors duration-300">
            <img src="/badrlabs-no-text.png" alt="BadrLabs Logo" class="h-10 w-auto" /> BadrLabs.
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <NuxtLink 
              v-for="item in navigationItems" 
              :key="item.name"
              :to="item.href"
              class="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>

        <!-- CTA Button -->
<div class="hidden md:block">
  <NuxtLink 
    to="#contact-section"
    class="bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
  >
    Let's Collaborate
  </NuxtLink>
</div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600 transition-colors duration-300"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-100">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NuxtLink 
          v-for="item in navigationItems" 
          :key="item.name"
          :to="item.href"
          class="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium transition-colors duration-300"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
         <NuxtLink 
    to="#contact-section"
    class="w-full mt-4 bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-700 transition-colors duration-300 block text-center"
    @click="mobileMenuOpen = false"
  >
    Let's Collaborate
  </NuxtLink>
      </div>
    </div>
    <AnnouncementBanner />
  </nav>
</template>

<script setup lang="ts">
import AnnouncementBanner from './announcement-banner.vue';
const mobileMenuOpen = ref(false)
const navigationItems: {name: PropertyKey, href: string}[] = []
</script>
