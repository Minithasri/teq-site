export const dynamic = 'force-static';

import HeroSection from '@/components/Casestudy/Templates/Gcon/HeroSection';
import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';
import OverviewSection from '@/components/Casestudy/Templates/Gcon/OverviewSection';
import BusinessImpactSection from '@/components/Casestudy/Templates/Gcon/BusinessImpactSection';
import TechnologyValueSection from '../../../../components/Casestudy/Templates/Gcon/TechnologyValueSection';

export default function GCONCaseStudy() {
  return (
    <main>
      <HeroSection />
      <OverviewSection />
      <BusinessImpactSection />
      <TechnologyValueSection />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/Gcon.pdf' />
    </main>
  );
}
