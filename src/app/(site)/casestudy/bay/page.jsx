export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/Bay/HeroSection';
import Challenges from '@/components/Casestudy/Templates/Bay/Challenges';
import Investigation from '@/components/Casestudy/Templates/Bay/Investigation';
import Technology from '@/components/Casestudy/Templates/Bay/Technology';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';

export default function ZBayPage() {
  return (
    <main>
      <HeroSection />
      <Challenges />
      <Investigation />
      <Technology />
      <LastSection pdfUrl='/case-studies/GWC_Z-Bay_Case_Study.pdf' />
    </main>
  );
}
