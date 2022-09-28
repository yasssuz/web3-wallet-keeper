import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    viewportHeight: 965,
    viewportWidth: 1615,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
