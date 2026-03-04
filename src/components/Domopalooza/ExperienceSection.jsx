'use client';
import BookingForm from './BookingForm';

const ExperienceSection = () => {
  return (
    <section className='px-6 py-10 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        {/* Content grid with adjusted ratios */}
        <div className='grid md:grid-cols-2 gap-12 mt-8 items-start'>
          {/* Left content - smaller */}
          <div className='pr-4'>
            <h2
              className='text-3xl md:text-4xl font-bold leading-tight'
              style={{
                background: 'linear-gradient(90deg, #2E94DB, #7030B1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Turn Domopalooza into your moment
            </h2>

            <h3 className='mt-5 text-xl font-bold text-gray-800'>GWC Data & AI Experience</h3>

            <div className='flex items-start gap-3 mt-4 p-3 bg-white rounded-lg border border-gray-100'>
              <img
                src='/images/domopalooza/icomoon-free_point-left.png'
                alt='icon'
                className='text-[#7030B1] flex-shrink-0 w-6 h-6'
              />
              <p className='text-sm text-gray-700'>
                Visit the <span className='text-[#7030B1] font-bold'>GWC Booth</span> and see how
                fast AI can move.
              </p>
            </div>

            <h4 className='mt-6 text-lg font-bold text-gray-800'>
              Build your <span className='text-[#7030B1]'>AI agent in 10 hours</span> and experience
              it in action.
            </h4>

            <p className='mt-3 text-sm text-gray-600 leading-relaxed'>
              Through quick, hands-on sessions with our AI experts, we'll help you turn concepts
              into practical, working solutions.
            </p>

            <div className='mt-6'>
              <p className='font-semibold text-gray-800 mb-2 text-sm'>You can:</p>
              <ul className='space-y-2 text-sm ml-4 text-gray-600'>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-600 font-bold text-base'>•</span>
                  <span>Rapidly prototype an AI agent for your business needs</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-600 font-bold text-base'>•</span>
                  <span>Test ideas across analytics, data platforms, and AI</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-purple-600 font-bold text-base'>•</span>
                  <span>Gain clarity on next steps to scale or productize</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right content - larger form */}
          <div className=''>
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
