export const dynamic = 'force-static';

import BusinessImpact from '@/components/Casestudy/Templates/Maximizing Yield/BusinessImpact';
import Challenges from '@/components/Casestudy/Templates/Maximizing Yield/Challenges';
import CurrentState from '@/components/Casestudy/Templates/Maximizing Yield/CurrentState';
import HeroSection from '@/components/Casestudy/Templates/Maximizing Yield/HeroSection';
import Images from '@/components/Casestudy/Templates/Maximizing Yield/Images';
import OurSolutions from '@/components/Casestudy/Templates/Maximizing Yield/OurSolutions';
import Solutions from '@/components/Casestudy/Templates/Maximizing Yield/Solutions';
import Technology from '@/components/Casestudy/Templates/Maximizing Yield/Technology';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function MaximizingYieldPage() {
  return (
    <main>
      <HeroSection />
      <Challenges />
      <CurrentState />
      <Solutions />
      <OurSolutions />
      <Technology />
      <Images />
      <BusinessImpact />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/maximizing-yield.pdf' />
    </main>
  );
}
