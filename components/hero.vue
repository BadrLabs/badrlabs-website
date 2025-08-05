<template>
  <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-blue-50 w-full overflow-hidden">
    <!-- Background decorative elements - simplified for mobile -->
    <div class="hidden md:block absolute inset-0 pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute top-40 left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="space-y-8 w-full">
        <!-- Main headline -->
        <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight animate-fade-in-up w-full">
          Building unique digital
          <span class="block text-orange-600">brands for your business</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300 w-full px-2 sm:px-0">
          At BadrLabs, we help businesses navigate tech complexity with clarity and speed—whether building from scratch or rescuing projects midstream.​ Let's turn your vision into reality.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600 w-full px-4 sm:px-0">
          <button 
            @click="scrollToContact"
            class="w-full sm:w-auto bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Us
          </button>
          <button 
            @click="scrollToAbout"
            class="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-orange-600 hover:text-orange-600 transition-all duration-300 hover:scale-105 transform hover:-translate-y-1"
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
        <div class="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToContact = () => {
  const contactSection = document.getElementById('contact-section')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToAbout = () => {
  const aboutSection = document.getElementById('about-section')
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>