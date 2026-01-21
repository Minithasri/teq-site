import Architecture from '@/pages/Casestudy/Templates/Next Gen Knowledge/Architecture';
import Business from '@/pages/Casestudy/Templates/Next Gen Knowledge/Business';
import HeroSection from '@/pages/Casestudy/Templates/Next Gen Knowledge/HeroSection';
import Problem from '@/pages/Casestudy/Templates/Next Gen Knowledge/Problem';
import Quantitative from '@/pages/Casestudy/Templates/Next Gen Knowledge/Quantitative';
import Solution from '@/pages/Casestudy/Templates/Next Gen Knowledge/Solution';
import Technology from '@/pages/Casestudy/Templates/Next Gen Knowledge/Technology';
import LastSection from '@/pages/Casestudy/Templates/Real Time Production/LastSection';

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
