'use client';

import Image from 'next/image';

const challenges = [
  'Manual creation of PowerPoint presentations from dashboards',
  'Time-consuming and repetitive reporting process',
  'Lack of consistency in storytelling and KPI representation',
  'Delays in generating executive-ready insights',
  'High dependency on manual effort for report preparation',
];

const HeroSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#F7F7F7]'>
      {/* ================= HERO SECTION ================= */}
      <div className='relative overflow-visible bg-[#08254A]'>
        {/* BACKGROUND IMAGE */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/bissell/hero-bg.png'
            alt='AI Background'
            fill
            priority
            className='object-fit'
          />
        </div>

        {/* OVERLAY */}
        <div className='absolute inset-0 bg-gradient-to-r from-[#08254A]/5 via-[#0D2F5D]/5 to-[#113A6A]/10 z-0' />

        {/* CONTENT */}
        <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-14 md:py-16'>
          {/* CONTENT */}
          <div className='relative'>
            {/* LEFT CONTENT */}
            <div className='mt-6 max-w-4xl'>
              {/* HEADING */}
              <h1 className='text-[38px] md:text-5xl leading-[1.05] font-semibold tracking-[-2px] text-white'>
                AI-Powered Executive Reporting
                <br />& PPT Automation Platform
              </h1>

              {/* DESCRIPTION */}
              <p className='mt-8 text-sm md:text-xl leading-[1.6] text-white'>
                Transforming dashboard data into executive-ready insights through intelligent
                automation and AI-driven reporting.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className='absolute -bottom-52 -right-20 hidden md:block z-20'>
              <Image
                src='/images/Templates/bissell/vaccum.png'
                alt='Machine'
                width={340}
                height={420}
                priority
                className='h-[420px] w-[340px] object-contain'
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14 text-center'>
        <div>
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[1px]'>
            Client Overview
          </h2>

          <p className='mt-6 text-[15px] md:text-[18px] leading-[1.9] text-[#707A8E]'>
            A leading manufacturing organization managing large volumes of operational and
            performance data across dashboards, requiring efficient and standardized executive
            reporting for strategic decision-making. With multiple business units generating data at
            scale, the need for a unified, automated reporting solution became critical.
          </p>
        </div>

        <div className='mt-10'>
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[1px]'>
            The Challenge
          </h2>
          <div className='mt-10'>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
              {challenges.slice(0, 4).map((item, index) => (
                <div
                  key={index}
                  className='
                    min-h-[92px]
                    rounded-[14px]
                    border-2
                    border-[#F5F5F5]
                    bg-white
                    px-6
                    py-5
                    flex
                    items-center
                    gap-4
                    shadow-[0px_4px_12px_rgba(0,0,0,0.08)]
                  '
                >
                  <div className='h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#FF2E2E]' />

                  <p className='text-[14px] md:text-[16px] leading-[1.7] text-[#3D4453]'>{item}</p>
                </div>
              ))}
            </div>

            <div className='mt-5 flex justify-center'>
              <div
                className='
                  w-full
                  md:w-[540px]
                  min-h-[92px]
                  rounded-[14px]
                  border-2
                  border-[#F5F5F5]
                  bg-white
                  px-6
                  py-5
                  flex
                  items-center
                  gap-4
                  shadow-[0px_4px_12px_rgba(0,0,0,0.08)]
                '
              >
                <div className='h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#FF2E2E]' />
                <p className='text-[14px] md:text-[16px] leading-[1.7] text-[#3D4453]'>
                  {challenges[4]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
