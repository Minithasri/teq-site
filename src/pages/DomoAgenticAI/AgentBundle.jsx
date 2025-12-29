import Image from 'next/image';

const bundles = [
  {
    id: 1,
    title: 'Smart Retail Activation',
    subtitle: 'Fashion, Lifestyle, General Retail',
    icon: '/images/DomoPage/img1.svg',
    image: '/images/DomoPage/image1.png',
    subBundles: [
      {
        title: 'Promotions & Uplift Kit',
        features: 'Promotion Effectiveness, Product Reallocator, Cart Recovery',
        benefit: 'Boost low-performing SKUs, reduce abandoned baskets.',
      },
      {
        title: 'Stock Intelligence Pack',
        features: 'Inventory Optimizer, Demand Forecasting, Stockout Prevention',
        benefit: 'Optimize stock levels and improve turnover ratio.',
      },
      {
        title: 'Customer Experience Suite',
        features: 'Feedback Analysis, Personalization Agent, Loyalty Booster',
        benefit: 'Enhance customer satisfaction and retention.',
      },
    ],
  },
  {
    id: 2,
    title: 'Manufacturing Intelligence',
    subtitle: 'Factory Operations, Maintenance, Procurement Teams',
    icon: '/images/DomoPage/img2.svg',
    image: '/images/DomoPage/image2.png',
    subBundles: [
      {
        title: 'Downtime & Maintenance Kit',
        features: 'Root Cause Analysis, Auto-Approve Maintenance',
        benefit: 'Reduce production interruptions, improve asset uptime.',
      },
      {
        title: 'Smart Procurement Pack',
        features: 'Procurement, Inventory Disposal',
        benefit: 'Streamline sourcing and minimize wastage.',
      },
      {
        title: 'Plant Safety & Scheduling Pack',
        features: 'Capacity Conflict, Hazard Alerts, Supply Chain Efficiency',
        benefit: 'Safer operations and well-sequenced production.',
      },
    ],
  },
  {
    id: 3,
    title: 'Digital Growth & Marketing Optimizer',
    subtitle: 'Digital Marketing, CRM, Growth Teams',
    icon: '/images/DomoPage/img3.svg',
    image: '/images/DomoPage/image3.png',
    subBundles: [
      {
        title: 'Performance Marketing Starter Kit',
        features: 'Campaign Performance, Budget Allocation',
        benefit: 'Maximize ROI, reduce wasted ad spend.',
      },
      {
        title: 'Search & Channel Growth Pack',
        features: 'SEO Mapper, Influencer Fit, Brand Sentiment',
        benefit: 'Identify growth opportunities across digital channels.',
      },
      {
        title: 'Retention & CRM Pack',
        features: 'Email/CRM Optimization, D2C Cross-Sell/Upsell',
        benefit: 'Increase customer stickiness and lifetime value.',
      },
    ],
  },
  {
    id: 4,
    title: 'Smart Frontline Sales Enablement',
    subtitle: 'SDRs, Sales Teams, Pre-Sales Operations',
    icon: '/images/DomoPage/img4.svg',
    image: '/images/DomoPage/image4.png',
    subBundles: [
      {
        title: 'SDR Acceleration Kit',
        features: 'Lead Distribution, Initial Call Support',
        benefit: 'Faster lead response, higher conversion rates.',
      },
      {
        title: 'Pitch Intelligence Pack',
        features: 'Pitch Deck Selector, Competitor Pitch Selector',
        benefit: 'Sharper, context-aware sales pitches.',
      },
      {
        title: 'Lead Quality Kit',
        features: 'Lead Enrichment, Smart Routing, Proposal Intelligence',
        benefit: 'Improved lead targeting and messaging precision.',
      },
    ],
  },
  {
    id: 5,
    title: 'Food & Beverage SmartOps',
    subtitle: 'QSRs, Restaurant Chains, Food Service Ops',
    icon: '/images/DomoPage/img5.svg',
    image: '/images/DomoPage/image5.png',
    subBundles: [
      {
        title: 'Menu Growth Kit',
        features: 'Menu Optimizer, Food Waste Agent',
        benefit: 'Reduce food wastage and boost menu performance.',
      },
      {
        title: 'Procurement Pack',
        features: 'Raw Material Procurement, Invoice Digitization',
        benefit: 'Accelerate vendor processing, reduce manual errors.',
      },
    ],
  },
  {
    id: 6,
    title: 'Logistics & Supply Chain Optimizer',
    subtitle: 'Logistics Teams, Delivery Managers, Warehouse Ops',
    icon: '/images/DomoPage/img6.svg',
    image: '/images/DomoPage/image6.png',
    subBundles: [
      {
        title: 'Transport Efficiency Pack',
        features: 'Fleet Routing, Last-Mile Delivery',
        benefit: 'Lower logistics costs and improve delivery speed.',
      },
      {
        title: 'Forecasting & Planning Kit',
        features: 'Demand Forecast, Cost Optimizer',
        benefit: 'Accurate planning, lower operational cost.',
      },
    ],
  },
  {
    id: 7,
    title: 'IT Services & Enterprise Support',
    subtitle: 'Enterprise IT, HR Operations, Support Teams',
    icon: '/images/DomoPage/img7.svg',
    image: '/images/DomoPage/image7.png',
    subBundles: [
      {
        title: 'Incident & SLA Kit',
        features: 'SmartResolver, SLA Breach Predictor',
        benefit: 'Faster issue resolution, improved SLAs.',
      },
      {
        title: 'HR & Talent Pack',
        features: 'Recruitment Intelligence, Attrition Predictor',
        benefit: 'Better hiring outcomes and reduced attrition.',
      },
      {
        title: 'IT Operations Pack',
        features: 'Asset Utilization, Auto-Approval',
        benefit: 'Smarter IT spend, leaner operations.',
      },
    ],
  },
  {
    id: 8,
    title: 'Real Estate Intelligence',
    subtitle: 'Property Managers, Leasing Teams',
    icon: '/images/DomoPage/img8.svg',
    image: '/images/DomoPage/image8.png',
    subBundles: [
      {
        title: 'Smart Real Estate Pack',
        features: 'Tenant Sentiment Intelligence, Lease Agreement Extraction',
        benefit: 'Reduce tenant churn and automate lease handling.',
      },
    ],
  },
];

