'use client';

import Image from 'next/image';

export default function CertifiedTeamSection() {
  const cards = [
    [
      'Enterprise AI',
      'Build intelligent assistants, copilots, and multi agent systems that transform business workflows.',
      ['AI Assistants', 'Enterprise Copilots', 'Agentic AI', 'Multi Agent Orchestration'],
    ],
    [
      'Engineering',
      'Modernize applications with Claude Code, automation, integrations, and scalable AI solutions.',
      ['Claude Code', 'Test Automation', 'Code Review', 'Legacy Modernization'],
    ],
    [
      'Enterprise Integration',
      'Connect AI with enterprise systems through APIs, MCP, and workflow orchestration.',
      ['Model Context Protocol', 'Workflow Orchestration', 'Enterprise APIs'],
    ],
    [
      'Knowledge Intelligence',
      'Unlock insights with document intelligence, enterprise search, and RAG powered solutions.',
      ['Document Intelligence', 'Enterprise Search', 'RAG'],
    ],
    [
      'Responsible AI',
      'Ensure secure and trusted AI with guardrails, human oversight, audits, and access controls.',
      ['Guardrails', 'Access Controls', 'Audit Trails', 'Human-in-the-Loop'],
    ],
    [
      'Managed Services',
      'Optimize AI performance with continuous monitoring, tuning, and expert support.',
      ['Monitoring', 'Tuning', 'Support'],
    ],
  ];

  return (
    <section className='bg-[#FCFAF8] px-6 py-20 md:px-12 lg:px-[140px] w-full'>
      <div className='mx-auto max-w-7xl'>
        {/* Top bar with logo and CTA button */}
        <div className='flex items-center justify-between gap-4 pb-8'>
          <div className='flex items-center flex-shrink-0'>
            <div
              className='flex items-center justify-center flex-shrink-0'
              style={{
                width: '53px',
                height: '54px',
                background: 'rgba(250, 250, 250, 1)',
                border: '1px solid rgba(229, 229, 229, 1)',
                boxShadow: '0px 2px 15px -3px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
              }}
            >
              <Image
                src='/images/partners/claude/ai.png'
                alt='AI Icon'
                width={28}
                height={28}
                className='object-contain'
              />
            </div>
          </div>

          {/* Centered connecting dotted line that spans the remaining space */}
          <div className='flex-grow border-t-2 border-dotted border-[#e8dccf] h-0 mx-2' />

          <button className='flex-shrink-0 rounded-full border border-[#AE6ADF] px-6 py-3 text-[#6F2B8B] font-semibold hover:bg-[#6F2B8B]/5 transition duration-300'>
            Talk to Our Experts &rarr;
          </button>
        </div>

        {/* Header content section */}
        <div className='mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center'>
          <h2 className='text-[32px] md:text-[44px] font-semibold leading-tight text-[#2B2B2B]'>
            What Our{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Certified Team
            </span>
            <br />
            <span style={{ color: '#2B2B2B' }}>actually builds.</span>
          </h2>
          <p className='text-[#555] text-base leading-relaxed'>
            Our certified team builds to accelerate enterprise AI adoption through intelligent
            solutions, scalable architectures, and responsible AI practices.
          </p>
        </div>

        {/* Cards Grid */}
        <div className='mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {cards.map(c => (
            <div
              key={c[0]}
              className='rounded-3xl border border-[#ECECEC] bg-white p-6 shadow-sm flex flex-col justify-between transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)]'
            >
              <div>
                <h3
                  className='font-semibold text-[20px]'
                  style={{
                    background: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block',
                  }}
                >
                  {c[0]}
                </h3>
                <p className='mt-3 text-sm text-[#555] leading-relaxed min-h-[56px]'>{c[1]}</p>
              </div>

              <div className='mt-6 rounded-2xl border border-[#ECECEC] bg-[#FAF9F8] p-4 flex flex-wrap gap-2 min-h-[104px] content-start w-full'>
                {c[2].map(t => (
                  <span
                    key={t}
                    className='rounded-[6px] border border-[#ECECEC] bg-white px-3 py-1.5 text-xs text-[#555] font-medium shadow-sm hover:border-[#AE6ADF] transition duration-200'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
