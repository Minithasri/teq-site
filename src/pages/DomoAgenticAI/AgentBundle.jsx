import React, { useState } from 'react';

const accordionItems = [
  {
    sno: '01',
    title: 'Smart Retail Activation',
    subtitle: 'Fashion, Lifestyle, General Retail',
    image: '/images/Cart.svg',
    mainImage: '/images/Retail.jpg',
    cards: [
      {
        title: 'Promotions & Uplift Kit',
        subtitle: 'Promotion Effectiveness, Product Reallocator, Cart Recovery',
        description: 'Boost low-performing SKUs, reduce abandoned baskets.',
      },
      {
        title: 'Stock Intelligence Pack',
        subtitle:
          'Smart Replenishment, Planogram Navigator, Store-to-Store Transfer, Warehouse Allocation',
        description: 'Prevent stockouts, shelf gaps, and optimize product flow.',
      },
      {
        title: 'Customer Targeting Kit',
        subtitle: 'Segmentation, RFM Segmentation, Return Abuse Detection, Dynamic Pricing',
        description: 'Enhance engagement, reduce returns, and protect margins.',
      },
    ],
  },
  {
    sno: '02',
    title: 'Manufacturing Intelligence',
    subtitle: 'Factory Operations, Maintenance, Procurement Teams',
    image: '/images/Cart.svg',
    mainImage: '/images/Retail.jpg',
    cards: [
      {
        title: 'Downtime & Maintenance Kit',
        subtitle: 'Downtime & Maintenance Kit',
        description: 'Reduce production interruptions, improve asset uptime.',
      },
      {
        title: 'Smart Procurement Pack',
        subtitle: 'Procurement, Inventory Disposal',
        description: 'Streamline sourcing and minimize wastage.',
      },
      {
        title: 'Plant Safety & Scheduling Pack',
        subtitle: 'Capacity Conflict, Hazard Alerts, Supply Chain Efficiency',
        description: 'Capacity Conflict, Hazard Alerts, Supply Chain Efficiency',
      },
    ],
  },
  {
    sno: '03',
    title: 'Digital Growth & Marketing Optimizer',
    subtitle: 'Digital Marketing, CRM, Growth Teams',
    image: '/images/Cart.svg',
    mainImage: '/images/Retail.jpg',
    cards: [
      {
        title: 'Performance Marketing Starter Kit',
        subtitle: 'Campaign Performance, Budget Allocation',
        description: 'Maximize ROI, reduce wasted ad spend.',
      },
      {
        title: 'Search & Channel Growth Pack',
        subtitle: 'SEO Mapper, Influencer Fit, Brand Sentiment',
        description: 'Identify growth opportunities across digital channels.',
      },
      {
        title: 'Retention & CRM Pack',
        subtitle: 'Email/CRM Optimization, D2C Cross-Sell/Upsell',
        description: 'Increase customer stickiness and lifetime value.',
      },
    ],
  },
  {
    sno: '04',
    title: 'Smart Frontline Sales Enablement',
    subtitle: 'SDRs, Sales Teams, Pre-Sales Operations',
    image: '/images/Cart.svg',
    mainImage: '/images/Retail.jpg',
    cards: [
      {
        title: 'SDR Acceleration Kit',
        subtitle: 'Lead Distribution, Initial Call Support',
        description: 'Faster lead response, higher conversion rates.',
      },
      {
        title: 'Pitch Intelligence Pack',
        subtitle: 'Pitch Deck Selector, Competitor Pitch Selector',
        description: 'Sharper, context-aware sales pitches.',
      },
      {
        title: 'Lead Quality Kit',
        subtitle: 'Lead Enrichment, Smart Routing, Proposal Intelligence',
        description: 'Improved lead targeting and messaging precision.',
      },
    ],
  },
  {
    sno: '05',
    title: 'Smart Retail Activation',
    subtitle: 'Fashion, Lifestyle, General Retail',
    image: '/images/Cart.svg',
    mainImage: '/images/Retail.jpg',
    cards: [
      {
        title: 'Menu Growth Kit',
        subtitle: 'Menu Optimizer, Food Waste Agent',
        description: 'Reduce food wastage and boost menu performance.',
      },
      {
        title: 'Procurement Pack',
        subtitle: 'Raw Material Procurement, Invoice Digitization',
        description: 'Accelerate vendor processing, reduce manual errors',
      },
    ],
  },
  {
    sno: '06',
    title: 'Logistics & Supply Chain Optimizer',
    subtitle: 'Logistics Teams, Delivery Managers, Warehouse Ops',
    image: '/images/Cart.svg',
    mainImage: '/images/Retail.jpg',
    cards: [
      {
        title: 'Transport Efficiency Pack',
        subtitle: 'Fleet Routing, Last-Mile Delivery',
        description: 'Lower logistics costs and improve delivery speed.',
      },
      {
        title: 'Forecasting & Planning Kit',
        subtitle: 'Demand Forecast, Cost Optimizer',
        description: 'Accurate planning, lower operational cost.',
      },
    ],
  },
  {
    sno: '07',
    title: 'IT Services & Enterprise Support',
    subtitle: 'Enterprise IT, HR Operations, Support Teams',
    image: '/images/Cart.svg',
    mainImage: '/images/Retail.jpg',
    cards: [
      {
        title: 'Incident & SLA Kit',
        subtitle: 'SmartResolver, SLA Breach Predictor',
        description: 'Faster issue resolution, improved SLAs.',
      },
      {
        title: 'HR & Talent Pack',
        subtitle: 'Recruitment Intelligence, Attrition Predictor',
        description: 'Better hiring outcomes and reduced attrition.',
      },
      {
        title: 'IT Operations Pack',
        subtitle: 'Asset Utilization, Auto-Approval',
        description: 'Smarter IT spend, leaner operations.',
      },
    ],
  },
  {
    sno: '08',
    title: 'Real Estate Intelligence',
    subtitle: 'Property Managers, Leasing Teams',
    image: '/images/Cart.svg',
    mainImage: '/images/Retail.jpg',
    cards: [
      {
        title: 'Smart Real Estate Pack',
        subtitle: 'Tenant Sentiment Intelligence, Lease Agreement Extraction',
        description: 'Reduce tenant churn and automate lease handling.',
      },
    ],
  },
];

