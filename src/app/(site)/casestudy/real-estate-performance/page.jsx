export const dynamic = 'force-static';

import BusinessImpact from '@/components/Casestudy/Templates/Real Estate Performance/BusinessImpact';
import Challenges from '@/components/Casestudy/Templates/Real Estate Performance/Challenges';
import ClientContext from '@/components/Casestudy/Templates/Real Estate Performance/ClientContext';
import CurrentState from '@/components/Casestudy/Templates/Real Estate Performance/CurrentState';
import HeroHeader from '@/components/Casestudy/Templates/Real Estate Performance/HeroHeader';
import Solutions from '@/components/Casestudy/Templates/Real Estate Performance/Solution';
import TechStack from '@/components/Casestudy/Templates/Real Estate Performance/TechnologyStack';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function RealEstatePerformancePage() {
  return (
    <main>
      <HeroHeader />
      <ClientContext />
      <Challenges />
      <CurrentState />
      <Solutions />
      <TechStack />
      <BusinessImpact />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/ESR.pdf' />
    </main>
  );
}
