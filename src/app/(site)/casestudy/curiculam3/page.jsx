'use client';

import React from 'react';
import HeroSection from '@/components/Casestudy/Templates/Curiculam3/HeroSection';
import BusinessChallenges from '@/components/Casestudy/Templates/Curiculam3/BusinessChallenges';
import Solutions from '@/components/Casestudy/Templates/Curiculam3/Solutions';
import BusinessImpact from '@/components/Casestudy/Templates/Curiculam3/BusinessImpact';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function Curiculam3CaseStudy() {
  return (
    <main className='w-full min-h-screen bg-white'>
      {/* Dynamic Curiculam3 Hero Section */}
      <HeroSection />

      {/* 03 Tableau to Power BI & Business Challenges Section */}
      <BusinessChallenges />

      {/* Solution Implemented Section */}
      <Solutions />

      {/* Business Impact & Technology Stack Section */}
      <BusinessImpact />

      {/* Elegant Standard footer CTA section */}
      <LastSection />
    </main>
  );
}
