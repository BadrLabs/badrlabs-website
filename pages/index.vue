<template>
  <div>
    <Navigation />
    <Hero />
    <ProcessSection />
    <AboutSection />
    <TeamSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navigation from '@/components/navigation.vue';
import Hero from '@/components/hero.vue';
import ProcessSection from '@/components/process-section.vue';
import AboutSection from '@/components/about-section.vue';
import TeamSection from '@/components/team-section.vue';
import TestimonialsSection from '@/components/testimonials-section.vue';
import ContactSection from '@/components/contact-section.vue';
import Footer from '@/components/footer.vue';
</script>
