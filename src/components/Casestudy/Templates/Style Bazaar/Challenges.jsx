'use client';

import Image from 'next/image';

export default function Challenges() {
  const challenges = [
    {
      icon: '/images/Templates/style_bazaar/stylesvg1.svg',
      title: 'Manual Excel\nDependency',
      description:
        '15+ reports manually refreshed weekly, consuming analyst time across CRM, Operations, Planning, and Supply Chain.',
    },
    {
      icon: '/images/Templates/style_bazaar/stylesvg2.svg',
      title: 'No Real-Time\nVisibility',
      description:
        'Leadership lacked timely visibility into sales and inventory performance across 100+ retail stores.',
    },
    {
      icon: '/images/Templates/style_bazaar/stylesvg3.svg',
      title: 'Frequent Data\nErrors',
      description:
        'Manual POS data consolidation introduced reporting errors and conflicting metrics across departments.',
    },
    {
      icon: '/images/Templates/style_bazaar/stylesvg4.svg',
      title: 'Unstandardized\nKPIs',
      description:
        'Absence of standardized metrics caused inconsistent performance measurement across teams.',
    },
    {
      icon: '/images/Templates/style_bazaar/stylesvg5.svg',
      title: 'Departmental\nData Silos',
      description:
        'POS, CRM, and inventory data lived in disconnected systems, limiting cross-functional analysis.',
    },
    {
      icon: '/images/Templates/style_bazaar/stylesvg6.svg',
      title: 'Weekly Reporting\nLatency',
      description:
        'Data refreshed only weekly, leaving decision-makers without current insights for strategic actions.',
    },
  ];

  return (
    <section className='relative w-full bg-white py-4 md:py-2'>
      <div className='relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24'>
        <div className='flex flex-col xl:flex-row -mt-8 items-center justify-between gap-8 xl:gap-12 w-full'>
          {/* Cards Grid Container */}
          <div className='w-full xl:w-auto flex justify-center xl:justify-start'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(3,288px)] auto-rows-auto xl:auto-rows-[219px] gap-4 w-full'>
              {challenges.map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '24px',
                    borderRadius: '16px',
                    border: '2px solid #F5F5F5',
                    boxSizing: 'border-box',
                    boxShadow: '1px 1px 4px 2px #F5F5F5',
                    transition: 'box-shadow 0.2s',
                  }}
                >
                  {/* Header: Icon + Title */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '12px',
                    }}
                  >
                    <div style={{ flexShrink: 0, marginTop: '2px' }}>
                      <Image
                        src={item.icon}
                        alt=''
                        width={20}
                        height={20}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <h3
                      style={{
                        color: '#262626',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '1.3',
                        whiteSpace: 'pre-line',
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  {/* Description */}
                  <p
                    style={{
                      color: '#6B7280',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '1.6',
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Image */}
          <div className='hidden xl:flex w-full xl:w-[407px] justify-end flex-shrink-0 overflow-visible'>
            <div
              className='relative -top-40 -right-10 overflow-visible'
              style={{ width: '100%', maxWidth: '407px', height: '612px' }}
            >
              <Image
                src='/images/Templates/style_bazaar/style_i2.png'
                alt='Shopper with bags'
                fill
                className='object-contain'
              />
            </div>
          </div>

          {/* Mobile Fallback Image */}
          <div className='xl:hidden w-full flex justify-center mt-8'>
            <div className='relative w-full max-w-[407px] h-[400px]'>
              <Image
                src='/images/Templates/style_bazaar/style_i2.png'
                alt='Shopper with bags'
                fill
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
