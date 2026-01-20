'use client';

import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const features = [
  {
    icon: '/images/partners/domo/domoicon1.svg',
    title: '1200+ Connectors',
  },
  {
    icon: '/images/partners/domo/domoicon2.svg',
    title: 'Unlimited Users',
  },
  {
    icon: '/images/partners/domo/domoicon3.svg',
    title: 'Workflow Automation',
  },
  {
    icon: '/images/partners/domo/domoicon4.svg',
    title: 'Reuse the Instance',
  },
  {
    icon: '/images/partners/domo/domoicon5.svg',
    title: 'Next Gen AI',
  },
  {
    icon: '/images/partners/domo/domoicon6.svg',
    title: 'Flexible Pricing',
  },
];

export default function CreateAccount() {
  return (
    <section className='w-full py-20 px-4 md:px-8'>
      <div
        className='max-w-9xl mx-auto rounded-[32px] overflow-hidden relative p-8 md:p-12 lg:p-16'
        style={{
          background: 'linear-gradient(90deg, #D6A9E9 0%, #99CCEE 100%)',
        }}
      >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center overflow-hidden'>
          {/* Left Content */}
          <div className='max-w-xl lg:mx-12 mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
            <h2 className='text-[24px] md:text-[32px] font-medium text-[#303030] mb-6 leading-tight'>
              Create Your Free Account Now & Access It Forever
            </h2>
            <p className='text-[#404040] text-[16px] leading-[24px] mb-10'>
              Enjoy unlimited features with complete access for unlimited users. No credit card
              required. No hidden limits. No commitments.
            </p>

            <Link
              href='/contact'
              className='inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[#FFFFFF] font-medium transition-transform hover:scale-105 shadow-sm'
              style={{ background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)' }}
            >
              Create Your Free Account
              <FiArrowRight />
            </Link>
          </div>

          {/* Right Grid */}
          <div className='relative h-[480px] w-full hidden lg:block'>
            {/*
                   Positioning the cards manually to replicate the scattered/stepped look in the image.
                   The image shows columns with different vertical alignments.
                */}

            {/* Column 1 (Workflow, Flexible Pricing) - Bottom Left-ish */}
            <div className='absolute top-[20%] left-[0%] flex flex-col gap-6'>
              <FeatureCard feature={features[2]} />
              <FeatureCard feature={features[5]} />
            </div>

            {/* Column 2 (Unlimited Users, Next Gen AI) - Center-ish */}
            <div className='absolute top-[10%] left-[33%] flex flex-col gap-6'>
              <FeatureCard feature={features[1]} />
              <FeatureCard feature={features[4]} />
            </div>

            {/* Column 3 (1200+ Connectors, Reuse the Instance) - Top Right-ish */}
            <div className='absolute top-[0%] left-[66%] flex flex-col gap-6'>
              <FeatureCard feature={features[0]} />
              <FeatureCard feature={features[3]} />
            </div>
          </div>

          {/* Mobile Grid View */}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 lg:hidden w-full'>
            {features.map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} isGrid />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, isGrid }) {
  return (
    <div
      className={`rounded-2xl flex flex-col items-center justify-center p-4 text-center gap-3 transition-transform hover:-translate-y-1 duration-300 shadow-sm
        ${isGrid ? 'w-full aspect-square min-h-[140px]' : 'w-[160px] h-[160px] xl:w-[180px] xl:h-[180px]'}
      `}
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div
        className='w-8 h-8 md:w-10 md:h-10'
        style={{
          backgroundColor: '#2297E4',
          mask: `url("${feature.icon}") no-repeat center / contain`,
          WebkitMask: `url("${feature.icon}") no-repeat center / contain`,
        }}
      />
      <p className='text-[#2297E4] font-semibold text-[13px] md:text-base leading-tight'>
        {feature.title}
      </p>
    </div>
  );
}
