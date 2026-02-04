'use client';

import Agent from '../../../../components/solutions/BIMigration/Agent';
/* eslint-disable semi */
import BannerSection from '../../../../components/solutions/BIMigration/BannerSection';
import Cards from '../../../../components/solutions/BIMigration/Cards';
import DataGovernanceSection from '../../../../components/solutions/BIMigration/DataGovernanceSection';
import SectionGwc from '../../../../components/solutions/BIMigration/SectionGwc';
import Technology from '../../../../components/solutions/BIMigration/Technology';

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
