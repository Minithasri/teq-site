'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header/Header';
import Providers from '../components/ui/Providers';
import ScrollToTop from '../components/ui/ScrollToTop'; // Import the new component
import SplashScreen from '../components/ui/SplashScreen';
import './globals.css';

export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isBannerClosed, setIsBannerClosed] = useState(false); // true = hidden

  const pathname = usePathname();

  // Define on which paths the banner should appear
  const bannerVisiblePaths = ['/']; // add more if needed, e.g. ['/', '/about']

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

  const isBannerVisible = false; // shouldShowBannerInitially && !isBannerClosed;

  if (showSplash) {
    return (
      <html lang='en'>
        <body>
          <SplashScreen onComplete={handleSplashFinish} />
        </body>
      </html>
    );
  }

  return (
    <html lang='en'>
      <body>
        <Providers>
          {/* <TopHeader
            isVisible={isBannerVisible}
            onClose={handleBannerClose}
          /> */}
          <ScrollToTop /> {/* Add ScrollToTop here outside of Header/Main/Footer */}
          <Header isBannerVisible={isBannerVisible} />
          <main className={isBannerVisible ? 'pt-20' : ''}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
