import Image from 'next/image';

const challengeCards = [
  {
    icon: '/images/Templates/z-bay/eye.svg',
    title: 'Limited Dashboard Access',
    desc: 'Dashboards were accessible only to BI teams, restricting visibility for investigators and managers who needed operational insights.',
  },
  {
    icon: '/images/Templates/z-bay/security.svg',
    title: 'No Role-Based Access Controls',
    desc: 'Sensitive investigation data required strict role-based access controls that didn’t exist, creating compliance and security risks.',
  },
  {
    icon: '/images/Templates/z-bay/time-delay.svg',
    title: 'Delayed Incident Response',
    desc: 'The absence of real-time alerts meant suspicious product activity went undetected for hours or days, widening the window for theft.',
  },
  {
    icon: '/images/Templates/z-bay/mail.svg',
    title: 'Manual Report Distribution',
    desc: 'Reports were manually compiled and emailed, slowing communication with internal teams and external stakeholders.',
  },
  {
    icon: '/images/Templates/z-bay/db.svg',
    title: 'Fragmented Data Sources',
    desc: 'Authentication data lived across disconnected systems, making it nearly impossible to identify high-risk products efficiently.',
  },
];

const solutionCards = [
  {
    icon: '/images/Templates/z-bay/db-blue.svg',
    title: 'Interactive Monitoring Dashboards',
    desc: 'Track suspicious product activity and identify high-risk SKUs through intuitive visualizations.',
  },
  {
    icon: '/images/Templates/z-bay/lock.svg',
    title: 'Row-Level Security (PDP)',
    desc: 'Ensure each stakeholder can only view authorized data with role-based access controls.',
  },
  {
    icon: '/images/Templates/z-bay/mail-blue.svg',
    title: 'Automated Report Distribution',
    desc: 'Generate personalized dashboard reports and distribute them via email automatically.',
  },
  {
    icon: '/images/Templates/z-bay/data-integration.svg',
    title: 'Unified Data Integration',
    desc: 'Consolidate authentication data from multiple systems into a single analytics model.',
  },
  {
    icon: '/images/Templates/z-bay/bell.svg',
    title: 'Automated Alert System',
    desc: 'Detect abnormal authentication patterns and trigger faster investigations automatically.',
  },
  {
    icon: '/images/Templates/z-bay/search.svg',
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
          <p className='font-poppins text-[28px] font-semibold md:text-[40px]'>The Challenge</p>

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
            return (
              <div
                key={index}
                className='rounded-[24px] border border-[#F5F5F5] bg-white p-7 shadow-[0px_8px_22px_rgba(0,0,0,0.08)] transition-all duration-300'
              >
                <div className='flex items-center gap-4'>
                  <div className='flex h-12 md:h-14 w-12 md:w-14 items-center justify-center rounded-xl md:rounded-2xl bg-[#FF4B4B]/10'>
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={28}
                      height={28}
                      className='h-6 w-6 md:h-8 md:w-8 object-contain'
                    />
                  </div>

                  <div>
                    <h3 className='font-poppins text-[18px] md:text-[22px] font-semibold leading-[28px] md:leading-[34px] text-[#0F1729]/80'>
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
          <p className='font-poppins text-[28px] font-semibold tracking-[0.08em] md:text-[40px]'>
            The Solution
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
              return (
                <div
                  key={index}
                  className='rounded-[24px] border border-[#F5F5F5] bg-white p-7 shadow-[0px_8px_22px_rgba(0,0,0,0.08)]'
                >
                  <div className='flex items-center gap-4'>
                    <div className='flex h-12 md:h-14 w-12 md:w-14 items-center justify-center rounded-xl md:rounded-2xl bg-[#4C6FFF]/10'>
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={28}
                        height={28}
                        className='h-6 w-6 md:h-8 md:w-8 object-contain'
                      />
                    </div>

                    <h3 className='font-poppins text-[18px] md:text-[20px] font-semibold text-[#0F1729]/80'>
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
            <h3 className='text-center font-poppins text-[28px] font-semibold tracking-[0.05em] md:text-[38px]'>
              Data Integration Flow
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
