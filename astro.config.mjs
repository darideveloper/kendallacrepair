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
})