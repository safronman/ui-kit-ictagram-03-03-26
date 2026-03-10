/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import dts from 'vite-plugin-dts';
const rootDir = path.dirname(fileURLToPath(import.meta.url));

import { peerDependencies, dependencies, devDependencies } from './package.json';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(rootDir, './src'),
    },
  },
  plugins: [
    tailwindcss(),
    dts({
      tsconfigPath: path.resolve(rootDir, 'tsconfig.build.json'),
    }),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(rootDir, 'src/index.ts'),
      name: 'IctagramUiKit',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs'),
      cssFileName: 'styles',
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
    },
    sourcemap: true,
    emptyOutDir: true,
    copyPublicDir: false,
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(rootDir, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
});
