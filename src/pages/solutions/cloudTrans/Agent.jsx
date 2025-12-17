'use client';
import Image from 'next/image';

export default function Agent() {
  return (
    <div className='w-full mb-20 mt-6 lg:mt-6'>
      <div className='max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 xl:px-12'>
        <div className='w-full rounded-3xl relative overflow-hidden bg-gradient-to-r from-purple-50 via-pink-50 to-purple-100'>
          {/* BACKGROUND IMAGE */}
          <div className='absolute inset-0'>
            <Image
              src='/images/solutions/agent_bg.png'
              alt='Background'
              fill
              className='object-cover'
            />
          </div>

          {/* CONTENT - Centered */}
          <div className='relative z-20 flex flex-col items-center justify-center text-center py-16 px-8'>
            {/* TITLE */}
            <h2 className='text-3xl sm:text-3xl font-semibold text-gray-600 mb-8'>
              Your cloud journey guided by experts for{' '}
              <span className='text-purple-600'>smarter and optimal utilization.</span>
            </h2>

            {/* BUTTONS */}
            <div className='flex flex-col sm:flex-row gap-4 items-center'>
              <button className='px-8 py-3 rounded-full border-2 border-purple-400 text-purple-700 font-medium hover:bg-purple-50 transition'>
                Explore Use caes
              </button>
              <button className='px-8 py-3 rounded-full bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white font-medium hover:opacity-90 transition flex items-center gap-2'>
                <Image src='/images/solutions/phone.svg' alt='Phone' width={18} height={18} />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
