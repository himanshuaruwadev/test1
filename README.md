# Turborepo Monorepo Starter

This repository is a production-ready Turborepo workspace featuring a Next.js 14 web app, an Express API, shared UI components, and shared configuration for linting, formatting, and runtime environment validation.

## Getting Started

```bash
npm install
npm run dev # runs apps in parallel via Turborepo
```

## Workspace Structure

```
.
├── apps
│   ├── api                 # Express + TypeScript API
│   │   ├── Dockerfile
│   │   ├── eslint.config.js
│   │   ├── package.json
│   │   ├── src
│   │   │   └── index.ts
│   │   └── tsconfig.json
│   └── web                 # Next.js 14 + Tailwind App Router app
│       ├── Dockerfile
│       ├── app
│       │   ├── globals.css
│       │   ├── layout.tsx
│       │   └── page.tsx
│       ├── eslint.config.js
│       ├── next.config.ts
│       ├── package.json
│       ├── postcss.config.js
│       ├── tailwind.config.ts
│       └── tsconfig.json
├── packages
│   ├── config              # Shared runtime env + types
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── env.ts
│   │   │   └── types.ts
│   │   └── tsconfig.json
│   ├── eslint-config       # Shared ESLint + Prettier config
│   │   ├── eslint.config.js
│   │   ├── package.json
│   │   └── prettier.config.cjs
│   └── ui                  # Shared React components
│       ├── package.json
│       ├── src
│       │   ├── Button.tsx
│       │   └── index.ts
│       └── tsconfig.json
├── .github/workflows/ci.yml
├── package.json
├── prettier.config.cjs
├── turbo.json
└── tsconfig.base.json
```

## Available Scripts

- `npm run dev` – run all dev targets in parallel via Turborepo
- `npm run lint` – run shared ESLint config across workspaces
- `npm run build` – build all packages and apps via Turborepo

## Docker

- `apps/web/Dockerfile` builds the Next.js app using the standalone output for lean runtime images.
- `apps/api/Dockerfile` builds and copies the compiled Express server for production.

## CI

GitHub Actions (`.github/workflows/ci.yml`) installs dependencies, runs linting, and builds the monorepo on pushes and pull requests targeting `main`.
