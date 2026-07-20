'use client';

import Image from 'next/image';

const features = [
  {
    title: 'Certified AI Experts',
    description: 'Optimize AI performance with continuous monitoring, tuning, and expert support.',
    footer: '160+ certified',
    image: '/images/partners/claude/people.png',
  },
  {
    title: 'End-to-end delivery',
    description:
      'Advisory through managed services, under one team, not handed off between vendors.',
    footer: 'Full lifecycle',
    image: '/images/partners/claude/route.png',
  },
  {
    title: 'Governance-first approach',
    description:
      'Guardrails and comprehensive audit trails built in from the start, not added after an incident.',
    footer: 'Built in',
    image: '/images/partners/claude/mission.png',
  },
  {
    title: 'Regional presence',
    description:
      'A team that understands India and APAC compliance, procurement, and business context.',
    footer: 'Bengaluru based',
    image: '/images/partners/claude/remote.png',
  },
];

export default function FeatureCardsSection() {
  return (
    <section className='w-full bg-white flex items-center overflow-hidden my-[100px]'>
      <div className='mx-auto max-w-9xl px-6 md:px-12 lg:px-[200px] w-full'>
        <div className='text-center'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#3B3B3B]'>
            <span className='italic font-normal'>A Dedicated Practice for</span>
            <span className='block bg-gradient-to-r from-[#6F2B8B] to-[#ED7200] bg-clip-text text-transparent leading-relaxed'>
              Building Enterprise AI on Claude.
            </span>
          </h2>
        </div>

        <div className='mt-[60px] grid gap-4 md:grid-cols-2 xl:grid-cols-4 justify-items-center'>
          {features.map(item => (
            <div
              key={item.title}
              className='w-full overflow-hidden rounded-[16px] bg-[#6E2B8B] shadow-[3px_3px_16px_0px_rgba(0,0,0,0.1)] transition duration-300 hover:-translate-y-1 p-[2px] flex flex-col justify-between'
            >
              <div className='bg-white rounded-[14px] flex-1 flex flex-col p-4'>
                <div
                  className='mb-2 flex items-center justify-center flex-shrink-0'
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(250, 250, 250, 1)',
                    border: '1px solid rgba(229, 229, 229, 1)',
                    boxShadow: '0px 2px 15px -3px rgba(0, 0, 0, 0.1)',
                    borderRadius: '12px',
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={20}
                    height={20}
                    className='object-contain'
                  />
                </div>

                <h3 className='text-[12px] lg:text-[16px] min-h-16 font-semibold leading-7 bg-gradient-to-r from-[#7030B1] to-[#D36528] bg-clip-text text-transparent flex items-end'>
                  {item.title}
                </h3>

                <p className='mt-3 text-[12px] leading-relaxed text-[#666666]'>
                  {item.description}
                </p>
              </div>

              <div className='flex h-[50px] items-center justify-center bg-transparent px-2'>
                <span className='text-[14px] font-medium text-white'>{item.footer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
