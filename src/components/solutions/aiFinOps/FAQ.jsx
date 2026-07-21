'use client';
import { useState } from 'react';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const questions = [
    {
      q: 'What is AI FinOps and how is it different from Cloud FinOps?',
      a: 'AI FinOps applies FinOps discipline to model and token consumption instead of cloud infrastructure. Cloud FinOps tracks compute, storage, and network spend. AI FinOps tracks tokens, model calls, and agent actions, the units that actually drive cost in an AI system.',
    },
    {
      q: 'What is Token Economics?',
      a: 'Token Economics is the operational layer under AI FinOps: metering, allocating, and optimizing token consumption down to the team, feature, and workflow level, so every dollar of AI spend is traceable to a business outcome.',
    },
    {
      q: 'Does this work across multiple model providers, or only Claude?',
      a: "GWC's AI FinOps practice is model-agnostic and governs spend across Claude, GPT, Gemini, and open-source models running in the same environment. Teams standardizing specifically on Claude can also engage GWC's dedicated Claude Practice and Advisory team.",
    },
    {
      q: "How is agentic AI cost different from a regular chatbot's?",
      a: 'Autonomous agents make many more model calls per task than a single chat exchange, so cost scales with how a workflow runs, not with a fixed provisioning plan. That is why agentic deployments need cost governance built in from day one, not layered on later.',
    },
    {
      q: "What's the difference between chargeback and showback?",
      a: "Showback reports AI spend to a business unit for visibility. Chargeback goes further and bills that spend back to the unit's budget, creating direct financial accountability for AI usage.",
    },
  ];

  const toggleFAQ = id => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className='w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-medium font-poppins text-[#1C1917] tracking-tight leading-tight'>
            <span className='text-[#6F2B8B]'>Straight answers</span>{' '}
            <span className='block text-2xl sm:text-[32px] font-light italic text-gray-700 mt-2'>
              including about what&apos;s still early.
            </span>
          </h2>
        </div>

        {/* Accordions */}
        <div className='space-y-3.5'>
          {questions.map((faq, faqIdx) => {
            const isOpen = openId === faqIdx;

            return (
              <div
                key={faqIdx}
                className={`bg-white rounded-[16px] border border-[#EBE8E0] transition-all duration-300 ${
                  isOpen ? 'shadow-[0_8px_30px_rgba(0,0,0,0.03)]' : 'shadow-sm'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  className='w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 select-none focus:outline-none'
                  onClick={() => toggleFAQ(faqIdx)}
                >
                  <span className='font-medium text-[#1C1917] text-[15px] sm:text-base md:text-[17px] leading-snug tracking-tight pr-2'>
                    {faq.q}
                  </span>

                  {/* +/- Icon */}
                  <div className='flex-shrink-0 w-8 h-8 rounded-full bg-[#FAF9F5] border border-[#EBE8E0] flex items-center justify-center transition-colors duration-300'>
                    {isOpen ? (
                      <svg
                        className='w-3 h-3 text-[#1C1917]'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2.5'
                          d='M20 12H4'
                        />
                      </svg>
                    ) : (
                      <svg
                        className='w-3 h-3 text-[#1C1917]'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2.5'
                          d='M12 4v16m8-8H4'
                        />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  className='transition-all duration-300 ease-in-out overflow-hidden'
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className='px-6 pb-6 text-sm sm:text-base text-[#57534E] leading-relaxed border-t border-[#FAF9F6]/80 pt-4 font-normal font-sans whitespace-pre-line'>
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
