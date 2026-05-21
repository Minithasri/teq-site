'use client';

import Image from 'next/image';

const capabilities = [
  {
    icon: '/images/Templates/bissell/ai-driven.svg',
    title: 'AI-Driven Insight Generation',
    description:
      'Leveraging AI agents to automatically extract, summarize, and contextualize key performance indicators from complex dashboards.',
  },
  {
    icon: '/images/Templates/bissell/automated.svg',
    title: 'Automated PPT Creation',
    description:
      'End-to-end automation of slide generation with consistent formatting, branding, and narrative structure — eliminating manual effort.',
  },
  {
    icon: '/images/Templates/bissell/dashboard.svg',
    title: 'Dashboard-to-Report Integration',
    description:
      'Seamless capture and mapping of dashboard visuals, charts, and data points directly into structured presentation layouts.',
  },
  {
    icon: '/images/Templates/bissell/standardized.svg',
    title: 'Standardized Storytelling',
    description:
      'Ensuring every report follows a uniform narrative framework, delivering clarity and coherence across all executive communications.',
  },
  {
    icon: '/images/Templates/bissell/scalable.svg',
    title: 'Scalable Reporting Framework',
    description:
      'A modular architecture designed to scale across departments, business units, and evolving reporting requirements.',
  },
];

const SolutionSection = () => {
  return (
    <section className='relative w-full overflow-hidden bg-[#F7F7F7]'>
      {/* RIGHT IMAGE */}
      <div className='absolute right-0 top-0 hidden md:block z-0'>
        <Image
          src='/images/Templates/bissell/solution.png'
          alt='Executive'
          width={260}
          height={420}
          priority
          className='h-[420px] w-[260px] object-contain'
        />
      </div>

      {/* CONTENT */}
      <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
        {/* TOP CONTENT */}
        <div className='max-w-7xl text-center'>
          {/* LABEL */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[1px]'>
            Our Solution
          </h2>

          {/* DESCRIPTION */}
          <div className='mt-7 space-y-7'>
            <p className='text-md md:text-xl leading-[1.4] text-[#7D8797]'>
              We designed and deployed an AI-powered automation platform built on Domo&apos;s Code
              Engine and AI Agents. The platform dynamically extracts KPIs, insights, and summaries
              from live dashboards, captures visuals, and maps them to a structured presentation
              framework — generating polished, executive-ready PowerPoint decks in minutes instead
              of hours.
            </p>

            <p className='text-md md:text-xl leading-[1.4] text-[#7D8797]'>
              A custom application layer ensures consistent formatting, standardized storytelling,
              and seamless integration with existing dashboard infrastructure, enabling teams to
              focus on strategy rather than slide creation.
            </p>
          </div>
        </div>

        {/* CAPABILITIES */}
        <div className='mt-16'>
          {/* HEADING */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[1px] text-center'>
            Key Capabilities Delivered
          </h2>

          {/* FIRST ROW */}
          <div className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-3'>
            {capabilities.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className='
                  min-h-[240px]
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
                  <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#EEF0FF]'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={18}
                      height={18}
                      className='h-[18px] w-[18px] object-contain'
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className='text-sm md:text-lg leading-[1.4] font-semibold text-[#0F1729]/80'>
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className='mt-8 text-[13px] md:text-[14px] leading-[1.9] text-[#8891A4]'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* SECOND ROW */}
          <div className='mt-5 flex flex-col items-center gap-5 md:flex-row md:justify-center'>
            {capabilities.slice(3, 5).map((item, index) => (
              <div
                key={index}
                className='
                  w-full
                  md:w-[420px]
                  min-h-[210px]
                  rounded-[18px]
                  border-2
                  border-[#F5F5F5]
                  bg-white
                  px-5
                  md:px-6
                  py-5
                  md:py-6
                  shadow-[0px_4px_12px_rgba(0,0,0,0.08)]'
              >
                {/* HEADER */}
                <div className='flex items-center gap-4'>
                  {/* ICON */}
                  <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#EEF0FF]'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={18}
                      height={18}
                      className='h-[18px] w-[18px] object-contain'
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className='text-sm md:text-lg leading-[1.4] font-semibold text-[#0F1729]/80'>
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className='mt-8 text-[13px] md:text-[14px] leading-[1.9] text-[#8891A4]'>
                  {item.description}
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
