export const dynamic = 'force-static';

import BusinessImpact from '@/components/Casestudy/Templates/Centralized Marketing/BusinessImpact';
import Challenge from '@/components/Casestudy/Templates/Centralized Marketing/Challenge';
import HeroHeader from '@/components/Casestudy/Templates/Centralized Marketing/HeroHeader';
import Solutions from '@/components/Casestudy/Templates/Centralized Marketing/Solution';
import TechnologyStack from '@/components/Casestudy/Templates/Centralized Marketing/TechnologyStack';

export default function CentralizedMarketingPage() {
  return (
    <main>
      <HeroHeader />
      <Challenge />
      <Solutions />
      <BusinessImpact />
      <TechnologyStack />
    </main>
  );
}
