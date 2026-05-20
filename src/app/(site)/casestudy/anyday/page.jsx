import React from 'react';
import HeroSection from '@/components/Casestudy/Templates/Anyday/HeroSection';
import ClientOverview from '@/components/Casestudy/Templates/Anyday/ClientOverview';
import ClientChallenges from '@/components/Casestudy/Templates/Anyday/ClientChallenges';
import CurrentStateMetrics from '@/components/Casestudy/Templates/Anyday/CurrentStateMetrics';
import TheSolution from '@/components/Casestudy/Templates/Anyday/TheSolution';
import TechnologyStack from '@/components/Casestudy/Templates/Anyday/TechnologyStack';
import BusinessImpact from '@/components/Casestudy/Templates/Anyday/BusinessImpact';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

const AnydayPage = () => {
  return (
    <main className='bg-white min-h-screen'>
      <HeroSection />
      <ClientOverview />
      <ClientChallenges />
      <CurrentStateMetrics />
      <TheSolution />
      <TechnologyStack />
      <BusinessImpact />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/Anyday.pdf' />
    </main>
  );
};

export default AnydayPage;
