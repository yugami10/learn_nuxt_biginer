// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
        server: {
            watch: {
                usePolling: true,
            }
        }
    }
})
