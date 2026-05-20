export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/Henkel/HeroSection';
import ChallengeSection from '@/components/Casestudy/Templates/Henkel/ChallengeSection';
import SolutionSection from '@/components/Casestudy/Templates/Henkel/SolutionSection';
import BusinessImpactSection from '@/components/Casestudy/Templates/Henkel/BusinessImpactSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function HenkelWiseCaseStudy() {
  return (
    <main>
      <HeroSection />
      <ChallengeSection />
      <SolutionSection />
      <BusinessImpactSection />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/Z-%20Henkel.pdf' />
    </main>
  );
}
