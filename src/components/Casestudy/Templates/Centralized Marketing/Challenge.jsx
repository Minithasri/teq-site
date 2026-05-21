'use client';

import { FileText, Database, Clock, EyeOff } from 'lucide-react';

const challenges = [
  {
    title: 'Manual Reporting',
    description: 'Marketing data compiled manually in Google Sheets slow and error-prone.',
    icon: <FileText size={18} className='text-[#E71013]' />,
  },
  {
    title: 'Scattered Data Sources',
    description: 'Metrics spread across TikTok, Meta, Pinterest, Shopify & Google Analytics.',
    icon: <Database size={18} className='text-[#E71013]' />,
  },
  {
    title: 'Reporting Delays & Errors',
    description:
      'Inconsistent data and significant lag between campaigns and performance visibility.',
    icon: <Clock size={18} className='text-[#E71013]' />,
  },
  {
    title: 'No Unified View',
    description: 'No single cross-channel performance dashboard for decision-makers.',
    icon: <EyeOff size={18} className='text-[#E71013]' />,
  },
];

export default function Challenges() {
  return (
    <section
      className="w-full py-12 md:py-16 font-['Poppins']"
      style={{
        background:
          'linear-gradient(180deg, rgba(179, 111, 106, 0.4) 0%, rgba(252, 251, 248, 0.4) 100%)',
      }}
    >
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Responsive Section Title */}
        <h2 className='text-[24px] md:text-[28px] font-semibold tracking-[1.4px] text-center mb-8 md:mb-10 leading-tight'>
          The Challenge
        </h2>

        {/* Challenges Grid: Single column on mobile, Two columns on tablet/desktop */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6'>
          {challenges.map((item, index) => (
            <div
              key={index}
              className='bg-white border-[1px] border-2 border[#F5F5F5] rounded-xl p-5 flex items-start gap-4 shadow-[0px_8px_22px_rgba(0,0,0,0.08)]'
            >
              {/* Icon Container */}
              <div className='flex-shrink-0 w-10 h-10 rounded-[8px] bg-[#FBD8D9] flex items-center justify-center'>
                {item.icon}
              </div>

              {/* Text Content */}
              <div className='flex flex-col justify-center'>
                <h3 className='text-[16px] md:text-[18px] font-bold text-[#0F1729]/80 mb-1 leading-tight'>
                  {item.title}
                </h3>
                <p className='text-[13px] md:text-[14px] font-normal text-[#1D2530] leading-[1.4] opacity-90'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
