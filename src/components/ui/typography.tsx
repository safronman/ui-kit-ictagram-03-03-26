import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';

import { cn } from '@/lib/utils';

const typographyVariants = cva('', {
  variants: {
    variant: {
      large: 'text-large',
      h1: 'text-h1',
      h2: 'text-h2',
      h3: 'text-h3',
      body16: 'text-body-16',
      body16Bold: 'text-body-16-bold',
      body14: 'text-body-14',
      body14Medium: 'text-body-14-medium',
      body14Bold: 'text-body-14-bold',
      body12: 'text-body-12',
      body12Semibold: 'text-body-12-semibold',
      link14: 'text-link-14 underline underline-offset-4',
      link12: 'text-link-12 underline underline-offset-4',
      muted: 'text-body-14 text-muted-foreground',
      lead: 'text-body-16 text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'body14',
  },
});

type TypographyElement = React.ElementRef<'p'>;

type TypographyProps = React.ComponentPropsWithoutRef<'p'> &
  VariantProps<typeof typographyVariants> & {
    asChild?: boolean;
  };

const Typography = React.forwardRef<TypographyElement, TypographyProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : 'p';

    return <Comp ref={ref} className={cn(typographyVariants({ variant }), className)} {...props} />;
  },
);

Typography.displayName = 'Typography';

export { Typography, typographyVariants };
