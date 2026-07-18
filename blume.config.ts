import { defineConfig } from "blume";

export default defineConfig({
  title: "Ultrasound Learning",
  description: "A comprehensive, interactive educational portal for clinical ultrasound physics, scanning techniques, and applications.",

  feedback: false,

  github: {
    owner: "MedPocket",
    repo: "ultraso",
    branch: "main",
  },

  i18n: {
    defaultLocale: "vi",
    locales: [
      { code: "vi", label: "Tiếng Việt" },
    ],
    hideDefaultLocalePrefix: true,
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
