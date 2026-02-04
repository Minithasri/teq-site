'use client';
import HeroSection from '@/components/about/HeroSection';
import VisionandMission from '@/components/about/VisionandMission';
import Leaders from '@/components/about/Leaders';
import GreatPlaceToWork from '@/components/about/GreatPlaceToWork';
import LifeAtGwc from '@/components/about/LifeAtGwc';
import WhyGwc from '@/components/about/WhyGwc';
import LastSection from '@/components/about/LastSection';

export default function About() {
  return (
    <div>
      <main>
        <HeroSection />
        <VisionandMission />
        <Leaders />
        <GreatPlaceToWork />
        <LifeAtGwc />
        <WhyGwc />
        <LastSection />
      </main>
    </div>
  );
}
