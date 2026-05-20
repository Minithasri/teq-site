export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/Bissell-3/HeroSection';
import ChallengesSection from '@/components/Casestudy/Templates/Bissell-3/ChallengesSection';
import SolutionSection from '@/components/Casestudy/Templates/Bissell-3/SolutionSection';
import ImpactStackSection from '@/components/Casestudy/Templates/Bissell-3/ImpactStackSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function Bissell3CaseStudy() {
  return (
    <main>
      <HeroSection />
      <ChallengesSection />
      <SolutionSection />
      <ImpactStackSection />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/Z-%20Bissell%203%201.pdf' />
    </main>
  );
}
