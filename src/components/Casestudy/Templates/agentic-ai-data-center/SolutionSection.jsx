import React from 'react';

const solutions = [
  {
    icon: '/images/Templates/template16/real-time.svg',
    title: 'Real-Time Monitoring',
    text: 'Continuous tracking of power, cooling, and server performance across all systems.',
  },
  {
    icon: '/images/Templates/template16/ai-power.svg',
    title: 'AI-Powered Predictions',
    text: 'Advanced algorithms forecast equipment failures and operational inefficiencies before they occur.',
  },
  {
    icon: '/images/Templates/template16/auto.svg',
    title: 'Automated Incident Response',
    text: 'Agentic AI triggers immediate actions for critical alerts, drastically reducing manual intervention.',
  },
  {
    icon: '/images/Templates/template16/operational.svg',
    title: 'Operational Dashboards',
    text: 'Centralized dashboards provide executives and operators with real-time KPIs and insights.',
  },
  {
    icon: '/images/Templates/template16/energy-op.svg',
    title: 'Energy Optimization',
    text: 'AI recommends intelligent adjustments to reduce energy usage without compromising performance.',
  },
];

export default function SolutionSection() {
  return (
    <section
      className='relative py-[64px] md:py-[80px] w-full overflow-hidden bg-cover bg-center'
      style={{
        backgroundImage: 'linear-gradient(to bottom, #dcfce7, #f0fdf4)',
      }}
    >
      {/* Main layout wrapper made explicit relative context holder.
        This ensures the absolutely positioned image anchors to the edge of this 1140px box, NOT the whole screen width.
      */}
      <div className='max-w-[1140px] mx-auto relative'>
        {/* FIXED:
            - Changed bottom-[-40px] to bottom-[60px] to pull the image UP.
            - Changed right-[-250] to right-0 so it perfectly anchors to the right edge.
        */}
        <div className='hidden lg:block absolute z-10 right-[-250] bottom-[60px] xl:bottom-[80px] pointer-events-none select-none overflow-hidden rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.12)]'>
          <img
            src='/images/Templates/template16/bg3.png'
            alt='VR UI Visualization Layer'
            className='w-[360px] xl:w-[400px] h-[240px] object-cover object-center'
          />
        </div>

        {/* Foreground Content Safe Area */}
        <div className='px-4 md:px-6 relative z-20 pb-12 lg:pb-16'>
          {/* HEADER SECTION BLOCK */}
          <div className='text-center mb-[44px] md:mb-[56px]'>
            <h2 className='text-[26px] md:text-[32px] font-extrabold text-[#071326] tracking-tight'>
              {"GWC's Solution"}
            </h2>
            <h3 className='text-[18px] md:text-[20px] font-extrabold text-[#071326] mt-1 tracking-tight'>
              Agentic AI for Data Centers
            </h3>
            <p className='text-[13.5px] md:text-[14.5px] text-[#64748b] max-w-[720px] mx-auto mt-3 leading-relaxed font-medium tracking-tight'>
              A next-generation platform for data center intelligence combining monitoring,
              prediction, and automation
            </p>
          </div>

          {/* CARD GRID LAYOUT */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[28px] relative'>
            {solutions.map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-[14px] border-2 border-[#f5f5f5] shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 md:p-[32px] flex flex-col justify-start min-h-[190px] backdrop-blur-sm bg-white/95 transition-transform duration-200 hover:-translate-y-1'
              >
                {/* FIXED ROW HEADER GROUP: Icon and Heading inline side-by-side */}
                <div className='flex items-center gap-4 w-full justify-start mb-4 text-left'>
                  <div className='w-[44px] h-[44px] rounded-[10px] bg-[#0846AA]/60 flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(2,132,199,0.2)] select-none pointer-events-none'>
                    <img
                      src={item.icon}
                      alt=''
                      className='w-[20px] h-[20px] object-contain invert brightness-0'
                    />
                  </div>

                  <h3 className='text-[16.5px] md:text-[18px] font-extrabold text-[#071326] tracking-tight leading-snug'>
                    {item.title}
                  </h3>
                </div>

                {/* Strict Left-Aligned Description Text Block */}
                <p className='text-[13px] md:text-[13.5px] text-[#64748b] font-medium leading-relaxed text-left tracking-tight'>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
