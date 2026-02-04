import Architecture from '@/components/Casestudy/Templates/Streamlining Production/Architecture';
import BusinessImpact from '@/components/Casestudy/Templates/Streamlining Production/BusinessImpact';
import CurrentState from '@/components/Casestudy/Templates/Streamlining Production/CurrentState';
import HeroSection from '@/components/Casestudy/Templates/Streamlining Production/HeroSection';
import OurSolutions from '@/components/Casestudy/Templates/Streamlining Production/OurSolutions';
import Problem from '@/components/Casestudy/Templates/Streamlining Production/Problem';
import Technology from '@/components/Casestudy/Templates/Streamlining Production/Technology';
// import Impact from '@/components/Casestudy/Templates/Streamlining Production/Impact'; // Placeholder
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function StreamliningProductionPage() {
  return (
    <main className='flex flex-col min-h-screen'>
      <HeroSection />
      <Problem />
      <CurrentState />
      <OurSolutions />
      <Architecture />
      <Technology />
      <BusinessImpact />
      <LastSection pdfUrl='/case-studies/GWC_IE App for Downtime Optimization.pdf' />
    </main>
  );
}
