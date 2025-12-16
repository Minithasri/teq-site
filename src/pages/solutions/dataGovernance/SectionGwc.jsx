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
    <section className='relative w-full mx-4 px-4 py-24'>
      {/* BACKGROUND */}
      <div className='absolute inset-0 -z-10'>
        <Image
          src={governanceContent.background}
          alt='Background'
          fill
          className='object-cover rounded-[32px]'
        />
      </div>

      <div className='max-w-7xl mx-auto text-center'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-4xl text-white'>{governanceContent.title}</h2>

        <p className='mt-4 text-purple-200 text-sm md:text-base max-w-2xl mx-auto leading-relaxed'>
          {governanceContent.subtitle}
        </p>

        {/* CARDS */}
        <div className='mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch'>
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
              className='object-cover'
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
    </section>
  );
}
