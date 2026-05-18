'use client';

import Image from 'next/image';

const challenges = [
  'Limited visibility into license allocation and usage across the organization',
  'Manual reporting processes causing significant delays and operational inefficiencies',
  'Over-provisioning of licenses leading to unnecessary and avoidable costs',
  'Difficulty in identifying inactive or unused accounts across systems',
  'Compliance risks due to lack of centralized monitoring and audit trails',
  'No scalable system for tracking, analyzing, and forecasting license usage',
];

export default function ClientOverview() {
  return (
    <section className='w-full bg-white'>
      {/* ── Client Overview ─────────────────────────────────────────── */}
      <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 pt-8 md:pt-10 pb-10 md:pb-14'>
        <h2 className='text-2xl md:text-3xl font-bold mb-5 md:mb-6' style={{ color: '#1D2530' }}>
          Client Overview
        </h2>
        <p
          className='text-sm sm:text-base md:text-[16px] leading-relaxed max-w-7xl'
          style={{ color: '#6C7C93' }}
        >
          A leading pharmaceutical organization managing a large workforce of employees,
          contractors, and system accounts required a scalable, centralized solution for tracking
          and optimizing identity access management and Microsoft license usage across the
          enterprise. The existing processes were largely manual, fragmented, and lacked the
          visibility needed for strategic decision-making and regulatory compliance.
        </p>
      </div>

      {/* ── Business Challenges ──────────────────────────────────────── */}
      <div className='w-full' style={{ backgroundColor: '#F3F5F7' }}>
        <div className='w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-14 md:py-10'>
          <div className='flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16'>
            {/* Left — title + bullet list */}
            <div className='flex-1 min-w-0'>
              <h2
                className='text-2xl md:text-3xl font-bold mb-6 md:mb-8'
                style={{ color: '#F32719' }}
              >
                Business Challenges
              </h2>

              <ul className='space-y-4'>
                {challenges.map((item, i) => (
                  <li key={i} className='flex items-start gap-3'>
                    {/* Custom SVG icon */}
                    <span className='flex-shrink-0 w-5 h-5 mt-0.5'>
                      <Image
                        src='/images/Templates/gsk/gsvg1.svg'
                        alt='challenge icon'
                        width={20}
                        height={20}
                      />
                    </span>
                    <span
                      className='text-sm md:text-[14px] lg:text-[17px] leading-snug'
                      style={{ color: '#6C7C93' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — pharmaceutical image */}
            <div className='w-full lg:w-[380px] xl:w-[420px] flex-shrink-0'>
              <div className='relative w-full aspect-[4/3] -right-[150px] lg:aspect-auto lg:h-[340px] xl:h-[360px] rounded-xl overflow-hidden'>
                <Image
                  src='/images/Templates/gsk/gsk1.png'
                  alt='GSK pharmaceutical — hand with capsules'
                  fill
                  className='object-cover object-center'
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
