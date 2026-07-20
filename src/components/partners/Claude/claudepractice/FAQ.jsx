'use client';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqQuestions = [
    {
      q: 'Is GWC Data.AI an official Anthropic Claude partner?',
      a: 'Yes. GWC Data.AI is a member of the Anthropic Claude Partner Network, with over 160 team members holding Claude Certified Architect (Foundations) certification through the Anthropic Partner Academy.',
    },
    {
      q: 'How many Claude Certified Architects does GWC Data.AI have?',
      a: "160 or more team members are certified through Anthropic's Claude Certified Architect Foundations program, and that number is growing every month.",
    },
    {
      q: 'Does GWC Data.AI have client case studies built specifically on Claude?',
      a: "The partnership was announced in 2026 and the first Claude-native client builds are underway now. GWC brings 50 or more agentic AI blueprints already delivered across manufacturing, retail, HR, and other functions, and is extending that experience directly to Claude. Book a scoping call and we'll walk you through what's live.",
    },
    {
      q: "What does GWC Data.AI's Claude practice actually do?",
      a: 'Advisory and strategy, enablement, custom agent and copilot development, engineering and modernization with Claude Code, responsible AI governance, and managed services, for enterprises adopting Claude.',
    },
    {
      q: 'Which enterprise systems can GWC connect Claude to?',
      a: 'Salesforce, SAP, Domo, Snowflake, Databricks, Boomi, Microsoft 365, Google Workspace, ServiceNow, SharePoint, and custom enterprise applications.',
    },
  ];

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden'>
      <div className='max-w-5xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '40px',
              lineHeight: '44px',
              color: '#7030B1',
              textAlign: 'center',
            }}
          >
            Straight answers
          </h2>
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: '32px',
              lineHeight: '44px',
              color: '#404040',
              fontStyle: 'italic',
              textAlign: 'center',
            }}
          >
            including about what's still early.
          </p>
        </div>

        {/* Accordions */}
        <div className='space-y-4'>
          {faqQuestions.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className='bg-[#F8F7F6] rounded-[20px] transition-all duration-300 overflow-hidden'
              >
                {/* Trigger */}
                <button
                  className='w-full text-left px-6 py-6 md:px-8 md:py-7 flex items-center justify-between gap-6 select-none focus:outline-none'
                  onClick={() => toggleFAQ(index)}
                >
                  <span className='font-semibold text-[#404040] text-[16px] md:text-[18px] leading-snug tracking-tight'>
                    {faq.q}
                  </span>

                  {/* Plus/Minus sign */}
                  <span className='text-2xl font-light text-[#404040] select-none flex-shrink-0 transition-transform duration-300'>
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {/* Content */}
                <div
                  className='transition-all duration-300 ease-in-out overflow-hidden'
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className='px-6 pb-6 md:px-8 md:pb-7 text-sm md:text-base text-[#666] leading-relaxed border-t border-black/5 pt-4'>
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
}
