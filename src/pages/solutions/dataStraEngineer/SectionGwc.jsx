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
    <section className='relative w-full px-4 py-16'>
      {/* BACKGROUND */}
      <div className='absolute inset-0 -z-10'>
        <Image
          src={governanceContent.background}
          alt='Background'
          fill
          className='object-cover rounded-3xl'
        />
      </div>

      <div className='max-w-7xl mx-auto text-center'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-white'>
          {governanceContent.title}
        </h2>

        {/* SUBTITLE */}
        <p className='mt-4 text-sm md:text-base text-purple-200 max-w-2xl mx-auto leading-relaxed'>
          {governanceContent.subtitle}
        </p>

        {/* CARDS GRID */}
        <div className='mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
          {/* LEFT CARD */}
          <div className='bg-purple-800/60 backdrop-blur-md rounded-2xl p-8 text-left h-full'>
            <div className='flex items-center gap-3 mb-4'>
              <Image src={governanceContent.cards[0].icon} alt='Icon' width={24} height={24} />
            </div>

            <h3 className='text-lg font-semibold text-white'>{governanceContent.cards[0].title}</h3>

            <p className='mt-3 text-sm text-purple-200 leading-relaxed'>
              {governanceContent.cards[0].description}
            </p>
          </div>

          {/* CENTER IMAGE CARD */}
          <div className='relative h-[260px] md:h-[320px] lg:h-[360px]'>
            <Image
              src={governanceContent.cards[1].image}
              alt='Center Illustration'
              fill
              className='object-contain rounded-2xl'
              priority
            />
          </div>

          {/* RIGHT CARD */}
          <div className='bg-purple-800/60 backdrop-blur-md rounded-2xl p-8 text-left h-full'>
            <div className='flex items-center gap-3 mb-4'>
              <Image src={governanceContent.cards[2].icon} alt='Icon' width={24} height={24} />
            </div>

            <h3 className='text-lg font-semibold text-white'>{governanceContent.cards[2].title}</h3>

            <p className='mt-3 text-sm text-purple-200 leading-relaxed'>
              {governanceContent.cards[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
