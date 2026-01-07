'use client';

import Image from 'next/image';

export default function VisionandMission() {
  return (
    <section className='relative w-full py-16 lg:py-24 bg-white overflow-hidden'>
      {/* Center Background Circle */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] -z-0 opacity-100 pointer-events-none'>
        <Image
          src='/images/HomePage/circle_big.png'
          alt='Background Circle'
          fill
          className='object-contain'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Top Navigation: Spark + Dashed Line + Button */}
        <header className='flex items-center mb-16 gap-4'>
          <div className='w-14 h-14 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0'>
            <Image src='/images/Spark.svg' alt='' aria-hidden width={24} height={24} />
          </div>
          <div
            aria-hidden
            className='flex-1 h-[2px] bg-[linear-gradient(to_right,#E5E7EB_50%,rgba(0,0,0,0)_0%)] bg-[length:12px_2px] bg-repeat-x'
          />
          {/* Button with gradient border */}
          <div
            className='rounded-full p-[2px] shrink-0 hover:scale-105 transition-transform'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            }}
          >
            <button className='w-[246px] h-[46px] rounded-full bg-white font-medium flex items-center justify-center gap-2 text-[16px]'>
              <span style={{ color: '#6F2B8B' }}>Talk to our experts</span>
              <Image src='/images/Careers/arrow1.svg' alt='Arrow' width={12} height={12} />
            </button>
          </div>
        </header>

        {/* --- Header Content (Split Layout) --- */}
        <div className='flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16'>
          {/* Main Heading */}
          <h2 className='text-[32px] lg:text-[40px] font-medium shrink-0'>
            <span className='text-[#404040]'>Our </span>
            <span
              className='bg-clip-text text-transparent'
              style={{
                background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Vision & Mission
            </span>
          </h2>

          {/* Description - Aligned with heading */}
          <p className='text-[#525252] text-[16px] lg:text-[16px] max-w-xl leading-relaxed text-left'>
            Our certified experts analyze and optimize your GCP environment to reduce costs, improve
            efficiency, and ensure reliable cloud operations so you can focus on your business
            goals.
          </p>
        </div>

        {/* --- Cards Grid --- */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Left Column - Image and Vision Card */}
          <div className='space-y-8'>
            {/* Top Image Card */}
            <div
              className='relative rounded-3xl overflow-hidden shadow-xl'
              style={{ width: '704px', height: '400px' }}
            >
              <Image
                src='/images/AboutUs/section2image.png'
                alt='Vision Target'
                fill
                className='object-cover'
              />
            </div>

            {/* Vision Card */}
            <div className='relative ml-[202px]'>
              {/* Three Dash Lines Decoration - Outside card */}
              <div className='absolute -top-0 -left-12 w-12 h-12 z-10'>
                <Image src='/images/AboutUs/threedashlines.svg' alt='' width={38} height={38} />
              </div>

              <div
                className='relative rounded-3xl p-8 -mt-4 shadow-xl overflow-hidden'
                style={{
                  background: 'linear-gradient(135deg, #6F2B8B 0%, #9D6D9D 100%)',
                  width: '500px',
                  height: '340px',
                }}
              >
                {/* Icon */}
                <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6'>
                  <Image
                    src='/images/AboutUs/vision_icon.svg'
                    alt='Vision'
                    width={32}
                    height={32}
                  />
                </div>

                {/* Content */}
                <h3 className='text-2xl font-semibold text-white pb-8'>Vision</h3>
                <p className='text-white/90 text-[14px] leading-relaxed'>
                  Our vision is to inspire and transform businesses, propelling them to excel in the
                  digital realm utilizing data analytics and AI solutions. We envision a future
                  where organizations harness the power of data to strategically gain insights for
                  unparalleled success.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Mission Card */}
          <div className='relative ml-24 mt-44'>
            {/* Three Dash Lines Decoration - Top Right */}
            <div className='absolute -top-12 -left-2 w-12 h-12 z-10'>
              <Image src='/images/AboutUs/threedashlines2.svg' alt='' width={48} height={48} />
            </div>

            {/* Three Dash Lines Decoration - Bottom Left */}
            <div className='absolute bottom-48 left-2 w-12 h-12 z-10'>
              <Image src='/images/AboutUs/threedashlines3.svg' alt='' width={48} height={48} />
            </div>

            <div
              className='relative rounded-3xl p-8 shadow-xl overflow-hidden'
              style={{
                background: 'linear-gradient(135deg, #DCA6AB 0%, #9257A0 50%, #823774 100%)',
                width: '500px',
                height: '340px',
              }}
            >
              {/* Icon */}
              <div className='w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6'>
                <Image
                  src='/images/AboutUs/mission_icon.svg'
                  alt='Mission'
                  width={32}
                  height={32}
                />
              </div>

              {/* Content */}
              <h3 className='text-2xl font-semibold text-white pb-8'>Mission</h3>
              <p className='text-white/90 text-[14px] leading-relaxed'>
                We are committed to helping our clients secure victories by creating holistic and
                predictable impacts fueled by data-driven strategies. Our mission is to deliver
                excellence through thought leadership, data analytics, and AI solutions, inspiring
                organizations to thrive in our DNA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
