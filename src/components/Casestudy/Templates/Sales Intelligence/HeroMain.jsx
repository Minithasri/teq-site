'use client';

import Image from 'next/image';

export default function SalesIntelligenceHero() {
  return (
    <section
      className="relative overflow-hidden flex flex-col justify-center font-['Poppins']"
      style={{
        width: '100%',
        height: '418px',
        opacity: 1,
        background:
          'linear-gradient(288.97deg, rgba(35, 57, 108, 0.89) 0%, rgba(32, 51, 93, 0.89) 100%)',
      }}
    >
      {/* Background Image Layer (Referencing the visual context of image_a18957.png) */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/templatez/salesintelligence/sihead.png'
          alt='Sales Intelligence Background'
          fill
          priority
          className='object-cover opacity-40' // Lowered opacity to allow the linear-gradient to dominate
        />
      </div>

      {/* Content Container */}
      <div className='relative z-20 px-[72px] flex flex-col justify-center h-full'>
        {/* Main Heading */}
        <div
          style={{
            width: '1421px',
            height: '157px',
            marginTop: '70px', // Applied specific top offset from requirements
            opacity: 1,
          }}
        >
          <h1
            className='text-white'
            style={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              fontSize: '60px',
              lineHeight: '65px',
              letterSpacing: '0%',
              verticalAlign: 'middle',
            }}
          >
            Sales Intelligence <span className='text-[#FFC700]'>Transformation & Time Based</span>{' '}
            Reporting Standardization
          </h1>
        </div>

        {/* Description Subtext */}
        <div
          style={{
            width: '1350px',
            height: '80px',
            marginTop: '30px', // Adjusted to balance the negative top of the heading
            marginLeft: '3px',
            opacity: 1,
          }}
        >
          <p
            className='text-white'
            style={{
              fontFamily: 'Poppins',
              fontWeight: 400,
              fontSize: '24px',
              lineHeight: '28px', // Based on your "line height/28" requirement
              letterSpacing: '0%',
              verticalAlign: 'middle',
            }}
          >
            How we rebuilt confidence in sales analytics by standardizing time- intelligence models
            and optimizing reporting workflows for a leading fashion retailer.
          </p>
        </div>
      </div>

      {/* Internal CSS for clean integration */}
      <style jsx>{`
        section {
          transform: rotate(0deg);
        }
      `}</style>
    </section>
  );
}
