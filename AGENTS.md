# Agents Guide

## Development

The project uses the [**Bun**](https://bun.com) package manager and the [**Blume**](https://useblume.dev) documentation framework (built on Astro and Vite).

```bash
bun install       # Install dependencies
bun run dev       # Run dev server
bun run lint      # Lint codebase
bun run fmt       # Format code
bun run typecheck # Check types
bun run build     # Build static site
bun run preview   # Preview build
```

## Documentation & Framework Guidance

- **Blume Documentation:** AI Agents **must** reference [https://useblume.dev/docs](https://useblume.dev/docs) whenever guidance or clarification on Blume features, syntax, components, or configuration is needed, ensuring docs remain up-to-date with the latest framework capabilities.

## Document Ordering & Structure Rules

- **Automatic Page Ordering:** To ensure pages sort automatically without needing explicit `pages` arrays in `meta.ts` files:
  - Name article files with numeric sorting prefixes (e.g., `01-vat-ly-sieu-am.mdx`, `02-modes.mdx`).
  - Blume automatically strips numerical prefixes from page slugs and URLs while respecting their numerical order in the sidebar.
  - Do **not** list individual pages in the `pages` array inside `meta.ts`. Keep `meta.ts` minimal (containing only title, icon, order, collapsed, etc.).

## Authoring & Formatting Standards

To guarantee complete consistency in formatting, medical terminology, specialized notations, and document structure, AI Agents **must strictly comply** with:

1. [**AMA Manual of Style (Tiếng Việt)**](https://github.com/area44-labs/ama-manual-of-style/blob/main/STYLEGUIDE.vi.md) for medical reporting standards, IMRAD structure, statistical reporting, terminology, and reference formats.
2. [**STYLEGUIDE.md**](./STYLEGUIDE.md) for project-specific Blume components, clinical ultrasound structures, typography, and authoring guidelines.
