'use client';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';

const Cards = () => {
  // Generate array of 25 items for images img21 to img45
  const cardsData = Array.from({ length: 25 }, (_, i) => ({
    id: i + 21,
    image: `/images/Casestudy/img${i + 21}.png`,
    title: 'Data Analytics Redefining Dining',
    description:
      'Unlock the power of your data with our end-to-end analytics and AI solutions to optimize operations and decision making.',
    link: '/case-study-details', // Placeholder link
  }));

  return (
    <section className='relative py-16 px-4 md:px-12'>
      {/* Search Bar - Overlapping from hero section */}
      <div className='absolute top-0 left-0 right-0 px-4 md:px-20 -mt-8 z-50'>
        <div className='max-w-2xl mx-auto relative'>
          <FiSearch size={20} className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
          <input
            type='text'
            placeholder='Search case study'
            className='w-full pl-12 pr-4 py-4 rounded-full bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg'
          />
        </div>
      </div>

      <div className='max-w-7xl mx-auto mt-16'>
        <h2
          className='text-[32px] font-medium text-center mb-12 bg-clip-text text-transparent'
          style={{
            background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Explore Our Case Studies
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {cardsData.map(card => (
            <div
              key={card.id}
              className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col'
              style={{ width: '400px', height: '400px' }}
            >
              {/* Image Container with Padding */}
              <div className='p-4'>
                <div
                  className='relative overflow-hidden rounded-xl'
                  style={{ width: '350px', height: '190px' }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className='px-6 pb-6 flex flex-col flex-grow'>
                <h3 className='text-[18px] font-semibold text-[#404040] mb-3'>{card.title}</h3>
                <p className='text-[#404040] text-[14px] font-normal mb-2 flex-grow leading-relaxed'>
                  {card.description}
                </p>

                <Link
                  href={card.link}
                  className='inline-flex items-center font-semibold text-[16px] hover:underline mt-auto bg-clip-text text-transparent'
                  style={{
                    background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Explore case study
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='url(#gradient)'
                    viewBox='0 0 24 24'
                  >
                    <defs>
                      <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
                        <stop offset='0%' stopColor='#7030B1' />
                        <stop offset='100%' stopColor='#B56DD3' />
                      </linearGradient>
                    </defs>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
