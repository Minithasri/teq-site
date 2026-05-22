'use client';

import Image from 'next/image';

const impactCards = [
  {
    icon: '/images/Templates/style-union-2/trend-up.svg',
    value: '15–25%',
    description: 'Improvement in product sell-through rates',
  },
  {
    icon: '/images/Templates/style-union-2/reduction.svg',
    value: '20–30%',
    description: 'Reduction in aging and excess inventory',
  },
  {
    icon: '/images/Templates/style-union-2/bolt.svg',
    value: '~50%',
    description: 'Faster replenishment decision cycles',
  },
  {
    icon: '/images/Templates/style-union-2/cart.svg',
    value: 'Improved',
    description: 'On-shelf availability and reduced stockouts',
  },
  {
    icon: '/images/Templates/style-union-2/timer.svg',
    value: 'Enhanced',
    description: 'Store productivity through streamlined workflows',
  },
];

const BusinessImpactSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 md:px-6 pb-6 pt-10'>
        {/* HEADING */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#262626]'>
          Business Impact
        </h2>

        {/* TOP ROW */}
        <div className='mt-8 grid grid-cols-1 gap-5 md:grid-cols-3'>
          {impactCards.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className='
                rounded-[22px]
                border-t-[4px]
                border-[#39B42A]
                bg-white
                px-6
                py-8
                text-center
                shadow-lg
              '
            >
              {/* ICON */}
              <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E9F5E7]'>
                <Image
                  src={item.icon}
                  alt={item.value}
                  width={24}
                  height={24}
                  className='h-6 w-6 object-contain'
                />
              </div>

              {/* VALUE */}
              <h3 className='mt-6 text-[34px] md:text-[46px] leading-none font-light tracking-[-1px] text-[#39B42A]'>
                {item.value}
              </h3>

              {/* DESCRIPTION */}
              <p className='mt-4 text-[11px] md:text-[12px] leading-[1.7] text-[#7B8597]'>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW */}
        <div className='mt-5 flex flex-col mb-10 items-center gap-5 md:flex-row md:justify-center'>
          {impactCards.slice(3, 5).map((item, index) => (
            <div
              key={index}
              className='
                rounded-[22px]
                border-t-[4px]
                border-[#39B42A]
                bg-white
                px-6
                py-8
                text-center
                shadow-lg
              '
            >
              {/* ICON */}
              <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E9F5E7]'>
                <Image
                  src={item.icon}
                  alt={item.value}
                  width={24}
                  height={24}
                  className='h-6 w-6 object-contain'
                />
              </div>

              {/* VALUE */}
              <h3 className='mt-6 text-[34px] md:text-[46px] leading-none font-light tracking-[-1px] text-[#39B42A]'>
                {item.value}
              </h3>

              {/* DESCRIPTION */}
              <p className='mt-4 text-[11px] md:text-[12px] leading-[1.7] text-[#7B8597]'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;
