'use client';

import AnalyticsBanner from '@/components/partners/domo/AnalyticsBanner';
import CreateAccount from '@/components/partners/domo/CreateAccount';
import DomoAIBanner from '@/components/partners/domo/DomoAIBanner';
import DomoFeatures from '@/components/partners/domo/DomoFeatures';
import ExecutionCredits from '@/components/partners/domo/ExecutionCredits';
import FeaturesSection from '@/components/partners/domo/FeaturesSection';
import HeroSection from '@/components/partners/domo/HeroSection';
import HowItWorks from '@/components/partners/domo/HowItWorks';
import PartnerSection from '@/components/partners/domo/PartnerSection';
import Solutions from '@/components/partners/domo/Solutions';
import TopBenefits from '@/components/partners/domo/TopBenefits';
import WhenToUseDomo from '@/components/partners/domo/WhenToUseDomo';
import WhyDomo from '@/components/partners/domo/WhyDomo';
import LastSection from '@/components/partners/domo/LastSection';
import DomoDashboard from '@/components/partners/domo/DomoDashboard';
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
