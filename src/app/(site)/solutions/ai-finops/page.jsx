'use client';

import Agent from '../../../../components/solutions/aiFinOps/Agent';
import BannerSection from '../../../../components/solutions/aiFinOps/BannerSection';
import Cards from '../../../../components/solutions/aiFinOps/Cards';
import DataGovernanceSection from '../../../../components/solutions/aiFinOps/DataGovernanceSection';
import FAQ from '../../../../components/solutions/aiFinOps/FAQ';
import SectionGwc from '../../../../components/solutions/aiFinOps/SectionGwc';
import Technology from '../../../../components/solutions/aiFinOps/Technology';

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
