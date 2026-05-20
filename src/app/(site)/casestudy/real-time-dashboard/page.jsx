export const dynamic = 'force-static';

import HeroChallenge from '@/components/Casestudy/Templates/Real Time Dashboard/HeroChallenge';
import CurrentState from '@/components/Casestudy/Templates/Real Time Dashboard/CurrentState';
import ObjectiveSolution from '@/components/Casestudy/Templates/Real Time Dashboard/ObjectiveSolution';
import TechnologyStack from '@/components/Casestudy/Templates/Real Time Dashboard/TechnologyStack';
import BusinessImpact from '@/components/Casestudy/Templates/Real Time Dashboard/BusinessImpact';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function SalesPerformancePage() {
  return (
    <main>
      <HeroChallenge />
      <CurrentState />
      <ObjectiveSolution />
      <TechnologyStack />
      <BusinessImpact />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/Titan%2022-%20I.pdf' />
    </main>
  );
}
