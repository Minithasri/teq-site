'use client';

import Frame from '@/components/partners/Snowflake/Frame';
import LastSection from '@/components/partners/Snowflake/LastSection';
import Offerings from '@/components/partners/Snowflake/Offerings';
import Powerdata from '@/components/partners/Snowflake/Powerdata';
import Retail from '@/components/partners/Snowflake/Retail';
import Success from '@/components/partners/Snowflake/Success';

export default function SnowflakePage() {
  return (
    <main>
      <Frame />
      <Powerdata />

      <Offerings />

      <Success />
      <Retail />
      <LastSection />
    </main>
  );
}
