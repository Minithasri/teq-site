'use client';
import HomeBanner from '@/pages/homePage/HomeBanner';
import TechnologyPartner from '@/pages/homePage/TechnologyPartner';
import ROI from '@/pages/homePage/ROI';
import AgenticAI from '@/pages/homePage/AgenticAI';
import Architecture from '@/pages/homePage/Architecture';
import TechnologyStack from '@/pages/homePage/TechnologyStack';
import AIMatters from '@/pages//homePage/AIMatters';
import Philosophy from '@/pages/homePage/Philosophy';
import UseCases from '@/pages/homePage/UseCases';
import Business from '@/pages/homePage/Business';
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
