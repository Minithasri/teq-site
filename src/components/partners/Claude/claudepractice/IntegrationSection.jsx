'use client';
import Image from 'next/image';

export default function IntegrationSection() {
  const logos = [
    ['/images/partners/claude/logos/sharepoint.png', '44%', '30%', '17%', '50%'],
    ['/images/partners/claude/logos/google.png', '58%', '30%', '38%', '71%'],
    ['/images/partners/claude/logos/m365.png', '71%', '41%', '62%', '29%'],
    ['/images/partners/claude/logos/servicenow.png', '82%', '62%', '83%', '78%'],
    ['/images/partners/claude/logos/domo.png', '70%', '61%', '83%', '50%'],
    ['/images/partners/claude/logos/databricks.png', '61%', '48%', '62%', '71%'],
    ['/images/partners/claude/logos/salesforce.png', '39%', '49%', '83%', '22%'],
    ['/images/partners/claude/logos/snowflake.png', '29%', '40%', '50%', '17%'],
    ['/images/partners/claude/logos/sap.png', '19%', '60%', '17%', '78%'],
    ['/images/partners/claude/logos/boomi.png', '29%', '64%', '17%', '22%'],
  ];

  return (
    <section
      className='relative overflow-hidden'
      style={{
        background:
          'linear-gradient(258.79deg, rgba(229,170,102,.3) -13.56%, rgba(255,165,129,.3) -13.56%, rgba(221,161,108,.3) 18.23%, rgba(230,242,246,.3) 53.64%, rgba(202,185,246,.3) 91.85%, rgba(112,48,177,.3) 119.62%)',
      }}
    >
      <style>{`
        .orbit-ring {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          border: 2px dashed rgba(220, 170, 120, .35);
          border-radius: 9999px;
          animation: spin 80s linear infinite;
        }
        .orbit-r2 {
          animation-direction: reverse;
          animation-duration: 100s;
        }
        .orbit-r3 {
          animation-duration: 120s;
        }
        @keyframes spin {
          from { transform: translateX(-50%) rotate(0deg); }
          to { transform: translateX(-50%) rotate(360deg); }
        }
         .orbit-logo {
          animation: pulse-zoom 4s ease-in-out infinite;
        }
        .orbit-logo:hover {
          animation-play-state: paused;
          transform: translate(-50%, -50%) scale(1.25) !important;
        }
        @keyframes pulse-zoom {
          0%, 100% { transform: translate(-50%, -50%) scale(0.9); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }
      `}</style>

      <div className='mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[140px] pt-20'>
        <h2 className='text-center text-4xl md:text-4xl lg:text-5xl font-semibold'>
          <span className='italic'>Claude,</span>
          <span className='block bg-gradient-to-r from-violet-700 to-orange-500 bg-clip-text text-transparent leading-relaxed'>
            wired into what you already run.
          </span>
        </h2>

        {/* IMPORTANT: overflow-hidden must stay on for ALL breakpoints —
            no md:overflow-visible — or the circle crop below won't work */}
        {/* Desktop Orbit Container */}
        <div className='hidden md:block relative mx-auto mt-10 h-[540px] w-full max-w-[1100px] overflow-hidden'>
          {/* Orbital Rings — % bottoms keep them concentric with the logo at any breakpoint */}
          <div
            className='absolute left-1/2 rounded-full -translate-x-1/2'
            style={{
              width: '850px',
              height: '850px',
              bottom: '-86%',
              background: 'rgba(217, 119, 87, 0.06)',
              zIndex: 0,
            }}
          />
          <div
            className='absolute left-1/2 rounded-full -translate-x-1/2'
            style={{
              width: '620px',
              height: '620px',
              bottom: '-60%',
              background: 'rgba(217, 119, 87, 0.15)',
              zIndex: 0,
            }}
          />

          <div className='orbit-ring' style={{ width: '620px', height: '620px', bottom: '-60%' }} />
          <div
            className='orbit-ring orbit-r2'
            style={{ width: '850px', height: '850px', bottom: '-86%' }}
          />
          <div
            className='orbit-ring orbit-r3'
            style={{ width: '1100px', height: '1100px', bottom: '-114%' }}
          />

          {/* Central Logo */}
          <div
            className='absolute left-1/2 flex h-[400px] w-[400px] -translate-x-1/2 items-start justify-center pt-10 rounded-full bg-white shadow-2xl z-10'
            style={{ bottom: '0px', transform: 'translate(-50%, 50%)' }}
          >
            <div className='relative w-32 h-32 md:w-52 md:h-52'>
              <Image
                src='/images/partners/claude/logos/claude.png'
                alt='Anthropic Claude'
                fill
                priority
                className='object-contain'
              />
            </div>
          </div>

          {/* Orbiting Partner Logos */}
          {logos.map((l, index) => (
            <div
              key={l[0]}
              className='absolute flex h-10 w-10 md:h-12 md:w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition-transform duration-300 z-20 orbit-logo cursor-pointer'
              style={{
                left: l[1],
                top: l[2],
                animationDelay: `${index * 0.4}s`,
              }}
            >
              <div className='relative w-6 h-6 md:w-8 md:h-8'>
                <Image src={l[0]} alt='' fill className='object-contain' />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Orbit Container (420px max-width, 423px height) */}
        <div className='md:hidden relative mx-auto mt-6 w-full max-w-[420px] h-[423px] overflow-hidden flex flex-col justify-center items-center'>
          {/* Concentric Orbit Rings in background */}
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#DCC2A8]/35 w-[360px] h-[360px]' />
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#DCC2A8]/35 w-[280px] h-[280px]' />
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#DCC2A8]/35 w-[200px] h-[200px]' />
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 w-[280px] h-[280px]' />
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 w-[200px] h-[200px]' />

          {/* Central Logo in background */}
          <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-[140px] w-[140px] items-center justify-center rounded-full bg-white shadow-xl z-10'>
            <div className='relative w-20 h-20'>
              <Image
                src='/images/partners/claude/logos/claude.png'
                alt='Anthropic Claude'
                fill
                priority
                className='object-contain'
              />
            </div>
          </div>

          {/* Orbiting Partner Logos for Mobile */}
          {logos.map((l, index) => (
            <div
              key={l[0]}
              className='absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg border border-[#ECECEC] orbit-logo cursor-pointer z-20'
              style={{
                left: l[3],
                top: l[4],
                animationDelay: `${index * 0.4}s`,
              }}
            >
              <div className='relative w-6 h-6'>
                <Image src={l[0]} alt='' fill className='object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
