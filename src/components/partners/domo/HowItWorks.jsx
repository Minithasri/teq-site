'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
const steps = [
  'Purchase a credit package tailored to your needs.',
  "Credits are deducted only when you use Domo's features.",
  'Monitor credit consumption easily with built in utilization reports.',
];

const HowItWorks = () => {
  return (
    <section className='w-full pb-16 md:pb-24 lg:-mt-96 -mt-20 px-4 sm:px-6 lg:px-8 relative z-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='w-full rounded-[40px] p-8 md:p-16 lg:p-20 text-center relative overflow-hidden'>
          <div className='absolute inset-0 -z-10'>
            <Image
              src='/images/partners/domo/howbg.png'
              alt='How it works background'
              fill
              className='object-cover'
            />
          </div>

          <div className='relative z-10 max-w-5xl mx-auto'>
            <h2 className='text-[32px] md:text-[40px] font-semibold text-white mb-6'>
              How Execution Credits Works
            </h2>
            <p className='text-white/90 text-sm md:text-base max-w-3xl mx-auto mb-8 leading-relaxed'>
              Domo is a unified cloud platform that brings together data, analytics, app
              development, security, and governance to deliver real time insights through
              interactive dashboards.
            </p>

            {/* Steps Grid */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
              {steps.map((text, index) => (
                <div
                  key={index}
                  className='backdrop-blur-sm border border-white/20 rounded-xl px-6 py-8 flex items-center justify-center min-h-[100px] transition-transform hover:-translate-y-1 duration-300'
                  style={{ backgroundColor: '#FFFFFF1A' }}
                >
                  <p className='text-white text-sm md:text-[15px] font-medium leading-normal'>
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA Box */}
            <div className='bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-12 border border-white/10'>
              <h3 className='text-2xl md:text-4xl font-semibold text-white mb-4'>
                Get the full product
              </h3>
              <p className='text-white/80 mb-8'>
                Fully Featured. Unlimited number of Users. Only pay for what you use
              </p>

              <Link
                href='https://www.domo.com/start/free?utm_source=referral_gwc&utm_medium=organic&orgid=100000770&utm_campid=701f2000001C6UOAA0%20Start%20Free%20|%20Domo'
                className='inline-flex items-center gap-2 bg-white px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors'
              >
                <span
                  className='text-transparent bg-clip-text'
                  style={{
                    backgroundImage: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                  }}
                >
                  Create Your Free Account
                </span>
                <FiArrowRight className='text-[#7030B1]' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
