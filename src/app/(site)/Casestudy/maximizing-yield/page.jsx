import BusinessImpact from '@/pages/Casestudy/Templates/Maximizing Yield/BusinessImpact';
import Challenges from '@/pages/Casestudy/Templates/Maximizing Yield/Challenges';
import CurrentState from '@/pages/Casestudy/Templates/Maximizing Yield/CurrentState';
import HeroSection from '@/pages/Casestudy/Templates/Maximizing Yield/HeroSection';
import Images from '@/pages/Casestudy/Templates/Maximizing Yield/Images';
import OurSolutions from '@/pages/Casestudy/Templates/Maximizing Yield/OurSolutions';
import Solutions from '@/pages/Casestudy/Templates/Maximizing Yield/Solutions';
import Technology from '@/pages/Casestudy/Templates/Maximizing Yield/Technology';
import LastSection from '@/pages/Casestudy/Templates/Real Time Production/LastSection';

export default function MaximizingYieldPage() {
  return (
    <main>
      <HeroSection />
      <Challenges />
      <CurrentState />
      <Solutions />
      <OurSolutions />
      <Technology />
      <Images />
      <BusinessImpact />
      <LastSection pdfUrl='/case-studies/GWC_Production & Yield Analytics.pdf' />
    </main>
  );
}
