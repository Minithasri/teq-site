'use client';

import Image from 'next/image';

const capabilities = [
  {
    icon: '/images/Templates/style-union-2/mobile.svg',
    title: 'Mobile-First Retail Execution',
    description:
      'A responsive PWA designed for store managers and field teams, delivering critical insights and actions directly on their mobile devices anytime, anywhere.',
  },
  {
    icon: '/images/Templates/style-union-2/inventory.svg',
    title: 'Inventory Intelligence',
    description:
      'Real-time identification of fast-moving and slow-moving products, enabling data-backed decisions on stock management and assortment optimization.',
  },
  {
    icon: '/images/Templates/style-union-2/actionable.svg',
    title: 'Actionable Workflows',
    description:
      'Structured processes for pull-back requests, replenishment planning, and indent creation eliminating manual coordination and reducing turnaround times.',
  },
  {
    icon: '/images/Templates/style-union-2/cross.svg',
    title: 'Cross-Team Collaboration',
    description:
      'A unified platform connecting store operations, merchandising, and warehouse teams for seamless communication and aligned execution.',
  },
  {
    icon: '/images/Templates/style-union-2/closed.svg',
    title: 'Closed-Loop Tracking',
    description:
      'End-to-end visibility into every action from initiation to completion ensuring accountability and measurable execution outcomes across all locations.',
  },
];

const CapabilitiesSection = () => {
  return (
    <section className='relative w-full overflow-visible bg-[#F7F7F7]'>
      {/* RIGHT IMAGE */}
      <div className='absolute right-0 -bottom-2 hidden md:block z-0'>
        <Image
          src='/images/Templates/style-union-2/key-capabilities.png'
          alt='Retail'
          width={320}
          height={360}
          priority
          className='h-[320px] w-[460px] object-cover rounded-2xl'
        />
      </div>

      {/* CONTENT */}
      <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
        {/* HEADING */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#2E45F5]'>
          Key Capabilities Delivered
        </h2>

        {/* GRID */}
        <div className='mt-10'>
          {/* FIRST ROW */}
          <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
            {capabilities.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className='
                  min-h-[230px]
                  rounded-[18px]
                  border-2
                  border-[#2E45F5]
                  bg-white
                  px-5
                  md:px-6
                  py-5
                  md:py-6
                '
              >
                {/* ICON + TITLE */}
                <div className='flex items-start gap-4'>
                  {/* ICON */}
                  <div className='flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[12px] bg-[#EAF4F4]'>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={20}
                      height={20}
                      className='h-5 w-5 object-contain'
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className='max-w-[220px] text-[18px] md:text-[20px] leading-[1.4] font-medium text-[#2B3140]'>
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className='mt-7 text-[14px] md:text-[15px] leading-[1.9] text-[#7B8597]'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* SECOND ROW */}
          <div className='relative mt-5'>
            {/* GRID */}
            <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
              {/* LEFT CARDS */}
              <div className='md:col-span-2 grid grid-cols-1 gap-5 md:grid-cols-2'>
                {capabilities.slice(3, 5).map((item, index) => (
                  <div
                    key={index}
                    className='
                      min-h-[230px]
                      rounded-[18px]
                      border-2
                      border-[#2E45F5]
                      bg-white
                      px-5
                      md:px-6
                      py-5
                      md:py-6
                    '
                  >
                    {/* ICON + TITLE */}
                    <div className='flex items-start gap-4'>
                      {/* ICON */}
                      <div className='flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[12px] bg-[#EAF4F4]'>
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={20}
                          height={20}
                          className='h-5 w-5 object-contain'
                        />
                      </div>

                      {/* TITLE */}
                      <h3 className='max-w-[220px] text-[18px] md:text-[20px] leading-[1.4] font-medium text-[#2B3140]'>
                        {item.title}
                      </h3>
                    </div>

                    {/* DESCRIPTION */}
                    <p className='mt-7 text-[14px] md:text-[15px] leading-[1.9] text-[#7B8597]'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* EMPTY SPACE */}
              <div className='hidden md:block' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
