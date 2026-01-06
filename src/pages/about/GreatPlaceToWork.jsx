'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function GreatPlaceToWork() {
  const cards = [
    {
      image: '/images/AboutUs/section41.png',
      title: 'People First Culture',
      description:
        'We put people at the heart of everything we do. By valuing every team member and encouraging collaboration and continuous learning, we build trust, engagement, and long-term commitment.',
    },
    {
      image: '/images/AboutUs/section42.png',
      title: 'Inclusivity',
      description:
        'We embrace diversity and respect different perspectives. A culture of inclusion helps us foster creativity, strengthen collaboration, and drive meaningful innovation together.',
    },
    {
      image: '/images/AboutUs/section43.png',
      title: 'Innovation',
      description:
        'We encourage creative thinking and bold ideas. Our teams are empowered to explore new approaches and continuously improve our products and services.',
    },
    {
      image: '/images/AboutUs/section44.png',
      title: 'Growth & Development',
      description:
        'We invest in our people through training, mentorship, and career advancement opportunities. Your growth is our priority, and we support you every step of the way.',
    },
  ];

  return (
    <section className='relative w-full py-16 lg:py-24 bg-gradient-to-r from-pink-100 via-purple-50 to-orange-100 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <header className='flex items-center mb-16 gap-2'>
          {/* Left Icon (decorative) */}
          <div className='w-12 h-12 rounded-xl bg-white shadow flex items-center justify-center shrink-0'>
            <Image src='/images/Spark.svg' alt='' aria-hidden width={25} height={25} />
          </div>

          {/* Connector */}
          <div
            aria-hidden
            className='flex-1 h-[2px] bg-[linear-gradient(to_right,#E5E7EB_50%,rgba(0,0,0,0)_10%)] bg-[length:12px_2px] bg-repeat-x'
          />

          {/* CTA */}
          <Link
            href='/contact'
            className='px-8 py-2 rounded-full border font-medium hover:bg-purple-50 transition shrink-0 flex items-center gap-2'
            style={{ borderColor: '#6F2B8B', color: '#6F2B8B' }}
          >
            Talk to Our Experts
            <FiArrowRight className='w-4 h-4' aria-hidden />
          </Link>
        </header>

        {/* Main Content */}
        <div className='mb-16'>
          {/* Heading and Description - Aligned Horizontally */}
          <div className='flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-12'>
            {/* Main Heading */}
            <h2 className='text-[32px] lg:text-[40px] font-bold shrink-0 max-w-xl'>
              What makes GWC Data.AI a great place to work?
            </h2>

            {/* Description */}
            <p className='text-gray-600 text-[15px] max-w-lg leading-relaxed text-left'>
              Our certified experts analyze and optimize your GCP environment to reduce costs,
              improve efficiency, and ensure reliable cloud operations so you can focus on your
              business goals.
            </p>
          </div>

          {/* Cards Row */}
          <div className='relative '>
            {/* Great Place to Work Card with Gradient Border */}
            <div
              className='rounded-3xl p-[2px]'
              style={{
                background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 10%)',
              }}
            >
              <div className='bg-white rounded-3xl p-8 relative overflow-visible'>
                <h3
                  className='text-2xl font-bold mb-4 bg-clip-text text-transparent'
                  style={{
                    background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Great place to work - 2024
                </h3>
                <p className='text-gray-600 text-sm mb-6 max-w-md'>
                  Our Great Place to Work® certification highlights our dedication to nurturing top
                  talent.
                </p>
                <button className='flex items-center gap-2 text-[#F97316] font-semibold text-sm hover:gap-3 transition-all'>
                  Start your career here
                  <Image
                    src='/images/AboutUs/arrow_forward.svg'
                    alt='Arrow'
                    width={16}
                    height={16}
                    style={{ filter: 'brightness(0) saturate(100%) hue-rotate(20deg)' }}
                  />
                </button>

                {/* Overlapping Right Image */}
                <div className='absolute right-16 top-1/2 -translate-y-1/2 w-[380px] h-[220px] pointer-events-none z-10'>
                  <Image
                    src='/images/AboutUs/section4bg.svg'
                    alt=''
                    fill
                    className='object-contain opacity-100'
                  />
                </div>

                {/* Certification Badge */}
                <div className='absolute right-36 top-1/2 -translate-y-1/2 w-32 h-32 z-20'>
                  <Image
                    src='/images/AboutUs/greatplacelogo.png'
                    alt='Great Place to Work Certified'
                    width={128}
                    height={128}
                    className='object-contain'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Carousel */}
        <Carousel items={cards} />
      </div>
    </section>
  );
}

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < items.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // loop back
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(items.length - 3); // loop to end
    }
  };

  return (
    <div className='space-y-8 mt-16 '>
      <div className='overflow-hidden pb-12'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {items.map((card, index) => (
            <div key={index} className='w-full md:w-1/3 flex-shrink-0 px-3'>
              <div
                className='bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full'
                style={{ minHeight: '440px' }}
              >
                {/* Card Image */}
                <div className='relative w-full h-[230px]'>
                  <Image src={card.image} alt={card.title} fill className='object-cover' />
                </div>

                {/* Card Content */}
                <div className='p-6'>
                  <h4 className='text-[#F97316] font-bold text-lg mb-3'>{card.title}</h4>
                  <p className='text-gray-600 text-sm leading-relaxed'>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className='flex justify-center gap-4 mt-8'>
        <button
          onClick={prev}
          className='w-12 h-12 rounded-full bg-white/50 hover:bg-white flex items-center justify-center text-gray-600 transition-colors shadow-sm'
          aria-label='Previous'
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className='w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-900 transition-colors shadow-md'
          aria-label='Next'
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .flex {
            transform: translateX(-${currentIndex * 100}%) !important;
          }
          .flex-shrink-0 {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
