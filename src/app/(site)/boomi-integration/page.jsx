import Challenges from '@/pages/boomi-integration/Challenges';
import Frameworks from '@/pages/boomi-integration/Frameworks';
import HeroSection from '@/pages/boomi-integration/HeroSection';
import IndustryUseCases from '@/pages/boomi-integration/IndustryUseCases';
import LastSection from '@/pages/boomi-integration/LastSection';
import StandsOut from '@/pages/boomi-integration/StandsOut';
import SuccessSnapshot from '@/pages/boomi-integration/SuccessSnapshot';
import WhyBoomi from '@/pages/boomi-integration/WhyBoomi';
import WhyGwc from '@/pages/boomi-integration/WhyGwc';

export default function BoomiIntegration() {
  return (
    <div>
      <main>
        <HeroSection />
        <WhyBoomi />
        <Challenges />
        <WhyGwc />
        <SuccessSnapshot />
        <StandsOut />
        <Frameworks />
        <IndustryUseCases />
        <LastSection />
      </main>
    </div>
  );
}
