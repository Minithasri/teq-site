import HeroSection from '@/components/Casestudy/Templates/Custom Dashboard/HeroSection';
import Challenges from '@/components/Casestudy/Templates/Custom Dashboard/Challenges';
import Solutions from '@/components/Casestudy/Templates/Custom Dashboard/Solutions';
import KeyCapabilities from '@/components/Casestudy/Templates/Custom Dashboard/KeyCapabilities';
import BusinessImpact from '@/components/Casestudy/Templates/Custom Dashboard/BusinessImpact';
import TechnologyStack from '@/components/Casestudy/Templates/Custom Dashboard/TechnologyStack';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function CustomDashboardPage() {
  return (
    <main>
      <HeroSection />
      <Challenges />
      <Solutions />
      <KeyCapabilities />
      <BusinessImpact />
      <TechnologyStack />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/Mojo.pdf' />
    </main>
  );
}
