import { defineConfig } from "blume";

export default defineConfig({
  title: "Ultrasound Learning",
  description: "A comprehensive, interactive educational portal for clinical ultrasound physics, scanning techniques, and applications.",

  github: {
    owner: "MedPocket",
    repo: "ultraso",
    branch: "main",
  },

  theme: {
    accent: "blue",
    radius: "md",
    mode: "system",
  },

  deployment: {
    output: "static",
    site: "https://MedPocket.github.io",
    base: "/ultraso",
  },
});
