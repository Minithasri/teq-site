export const dynamic = 'force-static';

import BusinessImpact from '@/components/Casestudy/Templates/Next Gen Sales/BusinessImpact';
import Challenges from '@/components/Casestudy/Templates/Next Gen Sales/Challenges';
import HeroHeader from '@/components/Casestudy/Templates/Next Gen Sales/HeroHeader';
import Solutions from '@/components/Casestudy/Templates/Next Gen Sales/Solution';
import TechnStack from '@/components/Casestudy/Templates/Next Gen Sales/TechStack';

export default function NextGenSalesPage() {
  return (
    <main>
      <HeroHeader />
      <Challenges />
      <Solutions />
      <BusinessImpact />
      <TechnStack />
    </main>
  );
}
