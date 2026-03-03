# Repository Guidelines

## Project Structure & Module Organization

The project is a single-package Vite + React + TypeScript app.

- `src/`: application code (`main.tsx` entry, `App.tsx` root component, CSS files, and `assets/`).
- `public/`: static files served as-is (for example `public/vite.svg`).
- Root config: `vite.config.ts`, `eslint.config.js`, `tsconfig*.json`, `package.json`.
- Build output: `dist/` (generated; do not edit manually).

Keep new UI code inside `src/` and colocate component styles/assets near the component when practical.

## Build, Test, and Development Commands

Use `pnpm` (lockfile is `pnpm-lock.yaml`).

- `pnpm dev`: start Vite dev server with HMR.
- `pnpm build`: run TypeScript project build (`tsc -b`) and produce production bundle.
- `pnpm preview`: serve the built app locally from `dist/`.
- `pnpm lint`: run ESLint across the repository.
- `pnpm format`: format all files with Prettier.
- `pnpm format:check`: verify formatting without changing files.

Run `pnpm lint && pnpm build` before opening a PR.

## Coding Style & Naming Conventions

- Language: TypeScript + React function components.
- Indentation: 2 spaces; keep formatting consistent with existing files.
- Components: `PascalCase` (`UserCard.tsx`), hooks: `camelCase` with `use` prefix (`useAuth.ts`).
- Variables/functions: `camelCase`; constants: `UPPER_SNAKE_CASE` only for true constants.
- Prefer explicit, small components and typed props/interfaces.
- Linting source of truth: `eslint.config.js` (`@eslint/js`, `typescript-eslint`, `react-hooks`, `react-refresh`).
- Prettier source of truth: `.prettierrc` (popular defaults with `printWidth: 120`).

## Commit & Pull Request Guidelines

Current history is minimal (`init`), so follow clear, imperative commit messages.
Use Conventional Commits: `type(scope): summary` (example: `feat(auth): add sign-in form validation`).

## Agent Workflow Rules

- Create commits only in Conventional Commits format.
- After each completed task, run `pnpm format`.
- After each completed task, run `pnpm run build`; if it fails, fix errors and rerun until build succeeds.
