import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-mcp',
      options: {
        toolsets: ['dev', 'docs'],
        experimentalFormat: 'markdown',
      },
    },
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  features: {
    experimentalComponentsManifest: true,
  },
  framework: '@storybook/react-vite',
};
export default config;
