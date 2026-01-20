'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const teamImages = [
  '/images/partners/domo/team1.webp',
  '/images/partners/domo/team2.webp',
  '/images/partners/domo/team3.webp',
  '/images/partners/domo/team4.webp',
  '/images/partners/domo/team5.webp',
  '/images/partners/domo/team6.webp',
  '/images/partners/domo/team7.webp',
  '/images/partners/domo/team8.jpeg',
  '/images/partners/domo/team9.jpeg',
];

export default function PartnerSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % teamImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className='w-full py-16 md:py-20 bg-white'>
      <div className='max-w-9xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative w-full rounded-[32px] overflow-hidden min-h-[500px] flex items-center shadow-lg'>
          {/* Background Image */}
          <div className='absolute inset-0 z-0'>
            <Image
              src='/images/partners/domo/colourbg.png'
              alt='Partner Background'
              fill
              className='object-cover'
            />
          </div>

          <div className='relative z-10 w-full p-8 md:p-12 lg:p-16'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              {/* Left Content */}
              <div className='space-y-8'>
                <h2 className='text-3xl md:text-5xl font-bold text-[#06B6D4]'>
                  DOMO's Trusted Partner
                </h2>

                <p className='text-[#4B5563] text-lg leading-relaxed max-w-lg'>
                  As a certified DOMO partner, GWC helps organizations turn questions into insights
                  using DOMO's powerful analytics platform, driving process optimization, smarter
                  decisions, and cost reduction.
                </p>

                {/* Badges/Circles */}
                <div className='flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mt-8'>
                  <div className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] relative transition-transform hover:scale-105'>
                    <Image
                      src='/images/partners/domo/circle1.png'
                      alt='Platform Accreditation'
                      fill
                      className='object-contain'
                    />
                  </div>
                  <div className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] relative transition-transform hover:scale-105'>
                    <Image
                      src='/images/partners/domo/circle2.png'
                      alt='Professional Services Certification'
                      fill
                      className='object-contain'
                    />
                  </div>
                  <div className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] relative transition-transform hover:scale-105'>
                    <Image
                      src='/images/partners/domo/circle3.png'
                      alt='Technical Consultant Certification'
                      fill
                      className='object-contain'
                    />
                  </div>
                </div>
              </div>

              {/* Right Image Carousel */}
              <div className='flex flex-col gap-6 w-full'>
                <div className='relative w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl bg-white group'>
                  <div
                    className='flex h-full w-full transition-transform duration-500 ease-in-out'
                    style={{
                      transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                  >
                    {teamImages.map((img, index) => (
                      <div key={index} className='relative w-full h-full shrink-0'>
                        <Image
                          src={img}
                          alt={`Domo Partner Team ${index + 1}`}
                          fill
                          className='object-cover'
                          priority={index === 0}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Indicators */}
                <div className='flex justify-center gap-2'>
                  {teamImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? 'bg-cyan-500 w-8'
                          : 'bg-gray-300 w-2 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
