'use client';

import React from 'react';
import HeroSection from '@/components/Casestudy/Templates/Tess/HeroSection';
import ClientOverview from '@/components/Casestudy/Templates/Tess/ClientOverview';
import Solutions from '@/components/Casestudy/Templates/Tess/Solutions';
import KeyCapabilities from '@/components/Casestudy/Templates/Tess/KeyCapabilities';
import BusinessImpact from '@/components/Casestudy/Templates/Tess/BusinessImpact';
import TechnologyStack from '@/components/Casestudy/Templates/Tess/TechnologyStack';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function TessCaseStudy() {
  return (
    <main className='w-full min-h-screen bg-white'>
      <HeroSection />
      <ClientOverview />
      <Solutions />
      <KeyCapabilities />
      <BusinessImpact />
      <TechnologyStack />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/TESS_TEPL.pdf' />
    </main>
  );
}
