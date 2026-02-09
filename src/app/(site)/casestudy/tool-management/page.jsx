export const dynamic = 'force-static';

import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';
import Architecture from '@/components/Casestudy/Templates/Tool Management/Architecture';
import BusinessImpact from '@/components/Casestudy/Templates/Tool Management/BusinessImpact';
import CoreSolutions from '@/components/Casestudy/Templates/Tool Management/CoreSolutions';
import HeroSection from '@/components/Casestudy/Templates/Tool Management/HeroSection';
import Problem from '@/components/Casestudy/Templates/Tool Management/Problem';
import Quantitative from '@/components/Casestudy/Templates/Tool Management/Quantitative';
import Technology from '@/components/Casestudy/Templates/Tool Management/Technology';

export default function ToolManagementPage() {
  return (
    <main className='flex flex-col min-h-screen'>
      <HeroSection />
      <Problem />
      <CoreSolutions />
      <Architecture />
      <Technology />
      <BusinessImpact />
      <Quantitative />
      <LastSection pdfUrl='/case-studies/GWC_Tool Management & Utilization.pdf' />
    </main>
  );
}
