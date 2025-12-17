'use client';

import Agent from '../../../../pages/solutions/BIMigration/Agent';
/* eslint-disable semi */
import BannerSection from '../../../../pages/solutions/BIMigration/BannerSection';
import Cards from '../../../../pages/solutions/BIMigration/Cards';
import DataGovernanceSection from '../../../../pages/solutions/BIMigration/DataGovernanceSection';
import SectionGwc from '../../../../pages/solutions/BIMigration/SectionGwc';
import Technology from '../../../../pages/solutions/BIMigration/Technology';

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
