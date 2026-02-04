'use client';

import Competitors from '@/components/partners/Databricks/Competitors';
import CoreSolutions from '@/components/partners/Databricks/CoreSolutions';
import DatabricksStandOut from '@/components/partners/Databricks/DatabricksStandOut';
import DeliveryApproach from '@/components/partners/Databricks/DeliveryApproach';
import HeroSection from '@/components/partners/Databricks/HeroSection';
import IndustryUseCases from '@/components/partners/Databricks/IndustryUseCases';
import LastSection from '@/components/partners/Databricks/LastSection';
import Outcomes from '@/components/partners/Databricks/Outcomes';

export default function DatabricksPage() {
  return (
    <main>
      <HeroSection />
      <DatabricksStandOut />
      <CoreSolutions />
      <IndustryUseCases />
      <DeliveryApproach />
      <Competitors />
      <Outcomes />
      <LastSection />
    </main>
  );
}
