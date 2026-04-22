import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";

export default defineConfig({
  site: "https://createsuite.app",
  output: "hybrid",
  integrations: [mdx(), sitemap(), keystatic()],
});
