<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Meet the team
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We're a passionate team of creative professionals dedicated to
          bringing your digital vision to life. Each member brings unique
          expertise and a shared commitment to excellence.
        </p>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div
          v-for="(member, index) in teamMembers"
          :key="index"
          class="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
        >
          <!-- Team Member Image -->
          <div
            class="aspect-square bg-gradient-to-br from-orange-100 to-blue-100 relative overflow-hidden"
          >
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>

            <!-- Show image if avatar is a filename, otherwise show emoji -->
            <img
              v-if="member.avatar && member.avatar.includes('.')"
              :src="`/${member.avatar}`"
              :alt="`${member.name} profile photo`"
              class="w-full h-full object-cover"
            />
            <div
              v-else
              class="absolute inset-0 flex items-center justify-center"
            >
              <div
                class="text-6xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"
              >
                {{ member.avatar }}
              </div>
            </div>
          </div>

          <!-- Team Member Info -->
          <div class="p-6">
            <h3
              class="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300"
            >
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
        <div
          class="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-all duration-300 hover:scale-105 group"
        >
          <div
            class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              ></path>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-3">
            Cross-domain Experience
          </h4>
          <p class="text-gray-600">
            From healthcare to energy to cybersecurity to manufacturing to
            construction — we connect the dots between industries and
            technologies.
          </p>
        </div>

        <div
          class="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:scale-105 group"
        >
          <div
            class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-3">
            An Experienced Team From Day 1
          </h4>
          <p class="text-gray-600">
            No handoffs, no juniors — every project is led by seasoned
            professionals.
          </p>
        </div>

        <div
          class="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-300 hover:scale-105 group"
        >
          <div
            class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h4 class="text-lg font-semibold text-gray-900 mb-3">
            Quality Driven
          </h4>
          <p class="text-gray-600">
            We move fast without cutting corners — built right, the first time
            while taking account of our clients’ deepest needs and feedback.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamMembers = [
  {
    name: "Harun Sheikhali",
    role: "Full Stack Developer",
    bio: "Full Stack Developer with a passion for building web applications with a focus on user experience and performance. 8+ years in web development.",
    avatar: "headshots/harun_headshot.png",
    skills: [
      "React",
      "Vue.js",
      "Node.js",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    name: "Tamim Faruk",
    role: "Data Engineer and Scientist",
    bio: "Data engineer and scientist working on Agentic AI systems, with a background in Mechatronics Engineering (BASc.) and Biomedical Engineering (MASc.)",
    avatar: "headshots/tamim_headshot.png",
    skills: [
      "Python",
      "Pytorch",
      "Pydantic",
      "Langchain",
      "Databricks",
      "Snowflake",
    ],
  },
  {
    name: "Omar Irfan",
    role: "Full Stack Developer",
    bio: "Full Stack Developer with 5 years of experience building fast, accessible web applications that align with real business needs. Specializes in crafting polished, intuitive user experiences.",
    avatar: "headshots/omar_headshot.png",
    skills: [
      "React",
      "Svelte",
      "Next.js",
      "Material UI",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    name: "Istiaq Ullah",
    role: "Backend and Cloud Engineer",
    bio: "Backend and Cloud Engineer with 5+ years of experience building high-performance API services, cloud infrastructure, and data pipelines. Focused on scalable, reliable, and seamless digital experiences.",
    avatar: "headshots/istiaq_headshot.png",
    skills: [
      "Node.js",
      "Typescript",
      "Kafka",
      "Elasticsearch",
      "Grafana",
      "Kubernetes",
    ],
  },
];
</script>

