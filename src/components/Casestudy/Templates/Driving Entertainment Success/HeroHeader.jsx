'use client';

import Image from 'next/image';

export default function EntertainmentSuccessHero() {
  return (
    <div className="w-full bg-white font-['Poppins']">
      {/* 1. Header Layout */}
      <section className='relative overflow-hidden flex flex-col items-center justify-center w-full min-h-[380px] md:min-h-[440px] lg:h-[483px]'>
        {/* Background Image & Overlay */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/Templates/templatez/jamm/jammbg.jpg'
            alt='Dashboard Background'
            fill
            priority
            className='object-cover opacity-[0.50]'
          />

          {/* Fade overlay */}
          <div
            className='absolute inset-0'
            style={{
              background:
                'radial-gradient(circle, rgba(89, 91, 102, 0.75) 0%, rgba(63, 64, 70, 0.85) 100%)',
            }}
          />
        </div>

        {/* Header Text Content Container */}
        <div className='relative z-10 flex flex-col items-center text-center px-4 md:px-8 max-w-7xl mx-auto py-12 lg:py-0 lg:mt-20'>
          {/* 2. Driving Entertainment Success */}
          <h1
            className='font-bold text-[32px] leading-[58px] md:text-[50px] md:leading-[56px] lg:text-[67.2px] lg:leading-[72px] tracking-normal mb-4 lg:mb-[18px]'
            style={{
              fontFamily: 'Poppins, sans-serif',
              color: '#FFFFFF',
            }}
          >
            Driving Entertainment Success
          </h1>

          {/* 3. with Artist and Performance Dashboards */}
          <h2
            className='font-bold text-[22px] leading-[28px] md:text-[32px] md:leading-[40px] lg:text-[45px] lg:leading-[45px] tracking-normal'
            style={{
              fontFamily: 'Poppins, sans-serif',
              color: '#ECE254',
            }}
          >
            with Artist and Performance Dashboards
          </h2>
        </div>
      </section>

      {/* Main Content Area (Client Context & Floating Device Mockup) */}
      <section className='relative w-full max-w-[1440px] mx-auto px-6 md:px-12 mt-[40px] lg:px-[120px] pt-12 pb-16 md:py-16 lg:pt-16 lg:pb-20 bg-white flex flex-col-reverse lg:flex-row gap-10 lg:gap-12'>
        {/* Left Side: Client Context Card */}
        <div className='flex flex-col gap-6 w-full lg:max-w-[100%]'>
          {/* Title Row with Icon */}
          <div className='flex items-center gap-4'>
            {/* 5. Icon */}
            <div
              className='flex items-center justify-center text-white shrink-0'
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '12px',
                background: '#6249DF',
              }}
            >
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <rect x='4' y='2' width='16' height='20' rx='2' />
                <line x1='9' y1='22' x2='9' y2='16' />
                <line x1='15' y1='22' x2='15' y2='16' />
                <line x1='9' y1='16' x2='15' y2='16' />
                <path d='M8 6h2v2H8z M14 6h2v2h-2z M8 11h2v2H8z M14 11h2v2h-2z' />
              </svg>
            </div>

            {/* 4. Client Context Title */}
            <h3
              className='font-bold text-[24px] leading-[28px] md:text-[30px] md:leading-[34px] lg:text-[34px] lg:leading-[32px] tracking-normal'
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: '#21242C',
              }}
            >
              Client Context
            </h3>
          </div>

          {/* 6. Client Context Content */}
          <div
            className=' space-y-4 text-[15px] leading-[26px] md:text-[16px] md:leading-[26px] lg:text-[18px] lg:leading-[29.25px] font-normal tracking-normal'
            style={{
              fontFamily: 'Poppins, sans-serif',
              color: '#21242CE5',
            }}
          >
            <p>
              A dynamic player in the entertainment industry, manages a wide portfolio of artists,
              live performances, and events. To stay competitive, the company needed a data-driven
              approach to monitor artist performance, event engagement, and audience trends.
            </p>
            <p>
              Leadership relied on fragmented reports that lacked real-time visibility, making it
              difficult to evaluate success, track KPIs, and optimize offerings across different
              entertainment verticals.
            </p>
          </div>
        </div>

        {/* 7. Floating Device Overlapping Mockup Graphic */}
        <div className='relative w-full flex justify-center lg:block lg:w-auto lg:shrink-0'>
          <div className='pointer-events-none w-[240px] h-[260px] sm:w-[280px] sm:h-[300px] lg:w-[323px] lg:h-[349px] opacity-[0.94] lg:absolute lg:-top-[270px] lg:right-[-150px] lg:z-30'>
            <Image
              src='/images/Templates/templatez/jamm/jammcontext.png'
              alt='Mobile Dashboard App Mockup View'
              width={323}
              height={349}
              priority
              className='w-full h-full object-contain drop-shadow-2xl'
            />
          </div>
        </div>
      </section>
    </div>
  );
}
