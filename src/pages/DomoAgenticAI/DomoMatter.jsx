'use client';

import Image from 'next/image';
import Link from 'next/link';

const DomoMatter = () => {
  const items = [
    {
      title: 'From Dashboards to Decisions',
      desc: 'Eliminate bottlenecks with instant, intelligent responses that keep your business moving at the speed of data and innovation.',
      icon: '/images/Lighting.svg',
    },
    {
      title: 'No Manual Delays',
      desc: 'Automate actions so teams never wait on repetitive operational steps.',
      icon: '/images/Clock.svg',
    },
    {
      title: 'Consistent, Rules-Based Execution',
      desc: 'Ensure every workflow follows policy perfectly, every time.',
      icon: '/images/Shield.svg',
    },
    {
      title: 'Always-On, Always-Adaptive',
      desc: 'Respond continuously to live data conditions with zero downtime.',
      icon: '/images/Mind.svg',
    },
  ];

  return (
    <div className='w-full py-10'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-[30%_70%] gap-10 items-start'>
          {/* LEFT COLUMN */}
          {/* LEFT COLUMN */}
          <div className='flex flex-col items-start h-full justify-between py-4'>
            <div className='space-y-6'>
              <h2 className='font-medium text-[32px] sm:text-[40px] leading-tight'>
                <span className='text-[#404040]'>Why </span>
                <span className='bg-gradient-to-r from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent font-medium'>
                  it matters
                </span>
                <span className='text-[#404040]'> for your Business</span>
              </h2>

              <div className='space-y-2'>
                <p className='text-[#737373] text-[16px] font-medium leading-loose max-w-sm'>
                  We build reliable, scalable AI solutions engineered for high performance and
                  adaptability, designed to integrate seamlessly into real business environments and
                  deliver meaningful, measurable real world impact at scale.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className='mt-12'>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white px-8 py-3 rounded-full font-medium text-[15px] hover:scale-105 transition-transform shadow-lg'
              >
                Get in touch
                <Image src='/images/AboutUs/arrowicon_1.svg' alt='Arrow' width={16} height={16} />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className='space-y-6 text-[#404040] w-full'>
            {items.map((item, index) => (
              <div
                key={index}
                className='flex items-center gap-3 sm:gap-4 group flex-nowrap w-full'
              >
                {/* ICON */}
                <div
                  className='rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ease-in-out group-hover:scale-110 w-[80px] h-[80px] sm:w-[109px] sm:h-[109px]'
                  style={{
                    backgroundColor: '#EDE4F5',
                  }}
                >
                  <img
                    src={item.icon}
                    alt=''
                    className='w-[32px] h-[32px] sm:w-[46px] sm:h-[46px] transition-all duration-500 ease-in-out group-hover:scale-110'
                  />
                </div>

                {/* PILL STACK */}
                <div className='relative overflow-hidden w-full max-w-[620px] h-[80px] sm:h-[109px]'>
                  {/* TITLE PILL */}
                  <div
                    className='
                      absolute inset-0 flex items-center px-4 sm:px-6
                      transition-all duration-1000 ease-in-out
                      group-hover:-translate-y-full
                      text-[14px] sm:text-[20px] font-semibold
                    '
                    style={{
                      borderRadius: '70px',
                      border: '1px solid transparent',
                      background:
                        'linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(to right, #C4A3E5, #E5E5E5) border-box',
                    }}
                  >
                    {item.title}
                  </div>

                  {/* DESC PILL */}
                  <div
                    className='
                      absolute inset-0 flex items-center px-4 sm:px-6
                      translate-y-full
                      transition-all duration-1000 ease-in-out
                      group-hover:translate-y-0
                      text-[12px] sm:text-[14px] font-medium
                      leading-tight sm:leading-[22px]
                    '
                    style={{
                      borderRadius: '70px',
                      border: '1px solid transparent',
                      background:
                        'linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(to right, #C4A3E5, #E5E5E5) border-box',
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomoMatter;
