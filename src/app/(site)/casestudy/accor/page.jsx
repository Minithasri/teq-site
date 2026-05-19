export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/Accor/HeroSection';
import MenuChallengeSolutionSection from '@/components/Casestudy/Templates/Accor/MenuChallengeSolutionSection';
import MenuImpactTechSection from '@/components/Casestudy/Templates/Accor/MenuImpactTechSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function AccorCaseStudy() {
  return (
    <main>
      <HeroSection />
      <MenuChallengeSolutionSection />
      <MenuImpactTechSection />
      <LastSection pdfUrl='/case-studies/GWC_ACCOR_Case_Study.pdf' />
    </main>
  );
}
