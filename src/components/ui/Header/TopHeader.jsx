'use client';
import { useState } from 'react';

const TopHeader = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const closeBanner = () => {
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) return null;

  return (
    <div className='w-full bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white py-1 sm:py-3 px-4 fixed top-0 left-0 right-0 z-[10001] overflow-hidden'>
      <div
        className='absolute inset-0 bg-[#D9D9D9] blur-[20px] -rotate-30 animate-swipe'
        style={{
          animation: 'swipe 6s ease-in-out infinite',
        }}
      ></div>

      <div className='relative z-10'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <div className='flex-1 flex items-center justify-center text-center'>
            <div className='flex flex-col sm:flex-row items-center gap-1 sm:gap-4 px-2 sm:px-8 md:px-0'>
              <span className='text-xs sm:text-sm font-medium whitespace-nowrap truncate max-w-[90vw] sm:max-w-none'>
                Quantum computing live show - Event happening on Sep 23, 2025
              </span>
              <button className='text-white text-xs sm:text-sm font-semibold hover:underline transition-colors duration-200 flex items-center space-x-1 whitespace-nowrap'>
                <span>Register now</span>
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
              </button>
            </div>
          </div>

          <button
            onClick={closeBanner}
            className='hidden sm:block text-white hover:bg-white/20 p-1 rounded transition-colors duration-200 absolute right-4'
          >
            <svg
              className='w-4 h-4 sm:w-5 sm:h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
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

      <style jsx>{`
        @keyframes swipe {
          0% {
            transform: translateX(-100%) rotate(-30deg);
          }
          50% {
            transform: translateX(100%) rotate(-30deg);
          }
          100% {
            transform: translateX(100%) rotate(-30deg);
          }
        }
        .animate-swipe {
          animation: swipe 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TopHeader;
