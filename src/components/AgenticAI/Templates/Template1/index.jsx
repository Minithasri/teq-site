'use client';
import HeroSection from './HeroSection';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

export default function Template1({ data }) {
  return (
    <main>
      <HeroSection data={data} />
      <Section2 data={data} />
      <Section3 data={data} />
      <Section4 data={data} />
      <Section5 data={data} />
    </main>
  );
}
