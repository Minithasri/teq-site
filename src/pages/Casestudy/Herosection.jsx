'use client';

import Image from 'next/image';
import Link from 'next/link';

const heroContent = {
  breadcrumb: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Case study', href: '/case-study' },
    ],
  },
  title: 'Experience AI Agents at Work',
  description:
    'Move beyond manual analysis and inconsistent data. Our Agentic AI platform standardizes startup assessments, reduces bias, and enables faster, more confident investment decisions.',
  backgroundImage: '/images/Casestudy/Frame case.png',
};

export default function HeroSection() {
  return (
    <header className='relative w-full overflow-hidden pt-[60px] min-h-[400px]'>
      {/* Background */}
      <div className='absolute inset-0 -z-10'>
        <div
          className='w-full h-full bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: `url('${heroContent.backgroundImage}')` }}
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24'>
        {/* Breadcrumb */}
        <nav aria-label='Breadcrumb' className='mb-16'>
          <ol className='inline-flex items-center gap-2 text-[15px] text-white'>
            {heroContent.breadcrumb.items.map((item, index) => (
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
                <Link href={item.href} className='font-medium hover:opacity-80 transition-opacity'>
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        {/* Hero Content */}
        <div className='flex flex-col items-center text-center gap-6 max-w-4xl mx-auto'>
          <h1 className='text-[42px] font-bold text-white leading-tight'>{heroContent.title}</h1>

          <p className='text-white/90 text-[18px] max-w-3xl leading-relaxed'>
            {heroContent.description}
          </p>
        </div>
      </div>
    </header>
  );
}
