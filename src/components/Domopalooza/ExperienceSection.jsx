'use client';
import { ArrowRight } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section
      className='relative px-4 sm:px-6 py-12 md:py-20 overflow-hidden'
      style={{
        backgroundImage: `url(/images/domopalooza/waves.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='max-w-4xl mx-auto relative z-10 text-center'>
        {/* Title */}
        <h2
          className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight'
          style={{
            background: 'linear-gradient(90deg, #2E94DB, #7030B1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block',
          }}
        >
          Turn Domopalooza Into Your Moment
        </h2>

        {/* Subtitle */}
        <h3 className='mt-3 text-xl md:text-2xl font-semibold text-gray-800'>
          GWC Data & AI Experience
        </h3>

        {/* Visit booth badge */}
        <div className='mt-8 inline-flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-purple-200 shadow-sm'>
          <img
            src='/images/domopalooza/icomoon-free_point-left.png'
            alt='icon'
            className='w-5 h-5 flex-shrink-0'
          />
          <p className='text-sm text-gray-700'>
            Visit the <span className='text-[#7030B1] font-bold'>GWC Booth</span> and see how fast
            AI can move.
          </p>
        </div>

        {/* 3 Cards Row */}
        <div className='mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {[
            'Rapidly prototype an AI agent for your business needs',
            'Test ideas across analytics, data platforms, and AI',
            'Gain clarity on next steps to scale or productionize',
          ].map((text, i) => (
            <div
              key={i}
              className='p-[1px] rounded-full'
              style={{
                background: 'linear-gradient(90deg, #7785F4, #E67582)',
              }}
            >
              <div className='px-6 py-6 rounded-full bg-white text-sm text-gray-700 font-medium leading-relaxed h-full'>
                {text}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className='mt-10'>
          <p className='text-lg md:text-xl font-bold text-gray-800'>
            Build your{' '}
            <span
              style={{
                background: '#9B59D0',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}
            >
              AI agent in 10 hours
            </span>{' '}
            and experience it in action.
          </p>
          <p className='mt-2 text-sm md:text-medium text-gray-500'>
            Through quick, hands-on sessions with our AI experts, we'll help you turn concepts into
            practical, working solutions.
          </p>
        </div>

        {/* CTA Button */}
        <div className='mt-8'>
          <button
            onClick={() =>
              document
                .getElementById('support-form')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
            className='group inline-flex items-center gap-2 px-6 py-2.5 lg:px-10 lg:py-4 rounded-full text-white font-bold text-base lg:text-lg shadow-lg transition-all hover:opacity-90 active:scale-95'
            style={{
              background: 'linear-gradient(90deg, #7030B1, #9B59D0)',
            }}
          >
            Share your Use case now
            <ArrowRight
              size={16}
              className='lg:hidden transition-transform group-hover:translate-x-1'
            />
            <ArrowRight
              size={20}
              className='hidden lg:block transition-transform group-hover:translate-x-1'
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
