'use client';

import { AlertTriangle, Clock, EyeOff, FileText, PenLine } from 'lucide-react';
import Image from 'next/image';

export default function BusinessContextAndChallenge() {
  const contextItems = [
    {
      icon: <PenLine size={24} className='text-[#5951FD]' />,
      text: 'Leadership relied on manually prepared Excel-based weekly sales reports',
    },
    {
      icon: <EyeOff size={24} className='text-[#5951FD]' />,
      text: 'No instant visibility into revenue performance, customer behavior, or product trends',
    },
    {
      icon: <AlertTriangle size={24} className='text-[#5951FD]' />,
      text: 'Delayed insights meant sales decisions were reactive rather than proactive',
    },
  ];

  const challenges = [
    {
      icon: <FileText size={20} className='text-[#FF3B30]' />,
      title: 'Fragmented Data Sources',
      description:
        'Sales data existed across Shopify, POS systems, and multiple spreadsheets with no integration.',
    },
    {
      icon: <PenLine size={20} className='text-[#FF3B30]' />,
      title: 'Inconsistent Reporting',
      description:
        'Different teams used different KPI definitions, creating conflicting versions of truth.',
    },
    {
      icon: <Clock size={20} className='text-[#FF3B30]' />,
      title: 'Delayed Insights',
      description:
        'Weekly manual reports meant leadership always worked with outdated information.',
    },
    {
      icon: <EyeOff size={20} className='text-[#FF3B30]' />,
      title: 'No Unified View',
      description:
        'Executives could not drill down into performance across regions, products, or customers.',
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 font-['Poppins'] overflow-hidden">
      <div className='max-w-[1316px] mx-auto px-4'>
        {/* --- BUSINESS CONTEXT SECTION --- */}
        <div className='flex flex-col items-center text-center mb-10'>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 600,
              letterSpacing: '1.4px',
              color: '#333333',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}
          >
            Business Context
          </h2>

          <h3
            style={{
              fontSize: '30px',
              fontWeight: 500,
              color: '#1D2530',
              letterSpacing: '-0.75px',
              lineHeight: '36px',
              marginBottom: '28px',
            }}
          >
            A Retail Organization Bound by Manual Reporting
          </h3>

          <p
            style={{
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '26px',
              color: '#2F2F2F',
              maxWidth: '1316px',
              marginBottom: '48px',
            }}
          >
            The organization depended on manually prepared Excel-based weekly sales reports.
            Leadership teams lacked instant visibility into revenue performance, customer behavior,
            and product trends. Because insights were delayed, sales decisions were reactive rather
            than proactive.
          </p>

          {/* Context List Items */}
          <div className='flex flex-col gap-6 w-full max-w-[1100px] items-start mx-auto'>
            {contextItems.map((item, idx) => (
              <div key={idx} className='flex items-center gap-8'>
                <div
                  style={{
                    width: '72px',
                    height: '57px',
                    backgroundColor: '#BFCAFB',
                    border: '1px solid #5951FD',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <p
                  style={{
                    fontSize: '24px',
                    fontWeight: 400,
                    lineHeight: '36px',
                    letterSpacing: '-0.75px',
                    color: '#1D2530',
                    textAlign: 'left',
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- THE CHALLENGE SECTION --- */}
        <div className='relative flex flex-col items-center text-center pt-10'>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 600,
              letterSpacing: '1.4px',
              color: '#FF6B6B',
              textTransform: 'uppercase',
              marginBottom: '16px',
              transform: 'rotate(-0.32deg)',
            }}
          >
            The Challenge
          </h2>

          <h3
            style={{
              fontSize: '30px',
              fontWeight: 500,
              color: '#1D2530',
              letterSpacing: '-0.75px',
              lineHeight: '36px',
              marginBottom: '24px',
            }}
          >
            Scattered Data. Stale Reports. Blind Spots.
          </h3>

          <p
            style={{
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '26px',
              color: '#2F2F2F',
              width: '1000px',
            }}
          >
            Without a centralized analytics system, executives struggled to gain a clear, unified
            view of performance across regions, products, and customers.
          </p>
        </div>
      </div>

      {/* --- ILLUSTRATION IMAGE --- */}
      {/* Positioned exactly based on your requirements */}
      <div
        className='absolute z-10 pointer-events-none'
        style={{
          width: '500px',
          height: '500px',
          top: '390px',
          left: '1230px',
          opacity: 0.72,
        }}
      >
        <Image
          src='/images/Templates/templatez/csperformance/scpchallenge.png'
          alt='Challenge Illustration'
          width={450}
          height={450}
          className='object-contain'
        />
      </div>

      <div className='grid grid-cols-1 mb-[-50px] mt-20 md:grid-cols-2 gap-x-6 gap-y-6 w-full max-w-[1090px] mx-auto px-4 justify-items-center'>
        {challenges.map((item, index) => (
          <div
            key={index}
            className='bg-white flex flex-col p-8'
            style={{
              maxWidth: '540px',
              height: '190px',
              borderRadius: '12px',
              border: '1px solid #F90606',
            }}
          >
            <div className='flex items-center gap-4 mb-5'>
              <div className='flex-shrink-0 w-11 h-11 rounded-xl bg-[#FDE0E0] flex items-center justify-center border border-[#FD5151]'>
                {item.icon}
              </div>

              <h4
                className='font-bold text-[#FC3030]'
                style={{ fontSize: '24px', lineHeight: '1.2' }}
              >
                {item.title}
              </h4>
            </div>

            <p
              className='text-[#555555] font-normal leading-relaxed text-left'
              style={{ fontSize: '15px' }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
