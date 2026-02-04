'use client';

import Image from 'next/image';

const highlights = [
  'Real-Time Monitoring: Live detection of slowdowns and deviations across assembly and anodizing stages',
  'Inline Quality Inspection & Alerts: Automated defect capture with notifications to line and quality engineers',
  'Predictive Quality Analytics: Machine learning-based trend analysis for early defect prediction',
  'Optimized Scheduling & Load Balancing: Dynamic workload and shift planning to improve resource utilization',
  'Power BI Dashboards: Unified visualization of production, WIP & quality KPIs with drill-down by line, station & operator',
];

const architectureSteps = [
  {
    step: '1',
    title: 'Data Acquisition Layer',
    description: 'Integration with machine PLCs, line sensors, and MES for real-time data capture',
  },
  {
    step: '2',
    title: 'Data Processing & Modeling',
    description: 'Automated ETL pipelines to cleanse, transform, and model data for analysis',
  },
  {
    step: '3',
    title: 'Analytics & Visualization Layer',
    description:
      'Power BI dashboards for monitoring performance KPIs, yield trends, and downtime analysis',
  },
];

export default function OurSolutions() {
  return (
    <section
      className='relative w-full py-20 overflow-hidden'
      style={{
        background: 'linear-gradient(180deg, #08AA79 0%, #155709 100%)',
      }}
    >
      {/* Top Right Bulbs */}
      <div className='absolute top-0 right-0 z-10 w-64 h-64 pointer-events-none'>
        <div className='relative w-full h-full'>
          {/* Adjust positions to match hanging bulbs */}
          <div className='absolute top-10 -right-2 w-72 h-52'>
            <Image
              src='/images/Templates/template2/bulb1.webp'
              alt='bulb'
              fill
              className='object-contain'
            />
          </div>
          <div className='absolute top-44 -right-8 w-72 h-52'>
            <Image
              src='/images/Templates/template2/bulb2.webp'
              alt='bulb'
              fill
              className='object-contain'
            />
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20'>
        {/* Solution Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold text-white mb-2'>Our Solution</h2>
          <p className='text-white/80 text-lg'>Real-Time Production & Yield Analytics Framework</p>
        </div>

        {/* Highlight Card */}
        <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-28 border border-white/20'>
          <p className='text-white text-lg leading-relaxed mb-8'>
            We deployed a Digital Data Transformation Framework to enhance packaging operations
            through Power BI-based real-time dashboards, predictive analytics, and automated data
            modeling. The solution empowered teams with end-to-end visibility into production,
            quality, and efficiency metrics.
          </p>

          <h3 className='text-xl font-bold text-white mb-6'>Core Solution Highlights</h3>
          <div className='flex flex-col gap-4'>
            {highlights.map((item, index) => (
              <div key={index} className='flex items-start gap-4'>
                <div className='w-6 h-6 rounded-full border border-white flex items-center justify-center flex-shrink-0 mt-0.5'>
                  <div className='w-3 h-3 bg-white rounded-xl'></div>
                  {/* Using a simple custom check or dot. Image shows Check icon in circle */}
                </div>
                <p className='text-white text-base'>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Section */}
        <div className='relative'>
          {/* Decorative Diagrams (Bulb 3 & 4) */}
          <div className='hidden lg:block absolute -top-24 left-0 w-32 h-32 opacity-80'>
            <Image
              src='/images/Templates/template2/bulb3.webp'
              alt='Diagram Left'
              fill
              className='object-contain'
            />
          </div>
          <div className='hidden lg:block absolute -top-24 right-0 w-32 h-32 opacity-80'>
            <Image
              src='/images/Templates/template2/bulb4.webp'
              alt='Diagram Right'
              fill
              className='object-contain'
            />
          </div>

          <div className='text-center mb-12'>
            <h2 className='text-3xl lg:text-4xl font-bold text-white'>Architecture Overview</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {architectureSteps.map((step, index) => (
              <div
                key={index}
                className='bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/10'
              >
                <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#155709] font-bold text-xl mb-6'>
                  {step.step}
                </div>
                <h3 className='text-xl font-bold text-white mb-4'>{step.title}</h3>
                <p className='text-white/80 text-sm leading-relaxed'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