const bgColors = [
  '#6E2B8B',
  '#8835AB',
  '#9A3CC3',
  '#A654CA',
  '#B673D4',
  '#C28ADB',
  '#D2A9E5',
  '#E0C4ED',
];

const AgentBundle = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-full bg-white'>
      {/* Header */}
      <div className='pt-[60px] md:pt-[80px] lg:pt-[100px] flex justify-center'>
        <div className='w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-[24px] sm:text-[28px] lg:text-[32px] leading-[40px] sm:leading-[48px] lg:leading-[55px] font-medium bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-transparent bg-clip-text'>
            Agent Bundles
          </h1>
          <p className='mt-4 sm:mt-5 text-[14px] sm:text-[16px] font-medium text-[#404040] max-w-2xl mx-auto mb-[40px] sm:mb-[50px] lg:mb-[60px] px-4 sm:px-0'>
            Pre-configured AI agent packages designed for specific industries and use cases. Deploy
            intelligent automation across your entire organization with just one click.
          </p>
        </div>
      </div>
      {accordionItems.map((item, index) => {
        const isOpened = openIndex === index;

        let textColor,
          subtitleColor,
          bundleTextColor,
          bundleBorderColor,
          badgeTextColor,
          badgeBorderColor,
          tickColor;

        if (index < 4) {
          textColor = '#FFFFFF';
          subtitleColor = '#E5E5E5';
          bundleTextColor = '#FAFAFA';
          bundleBorderColor = '#E5E5E5';
          badgeTextColor = '#FAFAFA';
          badgeBorderColor = '#E5E5E5';
          tickColor = '#FFFFFF';
        } else {
          textColor = '#404040';
          subtitleColor = '#525252';
          bundleTextColor = '#404040';
          bundleBorderColor = '#262626';
          badgeTextColor = '#404040';
          badgeBorderColor = '#262626';
          tickColor = '#404040';
        }

        return (
          <div
            key={index}
            className='relative w-full overflow-hidden'
            style={{ backgroundColor: bgColors[index], margin: 0, padding: 0 }}
          >
            {/* Divider without white gap */}
            <div className='absolute bottom-0 left-0 w-full h-[1px] bg-[#D6D6D6]/30 pointer-events-none' />

            <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <button
                onClick={() => toggleAccordion(index)}
                className='w-full flex justify-between items-center text-left py-6 sm:py-7 lg:py-9'
              >
                <div className='flex items-start gap-4 sm:gap-5 lg:gap-6'>
                  {/* icon only when opened */}
                  {isOpened && (
                    <div
                      className='flex-shrink-0 flex items-center justify-center w-20 h-20'
                      style={{
                        background: '#FFFFFF1F',
                        borderRadius: '8px',
                      }}
                    >
                      <img src={item.image} alt={item.title} className='w-10 h-10 object-contain' />
                    </div>
                  )}

                  <div className='flex flex-col items-start'>
                    <div className='flex items-center bg-transparent rounded-[12px] sm:rounded-[15px] mb-2 border border-[#7B309C] h-[35px] sm:h-[40px] lg:h-[45px]'>
                      <div className='flex items-center justify-center h-full px-2 sm:px-3 rounded-l-[12px] sm:rounded-l-[15px]'>
                        <span
                          className='text-[12px] sm:text-[13px] lg:text-[14px] font-semibold'
                          style={{ color: textColor }}
                        >
                          {item.sno}
                        </span>
                      </div>
                      <div className='flex items-center px-2 sm:px-3 rounded-r-[12px] sm:rounded-r-[15px]'>
                        <span
                          className='text-[16px] sm:text-[18px] lg:text-[20px] font-medium'
                          style={{ color: textColor }}
                        >
                          {item.title}
                        </span>
                      </div>
                    </div>
                    <span
                      className='font-normal text-[14px] sm:text-[15px] lg:text-base leading-tight max-w-[280px] sm:max-w-none'
                      style={{ color: subtitleColor }}
                    >
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {isOpened && (
                  <div
                    className='relative flex items-center justify-center px-3 sm:px-4 rounded-md border overflow-hidden hidden sm:flex'
                    style={{
                      height: '32px',
                      border: `1px solid ${bundleBorderColor}`,
                      borderRadius: '6px',
                      backgroundColor: 'transparent',
                      color: bundleTextColor,
                      fontSize: '12px',
                      fontWeight: '500',
                      lineHeight: '26px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.cards.length} Specialized Sub-bundle{item.cards.length !== 1 ? 's' : ''}
                  </div>
                )}
              </button>

              {/* Expanded Content with Glassy Effect */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isOpened ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div
                  className='grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mx-2 sm:mx-3 lg:mx-4 my-4 sm:my-5 lg:my-6
             p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl
             '
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06))',
                    backdropFilter: 'saturate(120%) blur(12px)',
                    WebkitBackdropFilter: 'saturate(120%) blur(12px)',
                  }}
                >
                  {/* For mobile: Show image first, then cards */}
                  <div className='xl:hidden flex flex-col space-y-4 sm:space-y-5'>
                    {/* Image Section for Mobile */}
                    <div className='relative h-full flex flex-col'>
                      <div
                        className='absolute inset-0 rounded-[10px] sm:rounded-[12px] lg:rounded-[14px] pointer-events-none'
                        style={{
                          padding: '1px',
                          background: 'linear-gradient(to right, #7030B1, #B56DD3)',
                          WebkitMask:
                            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                        }}
                      />
                      <div className='p-3 sm:p-4 lg:p-5 h-full flex flex-col rounded-[10px] sm:rounded-[12px] lg:rounded-[14px] overflow-hidden'>
                        <div className='flex items-center gap-1 sm:gap-2 mb-4 sm:mb-5 lg:mb-6'>
                          <div
                            className='flex items-center justify-center rounded-md border flex-shrink-0'
                            style={{
                              width: '20px',
                              height: '20px',
                              border: `1px solid ${badgeBorderColor}`, // Using badgeBorderColor
                              borderRadius: '5px',
                              backgroundColor: 'transparent',
                            }}
                          >
                            <div className='w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5'>
                              <svg viewBox='0 0 14 14' fill='none' className='w-full h-full'>
                                <path
                                  d='M2.91675 7.00008L5.25008 9.33341L11.0834 4.66675'
                                  stroke={tickColor} // Using tickColor
                                  strokeWidth='2'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                              </svg>
                            </div>
                          </div>

                          <div
                            className='flex items-center px-2 sm:px-3 rounded-md border'
                            style={{
                              paddingLeft: '8px',
                              paddingRight: '8px',
                              minWidth: '110px',
                              height: '20px',
                              border: `1px solid ${badgeBorderColor}`, // Using badgeBorderColor
                              borderRadius: '5px',
                              backgroundColor: 'transparent',
                              fontSize: '12px',
                              fontWeight: '500',
                              color: badgeTextColor, // Using badgeTextColor
                            }}
                          >
                            Agents Included
                          </div>
                        </div>

                        <div className='flex-grow flex flex-col'>
                          <div className='flex-grow flex items-center justify-center'>
                            <img
                              src={item.mainImage}
                              alt={item.title}
                              className='w-full h-[200px] sm:h-[250px] object-cover rounded-lg sm:rounded-xl shadow-xl'
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cards for Mobile - FIXED BORDER RADIUS */}
                    <div className='space-y-3 sm:space-y-4'>
                      {item.cards.map((card, cardIndex) => (
                        <div
                          key={cardIndex}
                          className='rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between w-full'
                          style={{
                            backgroundColor: '#FFFFFF',
                            minHeight: '120px',
                            boxSizing: 'border-box',
                            // Consistent border radius across all devices
                            borderRadius: '8px', // base/mobile
                          }}
                        >
                          <div>
                            <h3 className='font-semibold text-[#404040] mb-1 sm:mb-2 text-[14px] sm:text-[15px] lg:text-[16px]'>
                              {card.title}
                            </h3>
                            <p className='text-gray-600 mb-2 sm:mb-3 text-[11px] sm:text-[12px] lg:text-[13px] font-normal'>
                              {card.subtitle}
                            </p>
                          </div>

                          <div
                            className='mb-1 sm:mb-2'
                            style={{
                              borderTop: '1px dashed #D1D5DB',
                              backgroundImage:
                                'repeating-linear-gradient(to right, #D1D5DB 0, #D1D5DB 12px, transparent 12px, transparent 24px)',
                              height: '1px',
                            }}
                          />

                          <div className='flex items-start gap-1 sm:gap-2'>
                            <img
                              src='/images/Sparks.svg'
                              alt='benefit'
                              className='w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0'
                            />
                            <p className='text-[#404040] font-medium leading-relaxed text-[11px] sm:text-[12px] lg:text-[13px]'>
                              {card.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* For Desktop (xl and above): Original layout */}
                  <div className='hidden xl:block space-y-3 sm:space-y-4'>
                    {item.cards.map((card, cardIndex) => (
                      <div
                        key={cardIndex}
                        className='rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between w-full'
                        style={{
                          backgroundColor: '#FFFFFF',
                          minHeight: '120px',
                          boxSizing: 'border-box',
                          // Consistent border radius with mobile
                          borderRadius: '8px', // base for desktop too
                        }}
                      >
                        <div>
                          <h3 className='font-semibold text-[#404040] mb-1 sm:mb-2 text-[14px] sm:text-[15px] lg:text-[16px]'>
                            {card.title}
                          </h3>
                          <p className='text-gray-600 mb-2 sm:mb-3 text-[11px] sm:text-[12px] lg:text-[13px] font-normal'>
                            {card.subtitle}
                          </p>
                        </div>

                        <div
                          className='mb-1 sm:mb-2'
                          style={{
                            borderTop: '1px dashed #D1D5DB',
                            backgroundImage:
                              'repeating-linear-gradient(to right, #D1D5DB 0, #D1D5DB 12px, transparent 12px, transparent 24px)',
                            height: '1px',
                          }}
                        />

                        <div className='flex items-start gap-1 sm:gap-2'>
                          <img
                            src='/images/Sparks.svg'
                            alt='benefit'
                            className='w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0'
                          />
                          <p className='text-[#404040] font-medium leading-relaxed text-[11px] sm:text-[12px] lg:text-[13px]'>
                            {card.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Right Column - Desktop only */}
                  <div className='hidden xl:flex flex-col h-full'>
                    <div className='relative h-full flex flex-col'>
                      <div
                        className='absolute inset-0 rounded-[10px] sm:rounded-[12px] lg:rounded-[14px] pointer-events-none'
                        style={{
                          padding: '1px',
                          background: 'linear-gradient(to right, #7030B1, #B56DD3)',
                          WebkitMask:
                            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          maskComposite: 'exclude',
                        }}
                      />
                      <div className='p-3 sm:p-4 lg:p-5 h-full flex flex-col rounded-[10px] sm:rounded-[12px] lg:rounded-[14px] overflow-hidden'>
                        <div className='flex items-center gap-1 sm:gap-2 mb-4 sm:mb-5 lg:mb-6'>
                          <div
                            className='flex items-center justify-center rounded-md border flex-shrink-0'
                            style={{
                              width: '20px',
                              height: '20px',
                              border: `1px solid ${badgeBorderColor}`, // Using badgeBorderColor
                              borderRadius: '5px',
                              backgroundColor: 'transparent',
                            }}
                          >
                            <div className='w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5'>
                              <svg viewBox='0 0 14 14' fill='none' className='w-full h-full'>
                                <path
                                  d='M2.91675 7.00008L5.25008 9.33341L11.0834 4.66675'
                                  stroke={tickColor} // Using tickColor
                                  strokeWidth='2'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                              </svg>
                            </div>
                          </div>

                          <div
                            className='flex items-center px-2 sm:px-3 rounded-md border'
                            style={{
                              paddingLeft: '8px',
                              paddingRight: '8px',
                              minWidth: '110px',
                              height: '20px',
                              border: `1px solid ${badgeBorderColor}`, // Using badgeBorderColor
                              borderRadius: '5px',
                              backgroundColor: 'transparent',
                              fontSize: '12px',
                              fontWeight: '500',
                              color: badgeTextColor, // Using badgeTextColor
                            }}
                          >
                            Agents Included
                          </div>
                        </div>

                        <div className='flex-grow flex flex-col'>
                          <div className='flex-grow flex items-center justify-center'>
                            <img
                              src={item.mainImage}
                              alt={item.title}
                              className='w-full h-[350px] object-cover rounded-lg sm:rounded-xl shadow-xl'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AgentBundle;
