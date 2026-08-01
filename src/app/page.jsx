import HomeClient from '@/components/HomeClient';

export const metadata = {
  metadataBase: new URL('https://teqcerty.com'),
  title: 'Teqcerty | Master Claude Before Your Job Demands It',
  description:
    'Teqcerty provides structured Claude AI training across three levels. Master Claude before your job demands it — enroll today.',
  openGraph: {
    title: 'Teqcerty | Master Claude Before Your Job Demands It',
    description:
      'Master Claude AI before your job demands it. Structured training across three levels.',
    url: 'https://teqcerty.com',
    siteName: 'Teqcerty',
    images: [],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teqcerty | Master Claude Before Your Job Demands It',
    description: 'Master Claude AI before your job demands it.',
    images: [],
  },
  keywords: 'teqcerty, claude ai, ai training, claude course, ai certification, master claude',
  alternates: {
    canonical: 'https://teqcerty.com/',
  },
};

/**
 * Root page — stays as a Server Component so `metadata` is picked up by Next.js.
 * All interactive scroll logic lives in HomeClient (a Client Component).
 */
export default function Home() {
  return <HomeClient />;
}
