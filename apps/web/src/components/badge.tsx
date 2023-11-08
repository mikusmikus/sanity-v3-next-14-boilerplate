import { Typography } from '@components/typography';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentType, FC } from 'react';

const badgeStyles = cva(['inline-flex', 'items-center', 'rounded-full'], {
  variants: {
    size: {
      small: ['px-1', 'gap-[0.125rem]'],
      medium: ['py-1', 'px-2', 'gap-[0.125rem]'],
      large: ['py-2', 'px-3', 'gap-[0.375rem]'],
    },
    color: {
      'dark-orange': ['bg-primary-500', 'text-neutral-000'],
      'light-orange': ['bg-primary-200', 'text-primary-800'],
      blue: ['bg-secondary-200', 'text-secondary-600'],
    },
  },
  defaultVariants: {
    size: 'medium',
    color: 'light-orange',
  },
});

const iconStyles = cva([], {
  variants: {
    size: {
      small: ['w-3', 'h-3'],
      medium: ['w-4', 'h-4'],
      large: ['w-5', 'h-5'],
    },
    color: {
      'dark-orange': ['text-primary-200'],
      'light-orange': ['text-primary-400'],
      blue: ['text-secondary-400'],
    },
  },
  defaultVariants: {
    size: 'medium',
    color: 'light-orange',
  },
});

type Props = VariantProps<typeof badgeStyles> & {
  label: string;
  leftIcon?: ComponentType<{ className?: string }>;
  rightIcon?: ComponentType<{ className?: string }>;
};

export const Badge: FC<Props> = ({
  label,
  size,
  color,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
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
    <div className={badgeStyles({ size, color })}>
      {LeftIcon && <LeftIcon className={iconStyles({ size, color })} />}
      <Typography variant={getTypographyVariant(size)}>{label}</Typography>
      {RightIcon && <RightIcon className={iconStyles({ size, color })} />}
    </div>
  );
};
