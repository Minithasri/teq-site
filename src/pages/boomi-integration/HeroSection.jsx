'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const bannerContent = {
  breadcrumb: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Boomi', href: '/partners/boomi' },
    ],
  },
  title: 'Seamless Integration. Smarter Automation. Scalable Growth',
  description:
    "Unlock enterprise potential with GWC's Boomi powered integrations for real time sync, AI automation, and measurable ROI.",
  cta: {
    expert: { text: 'Talk to our expert', href: '/contact', variant: 'light' },
    demo: { text: 'Request Demo', href: '/contact', variant: 'primary' },
  },
  images: {
    background: '/images/partners/boomi/hero_bg_partner.png',
    illustration: '/images/partners/boomi/hero_boomi.png',
  },
  stats: [
    { value: '1000+', label: 'Integrations Delivered' },
    { value: '70%', label: 'Faster Deployment' },
    { value: '24/7', label: 'Support & Monitoring' },
  ],
};

export default function HeroSection() {
  return (
    <header className='relative w-full pt-[60px] min-h-[550px] flex items-center mb-24 lg:mb-32'>
      {/* Background Image */}
      <div className='absolute inset-0 -z-10 bg-[#1e102e]'>
        <Image
          src={bannerContent.images.background}
          alt='Boomi Integration with GWC'
          fill
          priority
          className='object-cover'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-8 relative'>
        {/* Breadcrumb */}
        <nav aria-label='Breadcrumb' className='relative z-10 mt-10 mb-2'>
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
        <div className='grid grid-cols-1 lg:grid-cols-[55%_45%] items-center gap-12 lg:gap-16 pb-12 transition-all'>
          {/* Left Content */}
          <div>
            <h1 className='text-[24px] md:text-[28px] lg:text-[34px] font-bold text-white leading-tight mb-6'>
              {bannerContent.title}
            </h1>

            <p className='text-white/80 text-[16px] md:text-[18px] max-w-2xl mb-12 leading-relaxed'>
              {bannerContent.description}
            </p>

            <div className='flex flex-wrap gap-4'>
              {/* Talk to our expert button */}
              <Link
                href={bannerContent.cta.expert.href}
                className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white min-w-[170px] h-[45px] px-6 rounded-full font-medium text-[15px] justify-center hover:bg-white hover:text-[#4A1D7A] transition-all duration-300'
              >
                {bannerContent.cta.expert.text}
                <FiArrowRight className='w-5 h-5' />
              </Link>

              {/* Request Demo button - Matches Partner Brand Gradient */}
              <Link
                href={bannerContent.cta.demo.href}
                className='inline-flex items-center gap-2 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white min-w-[170px] h-[45px] px-6 rounded-full font-medium text-[15px] justify-center hover:scale-105 transition-transform shadow-lg'
              >
                {bannerContent.cta.demo.text}
                <FiArrowRight className='w-5 h-5' />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className='relative w-full max-w-[600px] mx-auto lg:mx-0'>
            <div className='relative animate-float'>
              <Image
                src={bannerContent.images.illustration}
                alt='Boomi Platform'
                width={600}
                height={500}
                priority
                className='w-full h-auto object-contain'
              />
            </div>
          </div>
        </div>

        {/* Stats Bar - Positioned to straddle the bottom line */}
        <div className='absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-4'>
          <div className='bg-white rounded-2xl p-6 lg:p-8 shadow-xl max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100'>
              {bannerContent.stats.map((stat, index) => (
                <div key={index} className='pt-4 md:pt-0 px-4'>
                  <div className='text-[36px] md:text-[40px] font-bold text-[#5B2589] mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-gray-600 font-medium text-base md:text-lg'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
