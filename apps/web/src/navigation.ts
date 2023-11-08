import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import { locales } from './i18n';

export const {
  Link: NextLink,
  redirect,
  usePathname,
  useRouter,
} = createSharedPathnamesNavigation({ locales });
