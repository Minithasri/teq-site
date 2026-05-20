export const dynamic = 'force-static';

import BusinessImpact from '@/components/Casestudy/Templates/Next Gen Sales/BusinessImpact';
import Challenges from '@/components/Casestudy/Templates/Next Gen Sales/Challenges';
import HeroHeader from '@/components/Casestudy/Templates/Next Gen Sales/HeroHeader';
import Solutions from '@/components/Casestudy/Templates/Next Gen Sales/Solution';
import TechnStack from '@/components/Casestudy/Templates/Next Gen Sales/TechStack';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function NextGenSalesPage() {
  return (
    <main>
      <HeroHeader />
      <Challenges />
      <Solutions />
      <BusinessImpact />
      <TechnStack />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/Netrocon_WPP%20Media%201.pdf' />
    </main>
  );
}
