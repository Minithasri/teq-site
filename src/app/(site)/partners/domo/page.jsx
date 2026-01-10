'use client';

import AnalyticsBanner from '@/pages/partners/domo/AnalyticsBanner';
import BenefitsSection from '@/pages/partners/domo/BenefitsSection';
import DomoAIBanner from '@/pages/partners/domo/DomoAIBanner';
import DomoDashboard from '@/pages/partners/domo/DomoDashboard';
import ExecutionCredits from '@/pages/partners/domo/ExecutionCredits';
import FeaturesList from '@/pages/partners/domo/FeaturesList';
import FeaturesSection from '@/pages/partners/domo/FeaturesSection';
import FreeAccountSection from '@/pages/partners/domo/FreeAccountSection';
import HeroSection from '@/pages/partners/domo/HeroSection';
import PartnerSection from '@/pages/partners/domo/PartnerSection';
import PricingSection from '@/pages/partners/domo/PricingSection';
import SolutionSection from '@/pages/partners/domo/SolutionSection';
import StatsSection from '@/pages/partners/domo/StatsSection';
import UseCasesSection from '@/pages/partners/domo/UseCasesSection';
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
      {/* <div className='section-animate'>
        <GWCServices />
      </div> */}
      <div className='section-animate'>
        <StatsSection />
      </div>
      <div className='section-animate'>
        <FreeAccountSection />
      </div>
      <div className='section-animate'>
        <FeaturesList />
      </div>
      <div className='section-animate'>
        <BenefitsSection />
      </div>
      <div className='section-animate'>
        <UseCasesSection />
      </div>
      <div className='section-animate'>
        <SolutionSection />
      </div>
      <div className='section-animate'>
        <PricingSection />
      </div>
      <div className='section-animate'>
        <ExecutionCredits />
      </div>
      <div className='section-animate'>
        <DomoDashboard />
      </div>
    </main>
  );
}
