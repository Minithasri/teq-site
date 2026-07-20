'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const phases = [
  {
    title: 'Multi-Agent Orchestration',
    description:
      'Define high-value use cases, establish governance, and create a phased AI roadmap with a business case aligned to your strategic goals.',
    image: '/images/partners/claude/frame1.png',
    icon: '/images/partners/claude/orange-dot.svg',
  },
  {
    title: 'Enablement',
    description:
      'Enable your teams with secure Claude access, clear AI usage policies, and practical training that drives confident, organization-wide adoption.',
    image: '/images/partners/claude/frame2.png',
    icon: '/images/partners/claude/orange-dot.svg',
  },
  {
    title: 'Solution Development',
    description:
      'Develop enterprise assistants, copilots, and AI agents that automate business workflows, improve productivity, and deliver measurable outcomes.',
    image: '/images/partners/claude/frame3.png',
    icon: '/images/partners/claude/orange-dot.svg',
  },
  {
    title: 'Engineering & Modernization',
    description:
      'Accelerate engineering with AI-assisted development, legacy modernization, automated code reviews, and streamlined software delivery.',
    image: '/images/partners/claude/frame4.png',
    icon: '/images/partners/claude/orange-dot.svg',
  },
  {
    title: 'Responsible AI & Governance',
    description:
      'Implement governance, guardrails, human oversight, and audit capabilities to ensure secure, compliant, and responsible AI at scale.',
    image: '/images/partners/claude/frame5.png',
    icon: '/images/partners/claude/orange-dot.svg',
  },
  {
    title: 'Managed Services',
    description:
      'Continuously monitor, optimize, and support your Claude environment to maintain performance, reliability, and long-term business value.',
    image: '/images/partners/claude/frame6.png',
    icon: '/images/partners/claude/orange-dot.svg',
  },
];

const CARD_BG = 'radial-gradient(278.5% 716.02% at 50% 46.71%, #432863 0%, #4A195E 100%)';
const CARD_SHADOW = '0px 1.34px 4.15px 0px #D2D0E111, 0px 20.3px 62.72px 0px #D2D0E11A';

export default function ClaudePracticeSection() {
  return (
    <section className='relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white w-full'>
      <div className='relative w-full max-w-7xl mx-auto rounded-[24px] border border-[#E5E5E5] p-6 sm:p-10 lg:p-[50px] bg-[#3A1B5E] overflow-hidden shadow-2xl'>
        {/* Ambient orange glow */}
        <div
          className='absolute -top-[140px] right-[150px] w-[600px] h-[600px] rounded-full pointer-events-none'
          style={{
            background: 'radial-gradient(circle, #D96D42A3 0%, #D96D4200 70%)',
            filter: 'blur(160px)',
          }}
        />

        {/* Top Header Navigation Bar */}
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-4 flex-1'>
            <div className='w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white flex items-center justify-center shrink-0'>
              <Image
                src='/images/partners/claude/ai.png'
                alt='AI Icon'
                width={36}
                height={36}
                className='w-8 h-8 sm:w-9 sm:h-9 object-contain'
              />
            </div>
            <div className='border-t border-dashed border-white/30 flex-1 hidden sm:block' />
          </div>
          <div>
            <button className='ml-4 sm:ml-8 rounded-full bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base text-[#6E2B8B] flex items-center gap-2 shrink-0 font-medium hover:bg-white/95 transition-all'>
              Talk to Our Experts
              <span>
                <ArrowRight width={14} height={14} />
              </span>
            </button>
          </div>
        </div>

        {/* Title & Description */}
        <div className='mt-6 flex flex-col md:flex-row justify-between gap-4 md:items-end'>
          <h2 className='text-white text-2xl sm:text-3xl lg:text-[32px] font-semibold leading-tight'>
            The Claude Practice,
            <br />
            end to end.
          </h2>
          <p className='max-w-sm text-white/80 text-xs sm:text-sm lg:text-[15px] leading-relaxed'>
            Six phases, in the order a real engagement actually runs. Click any phase for what it
            covers.
          </p>
        </div>

        {/* 6-Card Grid: 3 cols on lg, 2 cols on md, 1 col on sm */}
        <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12'>
          {phases.map(phase => (
            <div
              key={phase.title}
              className='relative rounded-[16px] p-5 flex flex-col h-full justify-between transition-all duration-300 hover:scale-[1.02]'
              style={{ background: CARD_BG, boxShadow: CARD_SHADOW }}
            >
              {/* Graphic — floats directly on the card background, no separate box/border */}
              <div className='relative h-[260px] md:h-[240px] w-full'>
                <Image
                  src={phase.image}
                  alt={phase.title}
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                  className='object-fill'
                />
              </div>

              {/* Title & Description */}
              <div className='mt-5 flex flex-col flex-1 justify-start'>
                <div className='flex items-center gap-2.5'>
                  <div className='relative w-3 h-3 shrink-0'>
                    <Image src={phase.icon} alt='' fill className='object-contain' />
                  </div>
                  <h3 className='text-base sm:text-lg font-semibold text-white leading-snug'>
                    {phase.title}
                  </h3>
                </div>
                <p className='mt-2.5 text-white/75 leading-relaxed text-[14px] font-light'>
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
