'use client';

import Image from 'next/image';

const Challenges = () => {
  const challenges = [
    'Complex safety data that was difficult for users to interpret',
    'Existing dashboards lacked clarity and actionable insights',
    'Manual validation required to identify missing or incomplete form data',
    'Limited personalization and user-level filtering capabilities',
    'No AI-driven summaries to highlight risks or critical issues',
    'Difficulty in quickly identifying compliance gaps and safety risks',
  ];

  return (
    <section className='py-20 px-6 md:px-16 lg:px-24 bg-[#F0F1F5]'>
      <div className='max-w-7xl mx-auto'>
        {/* Client Overview Section */}
        <div className='mb-12'>
          <h2 className='font-bold mb-6' style={{ color: '#000000', fontSize: '32px' }}>
            CLIENT OVERVIEW
          </h2>
          <p className='leading-relaxed max-w-7xl' style={{ color: '#151C28CC', fontSize: '18px' }}>
            A leading safety management platform provider supporting industries such as construction
            and pipeline operations, focused on improving safety, compliance, and operational
            visibility through data. The platform serves as a critical layer for field teams, safety
            officers, and leadership connecting on-the-ground activity with enterprise-level
            oversight.
          </p>
        </div>

        {/* The Challenge Section */}
        <div className='mb-10'>
          <h2
            className='font-bold mb-6 uppercase tracking-wider'
            style={{ color: '#F23520', fontSize: '32px' }}
          >
            THE CHALLENGE
          </h2>
          <p className='mb-2' style={{ color: '#6A7181', fontSize: '18px' }}>
            The client faced critical barriers preventing their safety data from driving meaningful
            outcomes.
          </p>
        </div>

        {/* Challenge Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className='flex items-center gap-6 py-4 px-6 bg-white rounded-xl border-2 transition-all hover:shadow-md'
              style={{ borderColor: '#F23520', minHeight: '80px' }}
            >
              <div className='flex-shrink-0'>
                <div
                  className='w-12 h-12 rounded-2xl border-2 flex items-center justify-center overflow-hidden'
                  style={{ borderColor: '#F23520' }}
                >
                  <Image
                    src='/images/Templates/customdashboard/cdsvg1.svg'
                    alt='Challenge Icon'
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <p
                className='font-medium leading-snug'
                style={{ color: '#151C28D9', fontSize: '16px' }}
              >
                {challenge}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
