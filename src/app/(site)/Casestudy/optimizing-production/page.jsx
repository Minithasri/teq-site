import Architecture from '@/components/Casestudy/Templates/Optimizing Production/Architecture';
import BusinessImpact from '@/components/Casestudy/Templates/Optimizing Production/BusinessImpact';
import Challenges from '@/components/Casestudy/Templates/Optimizing Production/Challenges';
import HeroSection from '@/components/Casestudy/Templates/Optimizing Production/HeroSection';
import Solution from '@/components/Casestudy/Templates/Optimizing Production/Solution';
import Technology from '@/components/Casestudy/Templates/Optimizing Production/Technology';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

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
