import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image"],
  css: ["~/assets/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    families: [
      {
        name: "Noto Sans",
        provider: "google",
        styles: ["normal", "italic"],
        subsets: ["latin", "latin-ext"],
        weights: [400, 600],
      },
      {
        name: "Noto Serif",
        provider: "google",
        styles: ["normal", "italic"],
        subsets: ["latin", "latin-ext"],
        weights: [500, 600, 700],
      },
    ],
  },
});
