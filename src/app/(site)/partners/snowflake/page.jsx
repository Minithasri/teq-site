'use client';

import Frame from '@/pages/partners/Snowflake/Frame';
import Powerdata from '@/pages/partners/Snowflake/Powerdata';
import Offerings from '@/pages/partners/Snowflake/Offerings';
import Success from '@/pages/partners/Snowflake/Success';
import Retail from '@/pages/partners/Snowflake/Retail';

export default function SnowflakePage() {
  return (
    <main>
      <Frame />
      <Powerdata />

      <Offerings />

      <Success />
      <Retail />
    </main>
  );
}
