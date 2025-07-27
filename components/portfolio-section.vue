<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Where creativity meets strategy & innovation
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Take a glimpse into our world of creativity. From striking visuals to seamless user experiences. Explore our portfolio to see how we bring ideas to life.
        </p>
        <button class="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300 underline">
          see more case studies
        </button>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="group relative overflow-hidden rounded-2xl bg-gray-50 hover:shadow-2xl transition-all duration-500 hover:scale-105"
        >
          <!-- Project Image Placeholder -->
          <div class="aspect-[4/3] bg-gradient-to-br from-orange-100 to-blue-100 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                {{ project.icon }}
              </div>
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm font-medium text-orange-600 uppercase tracking-wide">
                {{ project.category }}
              </span>
              <span class="text-xs text-gray-500">{{ project.year }}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ project.description }}
            </p>
            <button class="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300 group-hover:translate-x-2 transform">
              View Project →
            </button>
          </div>

          <!-- Hover overlay -->
          <div class="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    category: 'Education',
    title: 'ElevateTech Solutions',
    description: 'Innovate Beyond Limits',
    icon: '🎓',
    year: '2024'
  },
  {
    category: 'Education',
    title: 'GreenWave Initiative',
    description: 'Sustainability Simplified',
    icon: '🌱',
    year: '2024'
  },
  {
    category: 'Food & Drink',
    title: 'VibeStream Music',
    description: 'Feel the Music',
    icon: '🎵',
    year: '2023'
  },
  {
    category: 'Food & Drink',
    title: 'UrbanNest Realty',
    description: 'Discover Your Perfect Space',
    icon: '🏠',
    year: '2023'
  },
  {
    category: 'Technology',
    title: 'CloudSync Pro',
    description: 'Seamless Data Management',
    icon: '☁️',
    year: '2024'
  },
  {
    category: 'Healthcare',
    title: 'MediCare Plus',
    description: 'Your Health, Our Priority',
    icon: '🏥',
    year: '2023'
  }
]
</script> 