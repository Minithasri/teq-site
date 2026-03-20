'use client';
import AIWorkflow from '@/components/Domopalooza/AiWorkflow';
import DomoVideo from '@/components/Domopalooza/DomoVideo';
import ExperienceSection from '@/components/Domopalooza/ExperienceSection';
import HeroSection from '@/components/Domopalooza/HeroSection';
import TempAIWorkflow from '@/temporary/Domopalooza/TempAiWorkflow';
import TempHeroSection from '@/temporary/Domopalooza/TempHeroSection';
import bgcircle from '@/temporary/assert/bg-circle.png';

const DomopaloozaPage = () => {
  return (
    <div className='min-w-2xl bg-white text-gray-800'>
      <HeroSection />
      <DomoVideo />
      <ExperienceSection />
      <AIWorkflow />
    </div>

    // <div className='min-w-2xl text-gray-800 relative'>
    //   <div className='absolute inset-0 z-0 pointer-events-none'>
    //     <img src={bgcircle.src} alt='' className='w-full h-full object-cover opacity-50' />
    //   </div>
    //   <div className='relative z-10'>
    //     <TempHeroSection />
    //     <TempAIWorkflow />
    //   </div>
    // </div>
  );
};

export default DomopaloozaPage;
