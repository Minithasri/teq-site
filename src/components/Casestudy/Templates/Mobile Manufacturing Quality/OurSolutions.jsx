'use client';

import Image from 'next/image';

const architectureSteps = [
  {
    icon: '/images/Templates/template3/nw1.svg',
    title: 'Data Integration Layer',
    description: 'Automated data ingestion from MES, IPQC and Trace Systems',
  },
  {
    icon: '/images/Templates/template3/nw2.svg',
    title: 'Unified Data Model',
    description:
      'Common schema linking operator, shift, machine, fixture, process stage, and component ID',
  },
  {
    icon: '/images/Templates/template3/nw3.svg',
    title: 'Processing & Analytics Layer',
    description: 'Commonality detection algorithms identifying recurring defect correlations',
  },
  {
    icon: '/images/Templates/template3/nw4.svg',
    title: 'Visualization Layer (Power BI)',
    description: 'Dashboards enabling defect trend tracking, stage-wise yield, and RCA drill-downs',
  },
];

export default function OurSolutions() {
  return (
    <section className='relative w-full py-20 bg-[#F3F4F780] overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header Section with Floating Image */}
        <div className='relative mb-12'>
          <div className='max-w-3xl'>
            <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530] mb-2'>Our Solution</h2>
            <h3 className='text-xl font-semibold text-[#1D2530]'>
              Integrated Traceability & Commonality Dashboard
            </h3>
          </div>

          {/* Floating Bulb Image - Desktop */}
          <div className='hidden lg:block absolute right-56 top-[-90px] w-[300px] h-[250px] pointer-events-none'>
            <Image
              src='/images/Templates/template3/solubulb.svg'
              alt='Solution Idea'
              fill
              className='object-contain'
            />
          </div>
          {/* Mobile Image */}
          <div className='lg:hidden w-[200px] h-[150px] relative mt-4 mb-4'>
            <Image
              src='/images/Templates/template3/solubulb.svg'
              alt='Solution Idea'
              fill
              className='object-contain'
            />
          </div>
        </div>

        {/* Green Description Banner */}
        <div className='bg-[#22C55E] rounded-2xl p-8 mb-16 shadow-lg relative z-10'>
          <p className='text-white text-[20px] lg:text-[20px] leading-relaxed'>
            We implemented a{' '}
            <span className='font-bold'>Traceability and Commonality Analytics System</span> to
            digitize and unify production quality monitoring across machining, assembly, and
            inspection lines. The solution provides full part genealogy, defect traceability, and
            pattern-based quality analysis for faster decision-making.
          </p>
        </div>

        {/* Architecture Overview */}
        <div className='mb-8'>
          <h3 className='text-[36px] font-semibold text-[#1D2530] mb-8'>Architecture Overview</h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {architectureSteps.map((step, index) => (
              <div
                key={index}
                className='bg-[#F8FAFC] rounded-xl p-6 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)] flex items-start gap-4'
              >
                <div className='flex-shrink-0 w-10 h-10 relative bg-[#E0F2FE] rounded-xl p-2'>
                  <Image src={step.icon} alt={step.title} fill className='object-contain p-1' />
                </div>
                <div>
                  <h4 className='text-lg font-bold text-[#0F1729]/80 mb-1'>{step.title}</h4>
                  <p className='text-[#64748B] text-[15px] leading-relaxed'>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
