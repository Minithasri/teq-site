'use client';

import BoomiPower from '@/components/partners/boomi/BoomiPower';
import BoomiSolutions from '@/components/partners/boomi/BoomiSolutions';
import FeaturesBoomi from '@/components/partners/boomi/FeaturesBoomi';
import HeroSection from '@/components/partners/boomi/HeroSection';
import LastSection from '@/components/partners/boomi/LastSection';
import Platforms from '@/components/partners/boomi/Platforms';
import SmartAutomation from '@/components/partners/boomi/SmartAutomation';

export default function BoomiPage() {
  return (
    <main>
      <HeroSection />
      <SmartAutomation />
      <FeaturesBoomi />
      <Platforms />
      <BoomiPower />
      <BoomiSolutions />
      <LastSection />
    </main>
  );
}
