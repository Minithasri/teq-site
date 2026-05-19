export const dynamic = 'force-static';

import BusinessImpact from '@/components/Casestudy/Templates/Centralized Sales Performance/BusinessImpact';
import Challenge from '@/components/Casestudy/Templates/Centralized Sales Performance/Challenge';
import HeroHeader from '@/components/Casestudy/Templates/Centralized Sales Performance/HeroHeader';
import Solutions from '@/components/Casestudy/Templates/Centralized Sales Performance/Solution';
import DataArchitecture from '@/components/Casestudy/Templates/Centralized Sales Performance/Data Architecture';
import TechnologyStack from '@/components/Casestudy/Templates/Centralized Sales Performance/TechnologyStack';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function SalesPerformancePage() {
  return (
    <main>
      <HeroHeader />
      <Challenge />
      <Solutions />
      <DataArchitecture />
      <BusinessImpact />
      <TechnologyStack />
      <LastSection />
    </main>
  );
}