const AgentBundle = () => {
  return (
    <section className='w-full bg-white py-16 lg:py-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B35BC] to-[#BC6DD3] mb-6 pb-2'>
            Agent Bundles
          </h2>
          <p className='max-w-3xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed'>
            Pre-configured AI agent packages designed for specific industries and use cases. Deploy
            <br className='hidden md:block' />
            intelligent automation across your entire organization with just one click.
          </p>
        </div>

        {/* Grid Container - Using 6 cols to handle the 3-up / 2-up split */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6'>
          {bundles.map((bundle, index) => {
            // Determine span: First 6 items span 2 cols (3 per row), Last 2 span 3 cols (2 per row)
            const isLastRow = index >= 6;
            const colSpanClass = isLastRow ? 'lg:col-span-3' : 'lg:col-span-2';

            return (
              <div
                key={bundle.id}
                className={`relative group rounded-2xl overflow-hidden shadow-lg ${colSpanClass}`}
                style={{ height: '480px' }}
              >
                {/* Background Image - Slight zoom on hover */}
                <Image
                  src={bundle.image}
                  alt={bundle.title}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />

                {/* Initial Content (Fades out on hover) */}
                <div className='absolute inset-0 p-6 flex flex-col z-10 transition-opacity duration-300 group-hover:opacity-0'>
                  {/* Icon */}
                  <div className='w-8 h-8 mb-4'>
                    <Image
                      src={bundle.icon}
                      alt='icon'
                      width={32}
                      height={32}
                      className='object-contain'
                      style={{ filter: 'brightness(0) invert(1)' }}
                    />
                  </div>

                  {/* Title Badge */}
                  <div className='inline-flex items-start gap-3 px-4 py-3 rounded-xl border border-purple-400 mb-3 w-fit backdrop-blur-sm bg-black/20'>
                    <span className='text-white font-semibold text-lg leading-none pt-1 shrink-0'>
                      {bundle.id}.
                    </span>
                    <span className='text-white font-semibold text-[18px] leading-snug tracking-wide'>
                      {bundle.title}
                    </span>
                  </div>

                  {/* Subtitle */}
                  <p className='text-gray-300 text-[15px] font-medium leading-relaxed max-w-sm drop-shadow-md'>
                    {bundle.subtitle}
                  </p>
                </div>

                {/* HOVER OVERLAY - Monochrome / Grayscale */}
                <div className='absolute inset-0 bg-[#FAFAFA] z-20 flex flex-col transition-transform duration-500 translate-y-full group-hover:translate-y-0 rounded-2xl overflow-hidden'>
                  {/* Overlay Header */}
                  <div className='p-6 pb-4 border-b border-gray-200 bg-white shrink-0'>
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 border border-gray-200'>
                        {/* Icon in Black/Dark Gray */}
                        <Image
                          src={bundle.icon}
                          alt='icon'
                          width={24}
                          height={24}
                          className='object-contain'
                          style={{ filter: 'brightness(0)' }}
                        />
                      </div>
                      <div>
                        <h3 className='text-lg font-bold text-gray-900 leading-tight'>
                          {bundle.title}
                        </h3>
                        <p className='text-sm text-gray-500 mt-0.5'>
                          {bundle.subBundles?.length || 3} Specialized Sub-bundles
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Content */}
                  <div className='flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAFAFA]'>
                    {bundle.subBundles &&
                      bundle.subBundles.map((sub, idx) => (
                        <div
                          key={idx}
                          className='bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow'
                        >
                          <div className='flex items-start gap-3 mb-3'>
                            <div className='w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center shrink-0 text-white'>
                              <span className='text-xs'>⚡</span>
                            </div>
                            <div>
                              <h4 className='font-bold text-gray-900 text-[16px]'>{sub.title}</h4>
                            </div>
                          </div>

                          {/* Tag */}
                          <div className='mb-3'>
                            <span className='inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200 text-[10px] font-bold tracking-wider uppercase'>
                              AGENTS INCLUDED
                            </span>
                          </div>

                          <p className='text-gray-600 text-sm leading-relaxed mb-3'>
                            {sub.features}
                          </p>

                          <div className='flex items-start gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200'>
                            <div className='mt-0.5 min-w-[14px]'>
                              {/* Simple Gray Checkmark */}
                              <svg
                                width='14'
                                height='14'
                                viewBox='0 0 14 14'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <circle cx='7' cy='7' r='7' fill='#E5E7EB' />
                                <circle cx='7' cy='7' r='3.5' fill='#374151' />
                              </svg>
                            </div>
                            <p className='text-xs font-medium text-gray-700 leading-snug'>
                              {sub.benefit}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgentBundle;
