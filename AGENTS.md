# Agents Guide

## Project Structure

```
.
├── assets/             # Images and visual media assets for docs articles
├── docs/               # Documentation articles (Markdown / MDX)
│   ├── 01-co-ban/      # Section 1: Basic Ultrasound Principles
│   │   ├── 01-vat-ly-sieu-am.mdx
│   │   ├── 02-modes.mdx
│   │   └── meta.ts     # Folder configuration (title, icon, order...)
│   ├── 02-ky-thuat-quet/
│   ├── 03-sieu-am-mo-mem/
│   ├── 04-sieu-am-san-khoa/
│   └── index.mdx       # Homepage content
├── AGENTS.md           # Instructions & structure for AI agents
├── STYLEGUIDE.md       # Writing, formatting, and clinical standards
└── blume.config.ts     # Blume site configuration
```

## Documentation & Framework Reference

- **Blume Documentation:** Refer to [https://useblume.dev/docs](https://useblume.dev/docs) whenever guidance on Blume components, navigation, or features is needed.

## Quick Commands

```bash
bun install       # Install dependencies
bun run dev       # Run development server
bun run lint      # Lint codebase
bun run fmt       # Format codebase
bun run typecheck # Type check
bun run build     # Build static site
```

## Authoring Rules

- Follow [**STYLEGUIDE.md**](./STYLEGUIDE.md) for all document formatting, AMA style standards, medical terminology, and document structure.
- Prefix page files with numbers (e.g., `01-*.mdx`, `02-*.mdx`) so Blume sorts them automatically. Do **not** specify `pages` arrays in `meta.ts`.
