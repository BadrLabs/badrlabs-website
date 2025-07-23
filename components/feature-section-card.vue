<template>
  <div
    class="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-cream group-hover:border-terracotta/30"
  >
    <div
      class="bg-gradient-to-br from-terracotta to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
    >
      <component :is="props.icon" class="h-8 w-8 text-white" />
    </div>
    <h3 class="text-xl font-bold text-charcoal mb-4">{{ props.title }}</h3>
    <p class="text-charcoal/70">
      {{ props.text }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ text?: string; icon?: object; title: string }>();
</script>
