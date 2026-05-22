'use client';

import Image from 'next/image';

const impactCards = [
  {
    icon: '/images/Templates/retail-1/real-time.svg',
    title: 'Real-Time\nReporting Cycle',
    description: 'Reduced from multi-day manual processes to near real-time automated delivery.',
  },
  {
    icon: '/images/Templates/retail-1/validated.svg',
    title: 'Validated\nData Accuracy',
    description: 'Automated validation framework restored stakeholder trust in reporting outputs.',
  },
  {
    icon: '/images/Templates/retail-1/accelerated.svg',
    title: 'Accelerated\nDecision-Making',
    description:
      'Executive dashboards enabled faster, evidence-based decisions across the organization.',
  },
];

const DataArchitectureSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#F8F8F8]'>
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16'>
        {/* ================= TITLE ================= */}
        <h2
          className='
            text-center
            text-[28px]
            md:text-[48px]
            leading-none
            font-semibold
            tracking-[3px]
            text-[#262626]
          '
        >
          Data Architecture
        </h2>

        {/* ================= ARCHITECTURE FLOW ================= */}
        <div
          className='
            mt-12
            flex
            flex-col
            items-center
            justify-center
            gap-10
            md:flex-row
            md:items-center
          '
        >
          {/* ================= LEFT STACK ================= */}
          <div className='flex flex-col gap-5'>
            {/* CARD */}
            <div
              className='
                flex
                h-[120px]
                w-[220px]
                flex-col
                items-center
                justify-center
                rounded-[14px]
                border-2
                border-[#2F6FFF]
                bg-white
              '
            >
              <h3 className='text-[22px] font-semibold text-[#242B38]'>Shopify</h3>

              <p className='mt-3 text-[15px] font-medium text-[#3F4654]'>Ecommerce</p>
            </div>

            {/* CARD */}
            <div
              className='
                flex
                h-[120px]
                w-[220px]
                flex-col
                items-center
                justify-center
                rounded-[14px]
                border-2
                border-[#2F6FFF]
                bg-white
              '
            >
              <h3 className='text-[22px] font-semibold text-[#242B38]'>POS Systems</h3>

              <p className='mt-3 text-[15px] font-medium text-[#3F4654]'>In-store</p>
            </div>

            {/* CARD */}
            <div
              className='
                flex
                h-[120px]
                w-[220px]
                flex-col
                items-center
                justify-center
                rounded-[14px]
                border-2
                border-[#2F6FFF]
                bg-white
              '
            >
              <h3 className='text-[22px] font-semibold text-[#242B38]'>Internal DBs</h3>

              <p className='mt-3 text-[15px] font-medium text-[#3F4654]'>Legacy</p>
            </div>
          </div>

          {/* ================= ETL FLOW ================= */}
          <div
            className='
              hidden
              md:flex
              items-center
              gap-6
            '
          >
            {/* ETL */}
            <div className='flex flex-col items-center gap-4'>
              <span className='text-[28px] font-semibold text-[#333A46]'>ETL</span>

              <div className='h-[2px] w-[90px] bg-[#7E8798]' />
            </div>

            {/* CENTER BOX */}
            <div
              className='
                flex
                h-[130px]
                w-[340px]
                flex-col
                items-center
                justify-center
                rounded-[14px]
                border-[4px]
                border-black
                bg-white
              '
            >
              <h3 className='text-[28px] font-semibold text-[#1E2430]'>Unified Data Model</h3>

              <p className='mt-4 text-[16px] font-semibold text-[#2D3340]'>
                Validated & Centralized
              </p>
            </div>

            {/* API */}
            <div className='flex flex-col items-center gap-4'>
              <span className='text-[28px] font-semibold text-[#333A46]'>API</span>

              <div className='h-[2px] w-[90px] bg-[#7E8798]' />
            </div>
          </div>

          {/* ================= MOBILE FLOW ================= */}
          <div className='mt-10 flex flex-col items-center md:hidden'>
            <div className='text-[18px] font-semibold text-[#333A46]'>
              ETL → Unified Data Model → API
            </div>

            <div
              className='
              mt-6
              flex
              h-[120px]
              w-full
              max-w-[360px]
              flex-col
              items-center
              justify-center
              rounded-[14px]
              border-[4px]
              border-black
              bg-white
              px-5
              text-center
            '
            >
              <h3 className='text-[24px] font-semibold text-[#1E2430]'>Unified Data Model</h3>

              <p className='mt-3 text-[15px] font-semibold text-[#2D3340]'>
                Validated & Centralized
              </p>
            </div>
          </div>

          {/* ================= RIGHT BOX ================= */}
          <div
            className='
              flex
              h-[140px]
              w-full
              max-w-[320px]
              flex-col
              items-center
              justify-center
              rounded-[14px]
              border
              border-[#32A852]
              bg-[#EEF9F0]
              px-6
              text-center
            '
          >
            <h3 className='text-[22px] font-semibold text-[#18A83C]'>Executive Dashboards</h3>

            <p className='mt-5 text-[16px] font-semibold text-[#2C3441]'>Real-time & Drill-down</p>
          </div>
        </div>

        {/* ================= BUSINESS IMPACT ================= */}
        <div className='mt-20'>
          {/* TITLE */}
          <h2
            className='
              text-center
              text-2xl
              md:text-5xl
              leading-none
              font-semibold
              tracking-[2px]
              text-[#262626]
            '
          >
            Business Impact
          </h2>

          {/* SUBTITLE */}
          <p
            className='
              mt-6
              text-center
              text-[16px]
              md:text-[24px]
              font-semibold
              text-[#1F2532]
            '
          >
            Measurable Outcomes
          </p>

          {/* CARDS */}
          <div
            className='
              mt-12
              grid
              grid-cols-1
              gap-6
              md:grid-cols-3
            '
          >
            {impactCards.map((item, index) => {
              return (
                <div
                  key={index}
                  className='
                    rounded-[12px]
                    border-2
                    border-[#F5F5F5]
                    bg-[#EEFCF1]
                    px-6
                    md:px-8
                    py-7
                    shadow-lg
                  '
                >
                  {/* HEADER */}
                  <div className='flex items-start gap-5'>
                    {/* ICON */}
                    <div
                      className='
                        flex
                        h-[52px]
                        w-[52px]
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-[14px]
                        bg-[#20BF20]
                      '
                    >
                      <Image
                        src={item.icon}
                        alt='Warning'
                        width={16}
                        height={16}
                        className='h-[20px] w-[20px] object-contain'
                      />
                    </div>

                    {/* TITLE */}
                    <h3
                      className='
                        whitespace-pre-line
                        text-[22px]
                        md:text-[28px]
                        leading-[1.2]
                        font-semibold
                        tracking-[-0.5px]
                        text-[#262626]
                      '
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p
                    className='
                      mt-7
                      text-[14px]
                      md:text-[16px]
                      leading-[1.9]
                      text-[#343C48]
                    '
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataArchitectureSection;
