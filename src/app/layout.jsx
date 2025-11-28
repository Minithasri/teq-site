'use client';

import { useState } from 'react';
import Footer from '../components/ui/Footer';
import Header from '../components/ui/Header/Header';
import TopHeader from '../components/ui/Header/TopHeader';
import Providers from '../components/ui/Providers';
import SplashScreen from '../components/ui/SplashScreen';
import './globals.css';

export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  // useSmoothScroll has been removed entirely

  if (showSplash) {
    return (
      <html lang="en">
        <body cz-shortcut-listen="true">
          <SplashScreen onComplete={handleSplashFinish} />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Providers>
          <TopHeader />
          <Header />
          <div className="mt-0">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
