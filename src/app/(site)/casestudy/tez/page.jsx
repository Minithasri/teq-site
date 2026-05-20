export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/Tez/HeroSection';
import ClientOverview from '@/components/Casestudy/Templates/Tez/ClientOverview';
import Challenges from '@/components/Casestudy/Templates/Tez/Challenges';
import Solutions from '@/components/Casestudy/Templates/Tez/Solutions';
import KeyCapabilities from '@/components/Casestudy/Templates/Tez/KeyCapabilities';
import BusinessImpact from '@/components/Casestudy/Templates/Tez/BusinessImpact';
import TechnologyStack from '@/components/Casestudy/Templates/Tez/TechnologyStack';
import ValueDelivered from '@/components/Casestudy/Templates/Tez/ValueDelivered';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function TezPage() {
  return (
    <main>
      <HeroSection />
      <ClientOverview />
      <Challenges />
      <Solutions />
      <KeyCapabilities />
      <BusinessImpact />
      <TechnologyStack />
      <ValueDelivered />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/Tez.pdf' />

      {/* Additional sections for Tez will be added here */}
    </main>
  );
}
