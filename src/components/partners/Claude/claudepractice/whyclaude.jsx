'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';

export default function WhyClaudeWhyGwcSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const o1 = useTransform(scrollYProgress, [0, 0.45, 0.65], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.45, 0.65], [0, 0, -80]);

  const o2 = useTransform(scrollYProgress, [0.45, 0.65, 1], [0, 1, 1]);
  const y2 = useTransform(scrollYProgress, [0.45, 0.65, 1], [100, 0, 0]);
  const scale2 = useTransform(scrollYProgress, [0.45, 0.65, 1], [0.96, 1, 1]);

  return (
    <section ref={sectionRef} className='relative h-[180vh] bg-white w-full'>
      <div className='sticky top-0 h-screen flex items-center overflow-hidden'>
        <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-14 px-4 lg:px-12 w-full items-center'>
          {/* Left Column */}
          <div className='flex flex-col h-full justify-center'>
            <div className='flex-1 flex flex-col justify-center mt-4'>
              <h2
                className='text-[32px] lg:text-[64px] leading-[38px] lg:leading-[59px] tracking-tight text-[#2B2B2B]'
                style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}
              >
                Why{' '}
                <span className='hidden lg:inline'>
                  <br />
                </span>
                <span
                  style={{
                    fontStyle: 'italic',
                    background: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Claude,
                </span>
                <span className='hidden lg:inline'>
                  <br />
                </span>{' '}
                Why{' '}
                <span
                  style={{
                    fontStyle: 'italic',
                    color: '#AF6EDB',
                  }}
                >
                  GWC.
                </span>
              </h2>
              <p className='mt-4 lg:mt-8 text-gray-600 text-[14px] lg:text-[18px] leading-relaxed'>
                The answers are different, but together they define what successful enterprise AI
                looks like. One provides the intelligence. The other delivers the strategy,
                engineering, and governance that turn it into business value.
              </p>
            </div>

            <button className='w-fit mt-6 lg:mt-8 rounded-full bg-gradient-to-b from-[#7030B1] to-[#B56DD3] px-5 lg:px-7 py-3 lg:py-3.5 text-white text-sm lg:text-base font-semibold flex items-center gap-2 lg:gap-2.5 shadow-lg hover:shadow-xl hover:gap-3 transition-all duration-300'>
              Get in touch
              <FiArrowRight size={16} className='lg:w-[18px] lg:h-[18px]' />
            </button>
          </div>

          {/* Right Column */}
          <div className='relative h-[300px] md:h-[400px] lg:h-[540px] overflow-hidden rounded-2xl md:rounded-[32px]'>
            {/* Card 1: Why Claude */}
            <motion.div
              style={{ opacity: o1, y: y1 }}
              className='absolute inset-0 rounded-2xl md:rounded-[32px] bg-[#D97757] p-5 md:p-10 text-white shadow-2xl'
            >
              <div className='grid h-full grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
                <div className='flex flex-col justify-start gap-6 md:gap-10 h-full py-2'>
                  <div className='flex items-center justify-between gap-4'>
                    <span className='inline-flex items-center gap-2 rounded-full bg-white px-3 md:px-4 py-1.5 md:py-2 text-[#D97953] font-semibold text-[10px] md:text-xs uppercase tracking-wider'>
                      <Image
                        src='/images/partners/claude/whyclaude.png'
                        alt=''
                        width={16}
                        height={16}
                        className='w-3.5 h-3.5 md:w-4 md:h-4 object-contain'
                      />
                      Why Claude
                    </span>

                    {/* Thumbnail — small screens only, and now also rounded to match the card family */}
                    <div className='relative w-20 h-20 sm:w-24 sm:h-24 md:hidden flex-shrink-0 rounded-2xl overflow-hidden'>
                      <Image
                        src='/images/partners/claude/claudepractice1.png'
                        fill
                        alt='Why Claude'
                        className='object-contain'
                      />
                    </div>
                  </div>
                  <div className='-mt-10 md:mt-0 lg:mt-10'>
                    <h3 className='text-base md:text-xl leading-tight tracking-tight'>
                      Reasoning built for{' '}
                      <span className='font-bold italic md:text-2xl text-black'>
                        real business problems.
                      </span>
                    </h3>
                    <p className='mt-0 md:mt-2 text-white/90 text-xs md:text-base leading-relaxed'>
                      Claude combines long-context understanding, careful reasoning, and strong
                      coding ability. That means it can read a contract, plan a workflow, or write
                      production code, not just answer a question. For enterprises, it&apos;s a
                      foundation you can build agents and copilots on with confidence.
                    </p>
                  </div>
                </div>
                {/* Full illustration panel — md and up, rounded to match the outer/card radius progression */}
                <div className='hidden md:flex relative rounded-2xl md:rounded-3xl bg-white/10 h-full w-full overflow-hidden items-center justify-center'>
                  <Image
                    src='/images/partners/claude/claudepractice1.png'
                    fill
                    alt='Why Claude helmet avatar'
                    className='object-contain'
                  />
                </div>
              </div>
            </motion.div>

            {/* Card 2: Why GWC */}
            <motion.div
              style={{ opacity: o2, y: y2, scale: scale2 }}
              className='absolute inset-0 rounded-2xl md:rounded-[32px] bg-[#6E2B8B] p-5 md:p-10 text-white shadow-2xl flex flex-col justify-between'
            >
              <div className='grid h-full grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center'>
                <div className='flex flex-col justify-start gap-6 md:gap-10 h-full py-2'>
                  <div className='flex items-center justify-between gap-4'>
                    <span className='inline-flex items-center gap-2 rounded-full bg-white px-3 md:px-4 py-1.5 md:py-2 text-[#6E2B8B] font-semibold text-[10px] md:text-xs uppercase tracking-wider'>
                      <Image
                        src='/images/partners/claude/whygwc.png'
                        alt=''
                        width={16}
                        height={16}
                        className='w-3.5 h-3.5 md:w-4 md:h-4 object-contain'
                      />
                      Why GWC
                    </span>

                    <div className='relative w-20 h-20 sm:w-24 sm:h-24 md:hidden flex-shrink-0 rounded-2xl overflow-hidden'>
                      <Image
                        src='/images/partners/claude/claudepractice2.png'
                        fill
                        alt='Why Claude'
                        className='object-contain'
                      />
                    </div>
                  </div>
                  <div className='-mt-6 md:mt-0 lg:mt-6'>
                    <h3 className='text-base md:text-2xl leading-tight tracking-tight'>
                      The team that turns a{' '}
                      <span className='font-bold italic text-[#FDC25E]'>
                        model into a working system.
                      </span>
                    </h3>
                    <p className='mt-0 md:mt-2 text-white/90 text-xs md:text-base leading-relaxed'>
                      A model is not a solution. GWC Data.AI brings the advisory, integration, and
                      engineering work that turns Claude into something your teams actually use,
                      connected to the systems you already run, governed the way your compliance
                      team requires.
                    </p>
                  </div>
                </div>
                <div className='hidden md:flex relative rounded-2xl md:rounded-3xl bg-white/10 md:h-[70%] lg:h-full w-full overflow-hidden items-center justify-center'>
                  <Image
                    src='/images/partners/claude/claudepractice2.png'
                    fill
                    alt='Why GWC helmet avatar'
                    className='object-contain'
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
