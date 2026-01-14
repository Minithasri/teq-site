import Architecture from '@/pages/Casestudy/Templates/Sustainable Impact/Architecture';
import BusinessImpact from '@/pages/Casestudy/Templates/Sustainable Impact/BusinessImpact';
import CoreSolutions from '@/pages/Casestudy/Templates/Sustainable Impact/CoreSolutions';
import HeroSection from '@/pages/Casestudy/Templates/Sustainable Impact/HeroSection';
import Problem from '@/pages/Casestudy/Templates/Sustainable Impact/Problem';
import Smart from '@/pages/Casestudy/Templates/Sustainable Impact/Smart';
import Technology from '@/pages/Casestudy/Templates/Sustainable Impact/Technology';

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
    </main>
  );
}
