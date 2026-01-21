import LastSection from '@/pages/Casestudy/Templates/Real Time Production/LastSection';
import Business from '@/pages/Casestudy/Templates/Smart Maintenance/Business';
import Conclusion from '@/pages/Casestudy/Templates/Smart Maintenance/Conclusion';
import HeroSection from '@/pages/Casestudy/Templates/Smart Maintenance/HeroSection';
import KeyOutcomes from '@/pages/Casestudy/Templates/Smart Maintenance/KeyOutcomes';
import Overview from '@/pages/Casestudy/Templates/Smart Maintenance/Overview';
import Solution from '@/pages/Casestudy/Templates/Smart Maintenance/Solution';
import Technology from '@/pages/Casestudy/Templates/Smart Maintenance/Technology';

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
      <LastSection pdfUrl='/case-studies/GWC_Maintenance Efficiency Improvement.pdf' />
    </>
  );
};

export default Page;
