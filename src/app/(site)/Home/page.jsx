'use client';
import AIMatters from '@/pages//homePage/AIMatters';
import AgenticAI from '@/pages/homePage/AgenticAI';
import Architecture from '@/pages/homePage/Architecture';
import Business from '@/pages/homePage/Business';
import HomeBanner from '@/pages/homePage/HomeBanner';
import Philosophy from '@/pages/homePage/Philosophy';
import ROI from '@/pages/homePage/ROI';
import TechnologyPartner from '@/pages/homePage/TechnologyPartner';
import TechnologyStack from '@/pages/homePage/TechnologyStack';
import UseCases from '@/pages/homePage/UseCases';
export default function HomePage() {
  return (
    <div>
      <main>
        <HomeBanner />
        <TechnologyPartner />
        <ROI />
        <AgenticAI />
        <Architecture />
        <TechnologyStack />
        <AIMatters />
        <Philosophy />
        <UseCases />
        <Business />
      </main>
    </div>
  );
}
