export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/Retail-1/HeroSection';
import SolutionSection from '@/components/Casestudy/Templates/Retail-1/SolutionSection';
import DataArchitectureSection from '@/components/Casestudy/Templates/Retail-1/DataArchitectureSection';
import TechnologyStackSection from '@/components/Casestudy/Templates/Retail-1/TechnologyStackSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function Retail1CaseStudy() {
  return (
    <main>
      <HeroSection />
      <SolutionSection />
      <DataArchitectureSection />
      <TechnologyStackSection />
      <LastSection pdfUrl='/case-studies/GWC_RETAIL1_Case_Study.pdf' />
    </main>
  );
}
