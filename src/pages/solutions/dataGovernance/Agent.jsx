'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Agent() {
  return (
    <section aria-labelledby='gwc-atlan-alation' className='w-full mb-20 mt-6 lg:mt-6'>
      <div className='max-w-[1200px] mx-auto px-4 md:px-6 lg:px-6 xl:px-4'>
        <div
          className='w-full rounded-3xl relative overflow-hidden bg-white'
          style={{ border: '1px solid #E5D4F0' }}
        >
          {/* BACKGROUND IMAGE (decorative) */}
          <div className='absolute inset-0 opacity-20' aria-hidden>
            <Image src='/images/AIMatters.jpg' alt='' fill className='object-cover' priority />
          </div>

          {/* BACKGROUND RADIAL GRADIENT (decorative) */}
          <div
            aria-hidden
            className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(160,132,255,0.25),rgba(255,255,255,0)_60%)]'
          />

          {/* CONTENT */}
          <div className='relative z-20 grid grid-cols-1 lg:grid-cols-2 h-full'>
            {/* LEFT CONTENT */}
            <div className='p-8 sm:p-10 md:p-12 lg:p-12 flex flex-col justify-center space-y-6'>
              {/* ICON (decorative) */}
              <div className='w-12 h-12 rounded-xl mb-2 bg-[#FF8A47] flex items-center justify-center'>
                <Image
                  src='/images/solutions/Frame 1566663015.png'
                  alt=''
                  aria-hidden
                  width={28}
                  height={28}
                />
              </div>

              {/* TITLE */}
              <h2
                id='gwc-atlan-alation'
                className='text-2xl sm:text-[28px] mb-2 font-semibold text-gray-700 leading-snug'
              >
                Transform your data journey with <br />
                <span
                  style={{
                    background: 'linear-gradient(135deg, #6F2B8B 0%, #B56DD3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: '1.8',
                  }}
                >
                  GWC’s Atlan & Alation services.
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className='text-gray-600 text-sm sm:text-base leading-relaxed max-w-[550px]'>
                Empower your enterprise with GWC’s Alation & Atlan services—streamlined data
                discovery, smarter governance, and AI-ready transformation.
              </p>

              {/* CTA */}
              <Link
                href='/atlan'
                className='mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition w-fit'
                style={{ border: '1px solid #6F2B8B', color: '#6F2B8B' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F3E8F7')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                Know more about Atlan
              </Link>
            </div>

            {/* RIGHT DECORATIVE SHAPE */}
            <div className='hidden lg:flex flex-1 relative h-auto' aria-hidden>
              <div className='absolute -right-15 top-0 w-[650px]'>
                <Image
                  src='/images/solutions/BG.SVG'
                  alt=''
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
    </section>
  );
}
