'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Agent() {
  return (
    <div className='w-full mb-12 mt-6 lg:mt-12'>
      <div className='max-w-[1200px] mx-auto px-4 md:px-6 lg:px-6 xl:px-4'>
        <div className='w-full rounded-3xl relative overflow-hidden bg-gradient-to-r from-purple-50 via-pink-50 to-purple-100'>
          {/* BACKGROUND IMAGE */}
          <div className='absolute inset-0' style={{ opacity: 0.22 }}>
            <video autoPlay loop muted playsInline className='w-full h-full object-cover'>
              <source src='/images/solutions/agent_video.mp4' type='video/mp4' />
            </video>
          </div>

          {/* CONTENT - Centered */}
          <div className='relative z-20 flex flex-col items-center justify-center text-center py-16 px-8'>
            {/* TITLE */}
            <h2 className='text-3xl sm:text-4xl font-semibold text-gray-800 mb-2'>
              Ready to modernize your <span style={{ color: '#6F2B8B' }}>BI Infrastructure ?</span>
            </h2>

            <p className='text-sm sm:text-base text-[#404040] mb-6'>
              Contact a GWC expert for a tailored assessment.
            </p>

            {/* BUTTONS */}
            <div className='flex flex-col sm:flex-row gap-4 items-center justify-center'>
              <button
                className='w-[200px] h-[48px] rounded-full border-2 font-medium hover:bg-purple-50 transition text-[15px]'
                style={{ borderColor: '#6F2B8B', color: '#6F2B8B' }}
              >
                Explore use cases
              </button>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white w-[200px] h-[48px] rounded-full font-medium text-[15px] justify-center hover:scale-105 transition-transform shadow-lg'
              >
                <Image src='/images/solutions/phone.svg' alt='Phone' width={18} height={18} />
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
