import { Container } from '@components/container';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, PropsWithChildren } from 'react';

const styles = cva(
  ['w-full', 'ml-auto', 'mr-auto', 'border-t', 'border-neutral-600'],
  {
    variants: {
      size: {
        1332: ['max-w-[84.75rem]'],
      },
    },
    defaultVariants: {
      size: 1332,
    },
  }
);

type Props = PropsWithChildren &
  VariantProps<typeof styles> & {
    contained?: boolean;
  };

export const Divider: FC<Props> = ({ size, contained = true }) => {
  if (contained) {
    return (
      <Container size={size}>
        <hr className={styles()} />
      </Container>
    );
  }

  return <hr className={styles()} />;
};
