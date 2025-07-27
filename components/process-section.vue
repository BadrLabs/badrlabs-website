<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Here is our process
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We follow a proven methodology that ensures every project delivers exceptional results. Our collaborative approach brings your vision to life through strategic thinking and creative execution.
        </p>
      </div>

      <!-- Process Steps -->
      <div class="relative">
        <!-- Connection Line -->
        <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 transform -translate-y-1/2 z-0"></div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          <div 
            v-for="(step, index) in processSteps" 
            :key="index"
            class="relative group"
          >
            <!-- Step Number -->
            <div class="relative z-10 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <span class="text-white font-bold text-xl">{{ step.number }}</span>
              <!-- Pulse effect -->
              <div class="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-20"></div>
            </div>

            <!-- Step Content -->
            <div class="text-center space-y-4">
              <h3 class="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                {{ step.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ step.description }}
              </p>
              
              <!-- Step Icon -->
              <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-orange-200 transition-colors duration-300">
                <div class="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {{ step.icon }}
                </div>
              </div>

              <!-- Duration Badge -->
              <div class="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-orange-100 group-hover:text-orange-600 transition-all duration-300">
                {{ step.duration }}
              </div>
            </div>

            <!-- Hover Effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
        </div>
      </div>

      <!-- Process Benefits -->
      <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">Quality Assured</h4>
          <p class="text-gray-600">Every step is carefully planned and executed to ensure the highest quality deliverables.</p>
        </div>

        <div class="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h4>
          <p class="text-gray-600">Efficient workflows and clear communication ensure projects are delivered on time.</p>
        </div>

        <div class="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-2">Collaborative</h4>
          <p class="text-gray-600">We work closely with you throughout the process to ensure your vision is perfectly realized.</p>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center">
        <div class="bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to start your project?
          </h3>
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss how our proven process can bring your ideas to life and create something extraordinary together.
          </p>
          <button class="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const processSteps = [
  {
    number: '01',
    title: 'Discovery & Research',
    description: 'We dive deep into understanding your business, goals, and target audience to create a solid foundation.',
    icon: '🔍',
    duration: '1-2 weeks'
  },
  {
    number: '02',
    title: 'Strategy & Planning',
    description: 'Based on our research, we develop a comprehensive strategy and detailed project roadmap.',
    icon: '📋',
    duration: '1 week'
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'Our creative team brings your vision to life with stunning designs and robust development.',
    icon: '🎨',
    duration: '3-6 weeks'
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    description: 'We ensure everything works perfectly, launch your project, and provide ongoing optimization.',
    icon: '🚀',
    duration: '1-2 weeks'
  }
]
</script>

<style scoped>
/* Custom animation for the connection line */
@keyframes flow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-gradient-to-r {
  background-size: 200% 200%;
  animation: flow 3s ease infinite;
}
</style> 