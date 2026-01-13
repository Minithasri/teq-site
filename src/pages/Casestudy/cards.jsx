'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowRight, FiSearch } from 'react-icons/fi';

const Cards = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // New template-based case studies (add more as you create them)
  const caseStudiesData = [
    {
      slug: 'real-time-production',
      title: 'Real-Time Production Monitoring with IoT',
      description:
        'How Alubee Die Casters achieved 10-15% productivity boost and 90% reduction in manual effort through connected factory automation.',
      image: '/images/Templates/template1/casebg1.png',
    },
    {
      slug: 'maximizing-yield',
      title: 'Maximizing Yield with Intelligent Production Analytics',
      description:
        'Driving packaging efficiency through real-time visibility and predictive insights.',
      image: '/images/Templates/template1/hero1.png',
    },
    // Add more templates here as you create them
    // {
    //   slug: 'your-next-template',
    //   title: 'Your Next Case Study Title',
    //   description: 'Description of your case study',
    //   image: '/images/Templates/template2/hero.png',
    // },
  ];

  const cardsData = caseStudiesData.map((study, i) => {
    return {
      id: i + 1,
      image: study.image,
      title: study.title,
      description: study.description,
      slug: study.slug,
      link: `/Casestudy/${study.slug}`,
    };
  });

  // Filter cards based on search query
  const filteredCards = cardsData.filter(card => {
    const query = searchQuery.toLowerCase();
    return (
      card.title.toLowerCase().includes(query) || card.description.toLowerCase().includes(query)
    );
  });

  return (
    <section className='relative py-16 px-4 md:px-12'>
      {/* Search Bar - Overlapping from hero section */}
      <div className='absolute top-0 left-0 right-0 px-4 md:px-20 -mt-8 z-50'>
        <div className='max-w-2xl mx-auto relative'>
          <FiSearch size={20} className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
          <input
            type='text'
            placeholder='Search case study'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
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
          Explore our case studies
        </h2>

        {filteredCards.length === 0 ? (
          <div className='col-span-full text-center py-12'>
            <p className='text-gray-500 text-lg'>No case studies found matching your search.</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
            {filteredCards.map(card => (
              <Link
                key={card.id}
                href={card.link}
                className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col w-full max-w-[400px] cursor-pointer'
                style={{ minHeight: '380px' }}
              >
                {/* Image Container with Padding */}
                <div className='p-4'>
                  <div
                    className='relative overflow-hidden rounded-xl w-full'
                    style={{ height: '190px' }}
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
                  <h3 className='text-[18px] font-semibold text-[#404040] mb-3 line-clamp-1 overflow-hidden'>
                    {card.title}
                  </h3>
                  <p className='text-[#404040] text-[14px] font-normal mb-2 leading-relaxed line-clamp-2 overflow-hidden'>
                    {card.description}
                  </p>

                  <div className='inline-flex items-center font-semibold text-[16px] mt-auto group'>
                    <span
                      className='bg-clip-text text-transparent'
                      style={{
                        background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Explore case study
                    </span>
                    <FiArrowRight
                      className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1'
                      style={{ color: '#7030B1' }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Cards;
