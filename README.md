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

## Deployment

```bash
npm ci
npm run build
```

Serve the contents of `dist/` as static files. Node 20 is what CI builds
with; anything reasonably recent (18+) should work fine.

**Required: SPA fallback routing.** This app uses React Router for
client-side routing (`/about-us`, `/services/:slug`, `/portfolio/:slug`,
etc. are all handled in the browser, not by separate server-side pages).
The server **must** serve `dist/index.html` for any request that doesn't
match a real file in `dist/`, or every route other than the bare root
will 404 on a direct visit, a shared link, or a page refresh — only
in-app navigation (clicking links) would work. This isn't optional or an
edge case; we hit exactly this on the GitHub Pages deployment before
adding a routing workaround for it (see `public/404.html` — that specific
trick is a GitHub Pages-only workaround and not needed here; a normal
host handles this with proper server config instead):

- **nginx**: `try_files $uri $uri/ /index.html;`
- **CloudFront + S3**: add a custom error response mapping both 403 and
  404 to `/index.html` with a 200 status.
- **AWS Amplify Hosting**: enable "Single Page App" rewrite (redirects
  404s to `/index.html` with a 200), or add an equivalent rewrite rule.
- **Elastic Beanstalk / EC2**: same nginx (or Apache `.htaccess`
  `FallbackResource`) config as above, applied to whatever's in front of
  the static files.

No environment variables or special build flags are needed for a normal
deployment — `npm run build` alone serves correctly from the domain
root. (The one exception, `GH_PAGES_BASE`, is set only by
`.github/workflows/deploy.yml` for this repo's own GitHub Pages
deployment, which runs independently of wherever else this gets hosted
and won't conflict with it.)
