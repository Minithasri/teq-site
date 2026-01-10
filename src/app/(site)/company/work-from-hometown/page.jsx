'use client';
import HeroSection from '@/pages/workfromHometown/HeroSection';
import HowItWorks from '@/pages/workfromHometown/HowItWorks';
import WhyWork from '@/pages/workfromHometown/WhyWork';
import WorkExperience from '@/pages/workfromHometown/WorkExperience';

export default function WorkFromHometown() {
  return (
    <div>
      <main>
        <HeroSection />

        <HowItWorks />
        <WorkExperience />
        <WhyWork />
      </main>
    </div>
  );
}
