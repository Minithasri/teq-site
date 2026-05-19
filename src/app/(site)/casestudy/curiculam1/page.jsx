'use client';

import React from 'react';
import HeroSection from '@/components/Casestudy/Templates/Curiculam1/HeroSection';
import ClientOverview from '@/components/Casestudy/Templates/Curiculam1/ClientOverview';
import BusinessChallenges from '@/components/Casestudy/Templates/Curiculam1/BusinessChallenges';
import Solutions from '@/components/Casestudy/Templates/Curiculam1/Solutions';
import BusinessImpact from '@/components/Casestudy/Templates/Curiculam1/BusinessImpact';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function Curiculam1CaseStudy() {
  return (
    <main className='w-full min-h-screen bg-white'>
      {/* Dynamic Curiculam1 Hero Section with specified dark blue to dark cyan gradient and text colors */}
      <HeroSection />

      {/* Client Context Section */}
      <ClientOverview />

      {/* 01 SSIS to Snowflake & Business Challenges Section */}
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
