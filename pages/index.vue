<template>
  <div class="min-h-screen bg-gradient-to-br from-background via-white to-background">


    <!-- Hero Section -->
    <section class="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 text-secondary">
          Clarity Through Code
        </h1>
        <p class="text-xl md:text-2xl text-secondary/70 mb-8 max-w-3xl mx-auto leading-relaxed">
          We design, build, and deploy custom software — fast, clean, focused.
        </p>
        <a
          href="#contact"
          class="mt-8 bg-gradient-to-br from-accent via-accent to-accent-dark text-white px-8 py-4 rounded-full font-semibold hover:from-accent-dark hover:via-accent-dark hover:to-accent transform hover:scale-105 transition-all duration-300 inline-block shadow-xl border-2 border-accent-dark/30 backdrop-blur-sm hover:shadow-2xl hover:border-accent-dark/50 relative overflow-hidden"
        >
          <div class="absolute inset-0 bg-gradient-to-t from-accent-dark/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          <span class="relative z-10">Start a project</span>
        </a>
        
        <!-- Down Arrow -->
        <div class="mt-16 flex justify-center">
          <div class="text-secondary animate-bounce">
            <ChevronDown class="h-8 w-8" />
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted Companies Banner -->
    <section class="py-16 bg-white/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-center text-secondary/60 text-lg font-medium mb-12">
          Trusted by industry leaders
        </h2>
        <div
          class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60"
        >
          <div
            class="bg-gray-200 h-16 rounded-lg flex items-center justify-center"
          >
            <span class="text-gray-500 font-semibold">TechCorp</span>
          </div>
          <div
            class="bg-gray-200 h-16 rounded-lg flex items-center justify-center"
          >
            <span class="text-gray-500 font-semibold">InnovateCo</span>
          </div>
          <div
            class="bg-gray-200 h-16 rounded-lg flex items-center justify-center"
          >
            <span class="text-gray-500 font-semibold">DataFlow</span>
          </div>
          <div
            class="bg-gray-200 h-16 rounded-lg flex items-center justify-center"
          >
            <span class="text-gray-500 font-semibold">CloudTech</span>
          </div>
          <div
            class="bg-gray-200 h-16 rounded-lg flex items-center justify-center"
          >
            <span class="text-gray-500 font-semibold">StartupX</span>
          </div>
          <div
            class="bg-gray-200 h-16 rounded-lg flex items-center justify-center"
          >
            <span class="text-gray-500 font-semibold">Enterprise</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Process Section -->
    <section id="process" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our Process
          </h2>
          <p class="text-xl text-secondary/70 max-w-3xl mx-auto">
            A proven methodology that ensures your project's success from
            discovery to deployment
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="relative group">
            <div
              class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-background group-hover:border-terracotta/30"
            >
              <div
                class="bg-gradient-to-br from-terracotta to-accent-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              >
                <Search class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-secondary mb-4">Discovery</h3>
              <p class="text-secondary/70">
                We dive deep into your business needs, goals, and challenges to
                create a comprehensive project roadmap.
              </p>
            </div>
          </div>

          <div class="relative group">
            <div
              class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-background group-hover:border-terracotta/30"
            >
              <div
                class="bg-gradient-to-br from-primary to-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              >
                <Palette class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-secondary mb-4">Design</h3>
              <p class="text-secondary/70">
                Our design team creates intuitive, beautiful interfaces that
                provide exceptional user experiences.
              </p>
            </div>
          </div>

          <div class="relative group">
            <div
              class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-background group-hover:border-terracotta/30"
            >
              <div
                class="bg-gradient-to-br from-terracotta to-accent-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              >
                <Code class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-secondary mb-4">Development</h3>
              <p class="text-secondary/70">
                We build robust, scalable applications using the latest
                technologies and best practices.
              </p>
            </div>
          </div>

          <div class="relative group">
            <div
              class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-background group-hover:border-terracotta/30"
            >
              <div
                class="bg-gradient-to-br from-primary to-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              >
                <Rocket class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-secondary mb-4">Launch</h3>
              <p class="text-secondary/70">
                We deploy your application and provide ongoing support to ensure
                optimal performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section
      id="tech"
      class="py-20 bg-gradient-to-br from-primary/5 to-terracotta/5 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Our Tech Stack
          </h2>
          <p class="text-xl text-secondary/70 max-w-3xl mx-auto">
            We use cutting-edge technologies to build fast, scalable, and
            maintainable applications
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="tech in techStack"
            :key="tech.name"
            class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
          >
            <div
              class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-terracotta/10 to-primary/10 rounded-xl flex items-center justify-center group-hover:from-terracotta/20 group-hover:to-primary/20 transition-all duration-300"
            >
              <component :is="tech.icon" class="h-8 w-8 text-secondary" />
            </div>
            <h3 class="font-semibold text-secondary mb-2">{{ tech.name }}</h3>
            <p class="text-sm text-secondary/60">{{ tech.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet the Team Section -->
    <section id="team" class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Meet the Team
          </h2>
          <p class="text-xl text-secondary/70 max-w-3xl mx-auto">
            The talented individuals behind BadrLabs who bring your ideas to
            life
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="member in teamMembers" :key="member.name" class="group">
            <div
              class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-background group-hover:border-terracotta/30"
            >
              <div class="relative mb-6">
                <div
                  class="w-24 h-24 mx-auto bg-gradient-to-br from-terracotta/20 to-primary/20 rounded-full flex items-center justify-center group-hover:from-terracotta/30 group-hover:to-primary/30 transition-all duration-300"
                >
                  <User class="h-12 w-12 text-secondary" />
                </div>
                <div
                  class="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-terracotta to-accent-600 rounded-full flex items-center justify-center"
                >
                  <component :is="member.icon" class="h-4 w-4 text-white" />
                </div>
              </div>
              <h3 class="text-xl font-bold text-secondary mb-2">
                {{ member.name }}
              </h3>
              <p class="text-terracotta font-medium mb-3">{{ member.role }}</p>
              <p class="text-secondary/70 text-sm">{{ member.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section
      id="contact"
      class="py-20 bg-gradient-to-br from-primary to-primary px-4 sm:px-6 lg:px-8"
    >
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
              <span>+1 (226) 123-4567</span>
            </div>
            <div class="flex items-center justify-center space-x-3">
              <MapPin class="h-6 w-6 text-terracotta" />
              <span>Waterloo, ON</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            class="bg-gradient-to-r from-terracotta to-accent-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Get Free Consultation
          </button>
          <button
            class="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300"
          >
            View Portfolio
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-background text-black py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center space-x-3 mb-4 md:mb-0">
            <img src="/badrlabs-no-text.jpg" alt="BadrLabs" class="h-8 w-8" />
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

import {
  Search,
  Palette,
  Code,
  Rocket,
  User,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Layers,
  Database,
  Smartphone,
  Globe,
  ChevronDown
} from 'lucide-vue-next'

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
    name: 'Harun Sheikhali',
    role: 'Fullstack  Engineer',
    description: 'Full-stack expert with 8+ years building scalable applications',
    icon: Code
  },
  {
    name: 'Tamim Faruk',
    role: 'Data Engineer andd Scientist',
    description: 'Data Engineer focused on analytics', // TODO: Tamim needs to add something here
    icon: Palette
  },
  {
    name: 'Omar Irfan',
    role: 'Fullstaack Engineer',
    description: 'Full-stack expert with 5+ years building scalable applications',
    icon: Layers
  },
  {
    name: 'Mohammed Istiaq Ullah',
    role: 'Backend Engineer',
    description: 'backend expert with 8+ years building scalable applications',
    icon: Rocket
  }
]
</script>
