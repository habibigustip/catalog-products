// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  pages: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style.scss" as *;'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      baseUrl: "https://my-json-server.typicode.com/habibigustip/catalog-products"
    }
  }
})
