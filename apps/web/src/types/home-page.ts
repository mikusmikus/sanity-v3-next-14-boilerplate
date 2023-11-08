import { SanityImageSource } from '@sanity/asset-utils';

import { Meta } from './meta';

export type HomePage = {
  meta: Meta;
  benefits: {
    heading: string;
    items: {
      image: SanityImageSource & { alt: string };
      name: string;
      description: string;
    }[];
  };
  aboutUs: {
    primaryImage: SanityImageSource & { alt: string };
    secondaryImage: SanityImageSource & { alt: string };
    heading: string;
    subheading: string;
  };
  people: {
    image: SanityImageSource & { alt: string };
    heading: string;
    description?: string;
  }[];
};
