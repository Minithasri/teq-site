'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import imgIcon from '../../../../public/images/solutions/Icon.svg';

const deliverables = [
  {
    title: 'AI Cost & Token Audit',
    description:
      'Full inventory of current AI/LLM spend across models, platforms, and teams, benchmarked against usage and outcomes to identify waste, over-provisioning, and shadow AI.',
    icon: '/images/solutions/aifinops/html.svg',
  },
  {
    title: 'Token Economics Dashboards',
    description:
      'Built on Domo and Snowflake Cortex AI, a shared, real-time view of AI spend by team, workflow, and business outcome, not just a bill from a model provider.',
    icon: '/images/solutions/aifinops/html.svg',
  },
  {
    title: 'Model Routing & Tiering Design',
    description:
      'Optimize AI workloads by matching task complexity to the right model, reducing costs without compromising output quality.',
    icon: '/images/solutions/aifinops/db.svg',
  },
  {
    title: 'Agentic Cost Governance',
    description:
      "Cost-per-workflow instrumentation and automated guardrails built directly into GWC's autonomous agents, so every agent reports what it cost to execute.",
    icon: '/images/solutions/aifinops/settings.svg',
  },
  {
    title: 'Chargeback / Showback Implementation',
    description:
      'Attribution models that give business units ownership of their AI spend and make AI investment defensible to finance.',
    icon: '/images/solutions/aifinops/settings.svg',
  },
  {
    title: 'AI ROI Reporting',
    description:
      'Ongoing measurement tying AI spend to business outcomes, framed for CFOs and boards, not just technology teams.',
    icon: '/images/solutions/aifinops/security.svg',
  },
];

export default function Technology() {
  return (
    <section
      className='w-full py-16 lg:py-24 relative overflow-hidden'
      style={{
        background: `linear-gradient(0deg, #F9EAE1, #F9EAE1), linear-gradient(258.79deg, rgba(229, 170, 102, 0.3) -13.56%, rgba(255, 165, 129, 0.3) -13.56%, rgba(221, 161, 108, 0.3) 18.23%, rgba(230, 242, 246, 0.3) 53.64%, rgba(202, 185, 246, 0.3) 91.85%, rgba(112, 48, 177, 0.3) 119.62%)`,
      }}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header Bar */}
        <div className='hidden md:flex items-center justify-between gap-6 mb-12'>
          <div className='w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100'>
            <Image src={imgIcon} alt='' aria-hidden width={28} height={28} />
          </div>

          <div className='flex-1 h-[1px] border-b-2 border-dashed border-gray-400/40' />

          <Link
            href='/contact'
            className='px-6 py-3 rounded-full border border-[#6F2B8B] text-[#6F2B8B] font-medium text-sm hover:bg-purple-50/80 transition flex items-center gap-2 shrink-0'
          >
            Talk to Our Experts
            <FiArrowRight className='w-4 h-4' />
          </Link>
        </div>

        {/* Title + Subtitle Row */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 mb-14'>
          <h2
            className='text-[22px] md:text-[40px] font-medium text-[#292524] tracking-tight leading-[1.2] max-w-xl'
            style={{ fontFamily: 'Poppins' }}
          >
            From Audit to Autonomous Cost Governance
          </h2>

          <p
            className='text-gray-600 text-[15px] max-w-md pt-1.5'
            style={{ fontFamily: 'Poppins' }}
          >
            Everything you need to build, deploy, and scale AI agents
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] justify-items-center'>
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className='bg-white rounded-[24px] py-[40px] px-6 shadow-lg shadow-purple-950/5 border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
            >
              {/* Icon Container */}
              <div className='w-14 h-14 rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center mb-6 shadow-[0px_2px_8px_0px_#0000001A]'>
                <Image src={item.icon} alt={item.title} width={28} height={28} />
              </div>

              {/* Card Title */}
              <h3 className='text-[14px] font-semibold mb-4 text-[#D97706]'>{item.title}</h3>

              {/* Dotted Line */}
              <div className='w-full border-t border-dashed border-gray-200 my-4' />

              {/* Description */}
              <p className='text-gray-600 text-[14px] leading-[24px] max-w-xs font-normal'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
