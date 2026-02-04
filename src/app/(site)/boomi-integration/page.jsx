import Challenges from '@/components/boomi-integration/Challenges';
import Frameworks from '@/components/boomi-integration/Frameworks';
import HeroSection from '@/components/boomi-integration/HeroSection';
import IndustryUseCases from '@/components/boomi-integration/IndustryUseCases';
import LastSection from '@/components/boomi-integration/LastSection';
import StandsOut from '@/components/boomi-integration/StandsOut';
import SuccessSnapshot from '@/components/boomi-integration/SuccessSnapshot';
import WhyBoomi from '@/components/boomi-integration/WhyBoomi';
import WhyGwc from '@/components/boomi-integration/WhyGwc';

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
