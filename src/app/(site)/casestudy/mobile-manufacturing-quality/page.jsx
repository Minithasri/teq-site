export const dynamic = 'force-static';

import BusinessImpact from '@/components/Casestudy/Templates/Mobile Manufacturing Quality/BusinessImpact';
import CurrentStateSection from '@/components/Casestudy/Templates/Mobile Manufacturing Quality/CurrentStateSection';
import HeroSection from '@/components/Casestudy/Templates/Mobile Manufacturing Quality/HeroSection';
import Highlights from '@/components/Casestudy/Templates/Mobile Manufacturing Quality/Highlights';
import OurSolutions from '@/components/Casestudy/Templates/Mobile Manufacturing Quality/OurSolutions';
import ProblemSection from '@/components/Casestudy/Templates/Mobile Manufacturing Quality/ProblemSection';
import Solutions from '@/components/Casestudy/Templates/Mobile Manufacturing Quality/Solutions';
import Technology from '@/components/Casestudy/Templates/Mobile Manufacturing Quality/Technology';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function MobileManufacturingQualityPage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <CurrentStateSection />
      <Solutions />
      <OurSolutions />
      <Highlights />
      <Technology />
      <BusinessImpact />
      <LastSection pdfUrl='/case-studies/GWC_Commonality & Traceability in Manufacturing.pdf' />
    </main>
  );
}
