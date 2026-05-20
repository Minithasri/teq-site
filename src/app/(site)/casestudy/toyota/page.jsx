'use client';

import React from 'react';
import HeroSection from '@/components/Casestudy/Templates/Toyota/HeroSection';
import ClientOverview from '@/components/Casestudy/Templates/Toyota/ClientOverview';
import BusinessChallenges from '@/components/Casestudy/Templates/Toyota/BusinessChallenges';
import Solutions from '@/components/Casestudy/Templates/Toyota/Solutions';
import KeyCapabilities from '@/components/Casestudy/Templates/Toyota/KeyCapabilities';
import BusinessImpact from '@/components/Casestudy/Templates/Toyota/BusinessImpact';
import TechnologyStack from '@/components/Casestudy/Templates/Toyota/TechnologyStack';
import DrivingTransformation from '@/components/Casestudy/Templates/Toyota/DrivingTransformation';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function ToyotaCaseStudy() {
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
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/Toyota%202.pdf' />
    </main>
  );
}
