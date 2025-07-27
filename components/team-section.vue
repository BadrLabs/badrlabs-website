<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Meet the team
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We're a passionate team of creative professionals dedicated to bringing your digital vision to life. Each member brings unique expertise and a shared commitment to excellence.
        </p>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div 
          v-for="(member, index) in teamMembers" 
          :key="index"
          class="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
        >
          <!-- Team Member Image Placeholder -->
          <div class="aspect-square bg-gradient-to-br from-orange-100 to-blue-100 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-6xl opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                {{ member.avatar }}
              </div>
            </div>
            
            <!-- Social Links Overlay -->
            <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
              <div class="flex space-x-3">
                <a 
                  v-if="member.linkedin"
                  :href="member.linkedin" 
                  target="_blank"
                  class="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all duration-300"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  v-if="member.twitter"
                  :href="member.twitter" 
                  target="_blank"
                  class="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all duration-300"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  v-if="member.github"
                  :href="member.github" 
                  target="_blank"
                  class="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all duration-300"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Team Member Info -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
              {{ member.name }}
            </h3>
            <p class="text-orange-600 font-semibold mb-3">{{ member.role }}</p>
            <p class="text-gray-600 mb-4 leading-relaxed">
              {{ member.bio }}
            </p>
            
            <!-- Skills/Tags -->
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="skill in member.skills" 
                :key="skill"
                class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-orange-100 hover:text-orange-700 transition-all duration-300"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Values -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-3">Innovation First</h4>
          <p class="text-gray-600">We stay ahead of the curve with cutting-edge technologies and creative solutions that set your brand apart.</p>
        </div>

        <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-3">Collaborative Spirit</h4>
          <p class="text-gray-600">We believe the best results come from working together, both within our team and with our clients.</p>
        </div>

        <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-300 hover:scale-105 group">
          <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-3">Quality Driven</h4>
          <p class="text-gray-600">Every project we undertake is crafted with meticulous attention to detail and a commitment to excellence.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamMembers = [
  {
    name: 'Harun Sheikhali',
    role: 'Full Stack Developer',
    bio: 'Full Stack Developer with a passion for building web applications with a focus on user experience and performance. 8+ years in web development.',
    avatar: '👩‍🎨',
    skills: ['React', 'Vue.js', 'Node.js', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    linkedin: '#',
    twitter: '#',
    github: null
  },
  {
    name: 'Tamim Faruk',
    role: 'Lead Developer',
    bio: 'Full-stack developer with expertise in modern web technologies. Loves turning complex problems into elegant solutions.',
    avatar: '👨‍💻',
    skills: ['React', 'Vue.js', 'Node.js', 'Python'],
    linkedin: '#',
    twitter: null,
    github: '#'
  },
  {
    name: 'Omar Irfan',
    role: 'UX/UI Designer',
    bio: 'User-centered designer focused on creating intuitive and beautiful interfaces that users love to interact with.',
    avatar: '👩‍🎨',
    skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
    linkedin: '#',
    twitter: '#',
    github: null
  },
  {
    name: 'Istiaq Ullah',
    role: 'Marketing Strategist',
    bio: 'Digital marketing expert who helps brands grow their online presence and connect with their target audience effectively.',
    avatar: '👨‍💼',
    skills: ['SEO', 'Content Strategy', 'Analytics', 'Growth Hacking'],
    linkedin: '#',
    twitter: '#',
    github: null
  }
]
</script> 