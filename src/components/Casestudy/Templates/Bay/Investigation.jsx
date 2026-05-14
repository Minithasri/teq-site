'use client';

import Image from 'next/image';

const tableData = [
  {
    sku: 'FW-7842-BLK',
    region: 'EMEA',
    scans: '147',
    change: '+340%',
    risk: 'Critical',
    riskClass: 'bg-[#FFE2E2] text-[#FF4D4F]',
  },
  {
    sku: 'SS-3291-WHT',
    region: 'APAC',
    scans: '89',
    change: '+185%',
    risk: 'High',
    riskClass: 'bg-[#FFF1D6] text-[#E6A700]',
  },
  {
    sku: 'AW-1056-NVY',
    region: 'NAM',
    scans: '62',
    change: '+92%',
    risk: 'Medium',
    riskClass: 'bg-[#E8F0FF] text-[#2F63FF]',
  },
  {
    sku: 'FW-4418-RED',
    region: 'LATAM',
    scans: '41',
    change: '+210%',
    risk: 'High',
    riskClass: 'bg-[#FFF1D6] text-[#E6A700]',
  },
];

const TrendDownIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#20C05C'
    strokeWidth='2.2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M3 7l6 6 4-4 7 7' />
    <path d='M20 16v-6h-6' />
  </svg>
);

const BoltIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#20C05C'
    strokeWidth='2.2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M13 2L4 14h7l-1 8 9-12h-7l1-8z' />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#20C05C'
    strokeWidth='2.2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M12 22s7-4 7-10V5l-7-3-7 3v7c0 6 7 10 7 10z' />
    <path d='M9 12l2 2 4-4' />
  </svg>
);

const TargetIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#20C05C'
    strokeWidth='2.2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='12' cy='12' r='8' />
    <circle cx='12' cy='12' r='4' />
    <circle cx='12' cy='12' r='1.5' fill='#20C05C' stroke='none' />
  </svg>
);

const impactCards = [
  {
    value: '95%',
    title: 'Reduction in manual reporting',
    desc: 'Automated theft monitoring reports delivered to 50+ stakeholders.',
    icon: <TrendDownIcon />,
  },
  {
    value: '40%',
    title: 'Faster investigation response',
    desc: 'Through automated alerts and scheduled reporting workflows.',
    icon: <BoltIcon />,
  },
  {
    value: '100%',
    title: 'Secure access control coverage',
    desc: 'Role-based row-level permissions across all dashboards.',
    icon: <ShieldCheckIcon />,
  },
  {
    value: '75%',
    title: 'Faster high-risk SKU identification',
    desc: 'Enabling faster preventative actions against counterfeit products.',
    icon: <TargetIcon />,
  },
];

