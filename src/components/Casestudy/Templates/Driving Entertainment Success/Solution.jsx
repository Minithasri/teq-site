'use client';

import Image from 'next/image';

export default function SolutionSection() {
  const solutionPoints = [
    {
      bold: 'Artist Performance Dashboards',
      text: 'Showcased metrics like ticket sales, fan engagement, and revenue impact per artist',
    },
    {
      bold: 'Event Analytics Dashboards',
      text: 'Provided real-time insights into attendance, revenue, and audience demographics',
    },
    {
      bold: 'Engagement KPIs',
      text: 'Monitored fan interactions across digital platforms and live events',
    },
    {
      bold: 'Executive Summaries',
      text: 'Leadership views with drill-down into artist, event, and audience data',
    },
    { bold: 'Automation', text: 'Reduced manual reporting by integrating multiple data sources' },
  ];

  const highlights = [
    'Centralized dashboards for artist and event performance',
    'Real-time visibility into engagement, revenue, and demographics',
    'Drill-down from portfolio → event → artist-level performance',
    'Standardized KPIs across events for consistency',
    'Automated reporting with near real-time refreshes',
  ];

  return (
    <div className="w-full bg-white py-10 px-4 md:py-12 md:px-8 flex flex-col items-center gap-10 font-['Poppins'] select-none">
      {/* ================= CONTAINER 1: GWC'S SOLUTION ================= */}
      <section className='relative w-full max-w-[1368px] bg-white rounded-[16px] border border-[#19BD2C] p-5 sm:p-8 lg:p-[33px] flex flex-col justify-between min-h-[338px] gap-6'>
        <div className='z-10 w-full lg:max-w-[75%]'>
          {/* Header Block: Icon + Title */}
          <div className='flex items-center gap-[12px] mb-4 md:mb-5'>
            {/* Green Bulb Icon */}
            <div
              className='shrink-0 flex items-center justify-center text-white'
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '12px',
                background: '#129929',
              }}
            >
              {/* Lightbulb SVG */}
              <svg
                width='20'
                height='20'
                viewBox='0 0 24 24'
                fill='none'
                stroke='#fff'
                strokeWidth='2.5'
              >
                <path d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5' />
                <line x1='10' y1='18' x2='16' y2='18' />
                <line x1='10' y1='22' x2='16' y2='22' />
              </svg>
            </div>

            {/* Title */}
            <h2
              className='text-[26px] leading-[30px] sm:text-[30px] sm:leading-[34px] lg:text-[34px] lg:leading-[32px] font-bold text-black'
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              GWC's Solution
            </h2>
          </div>

          {/* Sub Heading */}
          <h3
            className='text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] font-bold text-black mb-4'
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            GWC designed and implemented an Artist and Music Performance Dashboard:
          </h3>

          {/* Points Content List */}
          <ul className='flex flex-col gap-3 w-full list-none p-0 m-0'>
            {solutionPoints.map((pt, i) => (
              <li key={i} className='flex items-start gap-2'>
                <span className='text-[#129929] text-[24px] sm:text-[30px] leading-none mt-[-4px] sm:mt-[-2px]'>
                  •
                </span>
                <p className='m-0 text-[15px] leading-[22px] sm:text-[16px] sm:leading-[24px] lg:text-[18px] lg:leading-[24px]'>
                  <span
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#000000' }}
                  >
                    {pt.bold}
                  </span>
                  <span
                    style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 400, color: '#000000' }}
                  >
                    {' – '}
                    {pt.text}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Floating Puzzle Right-Side Graphics Component */}
        <div className='relative lg:absolute w-full max-w-[240px] h-[190px] sm:max-w-[280px] sm:h-[220px] lg:w-[307px] lg:h-[246px] mx-auto lg:mx-0 lg:right-5 lg:bottom-[-5px] z-0 pointer-events-none shrink-0 opacity-40 lg:opacity-100'>
          <Image
            src='/images/Templates/templatez/jamm/jammsol.png'
            alt='Solution puzzle assembly concept illustration'
            fill
            priority
            className='object-contain'
          />
        </div>
      </section>

      {/* ================= CONTAINER 2: SOLUTION HIGHLIGHTS ================= */}
      <section className='w-full max-w-[1368px] bg-white rounded-[16px] border border-[#19BD2C] p-5 sm:p-8 lg:p-[33px] flex flex-col min-h-[338px]'>
        {/* Header Block: Wrench Icon + Title */}
        <div className='flex items-center gap-[12px] mb-6 lg:mb-8'>
          <div
            className='shrink-0 flex items-center justify-center text-white'
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '12px',
              background: '#129929',
            }}
          >
            {/* Wrench / Maintenance SVG icon */}
            <svg
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#fff'
              strokeWidth='2.5'
            >
              <path d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' />
            </svg>
          </div>

          <h2
            className='text-[26px] leading-[30px] sm:text-[30px] sm:leading-[34px] lg:text-[34px] lg:leading-[32px] font-bold text-black'
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Solution Highlights
          </h2>
        </div>

        {/* Highlight Checklist Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
          {highlights.map((text, idx) => (
            <div
              key={idx}
              className='flex items-center pl-4 pr-3 w-full h-auto min-h-[58px] py-3 rounded-[12px]'
              style={{
                background: '#1299291A', // 10% opacity green fill tint
                border: '1px solid #12992966', // 40% opacity green stroke border
                boxSizing: 'border-box',
              }}
            >
              {/* Checkmark indicator wrapper */}
              <span
                className='text-[#129929] font-bold text-lg mr-3 select-none flex items-center shrink-0'
                style={{ fontFamily: 'sans-serif' }}
              >
                ✓
              </span>

              <p
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 400,
                  color: '#21242C',
                }}
                className='text-[15px] sm:text-[16px] lg:text-[18px] leading-tight md:line-clamp-2 md:whitespace-normal'
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
