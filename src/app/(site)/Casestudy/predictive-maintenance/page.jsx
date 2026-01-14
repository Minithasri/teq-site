import BusinessImpact from '@/pages/Casestudy/Templates/Predictive Maintenance/BusinessImpact';
import Challenges from '@/pages/Casestudy/Templates/Predictive Maintenance/Challenges';
import HeroSection from '@/pages/Casestudy/Templates/Predictive Maintenance/HeroSection';
import Management from '@/pages/Casestudy/Templates/Predictive Maintenance/Management';
import Technology from '@/pages/Casestudy/Templates/Predictive Maintenance/Technology';

export default function PredictiveMaintenancePage() {
  return (
    <main>
      <HeroSection />
      <Challenges />
      <Management />
      <Technology />
      <BusinessImpact />
    </main>
  );
}
