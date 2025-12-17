'use client';

import Image from 'next/image';

// NEW CONTENT ACCORDING TO THE UI
const governanceContent = {
  title: 'Forge Business Triumph with Data Insights',
  subtitle:
    'Build a future-ready, scalable data foundation that adapts as your business grows—keeping your organization fast, agile, and insight-driven.',

  cards: [
    {
      id: 'left',
      title: 'Scalable Data Infrastructure',
      description:
        'Create a robust data backbone designed to manage increasing data volumes without slowing down performance.',
      icon: '/images/solutions/icon.png',
    },
    {
      id: 'center',
      image: '/images/solutions/Rectangle 29.png',
    },
    {
      id: 'right',
      title: 'Stay Responsive, Always',
      description:
        'Leverage flexible architectures that evolve with your business needs, ensuring quick decision-making and operational efficiency.',
      icon: '/images/solutions/icon.png',
    },
  ],

  background: '/images/solutions/Second section BG.jpg',
};

export default function SectionGwc() {
  return (
    <section className='relative w-full px-4 -mt-32'>
      <div className='relative w-full max-w-[calc(100%-2rem)] mx-auto rounded-[32px] overflow-hidden py-16 z-10'>
        {/* BACKGROUND */}
        <div className='absolute inset-0 -z-10'>
          <Image
            src={governanceContent.background}
            alt='Background'
            fill
            className='object-cover'
          />
        </div>

        <div className='max-w-7xl mx-auto px-6 text-center'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-4xl text-white'>{governanceContent.title}</h2>

          <p className='mt-4 text-purple-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed'>
            {governanceContent.subtitle}
          </p>

          {/* CARDS */}
          <div className='mt-20 -mb-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch'>
            {/* LEFT CARD */}
            <div className='bg-[#5B3B6E] backdrop-blur-md rounded-xl p-10 flex flex-col justify-end min-h-[340px] text-left'>
              <div className='mb-6'>
                <Image src={governanceContent.cards[0].icon} alt='Icon' width={26} height={26} />
              </div>

              <h3 className='text-[20px] font-medium text-white mb-4'>
                {governanceContent.cards[0].title}
              </h3>

              <p className='text-white/80 text-[14px] leading-relaxed'>
                {governanceContent.cards[0].description}
              </p>
            </div>

            {/* CENTER IMAGE CARD */}
            <div className='relative rounded-xl overflow-hidden min-h-[340px]'>
              <Image
                src={governanceContent.cards[1].image}
                alt='Governance Illustration'
                fill
                className='object-cover rounded-2xl'
                priority
              />
            </div>

            {/* RIGHT CARD */}
            <div className='bg-[#5B3B6E] backdrop-blur-md rounded-xl p-10 flex flex-col justify-end min-h-[340px] text-left'>
              <div className='mb-6'>
                <Image src={governanceContent.cards[2].icon} alt='Icon' width={26} height={26} />
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
