'use client';
import HeroSection from '@/pages/careers/HeroSection';
import DesignSection from '@/pages/careers/DesignSection';
import ExploreSection from '@/pages/careers/ExploreSection';
import BestPathSection from '@/pages/careers/BestPathSection';
import HomeTown from '@/pages/careers/HomeTown';
import LastSection from '@/pages/careers/LastSection';
import MeetPeople from '@/pages/careers/MeetPeople';
import HowWeHire from '@/pages/careers/HowWeHire';
export default function Careers() {
  return (
    <div>
      <main>
        <HeroSection />
        <DesignSection />
        <ExploreSection />
        <HowWeHire />
        <BestPathSection />
        <HomeTown />
        <MeetPeople />
        <LastSection />
      </main>
    </div>
  );
}
