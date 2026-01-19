import Architecture from '@/pages/Casestudy/Templates/Tool Management/Architecture';
import BusinessImpact from '@/pages/Casestudy/Templates/Tool Management/BusinessImpact';
import CoreSolutions from '@/pages/Casestudy/Templates/Tool Management/CoreSolutions';
import HeroSection from '@/pages/Casestudy/Templates/Tool Management/HeroSection';
import Problem from '@/pages/Casestudy/Templates/Tool Management/Problem';
import Quantitative from '@/pages/Casestudy/Templates/Tool Management/Quantitative';
import Technology from '@/pages/Casestudy/Templates/Tool Management/Technology';

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
    </main>
  );
}
