export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/ConnectWise/HeroSection';
import ChallengeSection from '@/components/Casestudy/Templates/ConnectWise/ChallengeSection';
import SolutionImpactSection from '@/components/Casestudy/Templates/ConnectWise/SolutionImpactSection';
import TechnologyValueSection from '@/components/Casestudy/Templates/ConnectWise/TechnologyValueSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function ConnectWiseCaseStudy() {
  return (
    <main>
      <HeroSection />
      <ChallengeSection />
      <SolutionImpactSection />
      <TechnologyValueSection />
      <LastSection pdfUrl='/case-studies/GWC_CONNECTWISE_Case_Study.pdf' />
    </main>
  );
}
