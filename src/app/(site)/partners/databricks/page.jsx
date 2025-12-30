'use client';

import Competitors from '@/pages/partners/Databricks/Competitors';
import CoreSolutions from '@/pages/partners/Databricks/CoreSolutions';
import DatabricksStandOut from '@/pages/partners/Databricks/DatabricksStandOut';
import DeliveryApproach from '@/pages/partners/Databricks/DeliveryApproach';
import HeroSection from '@/pages/partners/Databricks/HeroSection';
import IndustryUseCases from '@/pages/partners/Databricks/IndustryUseCases';
import Outcomes from '@/pages/partners/Databricks/Outcomes';

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
    </main>
  );
}
