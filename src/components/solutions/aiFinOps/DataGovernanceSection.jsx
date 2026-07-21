'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const pillars = [
  {
    number: '1',
    title: 'Visibility',
    description:
      'Real-time metering of token and compute consumption at the model, workload, team, and workflow level, instrumented at the application layer, not reconstructed after the fact.',
  },
  {
    number: '2',
    title: 'Accountability',
    description:
      'Chargeback and showback models that attribute AI cost to the business units generating it, with budget thresholds and approval gates built into human-in-the-loop governance.',
  },
  {
    number: '3',
    title: 'Optimization',
    description:
      'Model routing and tiering that send each request to the cheapest model capable of an acceptable result, combined with prompt optimization and semantic caching.',
  },
  {
    number: '4',
    title: 'Insights',
    description:
      'Dashboards connecting AI spend to business value: cost per workflow completion, cost per resolved ticket, cost per agent-executed action, for real AI ROI reporting.',
  },
];

export default function DataGovernanceSection() {
  return (
    <section className='w-full py-12 lg:py-16 bg-white overflow-hidden space-y-16'>
      {/* 1. AI FinOps & Token Economics Defined */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Card with Background Image */}
        <div
          className='relative z-0 w-full rounded-[22px] overflow-hidden min-h-[570px] sm:min-h-[480px] md:min-h-[520px] flex items-center p-4 sm:p-6 md:p-10 border border-gray-100'
          style={{
            background:
              'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 103.43%)',
            boxShadow: `
              0px 1.34px 4.15px 0px #D2D0E111,
              0px 3.23px 9.98px 0px #D2D0E119,
              0px 6.08px 18.8px 0px #D2D0E11F,
              0px 10.85px 33.53px 0px #D2D0E124,
              0px 20.3px 62.72px 0px #D2D0E12C
            `,
          }}
        >
          {/* Background Image */}
          <Image
            src='/images/solutions/aifinops/frame3.png'
            alt='AI FinOps & Token Economics, Defined'
            fill
            priority
            unoptimized
            className='object-cover object-center z-0'
          />

          {/* Left Purple Box Card */}
          <div
            className='relative z-10 w-full max-w-2xl rounded-[24px] p-6 sm:p-8 md:p-[40px] text-white flex flex-col justify-between min-h-[150px] lg:h-[280px] gap-6'
            style={{
              backgroundColor: '#6E2B8B',
              boxShadow: `
                0px 1.34px 4.15px 0px #D2D0E111,
                0px 3.23px 9.98px 0px #D2D0E119,
                0px 6.08px 18.8px 0px #D2D0E11F,
                0px 10.85px 33.53px 0px #D2D0E124,
                0px 20.3px 62.72px 0px #D2D0E12C
              `,
            }}
          >
            <div>
              <h2 className='text-[24px] font-bold tracking-normal leading-tight mb-4 font-sans'>
                AI FinOps & Token Economics, Defined
              </h2>

              {/* White Divider Line */}
              <div className='w-48 h-[5px] bg-white rounded-full mb-5 opacity-90' />

              <p
                className='text-[14px] font-medium leading-relaxed mb-3 opacity-95 font-sans'
                style={{ fontFamily: 'Poppins' }}
              >
                AI FinOps brings cloud cost discipline to AI, managing variable token usage, spend,
                and business value.
              </p>

              <p
                className='text-[14px] font-medium leading-relaxed opacity-95 font-sans'
                style={{ fontFamily: 'Poppins' }}
              >
                Token Economics enables visibility and optimization of AI consumption at the team,
                feature, and workflow level. For agentic AI, GWC provides the governance layer to
                control costs, improve accountability, and scale AI adoption across models, agents,
                and platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Quote & CTA Banner */}
        <div
          className='mt-10 lg:mt-12 max-w-[1240px] w-full mx-auto p-[5px] rounded-[24px] shadow-sm'
          style={{
            background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
          }}
        >
          <div className='bg-white rounded-[20px] px-6 sm:px-10 py-6 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-6 w-full'>
            {/* Quote with Gradient Text */}
            <p
              className='text-lg sm:text-xl md:text-[23px] font-medium text-center leading-snug tracking-tight'
              style={{
                background: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'Poppins',
              }}
            >
              Without governance, the same autonomy that makes agents valuable can make their cost
              invisible.
            </p>

            {/* CTA Button */}
            <Link
              href='/contact'
              className='w-full max-w-[414px] h-[77px] px-[41px] py-[12px] rounded-[24px] bg-[#F3E8FF] hover:bg-[#E9D5FF] text-[#6F2B8B] font-normal text-base sm:text-[17px] inline-flex items-center justify-between transition-all shrink-0 hover:scale-[1.02] shadow-sm'
              style={{ fontFamily: 'Poppins' }}
            >
              <span>Talk to a FinOps Specialist</span>
              <Image
                src='/images/solutions/aifinops/right-arrow.svg'
                alt=''
                width={84}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Four Pillars of AI Cost Governance */}
      <div className='max-w-7xl mx-auto px-[16px] pt-[16px] pb-[40px] border border-[#E5E5E5] rounded-[16px] shadow-[0px 1.34px 4.15px 0px #D2D0E12C]'>
        {/* Top Header Card */}
        <div className='bg-[#FAF5FF] rounded-[24px] p-5 md:p-8 text-center mb-10 border border-purple-100/60'>
          <h2
            className='text-3xl sm:text-2xl lg:text-3xl font-semibold tracking-tight mb-3'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Four Pillars of AI Cost Governance
          </h2>
          <p className='text-[#737373] text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal'>
            A production-grade approach to AI cost, not a spreadsheet exercise.
          </p>
        </div>

        {/* 4 Pillar Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 px-[24px]'>
          {pillars.map(pillar => (
            <div
              key={pillar.number}
              className='bg-white rounded-[24px] p-6 border border-gray-100 shadow-md shadow-purple-900/5 hover:shadow-lg hover:border-purple-200 transition-all duration-300 flex flex-col items-start'
            >
              {/* Number Circle Badge */}
              <div
                className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mb-5'
                style={{
                  background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                  boxShadow: 'inset 0px 1.34px 4.15px 0px #D2D0E114',
                }}
              >
                {pillar.number}
              </div>

              {/* Title */}
              <h3
                className='text-[20px] font-semibold mb-3 tracking-tight'
                style={{
                  background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {pillar.title}
              </h3>

              {/* Description */}
              <p className='text-gray-600 text-[12px] leading-relaxed'>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
