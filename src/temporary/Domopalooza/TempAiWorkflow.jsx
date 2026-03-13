'use client';
import Image from 'next/image';
import robotIcon from '../assert/Group-icon.png';
import tick from '../assert/tick.png';
import analysis from '../assert/ai-analysis.png';
import email from '../assert/email-icon.png';

const TopAIWorkflow = () => {
  return (
    <section className='bg-white overflow-hidden px-3 sm:px-4 mt-0 sm:mt-10'>
      <div className='mb-8 max-w-7xl mx-auto px-2 sm:px-4 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.1)]'>
        {/* Header Box */}
        <div className='bg-[#F9F3FB] rounded-lg p-4 sm:p-5 md:p-6 mb-10 sm:mb-12 md:mb-16 flex items-center justify-center gap-2 sm:gap-3 md:gap-5 border border-[#F5EDFF] mt-2 text-center'>
          <Image src={robotIcon} alt='AI' width={56} height={56} className='object-contain' />
          <div>
            <h3
              className='text-xl sm:text-2xl md:text-3xl font-medium'
              style={{
                background: 'linear-gradient(90deg, #7030B1, #B56DD3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}
            >
              AI Analysis Workflow
            </h3>
            <p className='text-sm sm:text-base md:text-lg text-gray-400'>
              Real-time status indicator
            </p>
          </div>
        </div>

        {/* Workflow Steps */}
        <div className='relative px-2 sm:px-4 pb-6'>
          {/* Dashed line */}
          <div className='hidden lg:block absolute top-8 left-[20%] right-[20%] h-0.5 border-t-2 border-dashed border-[#7030B1]' />

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-4'>
            {/* Step 1 */}
            <div className='flex flex-col items-center text-center relative z-10 max-w-[200px] mx-auto w-full'>
              <div className='w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#7030B1] to-[#B56DD3] flex items-center justify-center shadow-[0_10px_20px_-6px_rgba(112,48,177,0.3)] mb-4 sm:mb-6 transition-transform hover:scale-105 duration-300'>
                <Image src={tick} alt='Usecase' width={36} height={36} className='object-contain' />
              </div>
              <h4 className='text-base sm:text-lg font-semibold text-gray-900 mb-2'>
                Submit use case Request
              </h4>
              <p className='text-gray-400 text-sm leading-relaxed'>
                Share your business problem and goals
              </p>
            </div>

            {/* Step 2 */}
            <div className='flex flex-col items-center text-center relative z-10 max-w-[200px] mx-auto w-full'>
              <div className='w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#7030B1] to-[#B56DD3] flex items-center justify-center shadow-[0_10px_20px_-6px_rgba(112,48,177,0.3)] mb-4 sm:mb-6 transition-transform hover:scale-105 duration-300'>
                <Image
                  src={analysis}
                  alt='AI-Analysis'
                  width={36}
                  height={36}
                  className='object-contain'
                />
              </div>
              <h4 className='text-base sm:text-lg font-semibold text-gray-900 mb-2'>AI Analysis</h4>
              <p className='text-gray-400 text-sm leading-relaxed'>
                Our experts and AI tools analyze and build the solution
              </p>
            </div>

            {/* Step 3 */}
            <div className='flex flex-col items-center text-center relative z-10 max-w-[200px] mx-auto w-full'>
              <div className='w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#7030B1] to-[#B56DD3] flex items-center justify-center shadow-[0_10px_20px_-6px_rgba(112,48,177,0.3)] mb-4 sm:mb-6 transition-transform hover:scale-105 duration-300'>
                <Image src={email} alt='Mail' width={36} height={36} className='object-contain' />
              </div>
              <h4 className='text-base sm:text-lg font-semibold text-gray-900 mb-2'>
                Live Demo at Domopalooza
              </h4>
              <p className='text-gray-400 text-sm leading-relaxed'>
                Visit the GWC booth to see your use case
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopAIWorkflow;
