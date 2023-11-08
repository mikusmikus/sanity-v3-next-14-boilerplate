import { sanityFetch } from '@lib/sanity.fetch';
import { HomePage } from '@types';
import { HomePageView, query } from '@views/home-page';
import { HomePageViewPreview } from '@views/home-page/preview';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { LiveQuery } from 'next-sanity/preview/live-query';

const Home = async ({ params: { locale } }) => {
  const data = await sanityFetch<HomePage>({ query, params: { locale } });

  if (!data) {
    notFound();
  }

  return (
    <LiveQuery
      enabled={draftMode().isEnabled}
      query={query}
      params={{ locale }}
      initialData={data}
      as={HomePageViewPreview}
    >
      <HomePageView data={data} />
    </LiveQuery>
  );
};

export default Home;
