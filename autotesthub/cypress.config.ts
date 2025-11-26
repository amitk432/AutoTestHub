import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        specPattern: "tests/automation/**/*.cy.{js,jsx,ts,tsx}",
        supportFile: false,
        baseUrl: "http://localhost:3000",
        video: false,
        screenshotOnRunFailure: true,
    },
});
