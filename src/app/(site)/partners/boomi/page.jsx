'use client';

import BoomiPower from '@/pages/partners/boomi/BoomiPower';
import BoomiSolutions from '@/pages/partners/boomi/BoomiSolutions';
import FeaturesBoomi from '@/pages/partners/boomi/FeaturesBoomi';
import HeroSection from '@/pages/partners/boomi/HeroSection';
import LastSection from '@/pages/partners/boomi/LastSection';
import Platforms from '@/pages/partners/boomi/Platforms';
import SmartAutomation from '@/pages/partners/boomi/SmartAutomation';

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
