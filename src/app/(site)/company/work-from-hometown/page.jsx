'use client';
import HeroSection from '@/components/workfromHometown/HeroSection';
import HowItWorks from '@/components/workfromHometown/HowItWorks';
import WhyWork from '@/components/workfromHometown/WhyWork';
import WorkExperience from '@/components/workfromHometown/WorkExperience';

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
