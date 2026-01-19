'use client';

import AnalyticsBanner from '@/pages/partners/domo/AnalyticsBanner';
import CreateAccount from '@/pages/partners/domo/CreateAccount';
import DomoAIBanner from '@/pages/partners/domo/DomoAIBanner';
import DomoFeatures from '@/pages/partners/domo/DomoFeatures';
import ExecutionCredits from '@/pages/partners/domo/ExecutionCredits';
import FeaturesSection from '@/pages/partners/domo/FeaturesSection';
import HeroSection from '@/pages/partners/domo/HeroSection';
import HowItWorks from '@/pages/partners/domo/HowItWorks';
import PartnerSection from '@/pages/partners/domo/PartnerSection';
import Solutions from '@/pages/partners/domo/Solutions';
import TopBenefits from '@/pages/partners/domo/TopBenefits';
import WhenToUseDomo from '@/pages/partners/domo/WhenToUseDomo';
import WhyDomo from '@/pages/partners/domo/WhyDomo';
import LastSection from '@/pages/partners/domo/LastSection';
import DomoDashboard from '@/pages/partners/domo/DomoDashboard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function CareersPage() {
  const mainRef = useRef(null);

  return (
    <main ref={mainRef} className='min-h-screen'>
      <div className='section-animate'>
        <HeroSection />
      </div>
      <div className='section-animate'>
        <FeaturesSection />
      </div>
      <div className='section-animate'>
        <PartnerSection />
      </div>
      <div className='section-animate'>
        <AnalyticsBanner />
      </div>
      <div className='section-animate'>
        <DomoAIBanner />
      </div>
      <div className='section-animate'>
        <WhyDomo />
      </div>
      <div className='section-animate'>
        <CreateAccount />
      </div>
      <div className='section-animate'>
        <DomoFeatures />
      </div>
      <div className='section-animate'>
        <TopBenefits />
      </div>
      <div className='section-animate'>
        <WhenToUseDomo />
      </div>
      <div className='section-animate'>
        <Solutions />
      </div>
      <div className='section-animate'>
        <ExecutionCredits />
      </div>
      <div className='section-animate'>
        <HowItWorks />
      </div>
      <div className='section-animate'>
        <DomoDashboard />
      </div>
      <div className='section-animate'>
        <LastSection />
      </div>
    </main>
  );
}
