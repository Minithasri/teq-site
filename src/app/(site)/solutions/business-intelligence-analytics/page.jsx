'use client';

import Agent from '../../../../components/solutions/BIAnalytics/Agent';
/* eslint-disable semi */
import BannerSection from '../../../../components/solutions/BIAnalytics/BannerSection';
import Cards from '../../../../components/solutions/BIAnalytics/Cards';
import DataGovernanceSection from '../../../../components/solutions/BIAnalytics/DataGovernanceSection';
import SectionGwc from '../../../../components/solutions/BIAnalytics/SectionGwc';
import Technology from '../../../../components/solutions/BIAnalytics/Technology';
import FAQ from '../../../../components/solutions/BIAnalytics/FAQ';

function Solutionpage() {
  return (
    <div>
      <BannerSection />
      <SectionGwc />
      <DataGovernanceSection />
      <Technology />
      <Cards />
      <FAQ />
      <Agent />
    </div>
  );
}

export default Solutionpage;
