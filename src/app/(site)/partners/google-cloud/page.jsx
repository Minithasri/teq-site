'use client';

import HeroSection from '@/components/partners/GoogleCloud/HeroSection';
import LastSection from '@/components/partners/GoogleCloud/LastSection';
import Offerings from '@/components/partners/GoogleCloud/Offerings';
import ServicesGwc from '@/components/partners/GoogleCloud/ServicesGwc';
import SetsApart from '@/components/partners/GoogleCloud/SetsApart';

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
