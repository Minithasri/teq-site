export const dynamic = 'force-static';

import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';
import Architecture from '@/components/Casestudy/Templates/Sustainable Impact/Architecture';
import BusinessImpact from '@/components/Casestudy/Templates/Sustainable Impact/BusinessImpact';
import CoreSolutions from '@/components/Casestudy/Templates/Sustainable Impact/CoreSolutions';
import HeroSection from '@/components/Casestudy/Templates/Sustainable Impact/HeroSection';
import Problem from '@/components/Casestudy/Templates/Sustainable Impact/Problem';
import Smart from '@/components/Casestudy/Templates/Sustainable Impact/Smart';
import Technology from '@/components/Casestudy/Templates/Sustainable Impact/Technology';

export default function SustainableImpactPage() {
  return (
    <main className='flex flex-col min-h-screen'>
      <HeroSection />
      <Problem />
      <Smart />
      <Architecture />
      <Technology />
      <CoreSolutions />
      <BusinessImpact />
      <LastSection pdfUrl='/case-studies/GWC_Sustainability & Energy Optimization.pdf' />
    </main>
  );
}
