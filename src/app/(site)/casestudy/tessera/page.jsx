'use client';

import React from 'react';
import HeroSection from '@/components/Casestudy/Templates/Tessera/HeroSection';
import ClientOverview from '@/components/Casestudy/Templates/Tessera/ClientOverview';
import Solutions from '@/components/Casestudy/Templates/Tessera/Solutions';
import KeyCapabilities from '@/components/Casestudy/Templates/Tessera/KeyCapabilities';
import BusinessImpact from '@/components/Casestudy/Templates/Tessera/BusinessImpact';
import TechnologyStack from '@/components/Casestudy/Templates/Tessera/TechnologyStack';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function TesseraCaseStudy() {
  return (
    <main className='w-full min-h-screen bg-white'>
      <HeroSection />
      <ClientOverview />
      <Solutions />
      <KeyCapabilities />
      <BusinessImpact />
      <TechnologyStack />
      <LastSection />
    </main>
  );
}
