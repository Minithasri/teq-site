export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/FinanceHRInsights/HeroSection';
import OverviewCards from '@/components/Casestudy/Templates/FinanceHRInsights/OverviewCards';
import ChallengesSection from '@/components/Casestudy/Templates/FinanceHRInsights/ChallengesSection';
import ApproachSection from '@/components/Casestudy/Templates/FinanceHRInsights/ApproachSection';
import SolutionSummary from '@/components/Casestudy/Templates/FinanceHRInsights/SolutionSummary';
import BusinessImpact from '@/components/Casestudy/Templates/FinanceHRInsights/BusinessImpact';
import TechnologyStack from '@/components/Casestudy/Templates/FinanceHRInsights/TechnologyStack';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function FinanceHRPerformanceInsightsPage() {
  return (
    <main className='overflow-hidden bg-[#f7f7f7]'>
      <HeroSection />
      <OverviewCards />
      <ChallengesSection />
      <ApproachSection />
      <SolutionSummary />
      <BusinessImpact />
      <TechnologyStack />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/Metro%20one.pdf' />
    </main>
  );
}
