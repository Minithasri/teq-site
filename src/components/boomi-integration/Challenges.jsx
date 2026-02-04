'use client';

import Image from 'next/image';

const challenges = [
  'Disconnected systems make decisions slower',
  'Manual processes consuming resources',
  'Data inconsistencies across platforms',
  'Integration bottlenecks blocking scale',
  'Complex migration from legacy to cloud',
  'Limited visibility hindering real time insights',
];

const Challenges = () => {
  return (
    <section
      className='w-full py-12 md:py-16 pb-16 md:pb-24 relative overflow-hidden'
      style={{
        background: `linear-gradient(259deg, rgba(229, 170, 102, 0.30) -13.56%, rgba(255, 165, 129, 0.30) -13.56%, rgba(221, 161, 108, 0.30) 18.23%, rgba(230, 242, 246, 0.30) 53.64%, rgba(202, 185, 246, 0.30) 91.85%, rgba(112, 48, 177, 0.30) 119.62%), #F9EAE1`,
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Title Section */}
        <div className='-mb-44 max-w-3xl'>
          <div className='flex items-center gap-2 mb-4'>
            <Image
              src='/images/partners/boomi/Spark.svg'
              alt='Spark'
              width={24}
              height={24}
              className='w-8 h-8'
            />
          </div>
          <h2 className='text-[24px] md:text-[32px] font-medium text-[#5C2B8F] mb-6 leading-tight'>
            Challenges We Solve
          </h2>
          <p className='text-[#404040] text-[16px] max-w-lg leading-relaxed line-clamp-3'>
            Overcoming data silos, legacy complexity, and manual processes to enable real time
            insights, seamless integration, and faster decision making.
          </p>
        </div>

        {/* Waves Background */}
        <div
          className='absolute -bottom-32 left-0 w-full h-[60%] pointer-events-none'
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          }}
        >
          <Image src='/images/waves.svg' alt='Waves' fill className='object-cover opacity-80' />
        </div>

        {/* Challenges Steps */}
        <div className='relative h-[600px] w-full hidden lg:block mt-10'>
          {challenges.map((challenge, index) => {
            // Calculate position for visual staircase effect
            // Adjusted positions to prevent touching and vary heights
            const leftPos = `${index * 16 + 2}%`; // Increased spacing
            const bottomPos = `${index * 12 + 25}%`; // Increased vertical step to separate cards

            // Custom heights for each line to match the wave visual
            const lineHeights = ['160px', '220px', '100px', '200px', '180px', '260px'];

            return (
              <div
                key={index}
                className='absolute flex flex-col items-center w-[160px]'
                style={{ left: leftPos, bottom: bottomPos }}
              >
                <div
                  className='relative bg-white p-5 rounded-xl shadow-sm w-full text-center z-10 border-2'
                  style={{
                    background:
                      'linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #F97316, #7030B1) border-box',
                    border: '2px solid transparent',
                  }}
                >
                  <p className='text-[#404040] font-medium text-sm leading-snug'>{challenge}</p>
                </div>
                {/* Connecting Line */}
                <div
                  className='w-[2px] absolute top-full left-1/2 -translate-x-1/2 -z-10'
                  style={{
                    height: lineHeights[index],
                    background: 'linear-gradient(to bottom, #F97316, #FFFFFF00)',
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Mobile View - Simple Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden'>
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-xl shadow-sm text-center border-2 border-transparent'
              style={{
                background:
                  'linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #F97316, #7030B1) border-box',
              }}
            >
              <p className='text-[#404040] font-medium'>{challenge}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
