import AIMatters from '@/components//homePage/AIMatters';
import HomeBanner from '@/components/homePage/HomeBanner';
import ROI from '@/components/homePage/ROI';
import TechnologyPartner from '@/components/homePage/TechnologyPartner';
import FullStackAgent from '@/components/homePage/FullStackAgent';
import AISolutions from '@/components/homePage/AISolutions';
import AIAgents from '@/components/homePage/AIAgents';
import AINative from '@/components/homePage/AINative';
import ConcepttoProduction from '@/components/homePage/ConcepttoProduction';
import AIVideosWrapper from '@/components/homePage/AIVideosWrapper';

// NOTE: metadata & SSR semantic block live in the root app/page.jsx
// This file is purely the visual component tree.

export default function HomePage() {
  return (
    <main>
      <HomeBanner />
      <TechnologyPartner />
      <ROI />
      <FullStackAgent />
      <AIVideosWrapper />
      <AINative />
      <AISolutions />
      <AIAgents />
      <ConcepttoProduction />
      <AIMatters />
    </main>
  );
}
