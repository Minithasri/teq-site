export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/AIHospitality/HeroSection';
import ExecutiveSummary from '@/components/Casestudy/Templates/AIHospitality/ExecutiveSummary';
import ChallengeSection from '@/components/Casestudy/Templates/AIHospitality/ChallengeSection';
import SolutionSection from '@/components/Casestudy/Templates/AIHospitality/SolutionSection';
import TechnologyStack from '@/components/Casestudy/Templates/AIHospitality/TechnologyStack';
import BusinessImpact from '@/components/Casestudy/Templates/AIHospitality/BusinessImpact';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function AIHospitalityPage() {
  return (
    <main className='bg-[#f4f5f7] overflow-hidden'>
      <HeroSection />
      <ExecutiveSummary />
      <ChallengeSection />
      <SolutionSection />
      <TechnologyStack />
      <BusinessImpact />
      <LastSection pdfUrl='/case-studies/AI_Powered_Hospitality.pdf' />
    </main>
  );
}
