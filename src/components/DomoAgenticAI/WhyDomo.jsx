'use client';

import Image from 'next/image';

const cards = [
  {
    id: 1,
    title: 'No more dashboards without action',
    desc: 'Transform static reporting into intelligent execution.',
    bg: '/images/DomoPage/bg1.webp',
  },
  {
    id: 2,
    title: 'No more delays in decision-making',
    desc: 'Automate routine tasks and focus on strategic initiatives.',
    bg: '/images/DomoPage/bg2.webp',
  },
  {
    id: 3,
    title: 'DOMO Agentic AI',
    desc: '',
    bg: '/images/DomoPage/bg3.webp',
    center: true,
  },
  {
    id: 4,
    title: 'No more repetitive manual work',
    desc: 'Automate routine tasks and focus on strategic initiatives.',
    bg: '/images/DomoPage/bg4.webp',
  },
  {
    id: 5,
    title: 'Deliver speed, scale, and intelligence',
    desc: 'Empower every function in your enterprise with AI.',
    bg: '/images/DomoPage/bg5.png',
  },
];

export default function WhyDomo() {
  return (
    <section className='w-full bg-white py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* ---------- HEADER ---------- */}
        <div className='text-center mb-16'>
          <h2 className='text-[32px] font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#6F2B8B] to-[#BC6DD3]'>
            Why DOMO AI Agents?
          </h2>

          <p className='text-[16px] max-w-2xl mx-auto leading-relaxed'>
            Transform your enterprise operations with intelligent automation that adapts, learns,
            and scales with your business needs.
          </p>
        </div>

        {/* ---------- GRID LAYOUT ---------- */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* COLUMN 1 (Left) */}
          <div className='flex flex-col gap-6'>
            <CardItem card={cards[0]} height='h-[300px]' />
            <CardItem card={cards[1]} height='h-[300px]' />
          </div>

          {/* COLUMN 2 (Center) */}
          <div className='h-full'>
            <div className='relative w-full h-full min-h-[300px] lg:min-h-[624px] rounded-[32px] overflow-hidden text-white shadow-lg'>
              <Image src={cards[2].bg} alt={cards[2].title} fill className='object-cover' />
              {/* Overlay */}
              <div className='absolute inset-0 bg-black/20' />

              {/* Center Content */}
              <div className='relative z-10 w-full h-full flex flex-col items-center justify-between py-12 px-6'>
                <h3 className='text-3xl font-bold text-center'>{cards[2].title}</h3>

                {/* Robot Icon */}
                <div className='relative w-28 h-28 md:w-36 md:h-36'>
                  <Image
                    src='/images/DomoPage/bg3_icon.svg'
                    alt='Agent Icon'
                    fill
                    className='object-contain'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 3 (Right) */}
          <div className='flex flex-col gap-6'>
            <CardItem card={cards[3]} height='h-[300px]' />
            <CardItem card={cards[4]} height='h-[300px]' />
          </div>
        </div>
      </div>
    </section>
  );
}

function CardItem({ card, height }) {
  return (
    <div
      className={`relative w-full ${height} rounded-[32px] overflow-hidden text-white shadow-lg group`}
    >
      <Image
        src={card.bg}
        alt={card.title}
        fill
        className='object-cover transition-transform duration-500 group-hover:scale-105'
      />
      {/* Light Overlay for text readability if needed */}
      <div className='absolute inset-0 bg-black/10' />

      <div className='relative z-10 h-full flex flex-col items-center justify-center text-center px-8 p-6'>
        <h3 className='text-2xl font-bold mb-3'>{card.title}</h3>
        <p className='text-sm md:text-base font-medium opacity-90 leading-relaxed'>{card.desc}</p>
      </div>
    </div>
  );
}