const Investigation = () => {
  return (
    <section className='relative overflow-hidden bg-[#F8F8FA] py-20 md:py-28'>
      {/* SIDE FLOATING IMAGES */}
      <div className='hidden md:block absolute right-0 top-[51%] -translate-y-1/2 z-20'>
        {/* BACK IMAGE */}
        <div className='absolute top-5 right-8 opacity-60'>
          <div className='relative w-[252px] h-[168px] rounded-[26px] overflow-hidden'>
            <Image
              src='/images/Templates/z-bay/investigation-blur.png'
              alt='Background Example'
              fill
              className='object-cover'
            />
          </div>
        </div>

        {/* FRONT IMAGE */}
        <div className='relative z-10'>
          <div className='relative w-[252px] h-[168px] rounded-[6px] overflow-hidden shadow-lg'>
            <Image
              src='/images/Templates/z-bay/investigation.png'
              alt='Front Example'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </div>
      <div className='max-w-6xl mx-auto px-4 md:px-6'>
        {/* TOP CONTENT */}
        <div className='text-center'>
          <p className='text-[#2F63FF] text-[12px] md:text-[30px] font-semibold tracking-[2px] uppercase mb-4'>
            Investigation Intelligence
          </p>

          <h2 className='text-[30px] md:text-[48px] leading-tight font-semibold text-[#161C2D]'>
            From anomaly to case in seconds
          </h2>

          <p className='max-w-2xl mx-auto mt-4 md:mt-5 text-[15px] md:text-[16px] text-[#7B8190] leading-[26px] md:leading-7'>
            Purpose-built dashboards give investigators drill-down capabilities to move from a
            system-wide signal to a specific case instantly.
          </p>
        </div>

        {/* DASHBOARD */}
        <div className='mt-14 md:mt-16 border-2 border-[#2F63FF] rounded-[16px] md:rounded-[24px] overflow-hidden bg-white shadow-[0_8px_40px_rgba(0,0,0,0.04)]'>
          {/* HEADER */}
          <div className='flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-[#497CE0]'>
            <div className='flex items-center gap-2'>
              <svg
                className='w-4 h-4 text-[#2F63FF]'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                strokeWidth='2'
              >
                <circle cx='11' cy='11' r='7' />
                <path d='M20 20L17 17' />
              </svg>

              <span className='text-sm font-semibold text-[#161C2D]'>Threat Monitor</span>
            </div>

            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-[#16C47F]' />
              <span className='text-xs font-medium text-[#16C47F]'>Live</span>
            </div>
          </div>

          {/* STATS */}
          <div className='grid grid-cols-2 md:grid-cols-4 border-b border-[#6D92DC]'>
            {[
              {
                label: 'Active Alerts',
                value: '23',
                color: 'text-[#2F63FF]',
              },
              {
                label: 'SKUs Monitored',
                value: '4,218',
              },
              {
                label: 'Scans Today',
                value: '12,847',
              },
              {
                label: 'Open Cases',
                value: '7',
                color: 'text-[#2F63FF]',
              },
            ].map((item, index) => (
              <div key={index} className='p-3 md:p-5 border-r border-[#6D92DC] last:border-r-0'>
                <p className='text-[10px] md:text-[11px] text-[#7B8190] mb-2'>{item.label}</p>

                <h3
                  className={`text-[24px] md:text-[30px] font-semibold text-[#161C2D] ${
                    item.color || ''
                  }`}
                >
                  {item.value}
                </h3>
              </div>
            ))}
          </div>

          {/* TABLE */}
          <div className='overflow-x-auto'>
            <table className='w-full min-w-[700px]'>
              <thead>
                <tr className='border-b border-[#6D92DC]'>
                  {['SKU', 'Region', 'Scans (24h)', 'Change', 'Risk'].map((head, index) => (
                    <th
                      key={index}
                      className='text-left text-xs font-medium text-[#7B8190] px-5 py-4'
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index} className='border-b border-[#6D92DC] last:border-b-0'>
                    <td className='px-5 py-4 text-sm text-[#161C2D]'>{item.sku}</td>

                    <td className='px-5 py-4 text-sm text-[#7B8190]'>{item.region}</td>

                    <td className='px-5 py-4 text-sm text-[#161C2D]'>{item.scans}</td>

                    <td className='px-5 py-4 text-sm font-semibold text-[#2F63FF]'>
                      {item.change}
                    </td>

                    <td className='px-5 py-4'>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${item.riskClass}`}
                      >
                        {item.risk}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BUSINESS IMPACT */}
        <div className='relative pt-24 md:pt-32'>
          {/* HEADING */}
          <div className='text-center'>
            <p className='text-[#2F63FF] text-[16px] md:text-[30px] font-semibold tracking-[2px] uppercase'>
              Business Impact
            </p>

            <h2 className='text-[30px] md:text-[44px] font-semibold text-[#161C2D]'>
              Measurable outcomes
            </h2>

            <p className='max-w-2xl mx-auto text-sm md:text-base text-[#7B8190] leading-7'>
              The platform delivered transformative results across operational efficiency, security
              compliance, and investigation speed.
            </p>
          </div>

          {/* CARDS */}
          <div className='relative z-10 mt-14 grid grid-cols-1 md:grid-cols-2 gap-5'>
            {impactCards.map((card, index) => (
              <div
                key={index}
                className='bg-white border border-[#20C05C] rounded-[16px] md:rounded-[20px] p-6 md:p-7'
              >
                {/* ICON */}
                <div className='flex items-center gap-4 mb-5'>
                  <div className='w-10 md:w-12 h-10 md:h-12 rounded-lg md:rounded-xl border border-[#20C05C] flex items-center justify-center [&>svg]:w-5 md:[&>svg]:w-[22px] [&>svg]:h-5 md:[&>svg]:h-[22px]'>
                    {card.icon}
                  </div>

                  <h3 className='text-[36px] md:text-[44px] font-semibold text-[#20C05C]'>
                    {card.value}
                  </h3>
                </div>
                {/* TITLE */}
                <h4 className='mt-4 text-base md:text-lg font-semibold text-[#20C05C]'>
                  {card.title}
                </h4>

                {/* DESC */}
                <p className='mt-2 md:mt-3 text-[16px] md:text-xl text-[#7B8190]'>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BACKGROUND IMAGE */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-[400px] md:h-[640px] bg-[url('/images/Templates/z-bay/business-impact.png')] bg-cover bg-center opacity-[0.9]" />
    </section>
  );
};

export default Investigation;
