import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'BadrLabs - Building Unique Digital Brands for Your Business',
      meta: [
        // Basic SEO
        { name: 'description', content: 'At BadrLabs, we help businesses navigate tech complexity with clarity and speed—whether building from scratch or rescuing projects midstream. We offer web apps, mobile apps, AI solutions, e-commerce, and data solutions.' },
        { name: 'keywords', content: 'web development, mobile apps, AI solutions, e-commerce, data solutions, digital branding, software development, tech consulting, web design, mobile development' },
        { name: 'author', content: 'BadrLabs' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'BadrLabs - Building Unique Digital Brands for Your Business' },
        { property: 'og:description', content: 'At BadrLabs, we help businesses navigate tech complexity with clarity and speed—whether building from scratch or rescuing projects midstream.' },
        { property: 'og:image', content: '/badrlabs-inline.png' },
        { property: 'og:url', content: 'https://badrlabs.com' },
        { property: 'og:site_name', content: 'BadrLabs' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'BadrLabs - Building Unique Digital Brands for Your Business' },
        { name: 'twitter:description', content: 'At BadrLabs, we help businesses navigate tech complexity with clarity and speed—whether building from scratch or rescuing projects midstream.' },
        { name: 'twitter:image', content: '/badrlabs-inline.png' },
        
        // Additional meta tags
        { name: 'theme-color', content: '#ea580c' }, // Orange-600 color
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-large.png' },
        { rel: 'canonical', href: 'https://badrlabs.com' }
      ]
    }
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["@/assets/css/main.css"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "shadcn-nuxt",
  ],
});
