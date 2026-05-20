export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/HY-24/HeroSection';
import SolutionSection from '@/components/Casestudy/Templates/HY-24/SolutionSection';
import BusinessImpactSection from '@/components/Casestudy/Templates/HY-24/BusinessImpactSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';
import TechnologyStackSection from '@/components/Casestudy/Templates/HY-24/TechnologyStackSection';

export default function ZHY24CaseStudy() {
  return (
    <main>
      <HeroSection />
      <SolutionSection />
      <BusinessImpactSection />
      <TechnologyStackSection />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/HY%2024.pdf' />
    </main>
  );
}
