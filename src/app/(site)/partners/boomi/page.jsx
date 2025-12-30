'use client';

import BoomiPower from '@/pages/partners/Boomi/BoomiPower';
import FeaturesBoomi from '@/pages/partners/Boomi/FeaturesBoomi';
import HeroSection from '@/pages/partners/Boomi/HeroSection';
import Platforms from '@/pages/partners/Boomi/Platforms';
import SmartAutomation from '@/pages/partners/Boomi/SmartAutomation';

export default function BoomiPage() {
  return (
    <main>
      <HeroSection />
      <SmartAutomation />
      <FeaturesBoomi />
      <Platforms />
      <BoomiPower />
    </main>
  );
}
