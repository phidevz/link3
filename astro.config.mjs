import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const ensureBuildPlugin = () => {
  return {
    name: "Ensure Required Build",
    hooks: {
      "astro:config:setup"(options) {
        if (options.command ==="build" && !options.config.site) {
          throw new Error("Must specify site!");
        }
      },
    },
  };
};

export default defineConfig({
  integrations: [tailwind(), ensureBuildPlugin()],
  output: "static",
  build: {
    format: "file",
  },
});
