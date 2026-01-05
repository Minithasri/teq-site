'use client';
import HeroSection from '@/pages/about/HeroSection';
import VisionandMission from '@/pages/about/VisionandMission';
import Leaders from '@/pages/about/Leaders';
import GreatPlaceToWork from '@/pages/about/GreatPlaceToWork';
import LifeAtGwc from '@/pages/about/LifeAtGwc';
import WhyGwc from '@/pages/about/WhyGwc';
import LastSection from '@/pages/about/LastSection';

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
