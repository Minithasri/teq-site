'use client';
import React from 'react';
import Link from 'next/link';

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
    <section className='py-16 px-4 md:px-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-12 text-[#9333EA]'>
          Explore Our Case Studies
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {cardsData.map(card => (
            <div
              key={card.id}
              className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col'
            >
              {/* Image Container */}
              <div className='relative h-48 overflow-hidden'>
                <img
                  src={card.image}
                  alt={card.title}
                  className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                />
              </div>

              {/* Content Container */}
              <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-lg font-bold text-gray-900 mb-3'>{card.title}</h3>
                <p className='text-gray-600 text-sm mb-6 flex-grow leading-relaxed'>
                  {card.description}
                </p>

                <Link
                  href={card.link}
                  className='inline-flex items-center text-[#9333EA] font-semibold text-sm hover:underline mt-auto'
                >
                  Explore case study
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
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
