// @ts-check
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"

import showTailwindcssBreakpoint from "astro-show-tailwindcss-breakpoint"

import react from "@astrojs/react"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://kendallacrepair.com',
  integrations: [showTailwindcssBreakpoint(), react(), sitemap()],
  server: {
    port: 4321, // Forces Astro to stay on 4321
    strictPort: true, // Prevents Vite from switching to 5173 if 4321 is busy
  },
})
