'use client';
import AIMatters from '@/components//homePage/AIMatters';
// import AgentBuilding from '@/components/homePage/AgentBuilding';
// import AgenticAI from '@/components/homePage/AgenticAI';
// import Architecture from '@/components/homePage/Architecture';
import HomeBanner from '@/components/homePage/HomeBanner';
// import Philosophy from '@/components/homePage/Philosophy';
import ROI from '@/components/homePage/ROI';
import TechnologyPartner from '@/components/homePage/TechnologyPartner';
// import TechnologyStack from '@/components/homePage/TechnologyStack';
import dynamic from 'next/dynamic';
import FullStackAgent from '@/components/homePage/FullStackAgent';
import AISolutions from '@/components/homePage/AISolutions';
import AIAgents from '@/components/homePage/AIAgents';
import AINative from '@/components/homePage/AINative';
import ConcepttoProduction from '@/components/homePage/ConcepttoProduction';
// import AgenticBlocks from '@/components/homePage/AgenticBlocks';

const AIVideos = dynamic(() => import('@/components/homePage/AIVideos'), {
  ssr: false,
});
export default function HomePage() {
  return (
    <div>
      <main>
        <HomeBanner />
        <TechnologyPartner />
        <ROI />
        {/* <AgenticAI /> */}
        <FullStackAgent />
        <AIVideos />
        <AINative />
        <AISolutions />

        <AIAgents />
        {/* <AgenticBlocks /> */}
        <ConcepttoProduction />
        {/* <AgentBuilding /> */}
        {/* <Architecture /> */}
        {/* <TechnologyStack /> */}
        <AIMatters />
        {/* <Philosophy /> */}
      </main>
    </div>
  );
}
