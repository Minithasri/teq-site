'use client';

import Image from 'next/image';

const technologies = [
  {
    icon: '/images/Templates/template2/iconnew1.svg',
    title: 'Power BI',
    desc: 'Predictive dashboards and asset health visualization',
  },
  {
    icon: '/images/Templates/template2/iconnew2.svg', // Assuming specific icon
    title: 'Power Automate',
    desc: 'Alerts, workflows, and compliance notifications',
  },
  {
    icon: '/images/Templates/template2/iconnew3.svg', // Assuming specific icon
    title: 'SQL Server / Azure Data Factory',
    desc: 'Data integration and modeling',
  },
  {
    icon: '/images/Templates/template2/iconnew4.svg',
    title: 'Machine Learning (Python)',
    desc: 'Predictive failure and maintenance scheduling analytics',
  },
];

export default function Technology() {
  return (
    <section className='section-container w-full pt-20 bg-[#F6F6F6]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center max-w-4xl mx-auto mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530] mb-4'>Technology Stack</h2>
          <p className='text-[#64748B] text-lg lg:text-xl'>
            Enterprise-grade technologies powering intelligent maintenance operations
          </p>
        </div>

        {/* Tech Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex items-start gap-6 border border-gray-100'
            >
              {/* Icon Container with Gradient Border & BG */}
              <div
                className='flex-shrink-0 w-16 h-16 rounded-2xl p-[1px] shadow-[0_0_15px_rgba(0,0,0,0.17)]'
                style={{
                  background: 'linear-gradient(135deg, #7A7A7A 0%, #FFFFFF 100%)', // Border Gradient
                }}
              >
                <div
                  className='w-full h-full rounded-[15px] flex items-center justify-center overflow-hidden'
                  style={{
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #C9C9C9 100%)', // Inner BG Gradient
                  }}
                >
                  <div className='relative w-9 h-9'>
                    <Image src={tech.icon} alt={tech.title} fill className='object-contain' />
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-xl font-bold text-[#1D2530] mb-2'>{tech.title}</h3>
                <p className='text-[#64748B] text-base leading-relaxed'>{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
