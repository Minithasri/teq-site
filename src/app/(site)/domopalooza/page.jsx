'use client';
import DomoVideo from '@/components/Domopalooza/DomoVideo';
import ExperienceSection from '@/components/Domopalooza/ExperienceSection';
import HeroSection from '@/components/Domopalooza/HeroSection';

const DomopaloozaPage = () => {
  return (
    <div className='min-w-2xl bg-white text-gray-800'>
      <HeroSection />
      <DomoVideo />
      <ExperienceSection />
    </div>
  );
};

export default DomopaloozaPage;
