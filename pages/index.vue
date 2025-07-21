<template>
  <div class="min-h-screen bg-gradient-to-br from-background via-white to-background">


    <!-- Hero Section -->
    <section id="hero" class="min-h-screen bg-background flex items-center justify-center 
    px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
    <!-- <section id="hero" class="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      <div class="absolute inset-0 pointer-events-none">
        <div class="sand-particle" v-for="i in 300" :key="i" :style="{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animationDelay: Math.random() * 8 + 's',
          animationDuration: (Math.random() * 4 + 2) + 's'
        }"></div>
      </div>
      <div class="max-w-4xl mx-auto text-center relative z-10"> -->
        <h1 class="text-5xl md:text-7xl font-bold mb-6 text-secondary">
          Clarity Through Code
        </h1>
        <p class="text-xl md:text-2xl text-secondary/70 mb-8 max-w-3xl mx-auto leading-relaxed">
          From concept to deployment, we bring your vision to life with cutting-edge technology.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            class="bg-gradient-to-br from-accent to-accent-dark text-background px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 inline-block shadow-xl border-2 border-accent-dark/30 backdrop-blur-sm hover:shadow-2xl relative overflow-hidden cursor-pointer"
            @click.prevent="scrollToContact"
          >
            
            <span class="relative z-10">Get in touch</span>
          </a>
          <a
            href="#work"
            class="bg-gradient-to-br from-white/5 to-primary/55 text-background px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 inline-block shadow-xl border-2 border-primary/30 backdrop-blur-sm hover:shadow-2xl relative overflow-hidden"
            
          >
            <span class="relative z-10">View our Work</span>
          </a>
        </div>
        
        <!-- Down Arrow -->
      </div>
    </section>

    <!-- Trusted Companies Banner -->
    <section id="experience" class="py-16 bg-white/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-center text-secondary/60 text-lg font-medium mb-12">
          Trusted by industry leaders
        </h2>
        <div
          class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60"
        >
          <div
            class="bg-gradient-to-br from-primary-light/70 to-white/5 h-16 rounded-lg flex items-center justify-center border border-primary-light/100"
          >
            <span class="text-gray-800 font-semibold">TechCorp</span>
          </div>
          <div
            class="bg-gradient-to-br from-primary-light/70 to-white/5 h-16 rounded-lg flex items-center justify-center border border-primary-light/100"
          >
            <span class="text-gray-800 font-semibold">InnovateCo</span>
          </div>
          <div
            class="bg-gradient-to-br from-primary-light/70 to-white/5 h-16 rounded-lg flex items-center justify-center border border-primary-light/100"
          >
            <span class="text-gray-800 font-semibold">DataFlow</span>
          </div>
          <div
            class="bg-gradient-to-br from-primary-light/70 to-white/5 h-16 rounded-lg flex items-center justify-center border border-primary-light/100"
          >
            <span class="text-gray-800 font-semibold">CloudTech</span>
          </div>
          <div
            class="bg-gradient-to-br from-primary-light/70 to-white/5 h-16 rounded-lg flex items-center justify-center border border-primary-light/100"
          >
            <span class="text-gray-800 font-semibold">StartupX</span>
          </div>
          <div
            class="bg-gradient-to-br from-primary-light/70 to-white/5 h-16 rounded-lg flex items-center justify-center border border-primary-light/100"
          >
            <span class="text-gray-800 font-semibold">Enterprise</span>
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
        <p class="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
          Contact us to discuss how we can help transform your business with a custom fullstack application
        </p>

        <div class="bg-gradient-to-br from-white/25 to-white/5 backdrop-blur-md rounded-2xl p-8 mb-8 inline-block border-2 border-white/30 shadow-2xl hover:shadow-3xl relative overflow-hidden">
          <div class="flex flex-col md:flex-row gap-6 text-white justify-center items-center relative z-10">
            <div class="flex items-center justify-center space-x-3">
              <Mail class="h-6 w-6 text-accent-dark" />
              <span class="text-background">hello@badrlabs.com</span>
            </div>
            <div class="flex items-center justify-center space-x-3">
              <Linkedin class="h-6 w-6 text-accent-dark" />
              <span class="text-background">BadrLabs</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-background text-black py-12 px-4 sm:px-6 lg:px-8">
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
              <Twitter2 class="h-6 w-6" />
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
  Github,
  Linkedin,
  Layers,
  Database,
  Smartphone,
  Globe,
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

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>
