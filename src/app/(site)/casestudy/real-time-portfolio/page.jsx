export const dynamic = 'force-static';

import BusinessImpact from '@/components/Casestudy/Templates/Real Time Portfolio/BusinessImpact';
import Challenge from '@/components/Casestudy/Templates/Real Time Portfolio/Challenge';
import HeroHeader from '@/components/Casestudy/Templates/Real Time Portfolio/HeroHeader';
import Solutions from '@/components/Casestudy/Templates/Real Time Portfolio/Solution';
import TechnologyStack from '@/components/Casestudy/Templates/Real Time Portfolio/TechnologyStack';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function SalesPerformancePage() {
  return (
    <main>
      <HeroHeader />
      <Challenge />
      <Solutions />
      <TechnologyStack />
      <BusinessImpact />
      <LastSection />
    </main>
  );
}
