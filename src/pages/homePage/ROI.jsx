'use client';
import { FiArrowRight } from 'react-icons/fi';

const ROI = () => {
  const features = [
    { number: '30%', text: 'higher success rate', color: '#fa7516' },
    { number: '5x', text: 'faster decision making', color: '#fa7516' },
    { number: '24/7', text: 'continuous operation', color: '#fa7516' },
    { number: '8 weeks', text: 'average deployment', color: '#fa7516' },
  ];

  const cards = [
    {
      title: 'Solve First, Then Build',
      subtitle: 'We start with your business challenge, not the code.',
      icon: '/images/idea.svg',
    },
    {
      title: 'From Insight to Action',
      subtitle: 'Our AI Agents don’t stop at analysis, they act.',
      icon: '/images/plan.svg',
    },
    {
      title: 'Always On, Always Scalable',
      subtitle: 'Agentic AI runs nonstop, managing complex tasks day and night.',
      icon: '/images/Grow.svg',
    },
    {
      title: 'Ready in Weeks, Not Months',
      subtitle: 'Our proven frameworks speed up deployment effortlessly.',
      icon: '/images/deploy.svg',
    },
  ];

  return (
    <section className='flex items-center justify-center bg-white py-24'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title */}
        <div className='max-w-4xl mx-auto text-center mb-12 sm:mb-16'>
          <h2 className='font-medium leading-tight text-[32px] text-[#333333]'>
            Increase your ROI with <span className='text-[#914ec2]'>Agentic AI</span> that
            <img
              src='/images/Spark.svg'
              alt='Spark'
              className='inline-block align-middle mx-3 w-8 h-8 sm:w-10 sm:h-10'
            />
            <br className='hidden md:block' />
            turns data into decisions and fuels smarter growth.
          </h2>
        </div>

        {/* Grid Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-16 items-start'>
          {/* Left Column: Cards */}
          <div className='p-4 md:p-8 rounded-[25px] w-full bg-[#f7f2f6]'>
            <div className='flex flex-col gap-4 md:gap-6'>
              {cards.map((card, index) => (
                <div key={index} className='flex gap-4 items-center'>
                  {/* Icon Circle */}
                  <div className='flex-shrink-0 rounded-full p-4 flex items-center justify-center bg-[#eee4f5] w-12 h-12 md:w-16 md:h-16'>
                    <img
                      src={card.icon}
                      alt={`${card.title} icon`}
                      className='w-5 h-5 md:w-7 md:h-7'
                    />
                  </div>

                  {/* Text Card */}
                  <div className='rounded-[15px] bg-white p-5 md:p-6 flex-1 min-w-0 flex flex-col justify-center min-h-[100px] h-auto'>
                    <h3 className='text-[#404040] text-[16px] font-semibold mb-1'>{card.title}</h3>
                    <p className='text-[#737373] text-[14px] font-normal leading-relaxed break-words'>
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Features List */}
          <div className='flex flex-col justify-center h-full w-full lg:pl-4'>
            <div className='w-full'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='border-b border-[#d2d2d6] flex items-center py-6 sm:py-8'
                >
                  <div className='w-full flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4'>
                    <span
                      className='text-[30px] sm:text-[30px] font-medium'
                      style={{ color: feature.color }}
                    >
                      {feature.number}
                    </span>
                    <span className='text-[#737373] text-[14px] font-normal'>{feature.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-10 lg:mt-12 flex justify-center lg:justify-start'>
              <button
                className='flex items-center justify-center gap-2 text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg'
                style={{
                  background: 'linear-gradient(to right, #7030B1, #B56DD3)',
                  borderRadius: '25px',
                  width: '160px',
                  height: '50px',
                  fontSize: '15px',
                  fontWeight: 500,
                }}
              >
                Contact Us
                <FiArrowRight className='text-lg' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROI;
