export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/FoodRetailAnalytics/HeroSection';
import ClientSnapshot from '@/components/Casestudy/Templates/FoodRetailAnalytics/ClientSnapshot';
import KeyChallenges from '@/components/Casestudy/Templates/FoodRetailAnalytics/KeyChallenges';
import ApproachSection from '@/components/Casestudy/Templates/FoodRetailAnalytics/ApproachSection';
import SolutionSummary from '@/components/Casestudy/Templates/FoodRetailAnalytics/SolutionSummary';
import BusinessImpact from '@/components/Casestudy/Templates/FoodRetailAnalytics/BusinessImpact';
import TechnologyStack from '@/components/Casestudy/Templates/FoodRetailAnalytics/TechnologyStack';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function FoodRetailAnalyticsPage() {
  return (
    <main className='bg-[#f5f7fa] overflow-hidden'>
      <HeroSection />
      <ClientSnapshot />
      <KeyChallenges />
      <ApproachSection />
      <SolutionSummary />
      <TechnologyStack />
      <BusinessImpact />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/MarryBrown_z.pdf' />
    </main>
  );
}
