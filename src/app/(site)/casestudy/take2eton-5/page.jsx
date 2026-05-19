export const dynamic = 'force-static';

import ChallengesSection from '@/components/Casestudy/Templates/Take2Eton-5/ChallengesSection';
import BusinessImpactSection from '@/components/Casestudy/Templates/Take2Eton-5/BusinessImpactSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function Take2Eton5CaseStudy() {
  return (
    <main>
      <ChallengesSection />
      <BusinessImpactSection />
      <LastSection pdfUrl='/case-studies/GWC_TAKE2ETON-5_Case_Study.pdf' />
    </main>
  );
}
