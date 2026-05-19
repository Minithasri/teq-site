export const dynamic = 'force-static';

import BusinessImpact from '@/components/Casestudy/Templates/Driving Entertainment Success/BusinessImpact';
import Challenge from '@/components/Casestudy/Templates/Driving Entertainment Success/Challenge';
import HeroHeader from '@/components/Casestudy/Templates/Driving Entertainment Success/HeroHeader';
import BusinessObjective from '@/components/Casestudy/Templates/Driving Entertainment Success/Business Objective';
import Solutions from '@/components/Casestudy/Templates/Driving Entertainment Success/Solution';
import TechnologyStack from '@/components/Casestudy/Templates/Driving Entertainment Success/TechnologyStack';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function SalesPerformancePage() {
  return (
    <main>
      <HeroHeader />
      <Challenge />
      <BusinessObjective />
      <Solutions />
      <TechnologyStack />
      <BusinessImpact />
      <LastSection />
    </main>
  );
}
