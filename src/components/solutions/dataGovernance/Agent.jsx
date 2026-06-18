'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Agent() {
  return (
    <section aria-labelledby='gwc-atlan-alation' className='w-full mb-12 mt-6 lg:mt-12'>
      <div className='max-w-[1200px] mx-auto px-4 md:px-6 lg:px-6 xl:px-4'>
        <div className='w-full rounded-3xl relative overflow-hidden bg-[#0A1628]'>
          {/* BACKGROUND IMAGE (decorative) */}
          <div className='absolute inset-0 opacity-90' aria-hidden>
            <Image
              src='/images/solutions/datagoverance/agent_img.svg'
              alt=''
              fill
              className='object-cover'
              priority
            />
          </div>

          {/* Gradient overlay */}
          <div
            className='absolute inset-0'
            style={{
              background:
                'linear-gradient(135deg, rgba(57, 15, 75, 0.6) 0%, rgba(85, 29, 3, 0.6) 100%)',
            }}
            aria-hidden
          />

          {/* CONTENT - Centered */}
          <div className='relative z-20 flex flex-col items-center justify-center text-center py-16 px-8'>
            {/* ICON (decorative) */}
            <div className='w-12 h-12 rounded-xl mb-6 bg-[#FF8A47] flex items-center justify-center'>
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
              className='text-2xl sm:text-[28px] mb-4 font-semibold text-white leading-snug'
            >
              Transform your data journey with <br />
              <span
                style={{
                  color: '#FF8A47',
                }}
              >
                GWC's Atlan & Alation services.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className='text-white/80 text-sm sm:text-base leading-relaxed max-w-[650px] mb-8'>
              Empower your enterprise with GWC's Alation & Atlan services—streamlined data
              discovery, smarter governance, and AI-ready transformation.
            </p>

            {/* CTA */}
            <Link
              href='/atlan'
              className='inline-flex items-center gap-2 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white w-[170px] h-[45px] rounded-full font-medium text-[15px] justify-center hover:scale-105 transition-transform shadow-lg'
            >
              Know more
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
