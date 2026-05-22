'use client';

import Image from 'next/image';

const solutionCards = [
  {
    icon: '/images/Templates/kamrt/sales.svg',
    title: 'Sales Performance Dashboards',
    description: 'Monitored sales by region, product, and category',
  },
  {
    icon: '/images/Templates/kamrt/inventory.svg',
    title: 'Inventory Management Dashboards',
    description: 'Provided real-time visibility into stock levels and replenishment needs',
  },
  {
    icon: '/images/Templates/kamrt/operational.svg',
    title: 'Operational KPIs',
    description: 'Tracked performance across stores, including efficiency and service metrics',
  },
  {
    icon: '/images/Templates/kamrt/executive.svg',
    title: 'Executive Summaries',
    description: 'Delivered consolidated leadership views for strategic planning',
  },
  {
    icon: '/images/Templates/kamrt/automated.svg',
    title: 'Automated Refresh Cycles',
    description: 'Ensured up-to-date, accurate reporting without manual intervention',
  },
];

const technologies = [
  {
    logo: '/images/Templates/kamrt/bi.png',
    title: 'Power BI',
  },
  {
    logo: '/images/Templates/kamrt/snowflake.png',
    title: 'Snowflake',
  },
  {
    logo: '/images/Templates/kamrt/sql.png',
    title: 'SQL',
  },
];

const SolutionTechSection = () => {
  return (
    <section className='relative w-full overflow-hidden'>
      {/* RIGHT IMAGE */}
      <div className='absolute right-20 top-[260px] hidden md:block z-0'>
        <Image
          src='/images/Templates/kamrt/solutions.png'
          alt='Retail'
          width={420}
          height={520}
          priority
          className='object-contain h-[680px] w-[540px]'
        />
      </div>

      {/* CONTENT */}
      <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
        <div>
          {/* HEADING */}
          <div className='text-center'>
            <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px]'>
              GWC&apos;s Solution
            </h2>

            <p className='mt-6 text-sm md:text-lg leading-[1.6] text-[#7B818E]'>
              Comprehensive Power BI dashboards tailored for Kmart&apos;s retail operations
            </p>
          </div>

          {/* CARDS */}
          <div className='mt-12'>
            {/* FIRST ROW */}
            <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
              {solutionCards.slice(0, 3).map((item, index) => (
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
                  <div className='flex items-start gap-4'>
                    {/* ICON */}
                    <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[12px] bg-[#CCF0C6]'>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={22}
                        height={22}
                        className='h-[22px] w-[22px] object-contain'
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className='max-w-[220px] text-sm md:text-lg leading-[1.3] font-semibold tracking-[-0.5px] text-[#0F1729]/80'>
                      {item.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className='mt-6 text-base md:text-medium leading-[1.6] text-[#7A7F8C]'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* SECOND ROW */}
            <div className='mt-5 grid grid-cols-1 gap-5 md:max-w-[68%] md:grid-cols-2'>
              {solutionCards.slice(3, 5).map((item, index) => (
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
                  <div className='flex items-start gap-4'>
                    {/* ICON */}
                    <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[12px] bg-[#CCF0C6]'>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={22}
                        height={22}
                        className='h-[22px] w-[22px] object-contain'
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className='max-w-[240px] text-sm md:text-lg leading-[1.3] font-semibold tracking-[-0.5px] text-[#0F1729]/80'>
                      {item.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className='mt-6 text-base md:text-medium leading-[1.6] text-[#7A7F8C]'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= TECHNOLOGY STACK ================= */}
        <div className='mt-20'>
          {/* LEFT */}
          <div className='text-center'>
            <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px]'>
              Technology Stack
            </h2>

            <p className='mt-5 text-sm md:text-lg leading-[1.6] text-[#7B818E]'>
              Enterprise-grade tools for retail analytics
            </p>
          </div>
          <div className='mt-6 flex flex-col gap-8 md:flex-row items-center justify-center'>
            {/* LOGOS */}
            <div className='flex flex-wrap gap-6 md:gap-10'>
              {technologies.map((item, index) => (
                <Image
                  key={index}
                  src={item.logo}
                  alt={item.title}
                  width={140}
                  height={60}
                  priority
                  className='h-[42px] w-auto object-contain'
                />
              ))}
            </div>
          </div>

          {/* TECH CARDS */}
          <div className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-3'>
            {technologies.map((item, index) => (
              <div
                key={index}
                className='
                  flex
                  min-h-[160px]
                  items-center
                  justify-center
                  rounded-[18px]
                  border-2
                  border-[#F5F5F5]
                  bg-[#F7F7F7]
                  shadow-[0px_4px_12px_rgba(0,0,0,0.08)]
                '
              >
                {/* GRADIENT BUTTON */}
                <div
                  className='
                    rounded-full
                    bg-gradient-to-r
                    from-[#4B43E7]
                    to-[#F04E57]
                    px-12
                    py-3
                  '
                >
                  <p className='text-[18px] md:text-[24px] font-semibold text-white'>
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionTechSection;
