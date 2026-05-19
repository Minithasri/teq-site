import React from 'react';

const tech = [
  {
    icon: '/images/Templates/template16/iot.svg',
    title: 'IoT Sensors',
    text: 'Data collection from servers, power, and cooling systems',
  },
  {
    icon: '/images/Templates/template16/ai-ml.svg',
    title: 'AI/ML Models',
    text: 'Predictive analytics for failures and optimization',
  },
  {
    icon: '/images/Templates/template16/agent.svg',
    title: 'Agentic AI Platform',
    text: 'Automation and intelligent decision engine',
  },
  {
    icon: '/images/Templates/template16/visu.svg',
    title: 'Visualization',
    text: 'Real-time dashboards via Power BI / Domo',
  },
];

export default function TechnologyStack() {
  return (
    // Background gradient perfectly matches the bright metallic lighting transition from Image 1
    <section
      className='relative py-[64px] md:py-[80px] w-full overflow-hidden bg-cover bg-center'
      style={{
        backgroundImage:
          'linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 35%, #cbd5e1 70%, #94a3b8 100%)',
      }}
    >
      {/* CORNER IMAGE CONTAINER
        FIXED: Removed 'hidden' and 'md:block'. It is now forced to be visible
        on all screens. Added 'max-md:opacity-20' so it softens gracefully into a
        subtle background graphic on mobile layouts without overlapping title text.
      */}
      <div className='absolute left-0 top-1 w-[100px] sm:w-[240px] md:w-[280px] xl:w-[310px] h-[240px] sm:h-[60px] md:h-[180px] xl:h-[200px] z-20 select-none pointer-events-none overflow-hidden rounded-br-[32px] shadow-[5px_5px_30px_rgba(15,23,42,0.06)] max-md:opacity-20'>
        <img
          src='/images/Templates/template16/bg4.png'
          alt='Technology Context Vector'
          className='w-full h-full object-cover scale-x-[-1]'
        />
      </div>

      {/* Centered content layout container */}
      <div className='max-w-[1140px] mx-auto px-4 md:px-6 relative z-10'>
        {/* HEADER SECTION BLOCK */}
        <div className='text-center mb-[44px] md:mb-[52px]'>
          <h2 className='text-[26px] md:text-[32px] font-extrabold text-[#071326] tracking-tight'>
            Technology Stack
          </h2>
          <p className='text-[14px] md:text-[15.5px] text-[#475569] font-semibold mt-2 tracking-tight max-w-[620px] mx-auto leading-relaxed'>
            Built with cutting-edge technologies for maximum performance
          </p>
        </div>

        {/* 2-COLUMN STRUCTURAL CARDS GRID */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[28px] max-w-[960px] mx-auto'>
          {tech.map((item, index) => (
            <div
              key={index}
              className='rounded-[14px] border border-white/50 shadow-[0_10px_30px_rgba(0,0,0,0.015)] p-6 md:p-[32px] relative overflow-hidden bg-white'
              style={{
                backgroundImage:
                  'radial-gradient(circle at top right, rgba(224,242,254,0.4) 0%, rgba(255,255,255,1) 60%)',
              }}
            >
              <div className='flex items-start gap-4 relative z-10'>
                {/* Vibrant Accent Blue Icon Square */}
                <div className='w-[44px] h-[44px] rounded-[10px] bg-[#0284c7] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(2,132,199,0.15)] select-none pointer-events-none'>
                  <img
                    src={item.icon}
                    alt=''
                    className='w-[20px] h-[20px] object-contain invert brightness-0'
                  />
                </div>

                {/* Left-aligned descriptive labels */}
                <div className='flex flex-col justify-start text-left pt-0.5'>
                  <h3 className='text-[16px] md:text-[17.5px] font-extrabold text-[#071326] tracking-tight leading-snug'>
                    {item.title}
                  </h3>
                  <p className='text-[13px] md:text-[14px] text-[#475569] font-medium tracking-tight leading-relaxed mt-2.5'>
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
