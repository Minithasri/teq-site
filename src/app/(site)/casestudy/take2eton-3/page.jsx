export const dynamic = 'force-static';

import ChallengesSection from '@/components/Casestudy/Templates/Take2Eton-3/ChallengesSection';
import BusinessImpactSection from '@/components/Casestudy/Templates/Take2Eton-3/BusinessImpactSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function Take2Eton3CaseStudy() {
  return (
    <main>
      <ChallengesSection />
      <BusinessImpactSection />
      <LastSection pdfUrl='/case-studies/GWC_TAKE2ETON-3_Case_Study.pdf' />
    </main>
  );
}
