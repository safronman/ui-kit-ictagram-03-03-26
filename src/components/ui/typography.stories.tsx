import type { Meta, StoryObj } from '@storybook/react-vite';

import { Typography } from './typography';

const meta = {
  title: 'UI/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Typography provides one API for headings, body text, and links. Choose `variant` by content hierarchy and semantic meaning.',
      },
    },
  },
  args: {
    variant: 'body14',
    children: 'The quick brown fox jumps over the lazy dog.',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body16',
        'body16Bold',
        'body14',
        'body14Medium',
        'body14Bold',
        'body12',
        'body12Semibold',
        'link14',
        'link12',
        'muted',
        'lead',
      ],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Headings: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Heading scale for page and section hierarchy.',
      },
    },
  },
  render: () => (
    <div className="space-y-2">
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
    </div>
  ),
};

export const BodyText: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Body styles for long-form and supporting text.',
      },
    },
  },
  render: () => (
    <div className="space-y-2">
      <Typography variant="body16">Body 16</Typography>
      <Typography variant="body16Bold">Body 16 Bold</Typography>
      <Typography variant="body14">Body 14</Typography>
      <Typography variant="body14Medium">Body 14 Medium</Typography>
      <Typography variant="body14Bold">Body 14 Bold</Typography>
      <Typography variant="body12">Body 12</Typography>
      <Typography variant="body12Semibold">Body 12 Semibold</Typography>
    </div>
  ),
};

export const LinksAndMuted: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Link and subdued text styles for secondary content.',
      },
    },
  },
  render: () => (
    <div className="space-y-2">
      <Typography variant="link14">Link 14</Typography>
      <Typography variant="link12">Link 12</Typography>
      <Typography variant="muted">Muted text style</Typography>
      <Typography variant="lead">Lead text style</Typography>
    </div>
  ),
};
