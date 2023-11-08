import { Typography } from '@components/typography';
import { NextLink } from '@navigation';
import { buttonStyles, ButtonVariants } from '@styles/button';
import { cva } from 'class-variance-authority';
import { ClassProp } from 'class-variance-authority/dist/types';
import { ComponentType, FC, PropsWithChildren } from 'react';

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

type Props = PropsWithChildren &
  ButtonVariants &
  ClassProp & {
    href: string;
    appearance?: 'link' | 'button';
    leftIcon?: ComponentType<{ className?: string }>;
    rightIcon?: ComponentType<{ className?: string }>;
  };

export const Link: FC<Props> = ({
  children,
  href,
  appearance = 'button',
  size,
  variant,
  mode,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
}) => {
  const getTypographyVariant = (variant: string | null | undefined) => {
    const variants = {
      small: 'cap-sm',
      medium: 'cap-base',
      large: 'cap-md',
    };
    return variant ? variants[variant] : variants.medium;
  };

  return (
    <NextLink
      href={href}
      className={
        appearance === 'button'
          ? buttonStyles({ size, variant, mode, className })
          : ''
      }
    >
      {LeftIcon && <LeftIcon className={iconStyles({ size })} />}
      <Typography variant={getTypographyVariant(size)}>{children}</Typography>
      {RightIcon && <RightIcon className={iconStyles({ size })} />}
    </NextLink>
  );
};
