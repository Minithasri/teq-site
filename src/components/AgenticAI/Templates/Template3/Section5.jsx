'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Section5({ data }) {
  const {
    ctaHeading = 'Build your first AI workflow today.',
    ctaSubtitle = 'Start with a blueprint. Launch it. Customize it. Deploy it. All inside GWC.',
    ctaButtonText = 'Talk to Us',
    ctaButtonHref = '/contact',
  } = data || {};

  return (
    <section
      className='w-full py-12 px-4 md:px-8 lg:px-16 xl:px-24'
      style={{
        background: `
          linear-gradient(0deg, rgba(255,255,255,0.85), rgba(255,255,255,0.85)),
          linear-gradient(106.63deg, #7030B1 0%, #B56DD3 100%)
        `,
      }}
    >
      {/* White padding wrapper */}
      <div className='max-w-5xl mx-auto rounded-3xl p-2' style={{ backgroundColor: '#FFFFFF' }}>
        {/* Inner dark gradient card */}
        <div
          className='relative rounded-2xl py-14 px-8 flex flex-col items-center gap-4 text-center overflow-hidden'
          style={{
            background: 'linear-gradient(180deg, #342640 0%, #F2A5FC 100%)',
            boxShadow: '0px -32px 65px 0px #F2D5FF inset',
            backgroundColor: '#FFFFFF01',
          }}
        >
          {/* Decorative background image */}
          <div className='absolute inset-0 pointer-events-none opacity-30'>
            <Image
              src='/images/wavessvg.svg'
              alt='Decorative Waves'
              fill
              className='object-cover'
            />
          </div>

          {/* Heading */}
          <h2 className='text-white font-semibold text-xl md:text-2xl lg:text-3xl relative z-10 max-w-lg'>
            {ctaHeading}
          </h2>

          {/* Subtitle */}
          <p className='text-white/75 text-sm md:text-base relative z-10 max-w-md'>{ctaSubtitle}</p>

          {/* Snowflake Icon */}
          <div className='relative z-10 my-1'>
            <Image
              src='/images/snowsvgagent.svg'
              alt='Snowflake'
              width={36}
              height={36}
              className='object-contain'
            />
          </div>

          {/* CTA Button */}
          <Link
            href={ctaButtonHref}
            className='relative z-10 bg-white font-semibold text-sm px-7 py-2.5 rounded-full transition-all duration-200 hover:bg-gray-50 hover:shadow-md'
            style={{ color: '#7030B1' }}
          >
            {ctaButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
