export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/Kamrt/HeroSection';
import ChallengeTransformationSection from '@/components/Casestudy/Templates/Kamrt/ChallengeTransformationSection ';
import SolutionTechSection from '@/components/Casestudy/Templates/Kamrt/SolutionTechSection';
import BusinessImpactSection from '@/components/Casestudy/Templates/Kamrt/BusinessImpactSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function KamrtCaseStudy() {
  return (
    <main>
      <HeroSection />
      <ChallengeTransformationSection />
      <SolutionTechSection />
      <BusinessImpactSection />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/Z-Kmart.pdf' />
    </main>
  );
}
