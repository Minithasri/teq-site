'use client';

import React from 'react';
import HeroSection from '@/components/Casestudy/Templates/Tavent/HeroSection';
import ClientOverview from '@/components/Casestudy/Templates/Tavent/ClientOverview';
import Solutions from '@/components/Casestudy/Templates/Tavent/Solutions';
import BusinessImpact from '@/components/Casestudy/Templates/Tavent/BusinessImpact';
import TechnologyStack from '@/components/Casestudy/Templates/Tavent/TechnologyStack';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function TaventCaseStudy() {
  return (
    <main className='w-full min-h-screen bg-white'>
      <HeroSection />
      <ClientOverview />
      <Solutions />
      <BusinessImpact />
      <TechnologyStack />
      <LastSection />
    </main>
  );
}
