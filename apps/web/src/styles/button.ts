import { cva, VariantProps } from 'class-variance-authority';
import { ClassProp } from 'class-variance-authority/dist/types';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  [
    'font-semibold',
    'rounded-2',
    'transition-colors',
    'duration-300',
    'inline-flex',
    'items-center',
    'justify-center',
    'border',
  ],
  {
    variants: {
      variant: {
        primary: [],
        secondary: [],
      },
      size: {
        small: ['px-4', 'py-[0.5625rem]', 'gap-1'],
        medium: ['px-6', 'py-[0.6875rem]', 'gap-[0.375rem]'],
        large: ['px-8', 'py-[0.9375rem]', 'gap-2'],
      },
      mode: {
        dark: [],
        light: [],
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        mode: 'dark',
        className: [
          'text-neutral-000',
          'bg-primary-500',
          'border-primary-500',
          'hover:bg-primary-600',
          'hover:border-primary-600',
        ],
      },
      {
        variant: 'secondary',
        mode: 'dark',
        className: [
          'text-neutral-800',
          'bg-neutral-000',
          'border-neutral-800',
          'hover:bg-neutral-800',
          'hover:text-neutral-000',
        ],
      },
      {
        variant: 'secondary',
        mode: 'light',
        className: [
          'text-neutral-800',
          'bg-neutral-000',
          'border-neutral-000',
          'hover:bg-neutral-800',
          'hover:text-neutral-000',
          'hover:border-neutral-800',
        ],
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      mode: 'dark',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants> & ClassProp;
export const buttonStyles = (variants: ButtonVariants) =>
  twMerge(buttonVariants(variants));
