import Image from 'next/image';

const LimitedDashboardIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-full h-full'>
    <path
      d='M2.5 12C4.2 8.8 7.7 6.5 12 6.5C16.3 6.5 19.8 8.8 21.5 12C19.8 15.2 16.3 17.5 12 17.5C7.7 17.5 4.2 15.2 2.5 12Z'
      stroke='#FF4B4B'
      strokeWidth='1.8'
      strokeLinecap='round'
      strokeLinejoin='round'
    />

    <circle cx='12' cy='12' r='2.5' stroke='#FF4B4B' strokeWidth='1.8' />

    <path d='M4 4L20 20' stroke='#FF4B4B' strokeWidth='1.8' strokeLinecap='round' />
  </svg>
);

const NoRoleIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-full h-full'>
    <path
      d='M12 3L18 5.5V10.8C18 15 15.5 18.6 12 20C8.5 18.6 6 15 6 10.8V5.5L12 3Z'
      stroke='#FF4B4B'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />

    <path d='M12 8V12' stroke='#FF4B4B' strokeWidth='2' strokeLinecap='round' />

    <circle cx='12' cy='15.5' r='1' fill='#FF4B4B' />
  </svg>
);

const DelayedResponseIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-full h-full'>
    <circle cx='12' cy='12' r='9' stroke='#FF4B4B' strokeWidth='2' />

    <path
      d='M12 7V12L15 14'
      stroke='#FF4B4B'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ManualReportIcon = () => (
  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-full h-full'>
    <rect x='3' y='5' width='18' height='14' rx='3' stroke='#FF4B4B' strokeWidth='2' />

    <path
      d='M4 7L12 13L20 7'
      stroke='#FF4B4B'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const FragmentedDataIcon = () => (
  <svg viewBox='0 0 24 24' className='w-full h-full' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <ellipse cx='12' cy='6' rx='7' ry='3' stroke='#FF4B4B' strokeWidth='2' />

    <path
      d='M5 6V12C5 13.7 8.1 15 12 15C15.9 15 19 13.7 19 12V6'
      stroke='#FF4B4B'
      strokeWidth='2'
    />

    <path
      d='M5 12V18C5 19.7 8.1 21 12 21C15.9 21 19 19.7 19 18V12'
      stroke='#FF4B4B'
      strokeWidth='2'
    />
  </svg>
);

const challengeCards = [
  {
    icon: <LimitedDashboardIcon />,
    title: 'Limited Dashboard Access',
    desc: 'Dashboards were accessible only to BI teams, restricting visibility for investigators and managers who needed operational insights.',
  },
  {
    icon: <NoRoleIcon />,
    title: 'No Role-Based Access Controls',
    desc: 'Sensitive investigation data required strict role-based access controls that didn’t exist, creating compliance and security risks.',
  },
  {
    icon: <DelayedResponseIcon />,
    title: 'Delayed Incident Response',
    desc: 'The absence of real-time alerts meant suspicious product activity went undetected for hours or days, widening the window for theft.',
  },
  {
    icon: <ManualReportIcon />,
    title: 'Manual Report Distribution',
    desc: 'Reports were manually compiled and emailed, slowing communication with internal teams and external stakeholders.',
  },
  {
    icon: <FragmentedDataIcon />,
    title: 'Fragmented Data Sources',
    desc: 'Authentication data lived across disconnected systems, making it nearly impossible to identify high-risk products efficiently.',
  },
];

const MonitorIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='3' y='3' width='7' height='7' rx='1' />
    <rect x='14' y='3' width='7' height='7' rx='1' />
    <rect x='3' y='14' width='7' height='7' rx='1' />
    <rect x='14' y='14' width='7' height='7' rx='1' />
  </svg>
);

const ShieldIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <rect x='5' y='11' width='14' height='10' rx='2' />
    <path d='M8 11V8a4 4 0 1 1 8 0v3' />
  </svg>
);

const MailIcon = () => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#2F63FF'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
    <polyline points='22,6 12,13 2,6' />
  </svg>
);

