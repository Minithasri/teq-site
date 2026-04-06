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
  const [isBannerClosed, setIsBannerClosed] = useState(false); // true = hidden

  const pathname = usePathname();

  // Define on which paths the banner should appear
  const bannerVisiblePaths = ['/', '/domopalooza']; // add more if needed, e.g. ['/', '/about']

  const shouldShowBannerInitially = bannerVisiblePaths.some(
    page => pathname === page || pathname.startsWith(page + '/')
  );

  // Reset banner closed state when navigating to a page where banner should appear
  useEffect(() => {
    if (shouldShowBannerInitially) {
      setIsBannerClosed(false);
    }
  }, [pathname, shouldShowBannerInitially]);

  const handleSplashFinish = () => setShowSplash(false);
  const handleBannerClose = () => setIsBannerClosed(true);

  // const isBannerVisible = shouldShowBannerInitially && !isBannerClosed;
  const isBannerVisible = false; // Temporarily disabled

  if (showSplash) {
    return (
      <html lang='en'>
        <head>
          <link rel='icon' href='/images/favlogo1.svg' type='image/svg+xml' sizes='any' />
        </head>
        <body>
          <SplashScreen onComplete={handleSplashFinish} />
        </body>
      </html>
    );
  }

  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/images/favlogo1.svg' type='image/svg+xml' sizes='any' />
      </head>
      <body>
        <Providers>
          <TopHeader isVisible={isBannerVisible} onClose={handleBannerClose} />
          <ScrollToTop /> {/* Add ScrollToTop here outside of Header/Main/Footer */}
          <Header isBannerVisible={false} />
          <main className='pt-0'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
