export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/Bissell/HeroSection';
import SolutionSection from '@/components/Casestudy/Templates/Bissell/SolutionSection';
import BusinessImpactSection from '@/components/Casestudy/Templates/Bissell/BusinessImpactSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function BissellCaseStudy() {
  return (
    <main>
      <HeroSection />
      <SolutionSection />
      <BusinessImpactSection />
      <LastSection pdfUrl='/case-studies/GWC_BISSELL_Case_Study.pdf' />
    </main>
  );
}
