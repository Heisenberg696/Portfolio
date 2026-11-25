// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { siteConfig } from "./src/config.ts";

// https://astro.build/config
export default defineConfig({
  site: siteConfig.url,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
