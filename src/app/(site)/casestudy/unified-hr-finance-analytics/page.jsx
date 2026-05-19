export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/HRFinanceAnalytics/HeroSection';
import ChallengeSection from '@/components/Casestudy/Templates/HRFinanceAnalytics/ChallengeSection';
import SolutionSection from '@/components/Casestudy/Templates/HRFinanceAnalytics/SolutionSection';
import BusinessImpact from '@/components/Casestudy/Templates/HRFinanceAnalytics/BusinessImpact';
import TechnologyStack from '@/components/Casestudy/Templates/HRFinanceAnalytics/TechnologyStack';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function Page() {
  return (
    <main className='bg-[#eef0f4]'>
      <HeroSection />
      <ChallengeSection />
      <SolutionSection />
      <BusinessImpact />
      <TechnologyStack />

      <LastSection pdfUrl='/case-studies/HR_Finance_Analytics.pdf' />
    </main>
  );
}
