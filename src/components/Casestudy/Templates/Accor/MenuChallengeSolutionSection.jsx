'use client';

import Image from 'next/image';

const challenges = [
  'Manual review of menu PDFs was time-consuming and inefficient',
  'Inconsistent classification of menu items into licensing categories',
  'High risk of human error in validation processes',
  'Difficulty in scaling the process for large volumes of menus',
  'Lack of automated reporting and notification mechanisms',
];

const solutionCards = [
  {
    icon: '/images/Templates/accor/ai.svg',
    title: 'AI-Powered Menu Extraction',
    description:
      'Uses Gemini API to intelligently extract structured data from menu PDFs with high accuracy.',
  },
  {
    icon: '/images/Templates/accor/automated.svg',
    title: 'Automated Classification Engine',
    description:
      'Maps menu items to predefined licensing categories using rule-based and AI-driven logic.',
  },
  {
    icon: '/images/Templates/accor/full-stack.svg',
    title: 'Full-Stack Application Framework',
    description:
      'Built with React and Node.js to enable seamless user interaction and backend processing.',
  },
  {
    icon: '/images/Templates/accor/cloud.svg',
    title: 'Cloud-Native Deployment',
    description: 'Hosted on Google Cloud Platform for scalability, performance, and reliability.',
  },
  {
    icon: '/images/Templates/accor/notification.svg',
    title: 'Automated Notifications & Reporting',
    description: 'Generates alerts and reports using NodeMailer for faster communication.',
  },
  {
    icon: '/images/Templates/accor/admin.svg',
    title: 'Admin Review & Validation Workflow',
    description:
      'Enables manual validation and exception handling through a controlled review interface.',
  },
];

const MenuChallengeSolutionSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#F7F7F7]'>
      <div className='relative'>
        {/* RIGHT IMAGE */}
        <div className='absolute right-0 top-0 hidden md:block z-0'>
          <Image
            src='/images/Templates/accor/challenge.png'
            alt='AI'
            width={420}
            height={340}
            priority
            className='h-[340px] w-[480px] rounded-[22px] object-cover'
          />
        </div>

        {/* CONTENT */}
        <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6'>
          <div className='flex flex-col gap-10'>
            {/* LEFT CONTENT */}
            <div className='max-w-7xl'>
              {/* LABEL */}
              <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#FF2323]'>
                THE CHALLENGE
              </h2>

              {/* LIST */}
              <div className='mt-10 space-y-6'>
                {challenges.map((item, index) => (
                  <div key={index} className='flex items-start gap-4'>
                    {/* ICON */}
                    <div className='flex-shrink-0'>
                      <Image
                        src='/images/Templates/style-union-2/warning.svg'
                        alt='Warning'
                        width={18}
                        height={18}
                        className='h-[18px] w-[18px] object-contain'
                      />
                    </div>

                    {/* TEXT */}
                    <p className='text-[11px] md:text-[18px] leading-[1.0] text-[#7C8696]'>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* SOLUTION HEADING */}
              <div className='mt-14'>
                <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#1B24F4]'>
                  OUR SOLUTION
                </h2>

                <p className='mt-7 text-[13px] md:text-[19px] leading-[1.8] text-[#7C8696]'>
                  We designed and delivered a comprehensive AI platform that automates the entire
                  menu analysis and licensing compliance workflow from document ingestion to
                  classification and reporting.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE IMAGE */}
        <div className='mt-10 px-4 md:hidden'>
          <Image
            src='/images/Templates/accor/challenge.png'
            alt='AI'
            width={500}
            height={320}
            priority
            className='h-[260px] w-full rounded-[22px] object-cover'
          />
        </div>

        {/* ================= SOLUTION CARDS ================= */}
        <div className='relative mt-14'>
          {/* BACKGROUND IMAGE */}
          <div className='absolute inset-0 z-0'>
            <Image
              src='/images/Templates/accor/solution.png'
              alt='Dashboard'
              fill
              priority
              className='object-fit'
            />
          </div>

          {/* OVERLAY */}
          <div className='absolute inset-0 bg-white/10 z-0' />

          {/* CARDS */}
          <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
              {solutionCards.map((item, index) => (
                <div
                  key={index}
                  className='
                  rounded-[18px]
                  border-2
                  border-[#2639F5]
                  bg-white
                  px-5
                  md:px-6
                  py-5
                  md:py-6
                  shadow-[0px_8px_22px_rgba(0,0,0,0.06)]
                '
                >
                  {/* HEADER */}
                  <div className='flex items-start gap-4'>
                    {/* ICON */}
                    <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br from-[#31C9E9] to-[#26C1B7]'>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={22}
                        height={22}
                        className='h-[22px] w-[22px] object-contain'
                      />
                    </div>

                    {/* TITLE */}
                    <h3 className='text-[14px] md:text-[20px] leading-[1.4] font-semibold tracking-[-0.5px] text-[#1C2AE3]'>
                      {item.title}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className='mt-8 text-[11px] md:text-[15px] leading-[1.8] text-[#7D8696]'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuChallengeSolutionSection;
