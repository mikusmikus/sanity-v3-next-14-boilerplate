import { Container } from '@components/container';
import { NextLink } from '@navigation';
import { FC } from 'react';

export const PageHeader: FC = () => {
  return (
    <header className="py-4 md:py-8 border-b border-neutral-300">
      <Container>
        <NextLink href="/" className="underline" aria-label="Go to home page">
          Logo
        </NextLink>
      </Container>
    </header>
  );
};
