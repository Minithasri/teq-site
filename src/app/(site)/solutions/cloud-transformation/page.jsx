'use client';

import Agent from '../../../../pages/solutions/cloudTrans/Agent';
/* eslint-disable semi */
import BannerSection from '../../../../pages/solutions/cloudTrans/BannerSection';
import Cards from '../../../../pages/solutions/cloudTrans/Cards';
import DataGovernanceSection from '../../../../pages/solutions/cloudTrans/DataGovernanceSection';
import SectionGwc from '../../../../pages/solutions/cloudTrans/SectionGwc';
import Technology from '../../../../pages/solutions/cloudTrans/Technology';

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
