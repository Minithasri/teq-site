'use client';

import Image from 'next/image';

const governanceContent = {
  title: 'Turn data into your most valuable asset',
  subtitle:
    'Our BI and analytics solutions are crafted to match the unique needs of your business so you get insights that directly support your goals and challenges.',
  cards: [
    {
      id: 'left',
      title: 'Custom Reporting',
      description:
        'Create reports that reflect your exact business questions so every metric brings clarity and direction.',
      icon: '/images/solutions/icon.png',
    },
    {
      id: 'center',
      image: '/images/solutions/section3.webp',
    },
    {
      id: 'right',
      title: 'Industry Focused Analytics',
      description:
        'Use analytics designed around your sector so you get relevant insights that drive smarter and faster decision making.',
      icon: '/images/solutions/icon.png',
    },
  ],
  background: '/images/solutions/Second section BG.webp',
};

export default function SectionGwc() {
  return (
    <section className='relative w-full px-4 -mt-32'>
      <div className='relative w-full max-w-[calc(100%-2rem)] mx-auto rounded-[32px] overflow-hidden py-16 z-10'>
        {/* BACKGROUND */}
        <div className='absolute inset-0 -z-10'>
          <Image
            src={governanceContent.background}
            alt=''
            fill
            className='object-cover'
            aria-hidden
          />
        </div>

        <div className='max-w-7xl mx-auto px-10 lg:px-16 text-center m-4'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-3xl text-white'>{governanceContent.title}</h2>

          <p className='mt-6 text-purple-200 text-sm md:text-sm max-w-2xl mx-auto leading-relaxed'>
            {governanceContent.subtitle}
          </p>

          {/* CARDS */}
          <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch'>
            {/* LEFT CARD */}
            <div
              className='bg-[#5B3B6E] backdrop-blur-md rounded-xl p-10 flex flex-col justify-end min-h-[340px] text-left'
              style={{
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div className='mb-4'>
                <Image src={governanceContent.cards[0].icon} alt='' width={26} height={26} />
              </div>

              <h3 className='text-[20px] font-medium text-white mb-4'>
                {governanceContent.cards[0].title}
              </h3>

              <p className='text-white/80 text-[14px] leading-relaxed'>
                {governanceContent.cards[0].description}
              </p>
            </div>

            {/* CENTER IMAGE CARD */}
            <div
              className='relative min-h-[340px] rounded-xl overflow-hidden'
              style={{
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
              }}
            >
              <Image
                src={governanceContent.cards[1].image}
                alt='Governance illustration'
                fill
                className='object-cover'
                priority
              />
            </div>

            {/* RIGHT CARD */}
            <div
              className='bg-[#5B3B6E] backdrop-blur-md rounded-xl p-10 flex flex-col justify-end min-h-[340px] text-left'
              style={{
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div className='mb-4'>
                <Image src={governanceContent.cards[2].icon} alt='' width={26} height={26} />
              </div>

              <h3 className='text-[20px] font-medium text-white mb-4'>
                {governanceContent.cards[2].title}
              </h3>

              <p className='text-white/80 text-[14px] leading-relaxed'>
                {governanceContent.cards[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
