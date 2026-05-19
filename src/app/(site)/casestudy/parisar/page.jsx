import React from 'react';
import HeroSection from '@/components/Casestudy/Templates/Parisar/HeroSection';
import ClientContext from '@/components/Casestudy/Templates/Parisar/ClientContext';
import TheChallenge from '@/components/Casestudy/Templates/Parisar/TheChallenge';
import TheSolution from '@/components/Casestudy/Templates/Parisar/TheSolution';
import TechnologyStack from '@/components/Casestudy/Templates/Parisar/TechnologyStack';
import BusinessImpact from '@/components/Casestudy/Templates/Parisar/BusinessImpact';

const ParisarPage = () => {
  return (
    <main className='bg-white min-h-screen'>
      <HeroSection />
      <ClientContext />
      <TheChallenge />
      <TheSolution />
      <TechnologyStack />
      <BusinessImpact />
    </main>
  );
};

export default ParisarPage;
