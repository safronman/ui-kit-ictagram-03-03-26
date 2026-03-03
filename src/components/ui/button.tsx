import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-[2px] border border-transparent box-border typography-h3 transition-colors outline-none disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          'bg-primary-500 text-light-100 hover:bg-primary-100 active:bg-primary-700 active:text-light-500 focus-visible:border-2 focus-visible:border-primary-700 disabled:bg-primary-900 disabled:text-light-900',
        secondary:
          'bg-dark-300 text-light-100 hover:bg-dark-100 active:bg-dark-400 focus-visible:border focus-visible:border-primary-300 disabled:bg-dark-500 disabled:text-light-900',
        outline:
          'border-primary-500 bg-transparent text-primary-500 hover:border-primary-100 hover:text-primary-100 active:border-primary-700 active:text-primary-700 focus-visible:border-2 focus-visible:border-primary-700 disabled:border-primary-900 disabled:text-primary-900',
        text: 'bg-transparent text-primary-500 hover:text-primary-100 active:text-primary-700 focus-visible:border-2 focus-visible:border-primary-700 disabled:text-primary-900',
      },
      size: {
        default: 'h-9 px-6 py-1.5',
        xs: "h-6 gap-1 rounded-[2px] px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: 'h-8 gap-1.5 rounded-[2px] px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-[2px] px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-xs': "size-6 rounded-[2px] [&_svg:not([class*='size-'])]:size-3",
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant = 'primary',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
