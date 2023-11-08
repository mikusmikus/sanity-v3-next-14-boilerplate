import { client } from '@lib/sanity.client';
import { SanityImageSource } from '@sanity/asset-utils';
import imageUrlBuilder from '@sanity/image-url';
import NextImage from 'next/image';
import { FC } from 'react';

type Props = {
  asset: SanityImageSource;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
};

export const NextSanityImage: FC<Props> = ({
  asset,
  fill,
  className,
  priority,
  ...rest
}) => {
  const builder = imageUrlBuilder(client);
  const src = builder.image(asset).url() ?? '';

  return (
    <NextImage
      src={src}
      fill={fill}
      className={className}
      priority={priority}
      {...rest}
    />
  );
};
