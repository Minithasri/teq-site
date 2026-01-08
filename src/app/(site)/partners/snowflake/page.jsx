'use client';

import Frame from '@/pages/partners/Snowflake/Frame';
import LastSection from '@/pages/partners/Snowflake/LastSection';
import Offerings from '@/pages/partners/Snowflake/Offerings';
import Powerdata from '@/pages/partners/Snowflake/Powerdata';
import Retail from '@/pages/partners/Snowflake/Retail';
import Success from '@/pages/partners/Snowflake/Success';

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
