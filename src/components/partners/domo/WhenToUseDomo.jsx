'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const row1 = [
  { icon: 'when1', label: 'Build & Deploy Apps' },
  { icon: 'when2', label: 'Domo Dashboards' },
  { icon: 'when3', label: 'Integrate Data & Applications' },
  { icon: 'when4', label: 'Data Governance & Security' },
  { icon: 'when5', label: 'Self Service Analytics' },
];

const row2 = [
  { icon: 'when6', label: 'Internet of Things' },
  { icon: 'when7', label: 'Predictive Analytics AI ML' },
  { icon: 'when8', label: 'Stunning Visualization' },
  { icon: 'when9', label: 'Embedded Analytics' },
];

const ItemCard = ({ icon, label, isLast, hideSeparator }) => (
  <div
    className={`flex flex-col items-center justify-start text-center px-4 md:px-8 relative flex-1 min-w-[200px] max-w-[250px] py-12`}
  >
    <div
      className='w-[70px] h-[70px] rounded-2xl flex items-center justify-center mb-6 shadow-sm hover:scale-105 transition-transform duration-300'
      style={{
        background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
      }}
    >
      <Image
        src={`/images/partners/domo/${icon}.svg`}
        alt={label}
        width={35}
        height={35}
        className='w-10 h-10 object-contain brightness-0 invert'
      />
    </div>
    <p className='text-[#404040] text-[15px] font-medium leading-[1.4] max-w-[160px]'>{label}</p>

    {/* Vertical Separator - Visible on lg unless explicitly hidden or it's the last item */}
    {!isLast && !hideSeparator && (
      <div className='hidden lg:block absolute right-0 top-0 bottom-0 w-[1px] bg-[#E7E7E7]'></div>
    )}
  </div>
);

export default function WhenToUseDomo() {
  return (
    <section
      className='w-full py-16 md:py-24 lg:-mt-96 -mt-40 relative overflow-hidden'
      style={{
        background: 'linear-gradient(180deg, #EBD8F3 0%, #FFFFFF 75%, #EBD8F3 100%)',
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='flex items-center justify-between gap-4 lg:mt-80 mt-44 mb-12 lg:mb-16 w-full'>
          <div className='w-12 h-12 bg-white border border-purple-100 rounded-xl shadow-sm flex items-center justify-center p-2 shrink-0'>
            <Image
              src='/images/partners/domo/sparkss.svg'
              alt='Sparkle'
              width={24}
              height={24}
              className='w-6 h-6'
            />
          </div>
          <div className='flex-1 h-[2px] bg-[linear-gradient(to_right,#A0A0A0_50%,rgba(0,0,0,0)_0%)] bg-[length:10px_2px] bg-repeat-x opacity-30'></div>
          <Link
            href='/contact'
            className='group inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#9156AA] text-[#6F2B8B] font-medium hover:bg-purple-50 transition-colors duration-300 shrink-0'
          >
            Talk to Our Experts
            <FiArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
          </Link>
        </div>

        {/* Title Section */}
        <div className='flex flex-col lg:flex-row justify-between items-center gap-6 mb-16 text-center lg:text-left'>
          <h2 className='text-[32px] md:text-[40px] font-medium text-[#303030] leading-tight'>
            When to use Domo?
          </h2>
          <p className='text-[#505050] text-[16px] font-medium lg:text-right w-full lg:max-w-lg'>
            Want actionable insights to make smart decisions? Try Domo!
          </p>
        </div>

        {/* Content Rows */}
        <div className='w-full relative'>
          {/* Row 1 */}
          <div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-between w-full'>
            {row1.map((item, index) => (
              <ItemCard
                key={index}
                icon={item.icon}
                label={item.label}
                isLast={index === row1.length - 1}
              />
            ))}
          </div>

          {/* Horizontal Line - Desktop Only */}
          <div className='hidden lg:block w-full h-[1px] bg-[#E7E7E7]'></div>

          {/* Row 2 */}
          <div className='flex flex-wrap lg:flex-nowrap justify-center w-full lg:max-w-4xl mx-auto'>
            {row2.map((item, index) => (
              <ItemCard
                key={index}
                icon={item.icon}
                label={item.label}
                isLast={index === row2.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
