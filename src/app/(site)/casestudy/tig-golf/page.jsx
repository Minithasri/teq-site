export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/TIG-Golf/HeroSection';
import ChallengesSection from '@/components/Casestudy/Templates/TIG-Golf/ChallengesSection';
import SolutionsSection from '@/components/Casestudy/Templates/TIG-Golf/SolutionsSection';
import BusinessImpactSection from '@/components/Casestudy/Templates/TIG-Golf/BusinessImpactSection';
import ValueDeliveredSection from '@/components/Casestudy/Templates/TIG-Golf/ValueDeliveredSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function TigGolfCaseStudy() {
  return (
    <main>
      <HeroSection />
      <ChallengesSection />
      <SolutionsSection />
      <BusinessImpactSection />
      <ValueDeliveredSection />
      <LastSection pdfUrl='/case-studies/GWC_TIGGOLF_Case_Study.pdf' />
    </main>
  );
}
