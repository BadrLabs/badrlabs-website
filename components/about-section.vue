<template>
  <section id="offerings-section" class="py-20 bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Blurb -->
      <div class="mb-16 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Our Offerings
        </h2>
        <p class="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          At BadrLabs, we deliver innovative solutions that drive growth and elevate brands. Our expertise spans web and mobile development, AI-powered transformation, and seamless e-commerce experiences. Let us help you unlock new possibilities and achieve your business goals.
        </p>
      </div>
      <!-- Offerings Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <!-- Web Apps -->
        <div class="flex flex-col items-center w-full p-10 rounded-2xl bg-gradient-to-br from-orange-50 to-blue-50 shadow hover:shadow-lg transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Web Apps</h3>
          <p class="text-gray-600 text-center">Custom web applications designed for performance, scalability, and user engagement. We turn your vision into interactive digital experiences that grow your business.</p>
        </div>

        <!-- Mobile Apps -->
        <div class="flex flex-col items-center w-full p-10 rounded-2xl bg-gradient-to-br from-orange-50 to-blue-50 shadow hover:shadow-lg transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Mobile Apps</h3>
          <p class="text-gray-600 text-center">Intuitive mobile solutions for iOS and Android. We create apps that delight users and drive engagement, helping you reach customers wherever they are.</p>
        </div>

        <!-- AI Solutions -->
        <div class="flex flex-col items-center w-full p-10 rounded-2xl bg-gradient-to-br from-orange-50 to-blue-50 shadow hover:shadow-lg transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2"></path>
              <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" fill="none"></circle>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">AI Solutions</h3>
          <p class="text-gray-600 text-center">Harness the power of artificial intelligence to automate, analyze, and innovate. Our AI solutions help you unlock insights and create smarter workflows.</p>
        </div>

        <!-- E-commerce -->
        <div class="flex flex-col items-center w-full p-10 rounded-2xl bg-gradient-to-br from-orange-50 to-blue-50 shadow hover:shadow-lg transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 13a4 4 0 01-8 0"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">E-commerce</h3>
          <p class="text-gray-600 text-center">Robust e-commerce platforms that convert visitors into loyal customers. We build seamless shopping experiences that drive sales and grow your brand.</p>
        </div>

        <!-- Data Solutions -->
        <div class="flex flex-col items-center w-full p-10 rounded-2xl bg-gradient-to-br from-orange-50 to-blue-50 shadow hover:shadow-lg transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <!-- Chart/analytics icon -->
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19h16M7 10v6M12 7v9M17 13v3"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Data Solutions</h3>
          <p class="text-gray-600 text-center">Transforming data into actionable outcomes through tailored solutions in data analytics and data analysis.</p>
        </div>

        <!-- Vibecode Cleanup -->
        <div class="flex flex-col items-center w-full p-10 rounded-2xl bg-gradient-to-br from-orange-50 to-blue-50 shadow hover:shadow-lg transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <!-- Wrench/maintenance icon -->
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Vibecode Cleanup</h3>
          <p class="text-gray-600 text-center">Refactoring and stabilizing legacy Vibecode projects. Code cleanup, dependency updates, and performance improvements for reliable delivery.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic here if needed
</script>

<style scoped>
/* No custom animations needed */
</style>