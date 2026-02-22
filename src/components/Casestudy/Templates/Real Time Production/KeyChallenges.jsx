'use client';

import Image from 'next/image';

export default function KeyChallenges() {
  const challenges = [
    {
      icon: '/images/Templates/template1/icon11.svg',
      title: 'Manual Data Capture',
      description: 'Error-prone and delayed reporting process',
    },
    {
      icon: '/images/Templates/template1/icon22.svg',
      title: 'Inconsistent Target Tracking',
      description: 'Deviations spotted only during review meetings',
    },
    {
      icon: '/images/Templates/template1/icon33.svg',
      title: 'No Live Dashboards',
      description: 'Production monitored post-shift, issues found too late',
    },
    {
      icon: '/images/Templates/template1/icon44.svg',
      title: 'No Breakdown Warnings',
      description: 'Machines failed before detection, causing unexpected downtime',
    },
    {
      icon: '/images/Templates/template1/icon55.svg',
      title: 'Operator Accountability Gaps',
      description: 'No real-time performance checks or monitoring',
    },
  ];

  return (
    <section
      className='relative w-full py-20 overflow-hidden'
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F4C0C069 50%, #F9FAFB 100%)',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='mb-12'>
          <h2 className='text-[32px] md:text-[36px] font-bold text-[#1D2530] mb-4'>
            Key Challenges
          </h2>
          <p className='text-[16px] md:text-[18px] text-[#000000] max-w-7xl leading-relaxed'>
            Traditional manufacturing processes created significant operational blind spots that
            prevented optimal production efficiency and timely decision-making.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20'>
          {challenges.slice(0, 4).map((challenge, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4'
            >
              {/* Icon */}
              <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center'>
                <Image
                  src={challenge.icon}
                  alt={challenge.title}
                  width={24}
                  height={24}
                  className='w-6 h-6'
                />
              </div>

              {/* Content */}
              <div className='flex-1'>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>{challenge.title}</h3>
                <p className='text-sm text-gray-600'>{challenge.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row: 5th Card + Image */}
        <div className='mt-6 flex justify-center relative z-20'>
          <div className='relative w-full md:w-[calc(50%-12px)]'>
            {/* 5th Card */}
            <div className='bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-4'>
              <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center'>
                <Image
                  src={challenges[4].icon}
                  alt={challenges[4].title}
                  width={24}
                  height={24}
                  className='w-6 h-6'
                />
              </div>
              <div className='flex-1'>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>{challenges[4].title}</h3>
                <p className='text-sm text-gray-600'>{challenges[4].description}</p>
              </div>
            </div>

            {/* Domino Image - Hidden on mobile/tablet to avoid overlap */}
            <div className='hidden xl:block absolute left-full -bottom-20 w-64 h-64'>
              <Image
                src='/images/Templates/template1/bike1.svg'
                alt='Domino Effect'
                fill
                className='object-contain object-bottom'
              />
            </div>
          </div>

          {/* Mobile Image - Hidden to avoid clutter */}
          <div className='hidden mt-6 relative w-64 h-32 mx-auto'>
            <Image
              src='/images/Templates/template1/bike1.svg'
              alt='Domino Effect'
              fill
              className='object-contain'
            />
          </div>
        </div>
      </div>

      {/* Background Bike Image */}
      <div className='absolute left-[-2%] bottom-0 w-[110%] h-full pointer-events-none z-0 hidden lg:block'>
        <div className='relative w-full h-full'>
          <Image
            src='/images/Templates/template1/bike.svg'
            alt='Manufacturing Background'
            fill
            className='object-contain object-left-bottom opacity-30'
            style={{ objectPosition: 'left bottom' }}
          />
        </div>
      </div>
    </section>
  );
}
