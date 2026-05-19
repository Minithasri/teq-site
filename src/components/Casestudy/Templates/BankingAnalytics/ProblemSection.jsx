import Image from 'next/image';

export default function ProblemSection() {
  const problems = [
    {
      title: 'Fragmented Data Systems',
      text: 'Transactional and financial data were scattered across multiple systems with no single source of truth',
    },
    {
      title: 'Delayed Reporting',
      text: 'Manual reporting processes resulted in weekly or monthly cycles instead of real-time insights',
    },
    {
      title: 'Limited Compliance Visibility',
      text: 'Compliance tracking was manual and reactive, creating regulatory risks',
    },
    {
      title: 'Lack of Drill-Down Analysis',
      text: 'Leadership struggled to access transaction-level details from high-level KPIs',
    },
  ];

  const metrics = [
    {
      icon: '/images/Templates/template13/report.svg',
      label: 'Reporting Cycle',
      value: 'Weekly/Monthly',
    },
    {
      icon: '/images/Templates/template13/reducer.svg',
      label: 'Compliance Tracking',
      value: 'Manual',
    },
    {
      icon: '/images/Templates/template13/centra.svg',
      label: 'Data Centralization',
      value: 'None',
    },
    {
      icon: '/images/Templates/template13/real-time.svg',
      label: 'Real-Time Analytics',
      value: '0%',
    },
  ];

  return (
    <section className='py-[64px] bg-[#fdf2f2]'>
      <div className='max-w-[1140px] mx-auto px-6'>
        {/* Main Section Header */}
        <div className='text-center mb-[36px]'>
          <h2 className='text-[28px] font-extrabold text-[#071326] tracking-tight'>The Problem</h2>
          <p className='text-[13.5px] text-[#475569] font-medium mt-2 max-w-[540px] mx-auto leading-[1.4]'>
            The client faced critical operational challenges that hindered performance and
            compliance
          </p>
        </div>

        {/* 2x2 Problem Cards Grid */}
        <div className='grid md:grid-cols-2 gap-[20px] max-w-[1040px] mx-auto'>
          {problems.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-[24px] border border-red-50/50'
            >
              {/* Header with your custom cancel.svg image asset */}
              <div className='flex items-center gap-[12px] mb-[10px]'>
                <div className='w-[16px] h-[16px] shrink-0 relative flex items-center justify-center'>
                  <Image
                    src='/images/Templates/template13/cancel.svg'
                    alt='Cancel Indicator'
                    width={16}
                    height={16}
                    className='object-contain'
                  />
                </div>
                <h3 className='text-[17px] font-extrabold text-[#071326] tracking-tight'>
                  {item.title}
                </h3>
              </div>

              <p className='text-[14.5px] text-[#475569] leading-[1.5] font-medium pl-[28px]'>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Mid-Section Divider Header */}
        <h3 className='text-center text-[20px] font-extrabold text-[#071326] tracking-tight mt-[48px] mb-[28px]'>
          Before Implementation
        </h3>

        {/* 4-Column Metric Row */}
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-[20px] max-w-[1040px] mx-auto'>
          {metrics.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-[24px] flex flex-col justify-between min-h-[145px]'
            >
              {/* Top Row: Icon with soft blue background capsule and descriptive label */}
              <div className='flex items-center gap-[12px]'>
                <div className='w-[40px] h-[40px] rounded-[8px] bg-[#eff6ff] flex items-center justify-center shrink-0'>
                  <Image src={item.icon} alt={item.label} width={22} height={22} />
                </div>
                <p className='text-[14.5px] text-[#64748b] font-semibold leading-tight'>
                  {item.label}
                </p>
              </div>

              {/* Bottom Row: Vibrant red, centered, large text value metrics */}
              <h4 className='text-[19px] font-extrabold text-[#ef4444] text-center mt-[20px] tracking-tight w-full'>
                {item.value}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
