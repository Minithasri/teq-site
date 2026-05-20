'use client';

import React from 'react';
import HeroSection from '@/components/Casestudy/Templates/Gsk/HeroSection';
import ClientOverview from '@/components/Casestudy/Templates/Gsk/ClientOverview';
import Solutions from '@/components/Casestudy/Templates/Gsk/Solutions';
import KeyCapabilities from '@/components/Casestudy/Templates/Gsk/KeyCapabilities';
import BusinessImpact from '@/components/Casestudy/Templates/Gsk/BusinessImpact';
import TechnologyStack from '@/components/Casestudy/Templates/Gsk/TechnologyStack';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function GskCaseStudy() {
  return (
    <main className='w-full min-h-screen bg-white'>
      <HeroSection />
      <ClientOverview />
      <Solutions />
      <KeyCapabilities />
      <BusinessImpact />
      <TechnologyStack />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/Z-%20GSK.pdf' />
    </main>
  );
}
