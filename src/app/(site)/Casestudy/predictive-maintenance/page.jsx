import BusinessImpact from '@/pages/Casestudy/Templates/Predictive Maintenance/BusinessImpact';
import Challenges from '@/pages/Casestudy/Templates/Predictive Maintenance/Challenges';
import HeroSection from '@/pages/Casestudy/Templates/Predictive Maintenance/HeroSection';
import Management from '@/pages/Casestudy/Templates/Predictive Maintenance/Management';
import Technology from '@/pages/Casestudy/Templates/Predictive Maintenance/Technology';
import LastSection from '@/pages/Casestudy/Templates/Real Time Production/LastSection';

export default function PredictiveMaintenancePage() {
  return (
    <main>
      <HeroSection />
      <Challenges />
      <Management />
      <Technology />
      <BusinessImpact />
      <LastSection pdfUrl='/case-studies/GWC_Predictive Maintenance with AI & IoT.pdf' />
    </main>
  );
}
