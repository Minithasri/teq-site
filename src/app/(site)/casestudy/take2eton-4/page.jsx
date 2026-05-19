export const dynamic = 'force-static';

import ChallengesSection from '@/components/Casestudy/Templates/Take2Eton-4/ChallengesSection';
import BusinessImpactSection from '@/components/Casestudy/Templates/Take2Eton-4/BusinessImpactSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function Take2Eton4CaseStudy() {
  return (
    <main>
      <ChallengesSection />
      <BusinessImpactSection />
      <LastSection pdfUrl='/case-studies/GWC_TAKE2ETON-4_Case_Study.pdf' />
    </main>
  );
}
