'use client';

import Image from 'next/image';

export default function PartnerSection() {
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
                <div className='flex flex-wrap gap-4 md:gap-6 mt-8'>
                  <div className='w-150 h-150 relative'>
                    <Image
                      src='/images/partners/domo/circle1.png'
                      alt='Platform Accreditation'
                      width={150}
                      height={150}
                      className='object-contain'
                    />
                  </div>
                  <div className='w-150 h-150 relative'>
                    <Image
                      src='/images/partners/domo/circle2.png'
                      alt='Professional Services Certification'
                      width={150}
                      height={150}
                      className='object-contain'
                    />
                  </div>
                  <div className='w-150 h-150 relative'>
                    <Image
                      src='/images/partners/domo/circle3.png'
                      alt='Technical Consultant Certification'
                      width={150}
                      height={150}
                      className='object-contain'
                    />
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className='relative w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl '>
                <Image
                  src='/images/partners/domo/circle4.jpg'
                  alt='Domo Partner Team'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
