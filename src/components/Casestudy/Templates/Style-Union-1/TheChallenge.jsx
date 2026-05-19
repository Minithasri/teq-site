import React from 'react';

const TheChallenge = () => {
  const challenges = [
    'Sales and inventory data were spread across multiple systems',
    'Reporting processes were manual and time-consuming',
    'No consolidated dashboard for leadership to track end-to-end retail performance',
    'Limited ability to identify stockouts, overstock situations, or sales anomalies in real time',
    'Slow decision-making due to delayed insights',
  ];

  return (
    <section className='w-full py-20 bg-[#F1F5FE]'>
      <div className='max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title */}
        <div className='text-center mb-16'>
          <h2 className='text-[36px] md:text-[40px] font-bold text-[#0F1729]'>The Challenge</h2>
        </div>

        {/* Content Box */}
        <div className='relative bg-white rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 p-8 md:p-14 md:w-[95%] mt-12 mx-auto md:mx-0'>
          <ul className='space-y-5 md:w-[90%]'>
            {challenges.map((item, index) => (
              <li key={index} className='flex items-start gap-4'>
                <div className='w-8 h-8 rounded-full bg-[#FFE4E4] flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <span className='text-[#EF4343] text-[16px] font-bold'>{index + 1}</span>
                </div>
                <span className='text-[#0F1729E5] text-[20px] leading-relaxed'>{item}</span>
              </li>
            ))}
          </ul>

          {/* Overlapping Image */}
          <div className='hidden md:block absolute -top-32 -right-[16%] w-[32%] z-10'>
            <img
              src='/images/Templates/style-union-1/img3.png'
              alt='Retail Challenge'
              className='w-full h-auto object-cover rounded-[24px] shadow-lg'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheChallenge;
