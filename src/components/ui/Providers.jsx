// src/components/Providers.jsx
'use client';
import { defaultSEO } from '../../lib/seo';
import { DefaultSeo } from 'next-seo';
import { isBrowser } from '../../lib/utils';

export default function Providers({ children }) {
  return (
    <>
      {isBrowser() && <DefaultSeo {...defaultSEO} />}
      {children}
    </>
  );
}
