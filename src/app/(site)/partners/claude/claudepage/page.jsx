'use client';
import HeroSection from '@/components/partners/Claude/claudepage/HeroSection';
import AgenticCapabilities from '@/components/partners/Claude/claudepage/AgenticCapabilities';
import DemoToProduction from '@/components/partners/Claude/claudepage/DemoToProduction';
import ClaudeModels from '@/components/partners/Claude/claudepage/ClaudeModels';
import AutomateFunctions from '@/components/partners/Claude/claudepage/AutomateFunctions';
import HowWeDeliver from '@/components/partners/Claude/claudepage/HowWeDeliver';
import LastSection from '@/components/partners/Claude/claudepage/LastSection';

export default function ClaudePartnerPage() {
  return (
    <main className='w-full min-h-screen bg-white'>
      <HeroSection />
      <AgenticCapabilities />
      <DemoToProduction />
      <ClaudeModels />
      <AutomateFunctions />
      <HowWeDeliver />
      <LastSection />
    </main>
  );
}
