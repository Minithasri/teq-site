import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import ContainerImg from '../../../public/images/Container.png';

const ROI = () => {
  const cards = [
    {
      title: 'Solve First, Then Build',
      icon: '/images/idea.svg',
    },
    {
      title: 'From Insight to Action',
      icon: '/images/plan.svg',
    },
    {
      title: 'Always On, Always Scalable',
      icon: '/images/Grow.svg',
    },
    {
      title: 'Ready in Weeks, Not Months',
      icon: '/images/deploy.svg',
    },
  ];

  return (
    <section className='flex items-center justify-center bg-[#fdfdfd] py-6'>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Title */}
        <div className='max-w-4xl mx-auto text-center mb-12 sm:mb-16'>
          <h2 className='font-medium leading-relaxed text-[30px] text-[#333333]'>
            Increase your ROI with{' '}
            <span className='bg-gradient-to-b from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent font-semibold inline-block'>
              GWC's Agentic AI
            </span>
            <img
              src='/images/Spark.svg'
              alt='Spark'
              className='inline-block align-middle mx-2 w-8 h-8 sm:w-10 sm:h-10'
            />
            <br className='hidden md:block' />
            that turns data into decisions and fuels smarter growth
          </h2>
        </div>

        {/* Image and List Container */}
        <div className='max-w-[950px] mx-auto bg-white rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col md:flex-row p-3 md:p-4 gap-4 md:gap-8 items-center border border-gray-100'>
          {/* Left Column: Image */}
          <div className='w-full md:w-[55%]'>
            <Image
              src={ContainerImg}
              alt='AI Container'
              className='w-full h-auto rounded-[20px] object-cover bg-gradient-to-b from-[#7030B1] to-[#B56DD3]'
            />
          </div>

          {/* Right Column: List items */}
          <div className='w-full md:w-[55%] flex flex-col justify-center gap-10 py-6 '>
            {cards.map((card, index) => (
              <div key={index} className='flex items-center gap-5'>
                <img src={card.icon} alt={card.title} className='w-6 h-6 object-contain' />
                <span className='text-[#404040] font-semibold text-[18px] md:text-[20px]'>
                  {card.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROI;
