import { defineConfig } from "blume";

export default defineConfig({
  deployment: {
    base: process.env.NETLIFY === "true" ? "/" : "/ultraso",
    output: "static",
    site:
      process.env.NETLIFY === "true"
        ? process.env.URL || "https://ultraso.netlify.app"
        : "https://medpocket.github.io",
  },
  description: "Tài liệu về siêu âm lâm sàng.",
  feedback: false,
  github: {
    branch: "main",
    owner: "MedPocket",
    repo: "ultraso",
  },
  i18n: {
    defaultLocale: "vi",
    hideDefaultLocalePrefix: true,
    locales: [{ code: "vi", label: "Tiếng Việt" }],
  },
  seo: {
    og: {
      site: false,
    },
  },
  theme: {
    accent: "blue",
    fonts: {
      body: { name: "Be Vietnam Pro", provider: "fontsource" },
      display: { name: "Be Vietnam Pro", provider: "fontsource" },
    },
    mode: "system",
    radius: "md",
  },
  title: "Ultraso",
});
