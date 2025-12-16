'use client';
import Image from 'next/image';

export default function Agent() {
  return (
    <div className='w-full mb-20 mt-6 lg:mt-6'>
      <div className='max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 xl:px-12'>
        <div className='w-full rounded-3xl border border-purple-200 relative overflow-hidden bg-white'>
          {/* BACKGROUND IMAGE with low opacity */}
          <div className='absolute inset-0 opacity-20'>
            <Image src='/images/AIMatters.jpg' alt='Background' fill className='object-cover' />
          </div>

          {/* BACKGROUND LEFT SIDE (soft dots gradient) */}
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(160,132,255,0.25),rgba(255,255,255,0)_60%)]'></div>

          {/* CONTENT */}
          <div className='relative z-20 grid grid-cols-1 lg:grid-cols-2 h-full'>
            {/* LEFT CONTENT */}
            <div className='p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center space-y-6'>
              {/* ICON */}
              <div className='w-12 h-12 rounded-xl bg-[#FF8A47] flex items-center justify-center'>
                <Image
                  src='/images/solutions/Frame 1566663015.png'
                  alt='Icon'
                  width={28}
                  height={28}
                />
              </div>

              {/* TITLE */}
              <h2 className='text-2xl sm:text-2xl font-semibold text-gray-900 leading-snug'>
                Transform your data journey with <br />
                <span className='text-purple-600'>GWC’s Atlan & Alation services.</span>
              </h2>

              {/* DESCRIPTION */}
              <p className='text-gray-600 text-sm sm:text-base leading-relaxed max-w-[450px]'>
                Empower your enterprise with GWC’s Alation & Atlan services—streamlined data
                discovery, smarter governance, and AI-ready transformation.
              </p>

              {/* BUTTON */}
              <button className='mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500 text-purple-600 font-medium hover:bg-purple-50 transition w-fit'>
                Know more about Atlan
              </button>
            </div>

            {/* RIGHT DECOR (No content, only curved purple shapes visible) */}
            <div className='hidden lg:flex flex-1 relative h-auto'>
              <div className='absolute -right-15 top-0 w-[650px]'>
                <Image
                  src='/images/solutions/BG.SVG'
                  alt='Ellipse'
                  width={800}
                  height={800}
                  className='absolute top-[-80px] right-[-5px] object-top object-contain'
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
