import AIMatters from '@/components//homePage/AIMatters';
import AIAgents from '@/components/homePage/AIAgents';
import AINative from '@/components/homePage/AINative';
import AISolutions from '@/components/homePage/AISolutions';
import AIVideosWrapper from '@/components/homePage/AIVideosWrapper';
import ConcepttoProduction from '@/components/homePage/ConcepttoProduction';
import FullStackAgent from '@/components/homePage/FullStackAgent';
import HomeBanner from '@/components/homePage/HomeBanner';
import ROI from '@/components/homePage/ROI';

// NOTE: metadata & SSR semantic block live in the root app/page.jsx
// This file is purely the visual component tree.

export default function HomePage() {
  return (
    <main>
      <HomeBanner />
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
