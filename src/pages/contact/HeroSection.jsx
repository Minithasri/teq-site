'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section
      className='relative w-full overflow-hidden min-h-[700px]'
      style={{ background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)' }}
    >
      {/* Top Image Section */}
      <div className='absolute top-0 left-0 w-full h-[400px]'>
        <Image
          src='/images/ContactUs/contactUsBanneer.webp'
          alt='Contact Background'
          fill
          className='object-cover'
          priority
        />
        {/* Dark Overlay for text readability on image */}
        <div className='absolute inset-0 bg-black/40' />
      </div>

      {/* Content Container */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[700px]'>
          {/* Left Side */}
          <div className='flex flex-col justify-between py-12 lg:py-20'>
            {/* Breadcrumb - Positioned on the Image Area */}
            <nav aria-label='Breadcrumb' className='pt-8'>
              <ol className='inline-flex items-center gap-2 text-[15px] text-white font-medium'>
                <li className='flex items-center gap-2'>
                  <Link href='/' className='hover:opacity-80 transition-opacity'>
                    Home
                  </Link>
                </li>
                <li>
                  <Image
                    src='/images/next_arrow.svg'
                    alt=''
                    width={6}
                    height={6}
                    aria-hidden
                    className='opacity-80'
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </li>
                <li>
                  <span className=''>Contact Us</span>
                </li>
              </ol>
            </nav>

            {/* Main Text - Positioned on the Purple Area */}
            <div className=''>
              <h1 className='text-white text-[32px] lg:text-[40px] font-bold leading-tight mb-6'>
                Get In Touch With Us
              </h1>
              <div className='space-y-2'>
                <p className='text-white text-[18px] lg:text-[20px] leading-relaxed'>
                  Have an inquiry or some feedback for us?
                </p>
                <p className='text-white text-[18px] lg:text-[20px] leading-relaxed'>
                  Fill out this form to contact our team.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Floating White Card */}
          <div className='flex items-center justify-center lg:justify-end py-12 lg:py-20'>
            <div className='bg-white rounded-[32px] shadow-2xl p-10 lg:p-14 w-full max-w-[600px]'>
              <h2 className='text-[#333333] text-[28px] lg:text-[32px] font-semibold text-center mb-4'>
                How would you like to connect?
              </h2>
              <p className='text-[#666666] text-[16px] text-center mb-10 leading-relaxed max-w-md mx-auto'>
                Choose the option that best fits your needs. We're here to help with both career
                opportunities and general inquiries.
              </p>

              {/* Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                {/* <Link
                  href='/contact/business'
                  className='flex items-center justify-center gap-2 bg-[#7030B1] text-white px-6 py-4 rounded-full font-medium text-[15px] hover:bg-[#5f2896] transition-colors shadow-lg flex-1 whitespace-nowrap'
                >
                  For Business Enquiry
                  <div className='bg-white/20 rounded-full p-0.5'>
                    <FiArrowRight size={16} />
                  </div>
                </Link> */}
                <Link
                  href='/careers'
                  className='flex items-center justify-center gap-2 bg-[#7030B1] text-white px-6 py-4 rounded-full font-medium text-[15px] hover:bg-[#5f2896] transition-colors shadow-lg flex-1 whitespace-nowrap'
                >
                  Apply for Job
                  <div className='bg-white/20 rounded-full p-0.5'>
                    <FiArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
