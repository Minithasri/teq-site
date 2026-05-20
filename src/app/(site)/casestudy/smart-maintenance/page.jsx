export const dynamic = 'force-static';

import LastSection from '@/components/Casestudy/Templates/Real Time Production/LastSection';
import Business from '@/components/Casestudy/Templates/Smart Maintenance/Business';
import Conclusion from '@/components/Casestudy/Templates/Smart Maintenance/Conclusion';
import HeroSection from '@/components/Casestudy/Templates/Smart Maintenance/HeroSection';
import KeyOutcomes from '@/components/Casestudy/Templates/Smart Maintenance/KeyOutcomes';
import Overview from '@/components/Casestudy/Templates/Smart Maintenance/Overview';
import Solution from '@/components/Casestudy/Templates/Smart Maintenance/Solution';
import Technology from '@/components/Casestudy/Templates/Smart Maintenance/Technology';

const Page = () => {
  return (
    <>
      <HeroSection />
      <Overview />
      <Business />
      <Solution />
      <Technology />
      <KeyOutcomes />
      <Conclusion />
      <LastSection pdfUrl='https://storage.googleapis.com/casestudy-pdf-download/CaseStuides/smart-maintenance.pdf' />
    </>
  );
};

export default Page;
