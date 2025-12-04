'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header/Header';
import TopHeader from '../components/ui/Header/TopHeader';
import Providers from '../components/ui/Providers';
import SplashScreen from '../components/ui/SplashScreen';
import './globals.css';

export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isBannerClosed, setIsBannerClosed] = useState(false); // true = hidden

  const pathname = usePathname();

  // Define on which paths the banner should appear
  const bannerVisiblePaths = ['/']; // add more if needed, e.g. ['/', '/about']

  const shouldShowBannerInitially = bannerVisiblePaths.some(
    (page) => pathname === page || pathname.startsWith(page + '/')
  );

  // Reset banner closed state when navigating to a page where banner should appear
  useEffect(() => {
    if (shouldShowBannerInitially) {
      setIsBannerClosed(false);
    }
  }, [pathname, shouldShowBannerInitially]);

  const handleSplashFinish = () => setShowSplash(false);
  const handleBannerClose = () => setIsBannerClosed(true);

  const isBannerVisible = shouldShowBannerInitially && !isBannerClosed;

  if (showSplash) {
    return (
      <html lang="en">
        <body>
          <SplashScreen onComplete={handleSplashFinish} />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body>
        <Providers>
          <TopHeader
            isVisible={isBannerVisible}
            onClose={handleBannerClose}
          />
          <Header isBannerVisible={isBannerVisible} />
          <main className={isBannerVisible ? 'pt-20' : ''}>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
