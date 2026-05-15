'use client';

import Image from 'next/image';

const solutionPoints = [
  'Developed a mobile-first application powered by Domo for store managers and field teams',
  'Integrated retail datasets into Domo using Magic ETL for centralized processing',
  'Built a Progressive Web App (PWA) using React and Tailwind for seamless mobile access',
  'Enabled identification of fast-moving and slow-moving products through real-time insights',
  'Provided actionable workflows for pull-back requests, replenishment planning, and indent creation',
  'Enabled collaboration between store teams and merchandising teams',
  'Implemented a closed-loop workflow system to track actions from initiation to completion',
  'Ensured accountability and visibility into execution outcomes across all store locations',
];

const SolutionSection = () => {
  return (
    <section className='relative w-full overflow-hidden'>
      {/* RIGHT IMAGE */}
      <div className='absolute right-0 bottom-0 hidden md:block z-0'>
        <Image
          src='/images/Templates/style-union-2/our-solution.png'
          alt='Retail'
          width={260}
          height={380}
          priority
          className='h-[380px] w-[260px] object-contain'
        />
      </div>

      {/* CONTENT */}
      <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
        {/* LABEL */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold uppercase tracking-[1px] text-[#2E45F5]'>
          OUR SOLUTION
        </h2>

        {/* DESCRIPTION */}
        <p className='mt-5 max-w-5xl text-[14px] md:text-[18px] leading-[1.9] text-[#748094]'>
          We designed and deployed a comprehensive mobile-first platform that brings together
          real-time data, actionable workflows, and cross-functional collaboration enabling store
          managers to make faster, smarter decisions on the ground.
        </p>

        {/* LIST */}
        <div className='mt-8 max-w-5xl space-y-5'>
          {solutionPoints.map((item, index) => (
            <div key={index} className='flex items-start gap-3'>
              {/* ICON */}
              <div className='mt-[2px] flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-[#2E45F5] bg-white'>
                <Image
                  src='/images/Templates/style-union-2/tick.svg'
                  alt='Check'
                  width={12}
                  height={12}
                  className='h-3 w-3 object-contain'
                />
              </div>

              {/* TEXT */}
              <p className='text-[14px] md:text-[16px] leading-[1.8] text-[#3E4656]'>{item}</p>
            </div>
          ))}
        </div>

        {/* MOBILE IMAGE */}
        <div className='mt-10 flex justify-center md:hidden'>
          <Image
            src='/images/Templates/style-union-2/our-solution.png'
            alt='Retail'
            width={220}
            height={320}
            priority
            className='h-[320px] w-[220px] object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
