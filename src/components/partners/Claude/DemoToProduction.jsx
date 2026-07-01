'use client';
import Image from 'next/image';

const DemoToProduction = () => {
  const tickers = [
    {
      title: 'Right model, right task',
      desc: "Matched to the job, so you never overpay for intelligence you don't need.",
    },
    {
      title: 'Weeks, not months',
      desc: '50+ ready-made blueprints mean working agents in days, not quarters.',
    },
    {
      title: 'Your data stays yours',
      desc: 'Claude never trains on your data. Every agent we build is yours.',
    },
  ];

  return (
    <section className='w-full py-20 px-4 sm:px-6 md:px-8 bg-[#FFFFFF] overflow-hidden'>
      <div className='max-w-6xl mx-auto flex flex-col items-center'>
        {/* Italic Heading with Quotes */}
        <div className='relative max-w-4xl text-center mb-16 px-6'>
          {/* Left Large Quote */}
          <span className='absolute left-4 -top-10 text-[80px] sm:text-[100px] font-serif text-[#F0EAE5]/60 leading-none select-none pointer-events-none'>
            “
          </span>

          <div className='relative z-10 px-6'>
            {' '}
            {/* Left purple border line */}
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-[36px] italic font-medium text-[#404040] pl-4'>
              Most AI pilots stop at proof of concept. <span className='text-[#ED7200]'>We</span>{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                build systems ready for real world impact.
              </span>
            </h2>
            {/* Stat cards */}
            <div className='mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5'>
              <div className='flex items-start gap-3 sm:gap-4 bg-white rounded-2xl shadow-md px-4 sm:px-5 py-3 sm:py-4 w-full sm:w-auto sm:min-w-[240px]'>
                <div className='shrink-0 border border-[rgba(229, 229, 229, 1)] w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm flex items-center justify-center'>
                  <span className='text-xl sm:text-2xl' aria-hidden>
                    <Image
                      src='/images/partners/claude/agent.png'
                      alt=''
                      width={30}
                      height={30}
                      className='shrink-0 relative z-10'
                    />
                  </span>
                </div>
                <div className='text-left'>
                  <p
                    className='text-lg sm:text-xl font-bold leading-tight m-0'
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    50+
                  </p>
                  <p className='text-xs sm:text-sm text-[#737373] font-medium leading-snug m-0'>
                    Agentic blueprints
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-3 sm:gap-4 bg-white rounded-2xl shadow-md px-4 sm:px-5 py-3 sm:py-4 w-full sm:w-auto sm:min-w-[240px]'>
                <div className='shrink-0 border border-[rgba(229, 229, 229, 1)] w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm flex items-center justify-center'>
                  <span className='text-xl sm:text-2xl' aria-hidden>
                    <Image
                      src='/images/partners/claude/star.png'
                      alt=''
                      width={30}
                      height={30}
                      className='shrink-0 relative z-10'
                    />
                  </span>
                </div>
                <div className='text-start'>
                  <p
                    className='text-lg sm:text-xl font-bold leading-tight m-0'
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    160+
                  </p>
                  <p className='text-xs sm:text-sm text-[#737373] font-medium leading-snug m-0'>
                    Certified CCA Experts
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Large Quote */}
          <span className='absolute -right-4 -bottom-16 text-[80px] sm:text-[100px] font-serif text-[#F0EAE5]/60 leading-none select-none pointer-events-none'>
            ”
          </span>
        </div>

        {/* Main Card container */}
        <div
          className='w-full rounded-[32px] overflow-hidden border border-[#FAFAFA]/40 shadow-xl relative flex flex-col lg:flex-row items-center justify-between p-8 sm:p-12 md:p-16 gap-12'
          style={{
            background:
              'linear-gradient(135deg, rgba(110, 43, 139, 0) 0%, rgba(217, 109, 66, 0.4) 100%)',
          }}
        >
          {/* Background Image with 20% opacity */}
          <div
            className='absolute inset-0 pointer-events-none'
            style={{
              backgroundImage: "url('/images/partners/claude/bgclaude.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.2,
            }}
          />
          {/* Left Side: 3D Tile Graphic */}
          <div className='relative w-[280px] sm:w-[320px] md:w-[360px] aspect-square flex-shrink-0 transition-transform duration-500 hover:scale-105'>
            <Image
              src='/images/partners/claude/claude6.png'
              alt='Claude 3D Logo Tile'
              fill
              className='object-contain select-none pointer-events-none'
              priority
            />
          </div>

          {/* Right Side: Header and Tickers */}
          <div className='flex-grow max-w-xl flex flex-col items-start'>
            {/* Pill Header */}
            <div
              className='w-full px-8 py-4 rounded-full mb-8 backdrop-blur-sm transition-all duration-300 hover:opacity-95 text-center'
              style={{
                backgroundColor: '#FFFFFF2B',
                border: '1px solid #FAFAFA',
              }}
            >
              <span
                className='text-lg sm:text-[22px] font-semibold tracking-wide block text-center'
                style={{
                  backgroundImage: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Built for production, not demos.
              </span>
            </div>

            {/* Connecting Vertical Line & Tickers Container */}
            <div className='relative w-full flex flex-col mt-4'>
              {/* Connecting Line */}
              <div
                className='absolute left-[12px] top-0 bottom-6 w-[2.5px] rounded-full z-0'
                style={{
                  background: 'linear-gradient(180deg, #6F2B8B 0%, #ED7200 100%)',
                }}
              />

              {tickers.map((ticker, idx) => (
                <div
                  key={idx}
                  className={`relative z-10 flex flex-col items-start pb-6 ${idx !== tickers.length - 1 ? 'mb-6' : ''} w-full`}
                >
                  {/* Horizontal Branch Line (Connects vertical line to tick box) */}
                  <div
                    className='absolute left-[12px] top-[14px] w-[16px] h-[2.5px]'
                    style={{
                      background: idx === 0 ? '#6F2B8B' : idx === 1 ? '#AE4E7A' : '#ED7200',
                    }}
                  />

                  {/* Custom Ticker Icon with Gradient (Smaller: 24px) */}
                  <div
                    className='absolute left-[28px] top-[2px] w-[24px] h-[24px] rounded-md flex items-center justify-center text-white shadow-md'
                    style={{
                      background: 'linear-gradient(135deg, #6F2B8B 0%, #ED7200 100%)',
                    }}
                  >
                    <svg
                      className='w-3 h-3'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth={4.5}
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                    </svg>
                  </div>

                  {/* Title & Desc */}
                  <div className='pl-[64px] w-full'>
                    <h3 className='text-[#404040] text-base sm:text-[17px] font-semibold tracking-tight mb-1 leading-snug'>
                      {ticker.title}
                    </h3>
                    <p className='text-[#737373] text-xs sm:text-[13px] font-medium leading-relaxed mt-1'>
                      {ticker.desc}
                    </p>
                  </div>

                  {/* Divider line starting after the vertical line */}
                  {idx !== tickers.length - 1 && (
                    <div className='absolute left-[44px] bottom-0 right-0 h-[1px] bg-white/90' />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoToProduction;
