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
    expert: { text: 'Talk to our expert', href: '/contact' },
    demo: { text: 'Request Demo', href: '/contact' },
  },
  images: {
    background: '/images/partners/boomi/hero_bg_partner.webp',
    illustration: '/images/partners/boomi/hero1.webp',
  },
  stats: [
    { value: '1000+', label: 'Integrations Delivered' },
    { value: '70%', label: 'Faster Deployment' },
    { value: '24/7', label: 'Support & Monitoring' },
  ],
};

export default function HeroSection() {
  return (
    <header className='relative w-full min-h-[600px] pt-[72px] flex items-center mb-20'>
      {/* Background */}
      <div className='absolute inset-0 -z-10 bg-[#1e102e]'>
        <Image
          src={bannerContent.images.background}
          alt='Boomi Integration with GWC'
          fill
          priority
          className='object-cover'
        />
      </div>

      <div className='relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8'>
        {/* Breadcrumb */}
        <nav aria-label='Breadcrumb' className='mb-16 mt-12'>
          <ol className='inline-flex items-center gap-2 text-[15px]'>
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
                  className='font-medium text-white hover:opacity-80 transition-opacity'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        {/* Hero Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-[55%_45%] items-start gap-12 lg:gap-16'>
          {/* Left Content */}
          <div className='mb-24'>
            <h1 className='text-[24px] md:text-[28px] lg:text-[34px] font-bold text-white leading-tight mb-6'>
              {bannerContent.title}
            </h1>

            <p className='text-white/80 text-[16px] md:text-[18px] max-w-2xl mb-12 leading-relaxed'>
              {bannerContent.description}
            </p>

            <div className='flex flex-wrap gap-4'>
              <Link
                href={bannerContent.cta.expert.href}
                className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white min-w-[170px] h-[45px] px-6 rounded-full font-medium text-[15px] justify-center hover:bg-white hover:text-[#4A1D7A] transition-all'
              >
                {bannerContent.cta.expert.text}
                <FiArrowRight className='w-5 h-5' />
              </Link>

              <Link
                href={bannerContent.cta.demo.href}
                className='inline-flex items-center gap-2 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white min-w-[170px] h-[45px] px-6 rounded-full font-medium text-[15px] justify-center hover:scale-105 transition-transform shadow-lg'
              >
                {bannerContent.cta.demo.text}
                <FiArrowRight className='w-5 h-5' />
              </Link>
            </div>
          </div>

          {/* Right Image (Independent Positioning) */}
          <div className='relative w-full max-w-[480px] mx-auto lg:mx-0 lg:-mt-40'>
            <Image
              src={bannerContent.images.illustration}
              alt='Boomi Platform'
              width={600}
              height={520}
              priority
              className='w-full h-auto object-contain'
            />
          </div>
        </div>

        {/* Stats Bar */}
        <div className='absolute -bottom-8 left-0 right-0 translate-y-1/2 z-20 px-4'>
          <div className='bg-white rounded-2xl p-4 lg:p-6 shadow-xl max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100'>
              {bannerContent.stats.map((stat, index) => (
                <div key={index} className='pt-2 md:pt-0 px-4'>
                  <div className='text-[28px] md:text-[32px] font-bold text-[#5B2589] mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-gray-600 font-medium text-sm md:text-base'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
