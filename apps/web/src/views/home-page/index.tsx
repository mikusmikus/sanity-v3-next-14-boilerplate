import { HomePage } from '@types';
import { BenefitsSection } from '@views/home-page/benefits';
import { FC } from 'react';

export const query = `
    *[_type == "homePage" && locale == $locale][0]{
      benefits,
      aboutUs,
      people,
      fleet{
        heading,
        items[]->
      },
    }
  `;

type Props = {
  data: HomePage;
};
export const HomePageView: FC<Props> = ({ data }) => {
  return (
    <>
      <BenefitsSection
        benefits={data.benefits}
        aboutUs={data.aboutUs}
        people={data.people}
      />
    </>
  );
};
