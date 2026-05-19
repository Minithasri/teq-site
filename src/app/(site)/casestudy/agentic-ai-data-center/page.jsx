export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/agentic-ai-data-center/HeroSection';
import ProblemSection from '@/components/Casestudy/Templates/agentic-ai-data-center/ProblemSection';
import CurrentStateMetrics from '@/components/Casestudy/Templates/agentic-ai-data-center/CurrentStateMetrics';
import SolutionSection from '@/components/Casestudy/Templates/agentic-ai-data-center/SolutionSection';
import ArchitectureOverview from '@/components/Casestudy/Templates/agentic-ai-data-center/ArchitectureOverview';
import TechnologyStack from '@/components/Casestudy/Templates/agentic-ai-data-center/TechnologyStack';
import ImpactDelivered from '@/components/Casestudy/Templates/agentic-ai-data-center/ImpactDelivered';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function AgenticAIDataCenterPage() {
  return (
    <main className='bg-[#f4f5f7] overflow-hidden'>
      <HeroSection />
      <ProblemSection />
      <CurrentStateMetrics />
      <SolutionSection />
      <ArchitectureOverview />
      <TechnologyStack />
      <ImpactDelivered />
      <LastSection pdfUrl='/case-studies/Agentic_AI_Data_Center.pdf' />
    </main>
  );
}