const DatabaseIcon = () => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#2F63FF'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <ellipse cx='12' cy='5' rx='9' ry='3' />
    <path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3' />
    <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5' />
  </svg>
);

const BellIcon = () => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#2F63FF'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9' />
    <path d='M13.73 21a2 2 0 0 1-3.46 0' />
  </svg>
);

const SearchIcon = () => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 24 24'
    fill='none'
    stroke='#2F63FF'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <circle cx='11' cy='11' r='8' />
    <line x1='21' y1='21' x2='16.65' y2='16.65' />
  </svg>
);

const solutionCards = [
  {
    icon: <MonitorIcon />,
    title: 'Interactive Monitoring Dashboards',
    desc: 'Track suspicious product activity and identify high-risk SKUs through intuitive visualizations.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Row-Level Security (PDP)',
    desc: 'Ensure each stakeholder can only view authorized data with role-based access controls.',
  },
  {
    icon: <MailIcon />,
    title: 'Automated Report Distribution',
    desc: 'Generate personalized dashboard reports and distribute them via email automatically.',
  },
  {
    icon: <DatabaseIcon />,
    title: 'Unified Data Integration',
    desc: 'Consolidate authentication data from multiple systems into a single analytics model.',
  },
  {
    icon: <BellIcon />,
    title: 'Automated Alert System',
    desc: 'Detect abnormal authentication patterns and trigger faster investigations automatically.',
  },
  {
    icon: <SearchIcon />,
    title: 'Investigator Drill-Down',
    desc: 'Case-level analysis dashboards with deep drill-down capabilities for investigators.',
  },
];

