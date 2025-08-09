<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Behind successful brand transformation
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Stay in the loop with our latest articles, where we share industry insights, trends, and inspirations.
        </p>
        <button class="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300 underline">
          see more articles
        </button>
      </div>

      <!-- Blog Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="(post, index) in blogPosts" 
          :key="index"
          class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
        >
          <!-- Blog Image Placeholder -->
          <div class="aspect-[16/9] bg-gradient-to-br from-orange-100 to-blue-100 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                {{ post.icon }}
              </div>
            </div>
          </div>

          <!-- Blog Content -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-sm font-medium text-orange-600 uppercase tracking-wide">
                {{ post.category }}
              </span>
              <span class="text-xs text-gray-500">{{ post.date }}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
              {{ post.title }}
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3">
              {{ post.excerpt }}
            </p>
            <div class="flex items-center justify-between">
              <button class="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300 group-hover:translate-x-2 transform">
                Read More →
              </button>
              <div class="flex items-center space-x-2 text-sm text-gray-500">
                <span>{{ post.readTime }} min read</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const blogPosts = [
  {
    category: 'Design',
    title: 'The Future of Web Development',
    excerpt: 'Explore the latest trends and technologies that are shaping the future of web development and how they impact user experience.',
    icon: '🎨',
    date: 'Dec 15, 2024',
    readTime: 5
  },
  {
    category: 'Business',
    title: 'Building Sustainable Websites',
    excerpt: 'Learn how to create websites that are not only beautiful but also environmentally conscious and sustainable.',
    icon: '🌱',
    date: 'Dec 10, 2024',
    readTime: 7
  },
  {
    category: 'Design',
    title: 'Enhancing UX with AI and Machine Learning',
    excerpt: 'Discover how artificial intelligence and machine learning are revolutionizing user experience design.',
    icon: '🤖',
    date: 'Dec 5, 2024',
    readTime: 6
  }
]
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 