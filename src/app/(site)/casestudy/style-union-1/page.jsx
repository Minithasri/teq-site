import React from 'react';
import Hero from '@/components/Casestudy/Templates/Style-Union-1/Hero';
import ClientContext from '@/components/Casestudy/Templates/Style-Union-1/ClientContext';
import TheChallenge from '@/components/Casestudy/Templates/Style-Union-1/TheChallenge';
import CurrentStateMetrics from '@/components/Casestudy/Templates/Style-Union-1/CurrentStateMetrics';
import BusinessObjectives from '@/components/Casestudy/Templates/Style-Union-1/BusinessObjectives';
import GWCSolution from '@/components/Casestudy/Templates/Style-Union-1/GWCSolution';
import TechnologyStack from '@/components/Casestudy/Templates/Style-Union-1/TechnologyStack';
import BusinessImpact from '@/components/Casestudy/Templates/Style-Union-1/BusinessImpact';

export const metadata = {
  title: 'Style Union Case Study | GWC Data',
  description:
    'How Style Union achieved real-time visibility and data-driven growth through comprehensive retail analytics.',
};

export default function StyleUnion1Page() {
  return (
    <main className='w-full bg-[#F8FAFC] min-h-screen'>
      <Hero />
      <ClientContext />
      <TheChallenge />
      <CurrentStateMetrics />
      <BusinessObjectives />
      <GWCSolution />
      <TechnologyStack />
      <BusinessImpact />
    </main>
  );
}
