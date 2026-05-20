export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/Style-Union-2/HeroSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';
import OverviewSection from '@/components/Casestudy/Templates/Style-Union-2/OverviewSection';
import SolutionSection from '@/components/Casestudy/Templates/Style-Union-2/SolutionSection';
import CapabilitiesSection from '@/components/Casestudy/Templates/Style-Union-2/CapabilitiesSection';
import BusinessImpactSection from '@/components/Casestudy/Templates/Style-Union-2/BusinessImpactSection';
import TechnologyStackSection from '@/components/Casestudy/Templates/Style-Union-2/TechnologyStackSection';

export default function StyleUnion2CaseStudy() {
  return (
    <main>
      <HeroSection />
      <OverviewSection />
      <SolutionSection />
      <CapabilitiesSection />
      <BusinessImpactSection />
      <TechnologyStackSection />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/Style%20Union%202.pdf' />
    </main>
  );
}
