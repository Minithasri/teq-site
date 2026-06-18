'use client';

import Agent from '../../../../components/solutions/cloudTrans/Agent';
/* eslint-disable semi */
import BannerSection from '../../../../components/solutions/cloudTrans/BannerSection';
import Cards from '../../../../components/solutions/cloudTrans/Cards';
import DataGovernanceSection from '../../../../components/solutions/cloudTrans/DataGovernanceSection';
import SectionGwc from '../../../../components/solutions/cloudTrans/SectionGwc';
import Technology from '../../../../components/solutions/cloudTrans/Technology';
import FAQ from '../../../../components/solutions/cloudTrans/FAQ';

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
