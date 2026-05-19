'use client';

import Image from 'next/image';

const impactCards = [
  {
    icon: '/images/Templates/kamrt/faster.svg',
    value: '90%',
    title: 'Faster Reporting Cycles',
  },
  {
    icon: '/images/Templates/kamrt/improved.svg',
    value: '100%',
    title: 'Improved Inventory Management',
  },
  {
    icon: '/images/Templates/kamrt/real-time.svg',
    value: 'Real time',
    title: 'Data-Driven Decisions',
  },
  {
    icon: '/images/Templates/kamrt/scalable.svg',
    value: 'Scalable',
    title: 'BI Framework Established',
  },
];

const achievements = [
  '90% faster reporting cycles enabling timely decisions',
  'Improved inventory management across all locations',
  'Enabled executives to make data-driven planning decisions',
  'Established scalable BI framework for retail operations',
];

const BusinessImpactSection = () => {
  return (
    <section className='relative w-full overflow-hidden'>
      {/* BACKGROUND IMAGE */}
      <div className='absolute inset-0 z-0 hidden md:block'>
        <Image
          src='/images/Templates/kamrt/business-impact.png'
          alt='Retail'
          fill
          priority
          className='object-cover'
        />
      </div>

      <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
        <div className='text-center'>
          <h2 className='text-[34px] md:text-[58px] leading-none font-semibold tracking-[-1px] text-[#171B24]'>
            Business Impact
          </h2>

          <p className='mt-5 text-[15px] md:text-[22px] leading-[1.6] text-[#5F6675]'>
            Transformative results that enabled data-driven retail operations
          </p>
        </div>

        <div className='mt-12 grid grid-cols-1 gap-5 md:grid-cols-4'>
          {impactCards.map((item, index) => (
            <div
              key={index}
              className='
                rounded-[20px]
                bg-white
                px-5
                md:px-6
                py-7
                text-center
              '
            >
              {/* ICON */}
              <div className='flex justify-center'>
                <div className='flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#E8FFF1]'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={22}
                    height={22}
                    className='h-[22px] w-[22px] object-contain'
                  />
                </div>
              </div>

              {/* VALUE */}
              <div className='mt-6 flex justify-center'>
                <div
                  className='
                  rounded-[12px]
                  bg-gradient-to-r
                  from-[#7ED742]
                  to-[#29BA5E]
                  px-7
                  py-2.5
                '
                >
                  <p className='text-sm md:text-xl leading-none font-semibold text-white'>
                    {item.value}
                  </p>
                </div>
              </div>

              {/* TITLE */}
              <p className='mt-5 text-[14px] md:text-[18px] leading-[1.5] font-medium text-[#3B3F47]'>
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* ================= ACHIEVEMENTS BOX ================= */}
        <div
          className='
            mx-auto
            mt-10
            max-w-4xl
            rounded-[24px]
            bg-white/75
            px-6
            md:px-12
            py-8
            md:py-10
            backdrop-blur-[2px]
            shadow-[0px_10px_35px_rgba(0,0,0,0.08)]
          '
        >
          {/* TITLE */}
          <h3 className='text-lg md:text-3xl leading-none font-semibold tracking-[-1px] text-[#171B24]'>
            Key Achievements
          </h3>

          {/* LIST */}
          <div className='mt-8 space-y-6'>
            {achievements.map((item, index) => (
              <div key={index} className='flex items-start gap-4'>
                {/* ICON */}
                <div className='mt-[3px]'>
                  <Image
                    src='/images/Templates/kamrt/tick.svg'
                    alt='Check'
                    width={18}
                    height={18}
                    className='h-[18px] w-[18px] object-contain'
                  />
                </div>

                {/* TEXT */}
                <p className='text-[15px] md:text-[20px] leading-[1.8] text-[#2B2F37]'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;
