'use client';
import AIMatters from '@/components//homePage/AIMatters';
import AgentBuilding from '@/components/homePage/AgentBuilding';
import AgenticAI from '@/components/homePage/AgenticAI';
import Architecture from '@/components/homePage/Architecture';
import HomeBanner from '@/components/homePage/HomeBanner';
import Philosophy from '@/components/homePage/Philosophy';
import ROI from '@/components/homePage/ROI';
import TechnologyPartner from '@/components/homePage/TechnologyPartner';
import TechnologyStack from '@/components/homePage/TechnologyStack';
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
