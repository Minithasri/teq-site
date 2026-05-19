'use client';

import React from 'react';
import HeroSection from '@/components/Casestudy/Templates/Sephora/HeroSection';
import ClientOverview from '@/components/Casestudy/Templates/Sephora/ClientOverview';
import Solutions from '@/components/Casestudy/Templates/Sephora/Solutions';
import KeyCapabilities from '@/components/Casestudy/Templates/Sephora/KeyCapabilities';
import BusinessImpact from '@/components/Casestudy/Templates/Sephora/BusinessImpact';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function SephoraCaseStudy() {
  return (
    <main className='w-full overflow-hidden'>
      <HeroSection />
      <ClientOverview />
      <Solutions />
      <KeyCapabilities />
      <BusinessImpact />
      <LastSection />
    </main>
  );
}
