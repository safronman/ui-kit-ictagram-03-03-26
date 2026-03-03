import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button';

const meta = {
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
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
};

export const Outline: Story = {
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
};

export const Text: Story = {
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
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

export const IconSize: Story = {
  args: {
    size: 'icon',
    'aria-label': 'Icon button',
    children: '+',
  },
};
