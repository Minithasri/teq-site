'use client';
import HeroSection from '@/components/partners/Claude/HeroSection';
import AgenticCapabilities from '@/components/partners/Claude/AgenticCapabilities';
import DemoToProduction from '@/components/partners/Claude/DemoToProduction';
import ClaudeModels from '@/components/partners/Claude/ClaudeModels';
import AutomateFunctions from '@/components/partners/Claude/AutomateFunctions';
import HowWeDeliver from '@/components/partners/Claude/HowWeDeliver';
import LastSection from '@/components/partners/Claude/LastSection';

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
