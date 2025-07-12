<template>
  <div class="min-h-screen bg-gradient-to-br from-cream via-white to-cream">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-cream z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-3">
            <img src="/badrlabs-no-text.jpg" alt="BadrLabs" class="h-10 w-10">
            <span class="text-2xl font-bold text-charcoal">BadrLabs</span>
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#process" class="text-charcoal hover:text-terracotta transition-colors">Process</a>
            <a href="#tech" class="text-charcoal hover:text-terracotta transition-colors">Tech Stack</a>
            <a href="#team" class="text-charcoal hover:text-terracotta transition-colors">Team</a>
            <a href="#contact" class="text-charcoal hover:text-terracotta transition-colors">Contact</a>
          </div>
          <button class="md:hidden" @click="toggleMobileMenu">
            <Menu class="h-6 w-6 text-charcoal" />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-cream">
        <div class="px-4 py-2 space-y-2">
          <a href="#process" class="block py-2 text-charcoal hover:text-terracotta">Process</a>
          <a href="#tech" class="block py-2 text-charcoal hover:text-terracotta">Tech Stack</a>
          <a href="#team" class="block py-2 text-charcoal hover:text-terracotta">Team</a>
          <a href="#contact" class="block py-2 text-charcoal hover:text-terracotta">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center">
          <div class="relative inline-block mb-8">
            <div
              class="absolute inset-0 bg-gradient-to-r from-terracotta to-navy rounded-full blur-3xl opacity-20 scale-150" />
            <img src="/badrlabs-no-text.jpg" alt="BadrLabs" class="relative h-24 w-24 mx-auto">
          </div>
          <h1 class="text-5xl md:text-7xl font-bold text-charcoal mb-6">
            Crafting Digital
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-terracotta to-navy">
              Excellence
            </span>
          </h1>
          <p class="text-xl md:text-2xl text-charcoal/70 mb-8 max-w-3xl mx-auto leading-relaxed">
            We specialize in fullstack applications that transform businesses
            across industries. From concept to deployment, we bring your vision
            to life with cutting-edge technology.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              class="bg-gradient-to-r from-terracotta to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Start Your Project
            </button>
            <button
              class="border-2 border-navy text-navy px-8 py-4 rounded-full font-semibold hover:bg-navy hover:text-white transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted Companies Banner -->
    <section class="py-16 bg-white/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-center text-charcoal/60 text-lg font-medium mb-12">
          Trusted by industry leaders
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
          <div class="bg-gray-200 h-16 rounded-lg flex items-center justify-center">
            <span class="text-gray-500 font-semibold">TechCorp</span>
          </div>
          <div class="bg-gray-200 h-16 rounded-lg flex items-center justify-center">
            <span class="text-gray-500 font-semibold">InnovateCo</span>
          </div>
          <div class="bg-gray-200 h-16 rounded-lg flex items-center justify-center">
            <span class="text-gray-500 font-semibold">DataFlow</span>
          </div>
          <div class="bg-gray-200 h-16 rounded-lg flex items-center justify-center">
            <span class="text-gray-500 font-semibold">CloudTech</span>
          </div>
          <div class="bg-gray-200 h-16 rounded-lg flex items-center justify-center">
            <span class="text-gray-500 font-semibold">StartupX</span>
          </div>
          <div class="bg-gray-200 h-16 rounded-lg flex items-center justify-center">
            <span class="text-gray-500 font-semibold">Enterprise</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Process Section -->
    <section id="process" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Our Process
          </h2>
          <p class="text-xl text-charcoal/70 max-w-3xl mx-auto">
            A proven methodology that ensures your project's success from
            discovery to deployment
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="relative group">
            <div
              class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-cream group-hover:border-terracotta/30">
              <div
                class="bg-gradient-to-br from-terracotta to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Search class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-charcoal mb-4">Discovery</h3>
              <p class="text-charcoal/70">
                We dive deep into your business needs, goals, and challenges to
                create a comprehensive project roadmap.
              </p>
            </div>
          </div>

          <div class="relative group">
            <div
              class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-cream group-hover:border-terracotta/30">
              <div
                class="bg-gradient-to-br from-navy to-blue-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Palette class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-charcoal mb-4">Design</h3>
              <p class="text-charcoal/70">
                Our design team creates intuitive, beautiful interfaces that
                provide exceptional user experiences.
              </p>
            </div>
          </div>

          <div class="relative group">
            <div
              class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-cream group-hover:border-terracotta/30">
              <div
                class="bg-gradient-to-br from-terracotta to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Code class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-charcoal mb-4">Development</h3>
              <p class="text-charcoal/70">
                We build robust, scalable applications using the latest
                technologies and best practices.
              </p>
            </div>
          </div>

          <div class="relative group">
            <div
              class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-cream group-hover:border-terracotta/30">
              <div
                class="bg-gradient-to-br from-navy to-blue-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Rocket class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-charcoal mb-4">Launch</h3>
              <p class="text-charcoal/70">
                We deploy your application and provide ongoing support to ensure
                optimal performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech" class="py-20 bg-gradient-to-br from-navy/5 to-terracotta/5 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Our Tech Stack
          </h2>
          <p class="text-xl text-charcoal/70 max-w-3xl mx-auto">
            We use cutting-edge technologies to build fast, scalable, and
            maintainable applications
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="tech in techStack" :key="tech.name"
            class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105">
            <div
              class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-terracotta/10 to-navy/10 rounded-xl flex items-center justify-center group-hover:from-terracotta/20 group-hover:to-navy/20 transition-all duration-300">
              <component :is="tech.icon" class="h-8 w-8 text-charcoal" />
            </div>
            <h3 class="font-semibold text-charcoal mb-2">{{ tech.name }}</h3>
            <p class="text-sm text-charcoal/60">{{ tech.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet the Team Section -->
    <section id="team" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Meet the Team
          </h2>
          <p class="text-xl text-charcoal/70 max-w-3xl mx-auto">
            The talented individuals behind BadrLabs who bring your ideas to
            life
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="member in teamMembers" :key="member.name" class="group">
            <div
              class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-cream group-hover:border-terracotta/30">
              <div class="relative mb-6">
                <div
                  class="w-24 h-24 mx-auto bg-gradient-to-br from-terracotta/20 to-navy/20 rounded-full flex items-center justify-center group-hover:from-terracotta/30 group-hover:to-navy/30 transition-all duration-300">
                  <User class="h-12 w-12 text-charcoal" />
                </div>
                <div
                  class="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-terracotta to-orange-600 rounded-full flex items-center justify-center">
                  <component :is="member.icon" class="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 class="text-xl font-bold text-charcoal mb-2">
                {{ member.name }}
              </h3>
              <p class="text-terracotta font-medium mb-3">{{ member.role }}</p>
              <p class="text-charcoal/70 text-sm">{{ member.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section id="contact" class="py-20 bg-gradient-to-br from-navy to-blue-900 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h2>
        <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help transform your business with a custom
          fullstack application
        </p>

        <div class="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8">
          <div class="grid md:grid-cols-3 gap-6 text-white">
            <div class="flex items-center justify-center space-x-3">
              <Mail class="h-6 w-6 text-terracotta" />
              <span>hello@badrlabs.com</span>
            </div>
            <div class="flex items-center justify-center space-x-3">
              <Phone class="h-6 w-6 text-terracotta" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div class="flex items-center justify-center space-x-3">
              <MapPin class="h-6 w-6 text-terracotta" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="bg-gradient-to-r from-terracotta to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Get Free Consultation
          </button>
          <button
            class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-navy transition-all duration-300">
            View Portfolio
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-cream text-black py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center space-x-3 mb-4 md:mb-0">
            <img src="/badrlabs-no-text.jpg" alt="BadrLabs" class="h-8 w-8">
            <span class="text-xl font-bold">BadrLabs</span>
          </div>
          <div class="flex space-x-6">
            <a href="#" class="hover:text-terracotta transition-colors">
              <Github class="h-6 w-6" />
            </a>
            <a href="#" class="hover:text-terracotta transition-colors">
              <Linkedin class="h-6 w-6" />
            </a>
            <a href="#" class="hover:text-terracotta transition-colors">
              <Twitter class="h-6 w-6" />
            </a>
          </div>
        </div>
        <div class="border-t border-white/20 mt-8 pt-8 text-center text-black">
          <p>
            &copy; 2024 BadrLabs. All rights reserved. Crafting digital
            excellence across industries.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup type="ts">
import { ref } from 'vue'
import {
  Menu, Search, Palette, Code, Rocket, User, Mail, Phone, MapPin,
  Github, Linkedin, Twitter, Layers, Database, Smartphone, Globe
} from 'lucide-vue-next'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const techStack = [
  { name: 'React', icon: 'div', description: 'Modern UI library' },
  { name: 'Vue.js', icon: 'div', description: 'Progressive framework' },
  { name: 'Next.js', icon: Globe, description: 'Full-stack React' },
  { name: 'Nuxt.js', icon: Layers, description: 'Vue.js framework' },
  { name: 'Node.js', icon: 'div', description: 'Server runtime' },
  { name: 'TypeScript', icon: Code, description: 'Type-safe JavaScript' },
  { name: 'PostgreSQL', icon: Database, description: 'Reliable database' },
  { name: 'MongoDB', icon: Database, description: 'NoSQL database' },
  { name: 'React Native', icon: Smartphone, description: 'Mobile apps' },
  { name: 'AWS', icon: 'div', description: 'Cloud infrastructure' },
  { name: 'Docker', icon: 'div', description: 'Containerization' },
  { name: 'GraphQL', icon: 'div', description: 'API query language' }
]

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'Lead Developer',
    description: 'Full-stack expert with 8+ years building scalable applications',
    icon: Code
  },
  {
    name: 'Marcus Rodriguez',
    role: 'UI/UX Designer',
    description: 'Creative designer focused on user-centered design principles',
    icon: Palette
  },
  {
    name: 'Emily Johnson',
    role: 'Project Manager',
    description: 'Agile expert ensuring projects deliver on time and budget',
    icon: Layers
  },
  {
    name: 'David Kim',
    role: 'DevOps Engineer',
    description: 'Infrastructure specialist optimizing deployment and scaling',
    icon: Rocket
  }
]
</script>
