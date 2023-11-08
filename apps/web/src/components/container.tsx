import { cva, VariantProps } from 'class-variance-authority';
import { FC, PropsWithChildren } from 'react';

const styles = cva(['w-full', 'ml-auto', 'mr-auto', 'pl-3', 'pr-3'], {
  variants: {
    size: {
      1160: ['max-w-[74rem]'],
      1332: ['max-w-[84.75rem]'],
    },
  },
});

type Props = PropsWithChildren &
  VariantProps<typeof styles> & {
    className?: string;
    as?: 'div' | 'header' | 'main' | 'footer' | 'section';
  };

export const Container: FC<Props> = (props) => {
  const { className, children, as: Component = 'div', size = 1332 } = props;

  return (
    <Component className={`${styles({ size })} ${className}`}>
      {children}
    </Component>
  );
};
