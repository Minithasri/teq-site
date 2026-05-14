export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/Mahsing/HeroSection';
import ContextAndChallenge from '@/components/Casestudy/Templates/Mahsing/ContextAndChallenge';
import BeforeSolution from '@/components/Casestudy/Templates/Mahsing/BeforeSolution';
import TheSolution from '@/components/Casestudy/Templates/Mahsing/TheSolution';
import TechnologyAndImpact from '@/components/Casestudy/Templates/Mahsing/TechnologyAndImpact';

export default function MahsingPage() {
  return (
    <main className='bg-[#F8F9FA] min-h-screen'>
      <HeroSection />
      <ContextAndChallenge />
      <BeforeSolution />
      <TheSolution />
      <TechnologyAndImpact />
    </main>
  );
}
