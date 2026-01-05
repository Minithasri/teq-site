'use client';
import AIMatters from '@/pages//homePage/AIMatters';
import AgentBuilding from '@/pages/homePage/AgentBuilding';
import AgenticAI from '@/pages/homePage/AgenticAI';
import Architecture from '@/pages/homePage/Architecture';
import HomeBanner from '@/pages/homePage/HomeBanner';
import Philosophy from '@/pages/homePage/Philosophy';
import ROI from '@/pages/homePage/ROI';
import TechnologyPartner from '@/pages/homePage/TechnologyPartner';
import TechnologyStack from '@/pages/homePage/TechnologyStack';
export default function HomePage() {
  return (
    <div>
      <main>
        <HomeBanner />
        <TechnologyPartner />
        <ROI />
        <AgenticAI />
        <AgentBuilding />
        <Architecture />
        <TechnologyStack />
        <AIMatters />
        <Philosophy />
      </main>
    </div>
  );
}
