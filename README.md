# Mesa Steam Showers

Mesa Steam Showers is a marketing and e-commerce experience built with Next.js 15 and Tailwind CSS. The site showcases a curated product line, highlights Mesa&apos;s differentiators, and guides visitors toward booking a white-glove design consultation.

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Global metadata and layout shell
│   └── page.tsx          # Homepage composition
├── components/
│   ├── cards/            # Reusable UI cards (product tile, etc.)
│   ├── layout/           # Page chrome (header, footer, container)
│   └── sections/         # Homepage feature sections
├── data/                 # Structured content for products, FAQs, etc.
└── types/                # Shared TypeScript interfaces for content
```

All sections are driven by structured data modules under `src/data`, making it easy to expand the catalog, testimonials, or FAQs without touching the layout code.

## Getting started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the experience. Update any content files under `src/data` or tweak components in `src/components` to customize the storefront.

## Available scripts

- `npm run dev` – start the local development server with Turbopack
- `npm run build` – create an optimized production build
- `npm run start` – run the production build locally
- `npm run lint` – run ESLint against the project

## Design language

The interface leans on a dark, cinematic aesthetic with cyan accents to mirror premium spa environments. Tailwind CSS utilities are used for layout and spacing, while reusable wrappers like `Container` and `Section` components provide consistent rhythm across the page.
