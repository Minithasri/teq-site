'use client';

import Image from 'next/image';

const businessImpact = [
  {
    value: '70–80%',
    description: 'Reduction in manual data processing effort',
    icon: '/images/Templates/tig-golf/reduction.svg',
  },
  {
    value: '30–40%',
    description: 'Improvement in data accuracy and consistency',
    icon: '/images/Templates/tig-golf/improvement.svg',
  },
  {
    value: 'Scale',
    description: 'Enhanced scalability for handling multiple files',
    icon: '/images/Templates/tig-golf/enhance.svg',
  },
  {
    value: 'Trust',
    description: 'Increased reliability of reporting and decision-making',
    icon: '/images/Templates/tig-golf/increased.svg',
  },
];

const BusinessImpactSection = () => {
  return (
    <section className='w-full overflow-x-hidden'>
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold text-[#262626]'>
          <span className='mr-3'>04</span>· Business Impact
        </h2>

        {/* GRID */}
        <div className='mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2'>
          {businessImpact.map((item, index) => (
            <div
              key={index}
              className='
                relative
                overflow-hidden
                rounded-[28px]
                border-2
                border-[#F5F5F5]
                bg-white
                px-7
                md:px-8
                py-7
                md:py-8
                shadow-md
              '
            >
              {/* GREEN GLOW */}
              <div
                className='
                  absolute
                  right-[-60px]
                  top-[-60px]
                  h-[180px]
                  w-[180px]
                  rounded-full
                  bg-[#16B91E]/15
                  blur-[20px]
                '
              />

              {/* ICON */}
              <div
                className='
                  absolute
                  right-7
                  top-7
                  flex
                  h-[54px]
                  w-[54px]
                  items-center
                  justify-center
                  rounded-[16px]
                  bg-[#16B91E]
                  shadow-[0px_10px_24px_rgba(22,185,30,0.28)]
                '
              >
                <Image
                  src={item.icon}
                  alt={item.value}
                  width={24}
                  height={24}
                  className='h-6 w-6 object-contain'
                />
              </div>

              {/* VALUE */}
              <h3 className='relative z-10 text-2xl md:text-5xl leading-none font-bold tracking-[-2px] text-[#262626]'>
                {item.value}
              </h3>

              {/* DESCRIPTION */}
              <p className='relative z-10 mt-8 max-w-[420px] text-[14px] md:text-[17px] leading-[1.8] text-[#262626]'>
                {item.description}
              </p>

              {/* VERIFIED */}
              <div className='relative z-10 mt-10 flex items-center gap-3'>
                {/* DOT */}
                <div className='h-[6px] w-[6px] rounded-full bg-[#E3A53B]' />

                {/* TEXT */}
                <p className='text-[11px] md:text-[13px] font-medium uppercase tracking-[3px] text-[#16B91E]'>
                  Verified Outcome
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;
