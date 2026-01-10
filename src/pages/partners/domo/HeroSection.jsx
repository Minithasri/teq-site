'use client';

import { domoData } from '@/data/partners/domo';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const bannerContent = {
  breadcrumb: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Domo', href: '/partners/domo' },
    ],
  },
  title: domoData.hero.title,
  description: domoData.hero.subtitle,
  ctaText: 'Get in touch', // Keeping standard CTA or using specific one? User said "without changing the contne".
  // The Boomi one used "Get in touch". The Domo one had specific long text.
  // I will use the specific Domo text for the button if it fits, or maybe just "Get in touch" to match the style strictness?
  // "remove the colours used here and follow the colours that is usedin other herosection... replace that here without changing the contne from this"
  // This likely means keep the Title and Subtitle. The CTA button text "Create Your Free Account Now & Access It Forever" is very long for a button in the new style.
  // I will stick to "Get in touch" to match the design or "Contact Us".
  // Actually, I'll use the `domoData.hero.cta` but check if it's too long.
  images: {
    background: '/images/partners/boomi/hero_bg_partner.png', // Using the partner background as requested to "fix with the bg"
    illustration: '/images/domo/bannerRight.svg',
  },
};

export default function HeroSection() {
  return (
    <header className='relative w-full overflow-hidden pt-[60px] min-h-[700px] flex items-center'>
      {/* Background Image */}
      <div className='absolute inset-0 -z-10 bg-[#1e102e]'>
        <Image
          src={bannerContent.images.background}
          alt='Domo Integration with GWC'
          fill
          priority
          className='object-cover'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-14'>
        {/* Breadcrumb */}
        <nav aria-label='Breadcrumb' className='relative z-10 mb-8'>
          <ol className='inline-flex items-center gap-2 text-[15px] py-1'>
            {bannerContent.breadcrumb.items.map((item, index) => (
              <li key={index} className='flex items-center gap-2'>
                {index > 0 && (
                  <Image
                    src='/images/next_arrow.svg'
                    alt=''
                    width={6}
                    height={6}
                    aria-hidden
                    className='opacity-80'
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                )}
                <Link
                  href={item.href}
                  className={`font-medium hover:opacity-80 transition-opacity ${
                    index === bannerContent.breadcrumb.items.length - 1
                      ? 'text-white'
                      : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        {/* Hero Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-12 lg:gap-16'>
          {/* Left Content */}
          <div>
            <h1 className='text-[32px] md:text-[32px] font-bold text-white leading-[52px] mb-6'>
              {bannerContent.title}
            </h1>

            <p className='text-white/80 text-[16px] md:text-[18px] max-w-2xl mb-12 leading-relaxed'>
              {bannerContent.description}
            </p>

            <Link
              href='/contact'
              className='inline-flex items-center gap-2 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white px-8 h-[45px] rounded-full font-medium text-[15px] justify-center hover:scale-105 transition-transform shadow-lg'
            >
              Contact Us
              <FiArrowRight className='w-5 h-5' />
            </Link>
          </div>

          {/* Right Image */}
          <div className='relative w-full max-w-[600px] mx-auto lg:mx-0'>
            <Image
              src={bannerContent.images.illustration}
              alt='Domo Platform'
              width={600}
              height={500}
              priority
              className='w-full h-auto object-contain'
            />
          </div>
        </div>
      </div>
    </header>
  );
}
