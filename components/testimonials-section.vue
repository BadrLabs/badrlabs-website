<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Words of appreciation: Our client's successful stories
        </h2>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
        >
          <!-- Quote Icon -->
          <div class="text-orange-600 text-4xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            "
          </div>

          <!-- Testimonial Text -->
          <p class="text-gray-700 text-lg leading-relaxed mb-6">
            {{ testimonial.quote }}
          </p>

          <!-- Client Info -->
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">{{ testimonial.name }}</h4>
              <p class="text-gray-600 text-sm">{{ testimonial.position }}</p>
              <p class="text-gray-500 text-sm">{{ testimonial.company }}</p>
            </div>
          </div>

          <!-- Rating -->
          <div class="flex items-center mt-4">
            <div class="flex text-yellow-400">
              <svg v-for="star in 5" :key="star" class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-4xl font-bold text-orange-600 mb-2">150+</div>
          <div class="text-gray-600">Happy Clients</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-orange-600 mb-2">300+</div>
          <div class="text-gray-600">Projects Completed</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-orange-600 mb-2">5+</div>
          <div class="text-gray-600">Years Experience</div>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold text-orange-600 mb-2">98%</div>
          <div class="text-gray-600">Client Satisfaction</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: 'Emily Thompson',
    position: 'Marketing Director',
    company: 'Tech Innovators Inc.',
    quote: 'Working with BadrLabs was a game-changer for us. Their expertise in UX/UI design transformed our user experience, resulting in a 30% increase in user engagement. We couldn\'t be happier!',
    rating: 5
  },
  {
    name: 'David Chen',
    position: 'CEO',
    company: 'StartupXYZ',
    quote: 'The team at BadrLabs delivered beyond our expectations. Their creative approach and attention to detail helped us stand out in a crowded market. Highly recommended!',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    position: 'Product Manager',
    company: 'InnovateCorp',
    quote: 'BadrLabs understood our vision perfectly and brought it to life with stunning visuals and seamless functionality. The results exceeded our wildest expectations.',
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    position: 'Founder',
    company: 'GreenTech Solutions',
    quote: 'Professional, creative, and results-driven. BadrLabs helped us create a brand that truly represents our values and connects with our audience.',
    rating: 5
  },
  {
    name: 'Lisa Wang',
    position: 'Creative Director',
    company: 'Design Studio Pro',
    quote: 'The level of creativity and technical expertise at BadrLabs is unmatched. They transformed our ideas into a beautiful, functional reality.',
    rating: 5
  },
  {
    name: 'James Wilson',
    position: 'CTO',
    company: 'Digital Ventures',
    quote: 'BadrLabs delivered a website that not only looks amazing but also performs exceptionally well. Our conversion rates have improved significantly.',
    rating: 5
  }
]
</script> 