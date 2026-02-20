'use client';

const TopHeader = ({ isVisible = true, onClose }) => {
  if (!isVisible) return null;

  const handleClose = () => {
    onClose?.();
  };

  return (
    <div
      className='w-full bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white py-1 sm:py-3 px-4 fixed top-0 left-0 right-0 z-[10001] overflow-hidden'
      style={{ height: '40px' }} // consistent height for smooth header transition
    >
      {/* Animated background swipe effect */}
      <div
        className='absolute inset-0 bg-[#D9D9D9] blur-[20px] -rotate-30 opacity-30'
        style={{
          animation: 'swipe 6s ease-in-out infinite',
        }}
      />

      <div className='relative z-10 h-full'>
        <div className='max-w-7xl mx-auto flex items-center justify-between h-full'>
          {/* Center content */}
          <div className='flex-1 flex items-center justify-center'>
            <div className='flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center'>
              <span className='text-xs sm:text-sm font-medium whitespace-nowrap'>
                Upcoming Webinar |{' '}
                <span
                  style={{
                    background: 'linear-gradient(to right, #6DCAF3, #CDCC70, #DB7178, #FF8C00)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 'bold',
                  }}
                >
                  BIMAS – BI Migration Accelerator as a Service
                </span>{' '}
                | March 4, 2026 | 3:30 PM IST
              </span>

              <a
                href='https://bimas-webinar.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white text-xs sm:text-sm font-semibold hover:underline transition-all duration-200 flex items-center gap-1 whitespace-nowrap underline'
              >
                <span>Register Now</span>
                <svg
                  className='w-3 h-3 sm:w-4 sm:h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Close button - visible on sm and up */}
          <button
            onClick={handleClose}
            aria-label='Close announcement banner'
            className='hidden sm:flex items-center justify-center text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-200'
          >
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Inline keyframes */}
      <style jsx>{`
        @keyframes swipe {
          0% {
            transform: translateX(-100%) rotate(-30deg);
          }
          100% {
            transform: translateX(200%) rotate(-30deg);
          }
        }
      `}</style>
    </div>
  );
};

export default TopHeader;
