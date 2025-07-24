<template>
  <div class="flex flex-col min-h-screen bg-[#F6F3EF]">
    <Navigation />
    <main class="mx-8 border-x-[1px] border-gray-300 h-full min-h-screen">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navigation from "~/components/navigation.vue";
</script>

<style scoped>
* {
  font-family: "Inter", sans-serif;
}
</style>
