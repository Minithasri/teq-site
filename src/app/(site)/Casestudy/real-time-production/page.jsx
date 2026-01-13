import ClientOverview from '@/pages/Casestudy/Templates/Real Time Production/ClientOverview';
import DrivenSolution from '@/pages/Casestudy/Templates/Real Time Production/DrivenSolution';
import HeroSection from '@/pages/Casestudy/Templates/Real Time Production/HeroSection';
import KeyChallenges from '@/pages/Casestudy/Templates/Real Time Production/KeyChallenges';
import RealBusiness from '@/pages/Casestudy/Templates/Real Time Production/RealBusiness';
import TechnologyStack from '@/pages/Casestudy/Templates/Real Time Production/TechnologyStack';

export const metadata = {
  title: 'Real-Time Production Monitoring with IoT - GWC Data.AI Case Study',
  description:
    'How Alubee Die Casters achieved 10-15% productivity boost and 90% reduction in manual effort through connected factory automation',
};

export default function RealTimeProductionPage() {
  return (
    <>
      <HeroSection />
      <ClientOverview />
      <KeyChallenges />
      <DrivenSolution />
      <RealBusiness />
      <TechnologyStack />
    </>
  );
}
