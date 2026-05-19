export const dynamic = 'force-static';

import Challenges from '@/components/Casestudy/Templates/Driving Sales Excellence/Challenges';
import Strategic from '@/components/Casestudy/Templates/Driving Sales Excellence/Strategic';
import HeroHeader from '@/components/Casestudy/Templates/Driving Sales Excellence/HeroHeader';
import Solutions from '@/components/Casestudy/Templates/Driving Sales Excellence/Solution';
import TechBus from '@/components/Casestudy/Templates/Driving Sales Excellence/Techbus';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function DrivingSalesExcellencePage() {
  return (
    <main>
      <HeroHeader />
      <Challenges />
      <Strategic />
      <Solutions />
      <TechBus />
      <LastSection />
    </main>
  );
}