export default function ChallengeSolutionSection() {
  return (
    <section className='relative overflow-hidden bg-[#F7F7F8]'>
      {/* TOP SECTION */}
      <div className='relative z-10 mx-auto max-w-7xl px-4 py-16'>
        {/* Challenge */}
        <div className='text-center'>
          <p className='font-poppins text-[28px] font-semibold uppercase text-[#FF4747] md:text-[40px]'>
            THE CHALLENGE
          </p>

          <h2 className='mt-4 font-poppins text-[34px] font-semibold text-[#111827] md:text-[56px]'>
            Key operational & analytical gaps
          </h2>

          <p className='mx-auto mt-6 max-w-5xl font-poppins text-[16px] text-[#737887] md:text-[20px]'>
            The organization faced several critical challenges that limited their ability to detect,
            investigate, and respond to counterfeit product activity at scale.
          </p>
        </div>

        {/* Challenge Cards */}
        <div className='mt-16 grid grid-cols-1 gap-6 md:grid-cols-3'>
          {challengeCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className='rounded-[24px] border border-[#FF6B6B] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1'
              >
                <div className='flex items-start gap-4'>
                  <div className='flex h-12 md:h-14 w-12 md:w-14 items-center justify-center rounded-xl md:rounded-2xl border-2 border-[#FF4B4B] [&>svg]:w-6 md:[&>svg]:w-8 [&>svg]:h-6 md:[&>svg]:h-8'>
                    {Icon}
                  </div>

                  <div>
                    <h3 className='font-poppins text-[18px] md:text-[22px] font-semibold leading-[28px] md:leading-[34px] text-[#FF4B4B]'>
                      {card.title}
                    </h3>
                  </div>
                </div>

                <p className='mt-4 md:mt-6 font-poppins text-[15px] md:text-[17px] leading-[28px] md:leading-[34px] text-[#737887]'>
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Example Image */}
        <div className='pointer-events-none absolute right-0 top-[45rem] hidden md:block'>
          <Image
            src='/images/Templates/z-bay/challenges.png'
            alt='Example'
            width={320}
            height={520}
            className='object-contain'
          />
        </div>

        {/* SOLUTION */}
        <div className='mt-28 text-center'>
          <p className='font-poppins text-[28px] font-semibold uppercase tracking-[0.08em] text-[#2F63FF] md:text-[40px]'>
            THE SOLUTION
          </p>

          <h2 className='font-poppins text-3xl font-semibold leading-[48px] md:text-5xl md:leading-[72px]'>
            Centralized analytics platform
          </h2>

          <p className='font-poppins text-[12px] md:text-[15px] leading-[24px] md:leading-[34px] text-[#737887]'>
            Designed and implemented a unified platform to monitor product authentication and
            suspicious activity across multiple data sources with automated alerts, secure access,
            and investigator-grade analysis tools.
          </p>
        </div>
      </div>

      {/* BACKGROUND IMAGE SECTION */}
      <div className='relative overflow-hidden py-10'>
        {/* BG IMAGE */}
        <div className='absolute inset-0 hidden md:block'>
          <Image src='/images/Templates/z-bay/solution.png' alt='Background' fill className='' />
        </div>

        {/* Overlay */}

        <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-8'>
          {/* Solution Cards */}
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {solutionCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className='rounded-[24px] border border-[#4C6FFF] bg-white p-7 shadow-md'
                >
                  <div className='flex items-start gap-4'>
                    <div className='flex h-12 md:h-14 w-12 md:w-14 items-center justify-center rounded-xl md:rounded-2xl border border-[#4C6FFF] text-[#2F63FF]'>
                      {Icon}
                    </div>

                    <h3 className='font-poppins text-[18px] md:text-[20px] font-semibold text-[#2F63FF]'>
                      {card.title}
                    </h3>
                  </div>

                  <p className='mt-4 md:mt-6 font-poppins text-[14px] md:text-[15px] text-[#737887]'>
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* FLOW SECTION */}
          <div className=' mt-10 rounded-[36px] border border-white/30 bg-white/80 p-8 shadow-xl md:p-12'>
            <h3 className='text-center font-poppins text-[28px] font-semibold uppercase tracking-[0.05em] text-[#2F63FF] md:text-[38px]'>
              DATA INTEGRATION FLOW
            </h3>

            <div className='grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-center'>
              {/* LEFT */}
              <div>
                <p className='mb-4 md:mb-6 font-poppins text-[16px] md:text-[18px] font-semibold text-[#737887]'>
                  Data Sources
                </p>

                <div className='space-y-4'>
                  {[
                    'Product Auth Logs',
                    'POS Transactions',
                    'Inventory Systems',
                    'External Watchlists',
                  ].map(item => (
                    <div
                      key={item}
                      className='rounded-lg md:rounded-xl border border-[#4C6FFF] bg-white/90 px-4 md:px-5 py-3 md:py-4 font-poppins text-[14px] md:text-[17px] text-[#4B5563]'
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* CENTER WITH ARROWS */}
              <div className='flex items-center justify-center gap-6'>
                {/* LEFT ARROW */}
                <div className='hidden md:flex items-center'>
                  <div className='h-[2px] w-20 bg-[#9CB2FF]' />
                  <div className='h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-[#9CB2FF]' />
                </div>

                {/* CENTER BOX */}
                <div className='rounded-[20px] md:rounded-[28px] bg-[#2F63FF] px-6 md:px-10 py-6 md:py-10 text-center shadow-2xl'>
                  <p className='font-poppins text-[13px] md:text-[15px] text-white/80'>
                    Analytics Engine
                  </p>

                  <h4 className='mt-2 font-poppins text-[24px] md:text-[32px] font-semibold leading-[32px] md:leading-[42px] text-white'>
                    Unified
                    <br />
                    Model
                  </h4>
                </div>

                {/* RIGHT ARROW */}
                <div className='hidden md:flex items-center'>
                  <div className='h-[2px] w-20 bg-[#9CB2FF]' />
                  <div className='h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-[#9CB2FF]' />
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <p className='mb-4 md:mb-6 font-poppins text-[16px] md:text-[18px] font-semibold text-[#737887]'>
                  Outputs
                </p>

                <div className='space-y-4'>
                  {[
                    'Real-Time Alerts',
                    'Scheduled Reports',
                    'Investigator Dashboards',
                    'Stakeholder Emails',
                  ].map(item => (
                    <div
                      key={item}
                      className='rounded-lg md:rounded-xl border border-[#4C6FFF] bg-white/90 px-4 md:px-5 py-3 md:py-4 font-poppins text-[14px] md:text-[17px] text-[#4B5563]'
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
