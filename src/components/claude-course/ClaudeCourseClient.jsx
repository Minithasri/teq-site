'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BeforeYouEnrol from '@/components/claude-course/BeforeYouEnrol';
import CertificationLevels from '@/components/claude-course/CertificationLevels';
import CtaSection from '@/components/claude-course/CtaSection';
import Footer from '@/components/claude-course/Footer';
import HeroSection from '@/components/claude-course/HeroSection';
import Navbar from '@/components/claude-course/Navbar';
import PricingAndAssessmentSection from '@/components/claude-course/PricingAndAssessmentSection';
import FaqSection from '@/components/claude-course/FaqSection';
import ClaudeCourseLoader from '@/components/claude-course/ClaudeCourseLoader';

export default function ClaudeCourseClient() {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!loaderDone && (
          <ClaudeCourseLoader key='claude-course-loader' onComplete={() => setLoaderDone(true)} />
        )}
      </AnimatePresence>

      <main style={{ fontFamily: 'Outfit, sans-serif' }}>
        <Navbar />
        <HeroSection />
        <BeforeYouEnrol />
        <CertificationLevels />
        <PricingAndAssessmentSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </main>
    </>
  );
}
