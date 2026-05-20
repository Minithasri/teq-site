import React from 'react';
import HeroSection from '@/components/Casestudy/Templates/Aequs/HeroSection';
import ClientOverview from '@/components/Casestudy/Templates/Aequs/ClientOverview';
import BusinessChallenges from '@/components/Casestudy/Templates/Aequs/BusinessChallenges';
import Solutions from '@/components/Casestudy/Templates/Aequs/Solutions';
import KeyCapabilities from '@/components/Casestudy/Templates/Aequs/KeyCapabilities';
import BusinessImpact from '@/components/Casestudy/Templates/Aequs/BusinessImpact';
import ValueDelivered from '@/components/Casestudy/Templates/Aequs/ValueDelivered';
import TechnologyStack from '@/components/Casestudy/Templates/Aequs/TechnologyStack';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export const metadata = {
  title: 'Transforming Parts Testing | GWC Case Study',
  description:
    'How a leading consumer electronics manufacturer achieved 60–70% reduction in manual errors and ~50% faster testing cycles.',
};

const AequsCaseStudy = () => {
  return (
    <main className='w-full min-h-screen bg-white'>
      <HeroSection />
      <ClientOverview />
      <BusinessChallenges />
      <Solutions />
      <KeyCapabilities />
      <BusinessImpact />
      <TechnologyStack />
      <ValueDelivered />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/AEQUS.pdf' />
    </main>
  );
};

export default AequsCaseStudy;
