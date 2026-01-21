import Architecture from '@/pages/Casestudy/Templates/Optimizing Production/Architecture';
import BusinessImpact from '@/pages/Casestudy/Templates/Optimizing Production/BusinessImpact';
import Challenges from '@/pages/Casestudy/Templates/Optimizing Production/Challenges';
import HeroSection from '@/pages/Casestudy/Templates/Optimizing Production/HeroSection';
import Solution from '@/pages/Casestudy/Templates/Optimizing Production/Solution';
import Technology from '@/pages/Casestudy/Templates/Optimizing Production/Technology';
import LastSection from '@/pages/Casestudy/Templates/Real Time Production/LastSection';

export default function OptimizingProductionPage() {
  return (
    <main className='flex flex-col min-h-screen'>
      <HeroSection />
      <Challenges />
      <Solution />
      <Architecture />
      <Technology />
      <BusinessImpact />
      <LastSection pdfUrl='/case-studies/GWC_Scrap Analytics for Quality Improvement.pdf' />
    </main>
  );
}
