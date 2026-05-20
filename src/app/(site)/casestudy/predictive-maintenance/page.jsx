export const dynamic = 'force-static';

import BusinessImpact from '@/components/Casestudy/Templates/Predictive Maintenance/BusinessImpact';
import Challenges from '@/components/Casestudy/Templates/Predictive Maintenance/Challenges';
import HeroSection from '@/components/Casestudy/Templates/Predictive Maintenance/HeroSection';
import Management from '@/components/Casestudy/Templates/Predictive Maintenance/Management';
import Technology from '@/components/Casestudy/Templates/Predictive Maintenance/Technology';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function PredictiveMaintenancePage() {
  return (
    <main>
      <HeroSection />
      <Challenges />
      <Management />
      <Technology />
      <BusinessImpact />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/predictive-maintenance.pdf' />
    </main>
  );
}
