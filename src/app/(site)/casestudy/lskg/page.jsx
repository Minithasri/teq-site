export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/lskg/HeroSection';
import ContextAndChallenge from '@/components/Casestudy/Templates/lskg/ContextAndChallenge';
import BeforeSolution from '@/components/Casestudy/Templates/lskg/BeforeSolution';
import BusinessObjectives from '@/components/Casestudy/Templates/lskg/BusinessObjectives';
import TheSolution from '@/components/Casestudy/Templates/lskg/TheSolution';
import TechnologyStack from '@/components/Casestudy/Templates/lskg/TechnologyStack';
import BusinessImpact from '@/components/Casestudy/Templates/lskg/BusinessImpact';

export default function LSKGPage() {
  return (
    <main className='bg-white min-h-screen'>
      <HeroSection />
      <ContextAndChallenge />
      <BeforeSolution />
      <BusinessObjectives />
      <TheSolution />
      <TechnologyStack />
      <BusinessImpact />
    </main>
  );
}
