'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const creditsData = [
  {
    title: 'Data Ingest',
    description:
      'Integrate data into Domo using connectors, file uploads, APIs, and more. Each completed update or table creation consumes 1 credit per table.',
    icon: '/images/partners/domo/domoi1.svg',
    footerText: '1 Credit per table created/updated',
  },
  {
    title: 'Data Written',
    description:
      'Send insights back to external systems through a simple writeback process. Each completed writeback uses 1 credit per table.',
    icon: '/images/partners/domo/domoi2.svg',
    footerText: '1 Credit per table written',
  },
  {
    title: 'Dataflow-Magic ETL',
    description:
      'Automate data extraction, transformation, and loading with Magic ETL. Each output table created or updated costs 1 credit.',
    icon: '/images/partners/domo/domoi3.svg',
    footerText: '1 Credit per output table created/updated',
  },
  {
    title: 'Dataflow-Redshift & MySQL',
    description:
      'Process and transform data seamlessly using Redshift or MySQL, with 1 credit per output table created or updated.',
    icon: '/images/partners/domo/domoi4.svg',
    footerText: '1 Credit per output table created/updated',
  },
  {
    title: 'Dataflow-Adrenaline',
    description:
      'Handle large datasets efficiently using advanced processing capabilities. Each execution costs 3 credits per output table.',
    icon: '/images/partners/domo/domoi5.svg',
    footerText: '3 Credit per output table created/updated',
  },
  {
    title: 'Dataflow-Data Science',
    description:
      'Use Magic ETL with Data Science, R, or Python tiles to enable advanced analytics, consuming 2 credits per output table.',
    icon: '/images/partners/domo/domoi6.svg',
    footerText: '2 Credit per output table created/updated',
  },
];

export default function ExecutionCredits() {
  return (
    <>
      <style jsx global>{`
        @keyframes swipe {
          0% {
            transform: translateX(-100%) rotate(-30deg);
          }
          100% {
            transform: translateX(200%) rotate(-30deg);
          }
        }
      `}</style>

      <section
        className='w-full py-16 md:py-24 relative overflow-hidden'
        style={{
          background: 'linear-gradient(135deg, #FFF7EB 0%, #FAE0FA 100%)',
        }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          {/* Header */}
          <div className='flex items-center justify-between gap-4 mb-16 w-full'>
            {/* Sparkle Icon */}
            <div className='w-12 h-12 bg-white border border-purple-100 rounded-xl shadow-sm flex items-center justify-center p-2 shrink-0'>
              <Image
                src='/images/partners/domo/sparkss.svg'
                alt='Sparkle'
                width={24}
                height={24}
                className='w-6 h-6'
              />
            </div>

            {/* Dotted Line */}
            <div className='flex-1 h-[2px] bg-[linear-gradient(to_right,#A0A0A0_50%,rgba(0,0,0,0)_0%)] bg-[length:10px_2px] bg-repeat-x opacity-30'></div>

            {/* CTA Button */}
            <Link
              href='/contact'
              className='group inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#9156AA] text-[#6F2B8B] font-medium hover:bg-purple-50 transition-colors duration-300 shrink-0'
            >
              Talk to Our Experts
              <FiArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </div>

          {/* Title Section */}
          <div className='flex flex-col lg:flex-row justify-between items-start gap-12 mb-20'>
            <h2 className='text-[32px] md:text-[40px] font-medium text-[#404040]'>
              Domo Execution Credits
            </h2>
            <p className='text-[#404040] text-[16px] leading-[24px] max-w-xl lg:text-right'>
              Unlock Domo's full BI platform with a flexible pay as you go Executive Credits model,
              offering unlimited users and complete feature access without complexity.
            </p>
          </div>

          {/* Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-20 lg:pb-96 gap-6 lg:gap-8'>
            {creditsData.map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col'
              >
                {/* Content */}
                <div className='p-8 md:p-10 flex flex-col items-center text-center flex-1'>
                  <div className='w-16 h-16 mb-6 flex items-center justify-center bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl'>
                    <div
                      className='w-8 h-8'
                      style={{
                        backgroundColor: '#D97706',
                        mask: `url("${item.icon}") no-repeat center / contain`,
                        WebkitMask: `url("${item.icon}") no-repeat center / contain`,
                      }}
                    />
                  </div>

                  <h3 className='text-[#F97316] font-semibold text-[18px] mb-4'>{item.title}</h3>
                  <div
                    aria-hidden
                    className='w-full h-[1px] mb-4 bg-[linear-gradient(to_right,#E5E7EB_35%,rgba(0,0,0,0)_0%)] bg-[length:14px_2px] bg-repeat-x rounded-full'
                  />
                  <p className='text-gray-600 text-sm leading-relaxed max-w-2xl'>
                    {item.description}
                  </p>
                </div>

                {/* Footer */}
                <div
                  className='relative p-4 flex items-center justify-center gap-2 overflow-hidden'
                  style={{ background: 'linear-gradient(90deg, #FFF7EB 0%, #FAE0FA 100%)' }}
                >
                  {/* Animation Overlay */}
                  <div
                    className='absolute inset-0 w-[200px] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent'
                    style={{
                      animation: 'swipe 3s ease-in-out infinite',
                      pointerEvents: 'none',
                    }}
                  />

                  <div className='relative z-10 flex items-center gap-2'>
                    <Image
                      src='/images/partners/domo/newspark.svg'
                      alt='credit'
                      width={16}
                      height={16}
                      className='w-4 h-4'
                    />
                    <span className='text-[#6F2B8B] text-[13px] font-medium'>
                      {item.footerText}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
