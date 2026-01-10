'use client';

import { domoData } from '@/data/partners/domo';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
// Reusing Spark icon
import img1 from '../../../../public/images/solutions/Icon.svg';

export default function PartnerSection() {
  const benefits = domoData.gwcServices.benefits;

  const partnerImages = [
    '/images/domo/team1.webp',
    '/images/domo/team2.webp',
    '/images/domo/team3.webp',
    '/images/domo/team4.webp',
    '/images/domo/team5.webp',
    '/images/domo/team6.webp',
    '/images/domo/team7.webp',
    '/images/domo/team8.jpeg',
    '/images/domo/team9.jpeg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % partnerImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='w-full bg-white py-16 md:py-24 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title */}
        <div className='flex items-center justify-center gap-3 mb-16 md:mb-20'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#5C2B8F] text-center'>
            {domoData.partnerSection.title}
          </h2>
          <Image src={img1} alt='Spark' width={32} height={32} className='w-6 h-6 md:w-8 md:h-8' />
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
          {/* Left Image Section - Auto Carousel */}
          <div className='w-full lg:w-1/2 flex justify-center'>
            <div className='relative w-full max-w-[500px] aspect-square bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 overflow-hidden'>
              {partnerImages.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-4 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Domo Partner Team ${index + 1}`}
                    fill
                    className='object-cover rounded-xl'
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Optional: Carousel Indicators */}
              <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20'>
                {partnerImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Features List & Description */}
          <div className='w-full lg:w-1/2 space-y-6'>
            <p className='text-gray-600 leading-relaxed mb-6'>
              {domoData.partnerSection.description}
            </p>

            <div className='space-y-4'>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className='group flex items-start gap-4 p-4 rounded-xl border border-purple-100 bg-white hover:shadow-md transition-shadow duration-300'
                  style={{
                    boxShadow: '0px 2px 10px rgba(111, 43, 139, 0.05)',
                  }}
                >
                  <div className='shrink-0 mt-1'>
                    <FiCheckCircle className='w-5 h-5 text-[#6F2B8B]' />
                  </div>
                  <p className='text-[#404040] font-medium text-sm md:text-base leading-snug'>
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
