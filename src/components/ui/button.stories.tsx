import preview from '#.storybook/preview';

import { Button } from './button';

const meta = preview.meta({
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Button supports visual variants (`primary`, `secondary`, `outline`, `text`) and multiple sizes. Use `variant` for emphasis and `size` for control density.',
      },
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'default',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'text'],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
    onClick: { action: 'clicked' },
  },
});

export const Primary = meta.story();

export const Secondary = meta.story({
  parameters: {
    docs: {
      description: {
        story: 'Secondary action for less prominent operations.',
      },
    },
  },
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
});

export const Outline = meta.story({
  parameters: {
    docs: {
      description: {
        story: 'Low-emphasis outlined action on neutral backgrounds.',
      },
    },
  },
  args: {
    variant: 'outline',
    children: 'Outline',
  },
});

export const Text = meta.story({
  parameters: {
    docs: {
      description: {
        story: 'Ghost/text action for inline or minimal UI contexts.',
      },
    },
  },
  args: {
    variant: 'text',
    children: 'Text',
  },
});

export const Disabled = meta.story({
  args: {
    disabled: true,
    children: 'Disabled',
  },
});

export const IconSize = meta.story({
  args: {
    size: 'icon',
    'aria-label': 'Icon button',
    children: '+',
  },
});
