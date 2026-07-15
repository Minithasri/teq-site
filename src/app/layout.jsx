'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header/Header';
import TopHeader from '../components/ui/Header/TopHeader';
import Providers from '../components/ui/Providers';
import ScrollToTop from '../components/ui/ScrollToTop';
import SplashScreen from '../components/ui/SplashScreen';
import './globals.css';

export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true);
  const [_isBannerClosed, setIsBannerClosed] = useState(false);

  const pathname = usePathname();

  const bannerVisiblePaths = ['/', '/domopalooza'];

  const shouldShowBannerInitially = bannerVisiblePaths.some(
    page => pathname === page || pathname.startsWith(page + '/')
  );

  useEffect(() => {
    if (shouldShowBannerInitially) {
      setIsBannerClosed(false);
    }
  }, [pathname, shouldShowBannerInitially]);

  const handleSplashFinish = () => setShowSplash(false);
  const handleBannerClose = () => setIsBannerClosed(true);

  const isBannerVisible = false;

  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/images/favlogo1.svg' type='image/svg+xml' sizes='any' />
      </head>
      <body className={showSplash ? 'overflow-hidden' : ''}>
        <Providers>
          <TopHeader isVisible={isBannerVisible} onClose={handleBannerClose} />
          <ScrollToTop />
          <Header isBannerVisible={false} />
          <main className='pt-0'>{children}</main>
          <Footer />
          {showSplash && <SplashScreen onComplete={handleSplashFinish} />}
        </Providers>
      </body>
    </html>
  );
}
