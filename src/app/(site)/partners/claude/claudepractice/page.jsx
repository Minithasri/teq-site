import ClaudePracticeSection from '@/components/partners/Claude/claudepractice/ClaudePracticeSection';
import ClaudeTimeline from '@/components/partners/Claude/claudepractice/ClaudeTimeline';
import FAQ from '@/components/partners/Claude/claudepractice/FAQ';
import FeatureCardsSection from '@/components/partners/Claude/claudepractice/FeatureCardsSection';
import HeroSection from '@/components/partners/Claude/claudepractice/HeroSection';
import LastSection from '@/components/partners/Claude/claudepractice/LastSection';
import CertifiedTeamSection from '@/components/partners/Claude/claudepractice/ourTeamBuilds';
import WhyClaudeSection from '@/components/partners/Claude/claudepractice/whyclaude';
import AutomateFunctionsPractice from '../../../../../components/partners/Claude/claudepractice/AutomateFunctionsPractice';

export default function ClaudePracticePage() {
  return (
    <main className='w-full min-h-screen bg-white'>
      <HeroSection />
      <WhyClaudeSection />
      <ClaudePracticeSection />
      <CertifiedTeamSection />
      {/* <IntegrationSection /> */}
      <AutomateFunctionsPractice />
      <FeatureCardsSection />
      <ClaudeTimeline />
      <FAQ />
      <LastSection />
    </main>
  );
}
