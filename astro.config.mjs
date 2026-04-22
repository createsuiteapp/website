import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://createsuite.app",
  integrations: [sitemap()],
});
