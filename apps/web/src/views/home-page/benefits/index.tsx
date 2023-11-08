import { Container } from '@components/container';
import { Divider } from '@components/divider';
import { NextSanityImage } from '@components/next-sanity-image';
import { Typography } from '@components/typography';
import { HomePage } from '@types';
import { Description } from '@views/home-page/benefits/description';
import NextImage from 'next/image';
import { FC } from 'react';

type Props = {
  benefits: HomePage['benefits'];
  aboutUs: HomePage['aboutUs'];
  people: HomePage['people'];
};

export const BenefitsSection: FC<Props> = ({ benefits, aboutUs, people }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute -right-43 -top-43 -z-10">
        <NextImage
          src="/images/image-blurred-bg-01.png"
          alt=""
          width={1800}
          height={1800}
        />
      </div>
      <div className="absolute bottom-0 left-0 -z-20">
        <NextImage
          src="/images/image-blurred-bg-02.png"
          alt=""
          width={2614}
          height={1856}
        />
      </div>
      <Container className="py-22 md:py-34">
        <Typography variant="h1" className="mb-16 md:mb-22" shifted>
          {benefits.heading}
        </Typography>
        <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-24 md:gap-y-16 md:max-w-[57rem] md:ml-auto">
          {benefits.items.map((item, index) => (
            <li key={index}>
              <Description benefit={item} />
            </li>
          ))}
        </ul>
      </Container>
      <Divider />
      <Container className="py-22 md:py-34">
        <div className="mb-16 md:flex md:justify-between md:gap-4 md:mb-22">
          <div className="relative aspect-[744/488] w-full max-w-[46.5rem] mb-3 md:mb-0">
            <NextSanityImage
              asset={aboutUs.primaryImage}
              alt={aboutUs.primaryImage.alt}
              fill={true}
              className="object-cover rounded-2 grayscale hover:grayscale-0 duration-300"
            />
          </div>
          <div className="w-full relative">
            <div className="relative aspect-[408/262] w-full max-w-[10.125rem] md:max-w-[25.5rem] md:absolute md:right-0 md:bottom-0">
              <NextSanityImage
                asset={aboutUs.primaryImage}
                alt={aboutUs.primaryImage.alt}
                fill={true}
                className="object-cover rounded-2 grayscale hover:grayscale-0 duration-300"
              />
            </div>
          </div>
        </div>
        <Typography variant="h3" shifted size={1080} className="mb-6 md:mb-8">
          {aboutUs.heading}
        </Typography>
        <Typography variant="p-reg-lg" size={1080}>
          {aboutUs.subheading}
        </Typography>
      </Container>
      <Container className="py-22 md:py-34">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-10 xl:gap-24">
          {people?.[0] && (
            <div className="md:col-span-2 md:order-1">
              <div className="relative aspect-[744/488] mb-10 md:mb-22">
                <NextSanityImage
                  asset={people[0].image}
                  alt={people[0].image.alt}
                  fill={true}
                  className="object-cover rounded-2 grayscale hover:grayscale-0 duration-300"
                />
              </div>
              <Typography variant="h6" size={408} className="mb-4">
                {people[0].heading}
              </Typography>
              <Typography variant="p-reg-sm" size={408} className="mb-4">
                {people[0].description}
              </Typography>
            </div>
          )}
          {people?.[1] && (
            <div className="md:col-span-1">
              <div className="relative aspect-[744/488] mb-10 md:mb-16">
                <NextSanityImage
                  asset={people[1].image}
                  alt={people[1].image.alt}
                  fill={true}
                  className="object-cover rounded-2 grayscale hover:grayscale-0 duration-300"
                />
              </div>
              <Typography variant="h6" size={408} className="mb-4">
                {people[1].heading}
              </Typography>
              <Typography variant="p-reg-sm" size={408} className="mb-4">
                {people[1].description}
              </Typography>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
