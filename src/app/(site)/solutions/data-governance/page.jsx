'use client';

import Agent from '../../../../components/solutions/dataGovernance/Agent';
/* eslint-disable semi */
import BannerSection from '../../../../components/solutions/dataGovernance/BannerSection';
import Cards from '../../../../components/solutions/dataGovernance/Cards';
import DataGovernanceSection from '../../../../components/solutions/dataGovernance/DataGovernanceSection';
import SectionGwc from '../../../../components/solutions/dataGovernance/SectionGwc';
import Technology from '../../../../components/solutions/dataGovernance/Technology';
import FAQ from '../../../../components/solutions/dataGovernance/FAQ';

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
