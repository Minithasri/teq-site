'use client';

import Image from 'next/image';

const governanceContent = {
  title: 'The GWC Approach to Data Governance Excellence',
  subtitle: 'Enhanced data fabric architecture empowers you to build robust data governance.',
  cards: [
    {
      id: 'left',
      title: 'Smarter Compliance Management',
      description:
        'Effortlessly navigate regulations with an audit-ready data fabric that ensures ethical, responsible, and transparent data handling.',
      icon: '/images/solutions/icon.png',
    },
    {
      id: 'center',
      image: '/images/solutions/Rectangle 29.png',
    },
    {
      id: 'right',
      title: 'Strengthened Customer Trust',
      description:
        'Enhance customer confidence by prioritizing data privacy and responsible usage through strong, secure governance practices.',
      icon: '/images/solutions/icon.png',
    },
  ],
  background: '/images/solutions/Second section BG.jpg',
};

export default function SectionGwc() {
  return (
    <section className='relative w-full px-4 py-20'>
      {/* BACKGROUND */}
      <div className='absolute inset-0 -z-10'>
        <Image
          src={governanceContent.background}
          alt='Background'
          fill
          className='object-cover  rounded-3xl'
        />
      </div>

      <div className='max-w-7xl mx-auto text-center'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-4xl font-semibold text-white'>{governanceContent.title}</h2>

        <p className='mt-3 text-purple-200 text-sm md:text-base max-w-2xl mx-auto'>
          {governanceContent.subtitle}
        </p>

        {/* MAIN CONTENT */}
        <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch'>
          {/* LEFT CARD */}
          <div className='bg-[#583A65] backdrop-blur-md rounded-3xl p-8 flex flex-col justify-center min-h-[280px]'>
            <div className='mb-6'>
              <Image
                src={governanceContent.cards[0].icon}
                alt='Icon'
                width={28}
                height={28}
                className='opacity-90'
              />
            </div>
            <h3 className='text-[20px] font-normal text-left  text-white mb-4'>
              {governanceContent.cards[0].title}
            </h3>
            <p className='text-white/90 text-[14px] text-left'>
              {governanceContent.cards[0].description}
            </p>
          </div>

          {/* CENTER IMAGE */}
          <div className='relative min-h-[280px] flex items-center justify-center'>
            <Image
              src={governanceContent.cards[1].image}
              alt='Governance Illustration'
              fill
              className='object-contain drop-shadow-2xl'
            />
          </div>

          {/* RIGHT CARD */}
          <div className='bg-[#583A65] backdrop-blur-md rounded-3xl p-8 flex flex-col justify-center min-h-[280px]'>
            <div className='mb-6'>
              <Image
                src={governanceContent.cards[2].icon}
                alt='Icon'
                width={28}
                height={28}
                className='opacity-90'
              />
            </div>
            <h3 className='text-[20px] font-normal text-left  text-white mb-4'>
              {governanceContent.cards[2].title}
            </h3>
            <p className='text-white/90 text-[14px] text-left'>
              {governanceContent.cards[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
