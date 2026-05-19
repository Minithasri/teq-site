import React from 'react';

const BeforeSolution = () => {
  const painPoints = [
    {
      title: 'Weekly',
      desc: 'Sales reporting cycle instead of real-time',
    },
    {
      title: 'Inconsistent',
      desc: 'Inventory accuracy, often reactive adjustments',
    },
    {
      title: 'No Integration',
      desc: 'Customer engagement not tied to sales data',
    },
    {
      title: 'Heavy Manual',
      desc: 'Manual effort in report preparation',
    },
  ];

  return (
    <section className='relative w-full py-14 bg-white'>
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: 'url(/images/Templates/lskg/img3.png)',
          backgroundSize: '100% auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          opacity: 0.2,
        }}
      ></div>
      {/* Bottom fade gradient to blend seamlessly into next section */}
      <div className='absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-0'></div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-[32px] font-bold text-[#0F1729] mb-3'>Before the Solution</h2>
          <p className='text-[#000000] font-medium text-[18px]'>
            The state of reporting before transformation
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {painPoints.map((point, index) => (
            <div
              key={index}
              className='bg-[#FFFFFF] rounded-[12px] p-[25px] border border-[#3C83F633] flex flex-col items-start transition-transform hover:-translate-y-1 duration-300'
            >
              <h4 className='text-[#3C83F6] font-bold text-[20px] mb-3'>{point.title}</h4>
              <p className='text-[#0F1729] text-[15px] leading-relaxed'>{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeSolution;
