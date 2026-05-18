'use client';

import React from 'react';
import HeroSection from '@/components/Casestudy/Templates/Careabout/HeroSection';
import ClientOverview from '@/components/Casestudy/Templates/Careabout/ClientOverview';
import Solutions from '@/components/Casestudy/Templates/Careabout/Solutions';
import KeyCapabilities from '@/components/Casestudy/Templates/Careabout/KeyCapabilities';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';
import BusinessImpact from '@/components/Casestudy/Templates/Careabout/BusinessImpact';
import TechnologyStack from '@/components/Casestudy/Templates/Careabout/TechnologyStack';

export default function CareaboutCaseStudy() {
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
