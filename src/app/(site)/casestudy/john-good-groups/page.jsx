export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/John-Good-Groups/HeroSection';
import ChallengeSolutionSection from '@/components/Casestudy/Templates/John-Good-Groups/ChallengeSolutionSection';
import BusinessImpactSection from '@/components/Casestudy/Templates/John-Good-Groups/BusinessImpactSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function ZBayPage() {
  return (
    <main>
      <HeroSection />
      <ChallengeSolutionSection />
      <BusinessImpactSection />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/John%20Good%20Groups.pdf' />
    </main>
  );
}
