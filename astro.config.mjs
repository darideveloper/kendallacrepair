// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import showTailwindcssBreakpoint from "astro-show-tailwindcss-breakpoint"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      // Vite specifically needs this set to ensure the HMR 
      // client knows which port to talk to after a restart
      port: process.env.PORT ? parseInt(process.env.PORT) : 4321,
      strictPort: true,
    }
  },
  site: 'https://kendallacrepairs.com',
  integrations: [showTailwindcssBreakpoint(), react(), sitemap()],
  server: {
    // Astro's top-level server config
    port: process.env.PORT ? parseInt(process.env.PORT) : 4321,
  },

})
