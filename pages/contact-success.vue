<template>
  <div class="h-screen flex flex-col">
    <Navigation />
    <section class="flex-1 bg-gray-50 flex items-center justify-center">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <!-- Success Icon -->
        <div class="mb-8 flex justify-center">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              class="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <!-- Success Message -->
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Message Received!
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>

        <!-- Action Button -->
        <div class="flex justify-center">
          <NuxtLink
            to="/"
            class="bg-orange-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Return Home
          </NuxtLink>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navigation from "@/components/navigation.vue";
import Footer from "@/components/footer.vue";
</script>

