export const dynamic = 'force-static';

import BusinessImpact from '@/components/Casestudy/Templates/Real-Time Workforce/BusinessImpact';
import Challenges from '@/components/Casestudy/Templates/Real-Time Workforce/Challenges';
import HeroMain from '@/components/Casestudy/Templates/Real-Time Workforce/HeroMain';
import Solutions from '@/components/Casestudy/Templates/Real-Time Workforce/Solution';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function RealTimeWorkforcePage() {
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
