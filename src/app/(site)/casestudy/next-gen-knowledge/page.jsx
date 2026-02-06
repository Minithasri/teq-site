export const dynamic = 'force-static';

import Architecture from '@/components/Casestudy/Templates/Next Gen Knowledge/Architecture';
import Business from '@/components/Casestudy/Templates/Next Gen Knowledge/Business';
import HeroSection from '@/components/Casestudy/Templates/Next Gen Knowledge/HeroSection';
import Problem from '@/components/Casestudy/Templates/Next Gen Knowledge/Problem';
import Quantitative from '@/components/Casestudy/Templates/Next Gen Knowledge/Quantitative';
import Solution from '@/components/Casestudy/Templates/Next Gen Knowledge/Solution';
import Technology from '@/components/Casestudy/Templates/Next Gen Knowledge/Technology';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function Page() {
  return (
    <main>
      <HeroSection />
      <Problem />
      <Solution />
      <Architecture />
      <Technology />
      <Business />
      <Quantitative />
      <LastSection pdfUrl='/case-studies/GWC_AI Chatbot for Enterprise Support.pdf' />
    </main>
  );
}
