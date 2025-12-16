'use client';

import Agent from '../../../../pages/solutions/dataGovernance/Agent';
/* eslint-disable semi */
import BannerSection from '../../../../pages/solutions/dataGovernance/BannerSection';
import Cards from '../../../../pages/solutions/dataGovernance/Cards';
import DataGovernanceSection from '../../../../pages/solutions/dataGovernance/DataGovernanceSection';
import SectionGwc from '../../../../pages/solutions/dataGovernance/SectionGwc';
import Technology from '../../../../pages/solutions/dataGovernance/Technology';

function Solutionpage() {
  return (
    <div>
      <BannerSection />
      <SectionGwc />
      {/* <Dummy /> */}
      <DataGovernanceSection />
      <Technology />
      <Cards />
      <Agent />
    </div>
  );
}

export default Solutionpage;
