import { defineConfig } from "blume";

export default defineConfig({
  title: "Ultraso",
  description: "Document for clinical ultrasound physics, scanning techniques, and applications.",

  feedback: false,

  github: {
    owner: "MedPocket",
    repo: "ultraso",
    branch: "main",
  },

  i18n: {
    defaultLocale: "vi",
    locales: [{ code: "vi", label: "Tiếng Việt" }],
    hideDefaultLocalePrefix: true,
  },

  seo: {
    og: {
      fonts: ["Be Vietnam Pro", "Inter"],
    },
  },

  theme: {
    accent: {
      light: "#000000",
      dark: "#ffffff",
    },
    radius: "md",
    mode: "system",
  },

  deployment: {
    output: "static",
    site:
      process.env.NETLIFY === "true"
        ? process.env.URL || "https://ultraso.netlify.app"
        : "https://medpocket.github.io",
    base: process.env.NETLIFY === "true" ? "/" : "/ultraso",
  },
});
