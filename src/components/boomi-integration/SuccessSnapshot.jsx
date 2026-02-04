'use client';

import Image from 'next/image';

const snapshots = [
  {
    industry: 'Global Retailer',
    challenge: 'Supply chain visibility',
    solution: 'Automated supply chain & POS data sync',
    metric: '25%',
    metricDesc: 'reduction in stock-outs',
  },
  {
    industry: 'Healthcare Payer',
    challenge: 'Claims processing delays',
    solution: 'Streamlined claims processing workflows',
    metric: '60%',
    metricDesc: 'faster cycle times',
  },
  {
    industry: 'FMCG Enterprise',
    challenge: 'Customer data silos',
    solution: 'Boomi MDM-enabled unified customer profiles',
    metric: '80%',
    metricDesc: 'Personalized campaigns boosted revenue',
  },
];

const SuccessSnapshot = () => {
  return (
    <section className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 z-20 mb-20'>
      <div className='relative w-full rounded-[20px] overflow-hidden  backdrop-blur-sm'>
        {/* Background Image */}
        <div className='absolute inset-0 -z-10 bg-[#8857C7]'>
          <Image
            src='/images/successbg1.webp'
            alt='Success Background'
            fill
            className='object-cover opacity-100 '
          />
        </div>

        <div className='py-12 px-6 md:px-12 text-center'>
          {/* Header */}
          <div className='mb-12'>
            <h2 className='text-[24px] md:text-[32px] font-medium text-white mb-2'>
              Success Snapshot
            </h2>
            <p className='text-white/90 text-[20px]'>
              Real results from real clients across diverse industries
            </p>
          </div>

          {/* Cards Container */}
          <div className='relative bg-white/10 rounded-2xl border border-[#D6A9E9] backdrop-blur-md overflow-hidden'>
            <div className='grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D6A9E9]'>
              {snapshots.map((item, index) => (
                <div key={index} className='p-8 md:p-10 text-left'>
                  <h3 className='text-[16px] md:text-[20px] font-semibold text-white mb-6'>
                    {item.industry}
                  </h3>

                  <div className='space-y-4 mb-8'>
                    <div>
                      <span className='text-[#1AFFEE] text-sm font-semibold tracking-wider block mb-1'>
                        Challenge:
                      </span>
                      <p className='text-white text-sm leading-snug'>{item.challenge}</p>
                    </div>

                    <div>
                      <span className='text-[#1AFFEE] text-sm font-semibold  tracking-wider block mb-1'>
                        Solution:
                      </span>
                      <p className='text-white text-sm leading-snug'>{item.solution}</p>
                    </div>
                  </div>

                  <div className='flex items-baseline gap-3'>
                    <span className='text-4xl md:text-5xl font-semibold text-white'>
                      {item.metric}
                    </span>
                    <span className='text-white/90 text-sm leading-tight max-w-[220px]'>
                      {item.metricDesc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSnapshot;
