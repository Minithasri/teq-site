export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/Altimetrik/HeroSection';
import ChallengesSection from '@/components/Casestudy/Templates/Altimetrik/ChallengesSection';
import SolutionSection from '@/components/Casestudy/Templates/Altimetrik/SolutionSection';
import BusinessImpactSection from '@/components/Casestudy/Templates/Altimetrik/BusinessImpactSection';
import TechnologyValueSection from '@/components/Casestudy/Templates/Altimetrik/TechnologyValueSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function AltimetrikCaseStudy() {
  return (
    <main>
      <HeroSection />
      <ChallengesSection />
      <SolutionSection />
      <BusinessImpactSection />
      <TechnologyValueSection />
      <LastSection pdfUrl='/case-studies/GWC_ALTIMETRIK_Case_Study.pdf' />
    </main>
  );
}
