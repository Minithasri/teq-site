export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/ManufacturingReports/HeroSection';
import ClientContext from '@/components/Casestudy/Templates/ManufacturingReports/ClientContext';
import ChallengeSection from '@/components/Casestudy/Templates/ManufacturingReports/ChallengeSection';
import CurrentState from '@/components/Casestudy/Templates/ManufacturingReports/CurrentState';
import Solutions from '@/components/Casestudy/Templates/ManufacturingReports/Solutions';
import TechnologyStack from '@/components/Casestudy/Templates/ManufacturingReports/TechnologyStack';
import BusinessImpact from '@/components/Casestudy/Templates/ManufacturingReports/BusinessImpact';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function ManufacturingReportsPage() {
  return (
    <main className='bg-[#f5f5f5] overflow-hidden'>
      <HeroSection />
      <ClientContext />
      <ChallengeSection />
      <CurrentState />
      <Solutions />
      <TechnologyStack />
      <BusinessImpact />
      <LastSection pdfUrl='/case-studies/Manufacturing_Reports.pdf' />
    </main>
  );
}
