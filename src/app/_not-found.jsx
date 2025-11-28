// src/app/_not-found.jsx
import Container from '@/components/ui/Container';
import SEO from '@/components/ui/SEO';
import { generateMetaTags } from '@/utils/seo-helper';
import Link from 'next/link';

export const metadata = generateMetaTags({
  title: '404 - Page Not Found | GWC Data AI',
  description: 'The page you are looking for could not be found.',
  url: '/_not-found',
});

export default function NotFound() {
  return (
    <>
      <SEO />
      <div className='min-h-screen flex items-center justify-center bg-background'>
        <Container className='text-center'>
          <h1 className='text-6xl font-bold text-foreground mb-4'>404</h1>
          <h2 className='text-2xl font-semibold text-muted-foreground mb-4'>Page Not Found</h2>
          <p className='text-muted-foreground mb-8'>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <Link
            href='/'
            className='bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors inline-block'
          >
            Go Back Home
          </Link>
        </Container>
      </div>
    </>
  );
}
