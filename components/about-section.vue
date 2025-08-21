<template>
  <section id="about-section" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div class="space-y-8">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            At BadrLabs, we are crafting stories and defining brands
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            We are storytellers, weaving narratives that resonate. Our mission is to bring your ideas to life and make them shine in the digital landscape. With a blend of creativity, strategy, and technical expertise, we are committed to exceeding your expectations.
          </p>
          <button @click="scrollToTeam" class="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Meet the Team
          </button>
        </div>
        <!-- Visual Element -->
        <div class="relative">
          <div class="aspect-square bg-gradient-to-br from-orange-100 to-blue-100 rounded-3xl relative overflow-hidden">
            <!-- Animated elements -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-8xl opacity-20 animate-pulse">🎨</div>
            </div>
            
            <!-- Floating elements -->
            <div class="absolute top-10 left-10 w-16 h-16 bg-orange-400 rounded-full opacity-60 animate-bounce"/>
            <div class="absolute bottom-10 right-10 w-12 h-12 bg-blue-400 rounded-full opacity-60 animate-bounce animation-delay-1000"/>
            <div class="absolute top-1/2 left-1/4 w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-bounce animation-delay-2000"/>
            
            <!-- Grid pattern -->
            <div class="absolute inset-0 opacity-10">
              <div class="grid grid-cols-6 grid-rows-6 h-full">
                <div v-for="i in 36" :key="i" class="border border-gray-300"/>
              </div>
            </div>
          </div>

          <!-- Stats overlay -->
          <div class="absolute -bottom-8 -right-1 md:-right-8 bg-white p-4 md:p-6 rounded-2xl shadow-xl">
            <div class="text-center">
              <div class="text-2xl md:text-3xl font-bold text-orange-600">15+</div>
              <div class="text-xs md:text-sm text-gray-600">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center p-8 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Web Design</h3>
          <p class="text-gray-600">Creating stunning, responsive websites that captivate your audience and drive results.</p>
        </div>

        <div class="text-center p-8 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Mobile Apps</h3>
          <p class="text-gray-600">Building intuitive mobile applications that provide seamless user experiences.</p>
        </div>

        <div class="text-center p-8 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Digital Strategy Consulting</h3>
          <p class="text-gray-600">Empowering companies and individuals to navigate today’s complex technology landscape.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { scrollToTeam } from '~/lib/utils';
// Component logic here if needed
</script>

<style scoped>
.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style> 