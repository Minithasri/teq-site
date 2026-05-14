export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/Style Union/HeroSection';
import Challenges from '@/components/Casestudy/Templates/Style Union/Challenges';
import Solutions from '@/components/Casestudy/Templates/Style Union/Solutions';
import BusinessImpact from '@/components/Casestudy/Templates/Style Union/BusinessImpact';
import Technology from '@/components/Casestudy/Templates/Style Union/Technology';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function StyleUnionPage() {
  return (
    <main>
      <HeroSection />
      <Challenges />
      <Solutions />
      <BusinessImpact />
      <Technology />
      <LastSection pdfUrl='/case-studies/Style Union.pdf' />
    </main>
  );
}
