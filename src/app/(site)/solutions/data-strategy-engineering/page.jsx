'use client';

import Agent from '../../../../pages/solutions/dataStraEngineer/Agent';
/* eslint-disable semi */
import BannerSection from '../../../../pages/solutions/dataStraEngineer/BannerSection';
import Cards from '../../../../pages/solutions/dataStraEngineer/Cards';
import DataGovernanceSection from '../../../../pages/solutions/dataStraEngineer/DataGovernanceSection';
import SectionGwc from '../../../../pages/solutions/dataStraEngineer/SectionGwc';
import Technology from '../../../../pages/solutions/dataStraEngineer/Technology';

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
