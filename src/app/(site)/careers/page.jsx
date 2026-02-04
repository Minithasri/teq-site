'use client';
import HeroSection from '@/components/careers/HeroSection';
import DesignSection from '@/components/careers/DesignSection';
import ExploreSection from '@/components/careers/ExploreSection';
import BestPathSection from '@/components/careers/BestPathSection';
import HomeTown from '@/components/careers/HomeTown';
import LastSection from '@/components/careers/LastSection';
import MeetPeople from '@/components/careers/MeetPeople';
import HowWeHire from '@/components/careers/HowWeHire';
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
