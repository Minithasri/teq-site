'use client';

import { AlertTriangle, Edit3, FileSpreadsheet, Link2Off } from 'lucide-react';

const challenges = [
  {
    title: '27 Excel Sheets',
    description:
      'Campaign data scattered across dozens of manually maintained spreadsheets with no single source of truth.',
    icon: <FileSpreadsheet size={20} className='text-[#FC3030]' />,
  },
  {
    title: 'Manual Data Entry Errors',
    description:
      'Human-driven input processes leading to inconsistencies, duplicates, and costly downstream mistakes.',
    icon: <Edit3 size={20} className='text-[#FC3030]' />,
  },
  {
    title: 'No Centralized Governance',
    description:
      'Lack of standardized naming conventions, validation rules, and approval workflows across teams.',
    icon: <AlertTriangle size={20} className='text-[#FC3030]' />,
  },
  {
    title: 'Disconnected Systems',
    description:
      'DSP platforms, Salesforce, and reporting tools operating in silos without real-time synchronization.',
    icon: <Link2Off size={20} className='text-[#FC3030]' />,
  },
];

export default function Challenges() {
  return (
    <section
      className="w-full font-['Poppins'] flex flex-col items-center"
      style={{
        minHeight: '727px',
        background: 'linear-gradient(0deg, #FFFFFF, #FFFFFF)',
        paddingTop: '60px',
      }}
    >
      <div className='max-w-[1050px] w-full px-4 flex flex-col items-center'>
        {/* 2. Title - THE CHALLENGE */}
        <div className='mb-10'>
          <h2
            className='font-bold text-center '
            style={{
              fontSize: '42px',
              letterSpacing: '1.4px',
              lineHeight: '20px',
            }}
          >
            The challenge
          </h2>
        </div>

        {/* 3. Subtitle - A Fragmented Campaign Ecosystem */}
        <h3
          className='font-bold text-[#0F1729]/80 text-center mb-4'
          style={{
            fontSize: '30px',
            lineHeight: '36px',
            letterSpacing: '-0.75px',
            maxWidth: '553px',
          }}
        >
          A Fragmented Campaign Ecosystem
        </h3>

        {/* 4. Description Text */}
        <p
          className='font-normal text-[#2F2F2F] text-center mb-10'
          style={{
            fontSize: '16px',
            lineHeight: '26px',
            maxWidth: '987px',
          }}
        >
          The existing infrastructure relied on manual processes and disconnected tools,{' '}
          <br className='hidden md:block' />
          creating significant operational risk.
        </p>

        {/* 5. Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 w-full px-4'>
          {challenges.map((item, index) => (
            <div
              key={index}
              className='bg-white flex flex-col p-8 rounded-[12px] shadow-[0px_8px_22px_rgba(0,0,0,0.08)] border-2 border-[#F5F5F5]'
              style={{
                width: '100%',
                maxWidth: '454px',
                minHeight: '183.5px',
                margin: '0 auto',
              }}
            >
              <div className='flex items-start gap-4 mb-3'>
                {/* Icon Container with light background */}
                <div className='flex-shrink-0 w-10 h-10 rounded-xl bg-[#FDE0E0]  flex items-center justify-center'>
                  {item.icon}
                </div>

                <h4
                  className='font-bold text-[#0F1729]/80 pt-1'
                  style={{ fontSize: '22px', lineHeight: '1.2' }}
                >
                  {item.title}
                </h4>
              </div>

              <p
                className='text-[#2F2F2F] font-normal leading-relaxed'
                style={{ fontSize: '15px' }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
