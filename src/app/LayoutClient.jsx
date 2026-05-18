'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header/Header';
import TopHeader from '../components/ui/Header/TopHeader';
import Providers from '../components/ui/Providers';
import ScrollToTop from '../components/ui/ScrollToTop';
import SplashScreen from '../components/ui/SplashScreen';

export default function LayoutClient({ children }) {
  const [showSplash, setShowSplash] = useState(true);
  const [isBannerClosed, setIsBannerClosed] = useState(false);

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

  const isBannerVisible = false; // Temporarily disabled

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashFinish} />;
  }

  return (
    <Providers>
      <TopHeader isVisible={isBannerVisible} onClose={handleBannerClose} />
      <ScrollToTop />
      <Header isBannerVisible={false} />
      <main className='pt-0'>{children}</main>
      <Footer />
    </Providers>
  );
}
