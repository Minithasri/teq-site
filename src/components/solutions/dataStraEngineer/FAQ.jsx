'use client';
import Link from 'next/link';
import { useState } from 'react';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const faqData = [
    {
      category: 'UNDERSTANDING THE SERVICE',
      questions: [
        {
          q: "What does GWC's Data Strategy & Engineering service cover?",
          a: "GWC's Data Strategy & Engineering service is designed to strengthen your business with a unified, well-governed data foundation built for speed and accuracy.\n\nThe service spans ten capability areas: data discovery, advanced analytics, digital transformation consulting, customized data roadmaps, objective identification, target audience identification, tailored data strategies, data maturity identification, data compliance, and IT infrastructure optimization.",
        },
        {
          q: 'How does GWC turn data into business value?',
          a: "GWC's BI and analytics solutions are customized to your specific business needs, delivering targeted insights that align with your unique challenges and goals. By combining strategic assessment, advanced analytics, and AI integration, GWC helps organizations move from raw data to informed, actionable decisions.",
        },
        {
          q: 'What is a customized data roadmap, and why does GWC build one for each client?',
          a: "Every business is unique, so GWC tailors data roadmaps to align with each client's specific goals — whether that means optimizing existing processes or adopting advanced analytics. The roadmap is crafted with scalability in mind, evolving alongside the business to accommodate growth and technological advancements.",
        },
      ],
    },
    {
      category: 'CAPABILITIES',
      questions: [
        {
          q: 'What is data discovery, and how does GWC approach it?',
          a: 'Data discovery is the process of uncovering patterns and trends within your data to support informed decision-making. GWC harnesses data discovery tools and techniques that allow your team to explore data efficiently and effortlessly — surfacing insights that might otherwise remain hidden.',
        },
        {
          q: 'What advanced analytics capabilities does GWC offer?',
          a: "GWC's advanced analytics capabilities include predictive analytics to foresee trends, patterns, and potential challenges, enabling proactive responses. GWC also applies sophisticated algorithms and models to extract meaningful information, giving organizations a competitive edge in their markets.",
        },
        {
          q: "How does GWC assess and improve an organization's data maturity?",
          a: "GWC's data maturity identification process involves a precise assessment of your organization's current data capabilities. The output provides strategic insights into areas for growth and improvement, giving leadership a clear picture of where the organization stands and a prioritized path forward.",
        },
        {
          q: 'How does GWC ensure data compliance?',
          a: "GWC's data compliance solutions guarantee strict adherence to regulatory requirements. GWC also implements continuous monitoring mechanisms to track changes in data compliance regulations, allowing prompt adjustments so your organization remains compliant as the regulatory landscape evolves.",
        },
      ],
    },
    {
      category: 'IMPLEMENTATION & EXPERTISE',
      questions: [
        {
          q: "What does GWC's strategic data assessment involve?",
          a: 'GWC begins with a comprehensive assessment of your existing data landscape. Experts analyze data sources, quality, and accessibility to lay the groundwork for a robust data strategy — establishing a solid foundation for data excellence before any transformation work begins.',
        },
        {
          q: 'How does GWC handle digital transformation consulting?',
          a: "GWC's digital transformation consulting services help businesses grow by adopting the right digital technologies. GWC works with organizations to integrate new tools and processes smoothly, making it easier for teams to adapt to change and use technology effectively.",
        },
        {
          q: 'What partners and technologies does GWC work with for Data Strategy & Engineering?',
          a: "GWC works with a certified network of trusted data solution providers. Key technology partners include Domo, Snowflake, Databricks, Boomi, and Google Cloud. GWC's certified experts offer a full spectrum of services including data classification, access control, lineage tracking, quality assurance, and reporting — all backed by these leading platforms.",
        },
      ],
    },
  ];

  const toggleFAQ = id => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className='w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F1E9F7] overflow-hidden'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-serif text-[#1C1917] tracking-tight leading-tight'>
            Frequently asked <span className='italic font-light'>questions</span>
          </h2>
        </div>

        {/* Categories and Accordions */}
        <div className='space-y-12'>
          {faqData.map((group, groupIdx) => (
            <div key={groupIdx} className='space-y-4'>
              {/* Category Subtitle */}
              <h3 className='text-xs sm:text-sm font-semibold tracking-widest text-[#737373] uppercase mb-4 pl-1'>
                {group.category}
              </h3>

              {/* Accordion Items */}
              <div className='space-y-3.5'>
                {group.questions.map((faq, faqIdx) => {
                  const itemId = `${groupIdx}-${faqIdx}`;
                  const isOpen = openId === itemId;

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
                        onClick={() => toggleFAQ(itemId)}
                      >
                        <span className='font-medium text-[#1C1917] text-[15px] sm:text-base md:text-[17px] leading-snug tracking-tight pr-2'>
                          {faq.q}
                        </span>

                        {/* +/- Icon */}
                        <div className='flex-shrink-0 w-8 h-8 rounded-full bg-[#FAF9F5] border border-[#EBE8E0] flex items-center justify-center transition-colors duration-300'>
                          {isOpen ? (
                            // Minus Icon
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
                            // Plus Icon
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

                      {/* Accordion Content with smooth height transition */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden`}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
