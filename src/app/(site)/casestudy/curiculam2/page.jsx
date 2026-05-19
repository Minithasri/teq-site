'use client';

import React from 'react';
import HeroSection from '@/components/Casestudy/Templates/Curiculam2/HeroSection';
import BusinessChallenges from '@/components/Casestudy/Templates/Curiculam2/BusinessChallenges';
import Solutions from '@/components/Casestudy/Templates/Curiculam2/Solutions';
import BusinessImpact from '@/components/Casestudy/Templates/Curiculam2/BusinessImpact';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function Curiculam2CaseStudy() {
  return (
    <main className='w-full min-h-screen bg-white'>
      {/* Dynamic Curiculam2 Hero Section */}
      <HeroSection />

      {/* 02 Domo to Snowflake & Business Challenges Section */}
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
