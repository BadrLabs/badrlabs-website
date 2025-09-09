<template>
  <div>
    <Navigation />
    <AnnouncementBanner />
    <Hero />
    <ProcessSection />
    <AboutSection />
    <TeamSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navigation from "@/components/navigation.vue";
import AnnouncementBanner from "~/components/announcement-banner.vue";
import Hero from "@/components/hero.vue";
import ProcessSection from "@/components/process-section.vue";
import AboutSection from "@/components/about-section.vue";
import TeamSection from "@/components/team-section.vue";
import ContactSection from "@/components/contact-section.vue";
import Footer from "@/components/footer.vue";
</script>
