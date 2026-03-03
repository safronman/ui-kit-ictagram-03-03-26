# @safronman/ui-kit-ictagram

Reusable React UI components for Ictagram projects.

## Installation

```bash
pnpm add @safronman/ui-kit-ictagram
```

Peer dependencies:

- `react@^19`
- `react-dom@^19`

## Usage

Import the styles once in your app entry file:

```ts
import '@safronman/ui-kit-ictagram/styles.css';
```

Then use components:

```tsx
import { Button, Typography } from '@safronman/ui-kit-ictagram';

export function Example() {
  return (
    <div>
      <Typography variant="h2">UI kit demo</Typography>
      <Button variant="primary">Click</Button>
    </div>
  );
}
```

## Local Development

- `pnpm dev` - start Vite dev server
- `pnpm storybook` - run Storybook
- `pnpm lint` - lint source
- `pnpm typecheck` - TypeScript project check
- `pnpm build` - build distributable package into `dist/`

## Release Process

This repo uses [Changesets](https://github.com/changesets/changesets) + GitHub Actions.

1. Create a changeset:
   `pnpm changeset`
2. Commit the generated file in `.changeset/`.
3. Merge into `main`.
4. Release workflow bumps version and publishes to npm using `NPM_TOKEN`.

## Package Exports

- `@safronman/ui-kit-ictagram` - components and utilities
- `@safronman/ui-kit-ictagram/styles.css` - package styles
