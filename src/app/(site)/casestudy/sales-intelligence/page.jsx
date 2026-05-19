export const dynamic = 'force-static';

import BusinessImpact from '@/components/Casestudy/Templates/Sales Intelligence/BusinessImpact';
import Challenges from '@/components/Casestudy/Templates/Sales Intelligence/Challenges';
import HeroMain from '@/components/Casestudy/Templates/Sales Intelligence/HeroMain';
import Solutions from '@/components/Casestudy/Templates/Sales Intelligence/Solution';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function SalesIntelligencePage() {
  return (
    <main>
      <HeroMain />
      <Challenges />
      <Solutions />
      <BusinessImpact />
      <LastSection />
    </main>
  );
}
