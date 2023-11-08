'use client';

import dynamic from 'next/dynamic';
import { FC, PropsWithChildren } from 'react';
import { suspend } from 'suspend-react';

const LiveQueryProvider = dynamic(() => import('next-sanity/preview'));

// suspend-react cache is global, so we use a unique key to avoid collisions
const UniqueKey = Symbol('lib/sanity.client');

const PreviewProvider: FC<PropsWithChildren & { token?: string }> = ({
  children,
  token,
}) => {
  const { client } = suspend(() => import('@lib/sanity.client'), [UniqueKey]);
  if (!token) throw new TypeError('Missing token');
  return (
    <LiveQueryProvider client={client} token={token} logger={console}>
      {children}
    </LiveQueryProvider>
  );
};

export default PreviewProvider;
