'use client';

import React from 'react';
import HeroSection from '@/components/Casestudy/Templates/Toyota2/HeroSection';
import ClientOverview from '@/components/Casestudy/Templates/Toyota2/ClientOverview';
import BusinessChallenges from '@/components/Casestudy/Templates/Toyota2/BusinessChallenges';
import Solutions from '@/components/Casestudy/Templates/Toyota2/Solutions';
import KeyCapabilities from '@/components/Casestudy/Templates/Toyota2/KeyCapabilities';
import BusinessImpact from '@/components/Casestudy/Templates/Toyota2/BusinessImpact';
import TechnologyStack from '@/components/Casestudy/Templates/Toyota2/TechnologyStack';
import DrivingTransformation from '@/components/Casestudy/Templates/Toyota2/DrivingTransformation';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function Toyota2CaseStudy() {
  return (
    <main className='w-full min-h-screen bg-white'>
      <HeroSection />
      <ClientOverview />
      <BusinessChallenges />
      <Solutions />
      <KeyCapabilities />
      <BusinessImpact />
      <TechnologyStack />
      <DrivingTransformation />
      {/* Add more sections as they are developed */}
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/Toyota%202.pdf' />
    </main>
  );
}
