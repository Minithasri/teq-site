'use client';

import Image from 'next/image';

const techStack = [
  'Domo Platform',
  'Fileset & Workflow',
  'APP_DB',
  'App Studio',
  'AI Agents',
  'PDF Processing',
];

const TechnologyValueSection = () => {
  return (
    <section className='relative w-full overflow-hidden'>
      {/* RIGHT IMAGE */}
      <div className='relative'>
        <div className='absolute right-0 top-[180px] hidden md:block z-0'>
          <Image
            src='/images/Templates/gcon/building-in-hand.png'
            alt='City'
            width={250}
            height={220}
            priority
            className='h-[340px] w-[380px] object-contain'
          />
        </div>
      </div>

      <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16'>
        {/* ================= TECHNOLOGY STACK ================= */}
        <div className='text-center'>
          {/* LABEL */}
          <h2 className='text-3xl md:text-5xl leading-none font-poppins font-semibold tracking-[2px]'>
            Technology Stack
          </h2>

          {/* HEADING */}
          <h3 className='mt-5 text-xl md:text-3xl leading-[1.2] text-[#1A1F2C]'>
            Built on a Modern Data Platform
          </h3>
        </div>

        {/* STACK TAGS */}
        <div className='mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4'>
          {techStack.map((item, index) => (
            <div
              key={index}
              className='
                rounded-[10px]
                border-2
                border-[#F5F5F5]
                shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                bg-white
                px-5
                md:px-7
                py-2.5
                text-[12px]
                md:text-[14px]
                font-medium
                text-[#4C5563]
              '
            >
              {item}
            </div>
          ))}
        </div>

        {/* ================= VALUE DELIVERED ================= */}
        <div className='relative mt-16 md:mt-20 text-center'>
          {/* LABEL */}
          <h2 className='text-3xl md:text-5xl leading-none font-semibold tracking-[2px]'>
            Value Delivered
          </h2>

          {/* HEADING */}
          <h3 className='mt-5 text-xl md:text-3xl leading-[1.3] text-[#1A1F2C]'>
            From Manual Bottlenecks to Intelligent Automation
          </h3>

          {/* DESCRIPTION */}
          <div className='mx-auto mt-8 max-w-5xl'>
            <p className='text-[13px] md:text-[16px] leading-[2] text-[#6C7482]'>
              By deploying an AI-driven, multi-agent document processing workflow, we transformed a
              labor-intensive, error-prone process into a scalable, intelligent system. The solution
              not only delivers immediate efficiency gains and cost savings but positions the
              organization for sustained growth enabling them to take on more projects without
              scaling manual effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyValueSection;
