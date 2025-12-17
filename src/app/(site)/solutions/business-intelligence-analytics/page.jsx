'use client';

import Agent from '../../../../pages/solutions/BIAnalytics/Agent';
/* eslint-disable semi */
import BannerSection from '../../../../pages/solutions/BIAnalytics/BannerSection';
import Cards from '../../../../pages/solutions/BIAnalytics/Cards';
import DataGovernanceSection from '../../../../pages/solutions/BIAnalytics/DataGovernanceSection';
import SectionGwc from '../../../../pages/solutions/BIAnalytics/SectionGwc';
import Technology from '../../../../pages/solutions/BIAnalytics/Technology';

function Solutionpage() {
  return (
    <div>
      <BannerSection />
      <SectionGwc />
      <DataGovernanceSection />
      <Technology />
      <Cards />
      <Agent />
    </div>
  );
}

export default Solutionpage;
