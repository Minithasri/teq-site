'use client';
import TempCountdown from './TempCountdown';
import TempSupportForm from './TempSupportForm';
import herofirstbg from '../assert/hero-first-bg.jpg';
import mountainbg from '../assert/bg-mountain.png';
import TempCountdownMarch from './TempCountdownMarch';

const TempHeroSection = () => {
  return (
    <section className='relative min-h-screen bg-white'>
      {/* ── TOP IMAGE (herofirstbg) ── */}
      <img
        src={herofirstbg.src}
        alt=''
        className='absolute top-0 left-0 w-full pointer-events-none'
        style={{
          height: 'clamp(200px, 45vw, 350px)',
          objectFit: 'cover',
          objectPosition: 'center top',
          opacity: 0.35,
          zIndex: 0,
        }}
      />
      {/* Top image fade — only edges, NOT center */}
      <div
        className='absolute top-0 left-0 right-0'
        style={{
          height: 'clamp(280px, 60vw, 480px)',
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 15%, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 100%)',
          zIndex: 1,
        }}
      />
      {/* Blue/purple tint */}
      <div
        className='absolute top-0 left-0 right-0'
        style={{
          height: 'clamp(200px, 45vw, 350px)',
          zIndex: 2,
        }}
      >
        <div
          className='w-full h-full'
          style={{
            background:
              'linear-gradient(to right, rgba(46,148,219,0.3), rgba(46,148,219,0.1), rgba(112,48,177,0.3))',
          }}
        />
      </div>

      {/* ── BOTTOM IMAGE (mountainbg) ── */}
      <img
        src={mountainbg.src}
        alt=''
        className='absolute left-0 right-0 w-full pointer-events-none'
        style={{
          bottom: '5%',
          height: 'clamp(200px, 50vh, 60%)',
          objectFit: 'cover',
          objectPosition: 'bottom',
        }}
      />
      {/* Mountain fade — top and bottom edges only */}
      <div
        className='absolute left-0 right-0'
        style={{
          bottom: '5%',
          height: 'clamp(200px, 50vh, 60%)',
          background:
            'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 100%)',
          zIndex: 1,
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <div
        className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 md:pt-8 lg:pt-10'
        style={{ zIndex: 10 }}
      >
        {/* TOP BAR */}
        <div className='bg-white/30 border border-white/60 flex flex-col sm:flex-row justify-between items-center gap-3 backdrop-blur-sm rounded-2xl px-3 sm:px-4 md:px-5 py-2 sm:py-3 mb-4 sm:mb-6'>
          <img
            src='/images/domopalooza/domo-palooza.png'
            alt='Domopalooza'
            className='h-6 sm:h-8 md:h-10 w-auto'
          />
          <div className='w-full sm:w-auto flex justify-center'>
            <TempCountdown />
          </div>
        </div>

        {/* ── SECTION 1: Submit Before + Heading ── */}
        <div className='flex flex-col lg:flex-row items-start gap-6 lg:gap-10 mb-6 sm:mb-8 lg:mb-24'>
          {/* Left */}
          <div className='w-full lg:w-[38%] flex items-stretch'>
            <div className='flex-1 flex flex-col items-center lg:items-start mr-0 lg:mr-10'>
              <p className='text-lg sm:text-2xl md:text-3xl lg:text-4xl font-base text-center lg:text-left text-gray-700'>
                Submit Before
              </p>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-none tracking-tight mt-1 text-center lg:text-left'>
                MAR 20
              </h1>
              <div className='sm:mt-2'>
                <TempCountdownMarch />
              </div>
            </div>
            <div className='hidden lg:block w-[1px] bg-gray-300 self-stretch min-h-[120px]' />
          </div>

          {/* Right */}
          <div className='w-full lg:w-[62%]'>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-center lg:text-left'>
              Submit Your Use Case
            </h2>
            <h3
              className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mt-1 text-center lg:text-left'
              style={{
                background: 'linear-gradient(90deg, #2E94DB, #7030B1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                width: '100%',
              }}
            >
              Get Your AI Demo at Domopalooza
            </h3>
            <div className='mt-3 flex justify-center lg:justify-start'>
              <div className='inline-flex px-3 sm:px-4 py-1.5 rounded-lg bg-white backdrop-blur-sm'>
                <span
                  className='text-xs sm:text-sm md:text-base font-bold'
                  style={{
                    background: 'linear-gradient(90deg, #7030B1, #B56DD3)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline-block',
                  }}
                >
                  March 24 to 27 | Salt Lake City
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 2: Booth card + Form ── */}
        <div className='flex flex-col lg:flex-row items-start gap-4 sm:gap-6 lg:gap-12 py-4 sm:py-6 lg:py-10'>
          {/* LEFT */}
          <div className='w-full lg:w-[60%] space-y-3 sm:space-y-4'>
            <div
              className='rounded-2xl p-4 sm:p-5 border border-gray-200'
              style={{
                background:
                  'linear-gradient(135deg, rgba(46,148,219,0.12) 0%, rgba(112,48,177,0.12) 100%)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 leading-snug text-center lg:text-left'>
                Visit the GWC{' '}
                <span
                  style={{
                    background: 'linear-gradient(90deg, #7030B1, #2E94DB)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    display: 'inline',
                  }}
                >
                  Booth at Domopalooza
                </span>{' '}
                to see your AI powered solution in action.
              </p>
            </div>

            <p className='text-xs sm:text-sm md:text-base font-medium text-gray-600 leading-relaxed text-center lg:text-left'>
              Have a business challenge? Submit it now and discover how AI can solve it at the GWC
              Booth during Domopalooza.
            </p>
          </div>

          {/* RIGHT */}
          <div className='w-full lg:w-[30%] mx-auto lg:mx-0'>
            <TempSupportForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempHeroSection;
