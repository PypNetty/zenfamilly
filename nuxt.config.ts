// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  // TypeScript configuration
  typescript: {
    typeCheck: false, // Désactivé temporairement
  },

  // CSS & Tailwind
  css: ["~/assets/css/main.css"],

  // Modules
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@vueuse/nuxt"],

  // Components configuration
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  // App configuration
  app: {
    head: {
      title: "ZenFamille - Trouvez votre nounou parfaite",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Trouvez LA nounou parfaite en 3 clics. IA de matching + profils vérifiés. Gratuit pour commencer.",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },

  // Runtime config
  runtimeConfig: {
    // Private keys (only available on server-side)
    secretKey: process.env.SECRET_KEY,

    // Public keys (exposed to client-side)
    public: {
      baseUrl: process.env.BASE_URL || "http://localhost:3000",
      apiBase: "/api",
    },
  },
});
