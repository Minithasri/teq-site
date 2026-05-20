export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/Wellstat/HeroSection';
import ChallengesAndSolutionSection from '@/components/Casestudy/Templates/Wellstat/ChallengesAndSolutionSection';
import BusinessImpactSection from '@/components/Casestudy/Templates/Wellstat/BusinessImpactSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function WellstatCaseStudy() {
  return (
    <main>
      <HeroSection />
      <ChallengesAndSolutionSection />
      <BusinessImpactSection />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/Z-%20Wellstat.pdf' />
    </main>
  );
}
