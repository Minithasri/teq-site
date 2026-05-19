'use client';

import Image from 'next/image';

const solutionSteps = [
  {
    step: 'STEP 01',
    title: 'Data Consolidation',
    description:
      'Unified fragmented data sources from Shopify, POS systems, and internal databases into a centralized data model.',
  },
  {
    step: 'STEP 02',
    title: 'Validation Framework',
    description:
      'Built automated data validation logic to ensure accuracy, consistency, and completeness before any data reaches reporting layers.',
  },
  {
    step: 'STEP 03',
    title: 'Executive Dashboards',
    description:
      'Developed KPI dashboards with real-time refresh and drill-down capabilities across regions, products, and sales channels.',
  },
  {
    step: 'STEP 04',
    title: 'Workflow Automation',
    description:
      'Automated reporting workflows to eliminate manual effort, reduce errors, and improve overall reporting efficiency.',
  },
];

const SolutionSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      {/* ================= HEADER ================= */}
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        {/* TITLE */}
        <h2
          className='
            text-center
            text-[26px]
            md:text-[48px]
            leading-none
            font-semibold
            uppercase
            tracking-[3px]
            text-[#163D95]
          '
        >
          THE SOLUTION
        </h2>

        {/* DESCRIPTION */}
        <p
          className='
            mx-auto
            mt-6
            text-center
            text-[14px]
            md:text-[18px]
            leading-[1.9]
            text-[#616B7C]
          '
        >
          Designed and implemented a unified sales reporting framework by consolidating multiple
          data sources into a centralized data model with automated validation and real-time
          executive dashboards.
        </p>
      </div>

      {/* ================= TIMELINE SECTION ================= */}
      <div className='relative mt-12'>
        {/* BACKGROUND IMAGE */}
        <div className='absolute inset-0'>
          <Image
            src='/images/Templates/retail-1/solution.png'
            alt='Background'
            fill
            priority
            className='object-cover'
          />

          {/* OVERLAY */}
          <div className='absolute inset-0 bg-[#EDEDED]/15' />
        </div>

        {/* CONTENT */}
        <div
          className='
            relative
            mx-auto
            max-w-5xl
            px-4
            md:px-6
            py-12
            md:py-20
          '
        >
          {/* TIMELINE WRAPPER */}
          <div className='relative'>
            {/* VERTICAL LINE */}
            <div
              className='
                absolute
                left-[18px]
                top-[30px]
                hidden
                md:block
                h-[78%]
                w-[1px]
                bg-[#D9D9D9]
              '
            />

            {/* STEPS */}
            <div className='space-y-6 md:space-y-8'>
              {solutionSteps.map((item, index) => (
                <div
                  key={index}
                  className='
                    flex
                    items-start
                    gap-4
                    md:gap-6
                  '
                >
                  {/* ICON */}
                  <div
                    className='
                      relative
                      z-10
                      mt-5
                      flex
                      h-[38px]
                      w-[38px]
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#174FCF]
                    '
                  >
                    <Image
                      src='/images/Templates/retail-1/tick.svg'
                      alt='Warning'
                      width={16}
                      height={16}
                      className='h-[16px] w-[16px] object-contain'
                    />
                  </div>

                  {/* CARD */}
                  <div
                    className='
                      w-full
                      rounded-[18px]
                      border-2
                      border-[#3D63FF]
                      bg-white
                      px-5
                      md:px-7
                      py-5
                      md:py-6
                      shadow-[0px_8px_20px_rgba(0,0,0,0.04)]
                    '
                  >
                    {/* STEP */}
                    <p
                      className='
                        text-[10px]
                        md:text-[11px]
                        font-bold
                        uppercase
                        tracking-[1.5px]
                        text-[#2452D3]
                      '
                    >
                      {item.step}
                    </p>

                    {/* TITLE */}
                    <h3
                      className='
                        mt-2
                        text-[18px]
                        md:text-[24px]
                        leading-[1.3]
                        font-semibold
                        tracking-[-0.5px]
                        text-[#1E1E1E]
                      '
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className='
                        mt-3
                        text-[13px]
                        md:text-[16px]
                        leading-[1.8]
                        text-[#4E5565]
                      '
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
