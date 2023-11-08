'use client';

import { Typography } from '@components/typography';
import { cva, VariantProps } from 'class-variance-authority';
import { ClassProp } from 'class-variance-authority/dist/types';
import { ComponentType, FC } from 'react';
import { twMerge } from 'tailwind-merge';

const chipVariants = cva(['inline-flex', 'items-center', 'rounded-1'], {
  variants: {
    size: {
      small: ['px-1', 'gap-[0.125rem]'],
      medium: ['px-2', 'py-1', 'gap-[0.125rem]'],
      large: ['px-3', 'py-1', 'gap-[0.375rem]'],
    },
    state: {
      active: ['bg-primary-500', 'text-neutral-000'],
      inactive: ['bg-primary-200', 'text-primary-800'],
      completed: ['bg-semantic-success-icon', 'text-semantic-success-bg'],
    },
  },
  defaultVariants: {
    size: 'medium',
    state: 'inactive',
  },
});

const chipStyles = (variants: VariantProps<typeof chipVariants> & ClassProp) =>
  twMerge(chipVariants(variants));

const iconStyles = cva([], {
  variants: {
    size: {
      small: ['w-3', 'h-3'],
      medium: ['w-4', 'h-4'],
      large: ['w-5', 'h-5'],
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

type Props = VariantProps<typeof chipVariants> &
  ClassProp & {
    label: string;
    onClick?: () => void;
    leftIcon?: ComponentType<{ className?: string }>;
    rightIcon?: ComponentType<{ className?: string }>;
  };

export const Chip: FC<Props> = ({
  size,
  state,
  label,
  className,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onClick,
}) => {
  const getTypographyVariant = (variant: string | null | undefined) => {
    const variants = {
      small: 'cap-xxs',
      medium: 'cap-xs',
      large: 'cap-base',
    };
    return variant ? variants[variant] : variants.medium;
  };

  return (
    <button
      onClick={onClick}
      className={chipStyles({ size, state, className })}
    >
      {LeftIcon && <LeftIcon className={iconStyles({ size })} />}
      <Typography variant={getTypographyVariant(size)}>{label}</Typography>
      {RightIcon && <RightIcon className={iconStyles({ size })} />}
    </button>
  );
};
