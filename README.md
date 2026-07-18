# Ultrasound Learning

A comprehensive, interactive educational portal for clinical ultrasound physics, scanning techniques, and applications.

## 🚀 Introduction

The **Ultrasound Learning** portal is built using the **Blume** documentation framework (powered by Astro and Vite). It is designed to provide clinical practitioners, residents, and students with high-yield, interactive guides on clinical ultrasonography.

The documentation is organized systematically, covering basic physics, imaging modes, transducer manipulation, and knobology.

## 🛠️ Installation & Local Development

The development environment requires Node (v22+) and uses **Bun** as the primary package manager.

### 1. Install Dependencies

To install all required dependencies, run:

```bash
bun install
```

### 2. Start the Local Development Server

Run the Blume local development server with hot-reloading:

```bash
bun run blume dev
```

### 3. Diagnose Documentation (Doctor Mode)

Run Blume's diagnostic tool to detect any broken internal links, anchor mismatches, or structural issues:

```bash
npx blume doctor
```

### 4. Build for Production

Build the site statically (output is generated inside the `dist/` directory):

```bash
npx blume build
```

### 5. Preview Production Build Locally

Run a local preview server on port `4321` to test the statically built site:

```bash
npx blume preview
```
The preview URL: `http://localhost:4321/ultraso`

## ⚙️ Configuration Details

This site is configured with specific features managed in `blume.config.ts`:

- **Vietnamese Language Support (`i18n`):** The documentation utilizes Vietnamese (`vi`) as the default language.
- **Feedback Widget Disabled (`feedback: false`):** The default "Was this helpful?" widget is disabled on all pages.
- **Enable Edit Pages (`github`):** The repository configuration is defined to automatically generate "Edit this page" links on GitHub, allowing clinical contributors to easily propose improvements.
- **Automated Dependency Updates (`.github/renovate.json`):** Renovate bot is integrated in the `.github` directory, extending the shared preset `github>area44-config`.

## 📁 Repository Structure

- `docs/`: Holds the Markdown/MDX content.
  - `01-basics/`: Fundamental ultrasound physics and standard imaging modes.
  - `02-scanning/`: Guides on transducer selection and knobology/optimization.
  - `index.mdx`: Homepage / introduction of Ultrasound Learning.
