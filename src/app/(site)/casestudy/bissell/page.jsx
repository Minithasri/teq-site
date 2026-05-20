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
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/Z-%20Bissell%201.pdf' />
    </main>
  );
}
