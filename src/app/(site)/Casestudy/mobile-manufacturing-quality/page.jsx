import BusinessImpact from '@/pages/Casestudy/Templates/Mobile Manufacturing Quality/BusinessImpact';
import CurrentStateSection from '@/pages/Casestudy/Templates/Mobile Manufacturing Quality/CurrentStateSection';
import HeroSection from '@/pages/Casestudy/Templates/Mobile Manufacturing Quality/HeroSection';
import Highlights from '@/pages/Casestudy/Templates/Mobile Manufacturing Quality/Highlights';
import OurSolutions from '@/pages/Casestudy/Templates/Mobile Manufacturing Quality/OurSolutions';
import ProblemSection from '@/pages/Casestudy/Templates/Mobile Manufacturing Quality/ProblemSection';
import Solutions from '@/pages/Casestudy/Templates/Mobile Manufacturing Quality/Solutions';
import Technology from '@/pages/Casestudy/Templates/Mobile Manufacturing Quality/Technology';
import LastSection from '@/pages/Casestudy/Templates/Real Time Production/LastSection';

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
