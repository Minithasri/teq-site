'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <header className='relative w-full overflow-hidden pt-[60px] min-h-[700px] flex items-center'>
      {/* Background Image */}
      <div className='absolute inset-0 -z-10'>
        <Image
          src='/images/AboutUs/aboutus_hero.webp'
          alt='GWC Team'
          fill
          priority
          className='object-cover'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-24'>
        {/* Content */}
        <div className='max-w-3xl'>
          {/* Main Heading */}
          <h1
            className='font-bold text-white leading-tight mb-6'
            style={{ fontSize: '42px', lineHeight: '1.2' }}
          >
            GWC Data.AI
          </h1>

          {/* Subheading */}
          <p className='text-white/90 mb-1  ' style={{ fontSize: '18px', lineHeight: '1.5' }}>
            The Data Revolution Begins Here
          </p>

          {/* Description */}
          <p
            className='text-white/90 max-w-2xl mb-8'
            style={{ fontSize: '18px', lineHeight: '1.6' }}
          >
            At GWC Data.AI, we don't just analyze data, we awaken its intelligence.
          </p>

          {/* CTA Button */}
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white px-8 py-3 rounded-full font-medium text-[15px] hover:scale-105 transition-transform shadow-lg'
          >
            Get in touch
            <Image src='/images/AboutUs/arrowicon_1.svg' alt='Arrow' width={16} height={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
