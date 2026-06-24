# Ricky Jostaga Portfolio

Professional portfolio for Ricky Jostaga, a Flutter Mobile Developer based in the Philippines.

## Tech Stack

- Next.js
- React
- TypeScript
- Static export for GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The static site is exported to `out/`.

## GitHub Pages

The included GitHub Actions workflow builds and deploys the site from `main`. It automatically sets the correct `NEXT_PUBLIC_BASE_PATH` for either a user site, such as `username.github.io`, or a project site, such as `username.github.io/repository-name`.
