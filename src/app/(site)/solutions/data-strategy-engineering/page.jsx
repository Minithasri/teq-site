'use client';

import Agent from '../../../../components/solutions/dataStraEngineer/Agent';
/* eslint-disable semi */
import BannerSection from '../../../../components/solutions/dataStraEngineer/BannerSection';
import Cards from '../../../../components/solutions/dataStraEngineer/Cards';
import DataGovernanceSection from '../../../../components/solutions/dataStraEngineer/DataGovernanceSection';
import SectionGwc from '../../../../components/solutions/dataStraEngineer/SectionGwc';
import Technology from '../../../../components/solutions/dataStraEngineer/Technology';
import FAQ from '../../../../components/solutions/dataStraEngineer/FAQ';

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
