import { cva, type VariantProps } from 'class-variance-authority';
import { ElementType, FC, PropsWithChildren } from 'react';

const styles = cva(['font-manrope', 'block'], {
  variants: {
    variant: {
      display1: [
        'font-semibold',
        'text-[3rem]',
        'leading-[3.25rem]',
        'md:text-[5.5rem]',
        'md:leading-[5.75rem]',
      ],
      display2: [
        'font-semibold',
        'text-[2.5rem]',
        'leading-[2.75rem]',
        'md:text-[4.5rem]',
        'md:leading-[4.75rem]',
      ],
      h1: [
        'font-semibold',
        'text-[2rem]',
        'leading-[2.25rem]',
        'md:text-[3.5em]',
        'md:leading-[3.75rem]',
      ],
      h2: [
        'font-semibold',
        'text-[1.75rem]',
        'leading-[2rem]',
        'md:text-[3rem]',
        'md:leading-[3.25rem]',
      ],
      h3: [
        'font-semibold',
        'text-[1.5rem]',
        'leading-[1.75rem]',
        'md:text-[2.5rem]',
        'md:leading-[2.75rem]',
      ],
      h4: [
        'font-semibold',
        'text-[1.5rem]',
        'leading-[1.5rem]',
        'md:text-[2rem]',
        'md:leading-[2rem]',
      ],
      h5: [
        'font-semibold',
        'text-[1.25rem]',
        'leading-[1.25rem]',
        'md:text-[1.5rem]',
        'md:leading-[1.5rem]',
      ],
      h6: ['font-semibold', 'text-[1.25rem]', 'leading-[1.25rem]'],
      'p-reg-lg': [
        'font-medium',
        'text-[1.25rem]',
        'leading-[1.75rem]',
        'md:text-[1.5rem]',
        'md:leading-[2rem]',
      ],
      'p-reg-md': [
        'font-medium',
        'text-[1rem]',
        'leading-[1.25rem]',
        'md:text-[1.25rem]',
        'md:leading-[1.5rem]',
      ],
      'p-reg-base': ['font-medium', 'text-[1rem]', 'leading-[1.25rem]'],
      'p-reg-sm': ['font-medium', 'text-[0.875rem]', 'leading-[1.125rem]'],
      'p-reg-xs': ['font-medium', 'text-[0.75rem]', 'leading-[1rem]'],

      'cap-md': ['font-medium', 'text-[1.25rem]', 'leading-[1.5rem]'],
      'cap-base': ['font-medium', 'text-[1rem]', 'leading-[1.25rem]'],
      'cap-sm': ['font-medium', 'text-[0.875rem]', 'leading-[1rem]'],
      'cap-xs': ['font-medium', 'text-[0.875rem]', 'leading-[1rem]'],
      'cap-xxs': ['font-medium', 'text-[0.625rem]', 'leading-[0.75rem]'],
    },
    shifted: {
      true: ["before:content-['']", 'before:inline-block', 'before:w-[3.5rem]'],
    },
    size: {
      full: '',
      1080: ['max-w-[67.5rem]'],
      996: ['max-w-[62.25rem]'],
      408: ['max-w-[25.5rem]'],
    },
  },
  compoundVariants: [
    {
      variant: 'h1',
      shifted: true,
      className: ['md:before:w-[10.5rem]'],
    },
    {
      variant: 'h2',
      shifted: true,
      className: ['md:before:w-[10.5rem]'],
    },
    {
      variant: 'h3',
      shifted: true,
      className: ['md:before:w-[5.5rem]'],
    },
    {
      variant: 'h4',
      shifted: true,
      className: ['md:before:w-[5.5rem]'],
    },
    {
      variant: 'h5',
      shifted: true,
      className: ['md:before:w-[5.5rem]'],
    },
    {
      variant: 'h6',
      shifted: true,
      className: ['md:before:w-[5.5rem]'],
    },
  ],
});

export type Props = PropsWithChildren &
  VariantProps<typeof styles> & {
    className?: string;
    color?: string;
    as?: ElementType;
  };

export const Typography: FC<Props> = ({
  className,
  variant = 'p-reg-base',
  shifted = false,
  size = 'full',
  children,
  as: Component = 'p',
  ...props
}) => {
  return (
    <Component
      className={styles({ variant, shifted, size, className })}
      {...props}
    >
      {children}
    </Component>
  );
};
