export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/Take2Eton-1/HeroSection';
import BusinessChallengesSection from '@/components/Casestudy/Templates/Take2Eton-1/BusinessChallengesSection';
import SolutionSection from '@/components/Casestudy/Templates/Take2Eton-1/SolutionSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function Take2Eton1CaseStudy() {
  return (
    <main>
      <HeroSection />
      <BusinessChallengesSection />
      <SolutionSection />
      <LastSection pdfUrl='/case-studies/GWC_TAKE2ETON-1_Case_Study.pdf' />
    </main>
  );
}
