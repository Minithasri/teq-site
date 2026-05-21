'use client';

import Image from 'next/image';

const solutionCards = [
  {
    icon: '/images/Templates/bissell-3/centralized.svg',
    title: 'Centralized Data Integration',
    desc: 'Unified logistics data from Amazon Redshift, Excel, and webforms into a single Domo platform for consistent analysis.',
  },
  {
    icon: '/images/Templates/bissell-3/automated.svg',
    title: 'Automated ETL Pipelines',
    desc: 'Leveraged Magic ETL to transform and structure large-scale logistics datasets for reliable reporting.',
  },
  {
    icon: '/images/Templates/bissell-3/transportation.svg',
    title: 'Transportation Cost Analysis',
    desc: 'Identified cost drivers by analyzing carrier rates, shipment trends, and transportation lanes.',
  },
  {
    icon: '/images/Templates/bissell-3/shipment.svg',
    title: 'Shipment Pattern Intelligence',
    desc: 'Evaluated shipment flows to uncover inefficiencies and opportunities for optimization.',
  },
  {
    icon: '/images/Templates/bissell-3/scenario.svg',
    title: 'Scenario-Based Network Modeling',
    desc: 'Enabled baseline, tactical, and strategic simulations to evaluate routing and distribution strategies.',
  },
  {
    icon: '/images/Templates/bissell-3/interactive.svg',
    title: 'Interactive Decision Support Dashboards',
    desc: 'Delivered actionable insights through dynamic dashboards for planners and leadership teams.',
  },
];

const SolutionSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      {/* TOP CONTENT */}
      <div className='mx-auto max-w-7xl px-4 md:px-6 pt-10 md:pt-14 text-center'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px]'>
          Our Solution
        </h2>

        {/* DESCRIPTION */}
        <p className='mt-5 max-w-6xl text-[12px] md:text-[18px] leading-[1.8] text-[#7D8798]'>
          We designed and deployed an integrated analytics platform that consolidated disparate
          logistics data sources and enabled advanced scenario modeling for network optimization.
        </p>
      </div>

      {/* SOLUTION CARDS SECTION */}
      <div className='relative mt-10 overflow-hidden rounded-xl md:rounded-t-[40px]'>
        {/* BACKGROUND IMAGE */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/bissell-3/solution.png'
            alt='Logistics'
            fill
            priority
            className='object-cover'
          />
        </div>

        {/* OVERLAY */}
        <div className='absolute inset-0 bg-[#6756D8]/5 z-0' />

        {/* CONTENT */}
        <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-12'>
          {/* GRID */}
          <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
            {solutionCards.map((item, index) => (
              <div
                key={index}
                className='
                  rounded-[18px]
                  border-2
                  border-[#F5F5F5]
                  bg-white
                  px-5
                  md:px-6
                  py-5
                  md:py-6
                  shadow-[0px_4px_12px_rgba(0,0,0,0.08)]
                '
              >
                {/* HEADER */}
                <div className='flex items-center gap-4'>
                  {/* ICON */}
                  <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[12px] bg-blue-600/10'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={22}
                      height={22}
                      className='h-[22px] w-[22px] object-contain'
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className='text-[14px] md:text-[20px] leading-[1.4] font-semibold tracking-[-0.5px] text-[#0F1729]/80'>
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className='mt-6 text-[12px] md:text-[15px] leading-[1.9] text-[#7E8798]'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
