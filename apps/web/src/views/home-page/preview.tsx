'use client';

import dynamic from 'next/dynamic';

export const HomePageViewPreview = dynamic(() =>
  import('./index').then((module) => module.HomePageView)
);
