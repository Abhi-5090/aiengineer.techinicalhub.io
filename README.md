# AI Ready Landing Page

A React + JavaScript single-page app, built with Vite, React Router, and Tailwind CSS.

## Getting Started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Project structure

```
src/
  components/   Reusable UI components
  components/common/  Image, Link, Seo — small shims used across pages
  pages/        One file per route, rendered by src/App.jsx
  providers/    Theme and smooth-scroll (Lenis) context providers
  data/         JSON content for cards, blog posts, team, pricing, etc.
  utils/        Shared constants (image paths)
  styles/       Tailwind CSS entry point and partials
public/         Static assets served as-is (images, fonts, icons)
```

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
