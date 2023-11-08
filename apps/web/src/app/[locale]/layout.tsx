import './../../styles/globals.css';

import { token } from '@lib/sanity.fetch';
import dynamic from 'next/dynamic';
import { Manrope } from 'next/font/google';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { locales } from '../../i18n';
import { PageHeader } from './header';

const manropes = Manrope({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-manrope',
});

const PreviewProvider = dynamic(() => import('./../../preview-provider'));

const RootLayout = ({ children, params: { locale } }) => {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={locale} className={`${manropes.variable} text-neutral-800`}>
      <body>
        <PageHeader />
        <main>
          {draftMode().isEnabled ? (
            <PreviewProvider token={token}>{children}</PreviewProvider>
          ) : (
            children
          )}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
