export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/Style Bazaar/HeroSection';
import ExecutiveSummary from '@/components/Casestudy/Templates/Style Bazaar/ExecutiveSummary';
import Challenges from '@/components/Casestudy/Templates/Style Bazaar/Challenges';
import Solutions from '@/components/Casestudy/Templates/Style Bazaar/Solutions';
import Technology from '@/components/Casestudy/Templates/Style Bazaar/Technology';
import BusinessImpact from '@/components/Casestudy/Templates/Style Bazaar/BusinessImpact';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function StyleBazaarPage() {
  return (
    <main>
      <HeroSection />
      <ExecutiveSummary />
      <Challenges />
      <Solutions />
      <BusinessImpact />
      <Technology />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/Style%20Baazar.pdf' />
    </main>
  );
}
