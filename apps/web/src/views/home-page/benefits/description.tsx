'use client';

import { NextSanityImage } from '@components/next-sanity-image';
import { Typography } from '@components/typography';
import { HomePage } from '@types';
import { FC, MouseEvent, useRef, useState } from 'react';

type Props = {
  benefit: HomePage['benefits']['items'][0];
};
export const Description: FC<Props> = ({ benefit }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLDivElement | null>(null);
  const handleMouseMove = (event: MouseEvent) => {
    if (window.innerWidth >= 1280) {
      let x = event.clientX;
      let y = event.clientY;

      if (imgRef.current) {
        x -= imgRef.current.offsetWidth / 2;
        y -= imgRef.current.offsetHeight / 2;
        imgRef.current.classList.add('duration-300');
        imgRef.current.classList.add('transition-opacity');
        imgRef.current.classList.remove('xl:opacity-0');
        imgRef.current.classList.add('xl:opacity-100');
      }

      setCursorPosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.classList.remove('xl:opacity-100');
      imgRef.current.classList.add('xl:opacity-0');
    }
  };

  return (
    <div
      className="grid grid-cols-3 gap-4 xl:grid-cols-1 relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="col-span-2">
        <Typography variant="h5" className="mb-4">
          {benefit.name}
        </Typography>
        <Typography variant="p-reg-sm">{benefit.description}</Typography>
      </div>
      <div className="col-span-1">
        <div
          className="relative aspect-[67/104] xl:aspect-[324/208] xl:w-full xl:max-w-[324px] xl:fixed xl:-z-10 xl:opacity-0"
          ref={imgRef}
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
          }}
        >
          <NextSanityImage
            asset={benefit.image}
            alt={benefit.image.alt}
            fill={true}
            className="object-cover rounded-2"
          />
        </div>
      </div>
    </div>
  );
};
