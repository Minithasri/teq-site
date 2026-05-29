'use client';
// Template1 – Section2: Audience Pills + How the Agent Fits Ecosystem Grid

export default function Section2({ data }) {
  const {
    audienceTitle = 'Built for Teams Driving Operational Excellence',
    audience = [],
    fitTitle = 'How the Agent Fits Into Your',
    fitTitleBold = 'Business Ecosystem',
    fitDescription = 'Defines the operational challenges, workflow requirements, business logic, and functional objectives the agent is built to address.',
    challenges = [],
  } = data || {};

  return (
    <>
      <section
        style={{ backgroundColor: '#FFFFFF' }}
        className='w-full py-10 px-4 md:px-8 lg:px-16 xl:px-24'
      >
        <div
          className='max-w-7xl mx-auto flex flex-col gap-16'
          style={{ backgroundColor: '#FFFFFF' }}
        >
          {/* ── PART 1: Built for Teams ── */}
          <div className='flex flex-col items-center gap-8'>
            {/* Heading */}
            <h2 className='text-2xl md:text-3xl font-bold text-center' style={{ color: '#171717' }}>
              <span className='font-bold'>Built for Teams </span>
              <span className='font-light italic'>Driving Operational Excellence</span>
            </h2>

            {/* Pills wrapped in a white card — stretched to full width */}
            <div
              className='w-full max-w-7xl rounded-xl px-2 py-2 flex flex-col md:flex-row justify-between shadow-[0_4px_24px_rgba(0,0,0,0.04)] gap-2 mx-auto'
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #F0F0F0',
              }}
            >
              {audience.map((item, i) => (
                // Outer = gradient bg with 1px padding
                <div
                  key={i}
                  className='flex-1 w-full'
                  style={{
                    background: 'linear-gradient(262.35deg, #E67582 2.92%, #7785F4 99.45%)',
                    padding: '1px',
                    borderRadius: '10px',
                    display: 'flex',
                  }}
                >
                  {/* Inner — pastel gradient fill only */}
                  <div
                    className='flex flex-1 justify-center items-center gap-3 px-4 md:px-8 py-4 text-[15px] font-medium w-full text-center'
                    style={{
                      background:
                        'linear-gradient(258.79deg, rgba(255,250,252,1) 0%, rgba(252,250,255,1) 100%)',
                      borderRadius: '9px',
                      color: '#262626',
                    }}
                  >
                    <span
                      className='w-2 h-2 rounded-full flex-shrink-0'
                      style={{
                        background: 'linear-gradient(262.35deg, #E67582 2.92%, #7785F4 99.45%)',
                      }}
                    />
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PART 2: How the Agent Fits ── */}
      <section
        className='w-full py-16 px-4 md:px-8 lg:px-16 xl:px-24'
        style={{
          background:
            'linear-gradient(255.71deg, rgba(153, 204, 238, 0.25) 12.13%, rgba(214, 169, 233, 0.25) 103.91%)',
        }}
      >
        <div className='max-w-7xl mx-auto flex flex-col items-center gap-10'>
          {/* Heading */}
          <div className='text-center'>
            <h2
              className='text-2xl md:text-3xl font-light italic mb-3'
              style={{ color: '#171717' }}
            >
              {fitTitle} <span className='font-bold not-italic'>{fitTitleBold}</span>
            </h2>
            <p className='text-sm md:text-base max-w-xl mx-auto' style={{ color: '#737373' }}>
              {fitDescription}
            </p>
          </div>

          {/* 3 Bottom Cards — grid makes equal row height; flex-1 on inner card fills space evenly */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full'>
            {challenges.map((item, i) => (
              <div
                key={i}
                className='rounded-xl p-4 flex flex-col shadow-xl gap-4 h-full'
                style={{
                  background:
                    'linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(258.79deg, rgba(229, 170, 102, 0.3) -13.56%, rgba(255, 165, 129, 0.3) -13.56%, rgba(221, 161, 108, 0.3) 18.23%, rgba(230, 242, 246, 0.3) 53.64%, rgba(202, 185, 246, 0.3) 91.85%, rgba(112, 48, 177, 0.3) 119.62%) border-box',
                  border: '3px solid transparent',
                }}
              >
                {/* Card Heading */}
                <h3
                  className='text-lg px-4 pt-2 font-semibold leading-snug'
                  style={{ color: '#171717' }}
                >
                  {item.title}
                </h3>

                {/* Inner Content Card — flex-1 stretches to fill remaining height equally */}
                <div className='rounded-2xl px-4 pb-2 text-md leading-relaxed flex-1'>
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
