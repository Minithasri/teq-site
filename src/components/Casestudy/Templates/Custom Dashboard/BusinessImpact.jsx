'use client';

import Image from 'next/image';

const BusinessImpact = () => {
  return (
    <section className='relative py-12 px-6 md:px-16 lg:px-24 bg-[#F6F7F9] overflow-hidden'>
      {/* Top Right Floating Image - Behind Content */}
      <div className='absolute top-0 right-0 z-0 w-[150px] md:w-[200px] lg:w-[350px]'>
        <div className='relative aspect-[4/3] rounded-[20px] overflow-hidden'>
          <Image
            src='/images/Templates/customdashboard/cd4.png'
            alt='Impact Top'
            fill
            className='object-cover'
          />
        </div>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Section Heading */}
        <h2 className='font-bold mb-8 text-center' style={{ fontSize: '36px' }}>
          Business Impact
        </h2>

        {/* Top Metric Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
          {/* Card 1 */}
          <div className='bg-white p-12 rounded-[30px] flex flex-col items-center justify-center text-center border-2 border-[#F5F5F5] shadow-[0px_8px_22px_rgba(245,95,95,0.08)]'>
            <span className='font-bold mb-4 text-[#0F1729]/80' style={{ fontSize: '44px' }}>
              ~60%
            </span>
            <h3 className='font-bold mb-2' style={{ color: '#151C28', fontSize: '24px' }}>
              Faster Decision-Making
            </h3>
            <p className='leading-relaxed' style={{ color: '#6A7181', fontSize: '16px' }}>
              With AI-generated summaries and real-time insights
            </p>
          </div>

          {/* Card 2 */}
          <div className='bg-white p-12 rounded-[30px] flex flex-col items-center justify-center text-center border-2 border-[#F5F5F5] shadow-[0px_8px_22px_rgba(245,95,95,0.08)]'>
            <span className='font-bold mb-4 text-[#0F1729]/80' style={{ fontSize: '44px' }}>
              50-65%
            </span>
            <h3 className='font-bold mb-2' style={{ color: '#151C28', fontSize: '24px' }}>
              Reduction in Manual Validation
            </h3>
            <p className='leading-relaxed' style={{ color: '#6A7181', fontSize: '16px' }}>
              Through automated data quality checks
            </p>
          </div>
        </div>

        {/* Bottom Detailed Card */}
        <div className='bg-white p-10 md:p-12 lg:p-12 rounded-[30px] border-2 border-[#F5F5F5] shadow-[0px_8px_22px_rgba(245,95,95,0.08)] flex flex-col lg:flex-row justify-between items-center gap-12'>
          {/* Left Content */}
          <div className='space-y-8 max-w-3xl'>
            <h3 className='font-bold' style={{ color: '#151C28', fontSize: '24px' }}>
              Additional Outcomes
            </h3>
            <ul className='space-y-4'>
              {[
                'Improved risk identification and proactive safety management',
                'Enhanced compliance tracking and reduced incident probability',
                'Better user adoption through intuitive and customizable dashboards',
                'Scalable analytics architecture ready for future growth',
              ].map((point, i) => (
                <li key={i} className='flex items-start gap-4'>
                  <div className='w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0 bg-black/80' />
                  <span className='leading-relaxed' style={{ color: '#6A7181', fontSize: '16px' }}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image - Pushed to the right */}
          <div className='relative aspect-video w-full lg:w-[45%] rounded-[20px] overflow-hidden shadow-sm'>
            <Image
              src='/images/Templates/customdashboard/cd5.png'
              alt='Additional Outcomes'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;
