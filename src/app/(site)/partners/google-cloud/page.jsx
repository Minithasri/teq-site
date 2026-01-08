'use client';

import HeroSection from '@/pages/partners/GoogleCloud/HeroSection';
import LastSection from '@/pages/partners/GoogleCloud/LastSection';
import Offerings from '@/pages/partners/GoogleCloud/Offerings';
import ServicesGwc from '@/pages/partners/GoogleCloud/ServicesGwc';
import SetsApart from '@/pages/partners/GoogleCloud/SetsApart';

export default function GoogleCloudPage() {
  return (
    <main>
      <HeroSection />
      <ServicesGwc />
      <Offerings />
      <SetsApart />
      <LastSection />
    </main>
  );
}
