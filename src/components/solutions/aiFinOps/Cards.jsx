'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const whyCards = [
  {
    bg: '#6F2B8B',
    pillText: 'One partner across the full stack.',
    description:
      'GWC delivers the complete AI stack, from data and analytics to agentic AI, enabling AI FinOps on a trusted enterprise foundation.',
    rounded: 'rounded-[30px] rounded-br-[0px]',
  },
  {
    bg: '#0D6B63',
    pillText: 'Production-grade, not a spreadsheet exercise',
    description:
      "GWC's 50+ prebuilt enterprise agents include human-in-the-loop governance, making AI FinOps a seamless extension, not an add-on.",
    rounded: 'rounded-[30px] rounded-bl-[0px]',
    bgImage1: '/images/solutions/aifinops/card2-bg1.png', // Add or update image path here
    bgImage2: '/images/solutions/aifinops/card2-bg.png', // Add or update image path here
  },
  {
    bg: '#F16B66',
    pillText: 'ROI first, by design',
    description:
      "GWC's 50+ prebuilt enterprise agents include human-in-the-loop governance, making AI FinOps a seamless extension, not an add-on.",
    rounded: 'rounded-[30px] rounded-tr-[0px]',
    bgImage1: '/images/solutions/aifinops/card3-bg.png', // Add or update image path here
  },
  {
    bg: '#1194CC',
    pillText: 'Fortune 500 Experience',
    description:
      'Delivering AI and data solutions across Retail, Manufacturing, Healthcare, Financial Services, and Logistics with proven enterprise expertise.',
    rounded: 'rounded-[30px] rounded-tl-[0px]',
  },
];

export default function Cards() {
  return (
    <section className='w-full py-16 lg:py-24 bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center'>
          {/* Left Column - Text & CTA */}
          <div className='lg:col-span-6'>
            <span className='block text-[40px] italic text-[#6F2B8B] mb-2'>Why GWC</span>

            <h2
              className='text-[39px] font-semibold tracking-tight mb-6 leading-[1.25]'
              style={{
                background: 'linear-gradient(90deg, #6F2B8B 0%, #D9534F 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Built to Run This End to End
            </h2>

            <p
              className='text-gray-600 text-[14px] sm:text-[16px] leading-[34px] mb-8 font-medium w-full max-w-[527px]'
              style={{ fontFamily: 'Poppins' }}
            >
              Built to deliver enterprise AI end to end, GWC combines data, analytics, AI platforms,
              and governance to help organizations accelerate adoption while maximizing business
              value and controlling AI costs.
            </p>

            <Link
              href='/contact'
              className='bg-[#7030B1] hover:bg-[#5C2794] text-white px-7 py-3.5 rounded-full font-medium text-sm sm:text-base inline-flex items-center gap-2.5 transition-all shadow-md hover:scale-105'
            >
              <span>Contact Us</span>
              <FiArrowRight className='w-4 h-4' />
            </Link>
          </div>

          {/* Right Column - 2x2 Grid of Colorful Cards with Custom Notched Corners */}
          <div className='lg:col-span-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6'>
              {whyCards.map((card, idx) => (
                <div
                  key={idx}
                  className={`relative overflow-hidden ${card.rounded} p-6 sm:p-7 text-white shadow-lg flex flex-col justify-between min-h-[282px] transition-transform duration-300 hover:scale-[1.02]`}
                  style={{ backgroundColor: card.bg }}
                >
                  {/* Background Overlay Image 1 (Top Left / Shape) */}
                  {card.bgImage1 && (
                    <div className='absolute -top-4 -left-8 pointer-events-none z-0'>
                      <Image
                        src={card.bgImage1}
                        alt=''
                        width={200}
                        height={200}
                        className='object-contain opacity-90'
                      />
                    </div>
                  )}

                  {/* Background Overlay Image 2 (Top Right / Shape) */}
                  {card.bgImage2 && (
                    <div className='absolute top-12 -right-11 pointer-events-none z-0'>
                      <Image
                        src={card.bgImage2}
                        alt=''
                        width={200}
                        height={200}
                        className='object-contain opacity-90'
                      />
                    </div>
                  )}

                  {/* Card Content Layer */}
                  <div className='relative z-10 flex flex-col justify-between h-full min-h-[240px]'>
                    {/* Top Pill Header */}
                    <div className='bg-[#FFFFFF1C] backdrop-brightness-105 text-white font-semibold text-sm sm:text-[15px] px-5 py-3.5 rounded-2xl mt-4 leading-snug'>
                      {card.pillText}
                    </div>

                    {/* Description */}
                    <p className='text-[13px] leading-relaxed text-white/95'>{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
