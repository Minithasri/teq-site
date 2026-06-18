'use client';
import Link from 'next/link';
import { useState } from 'react';

const FAQ = () => {
  // Track open state for each FAQ. We can use a unique key like "category-index"
  const [openId, setOpenId] = useState(null);

  const faqData = [
    {
      category: 'FOUNDATION & APPROACH',
      questions: [
        {
          q: "What is GWC's approach to data governance?",
          a: 'GWC builds a governed data foundation using an enhanced data fabric architecture that is designed for speed and accuracy. The approach combines smarter compliance management — through an audit-ready data fabric that ensures ethical, responsible, and transparent data handling — with strengthened customer trust, achieved by prioritising data privacy and responsible usage through strong, secure governance practices.',
        },
        {
          q: 'What data governance services does GWC provide?',
          a: 'GWC offers a full spectrum of data governance services across ten areas:\n\n• Data classification & sensitivity\n• Data quality management\n• Data lineage\n• Data access & authorization\n• Data privacy compliance\n• Data governance policies\n• Metadata management\n• Training & awareness\n• Data risk management\n• Audit & monitoring\n\nGWC delivers these services in collaboration with trusted data governance solution providers, supported by certified experts.',
        },
        {
          q: 'What specialist tools does GWC use for data governance?',
          a: 'GWC offers dedicated Atlan and Alation services for enterprise data governance. These platforms enable streamlined data discovery, smarter governance, and AI-ready data transformation.\n\nGWC also uses API-driven governance tools that connect with all major data platforms to enable unified discovery, analysis, and collaboration across your data landscape.',
        },
      ],
    },
    {
      category: 'KEY CAPABILITIES',
      questions: [
        {
          q: 'How does GWC manage data classification and sensitivity?',
          a: 'GWC helps businesses classify and protect sensitive data by creating clear data categories based on confidentiality levels. This approach supports regulatory compliance, reduces the risk of data breaches, and helps build trust with customers and stakeholders.',
        },
        {
          q: "What does GWC's data lineage capability provide?",
          a: "GWC's data lineage implementation provides end-to-end visibility into data origins and processing. It identifies potential downstream effects of data changes, enabling teams to prevent breaking changes and resolve data issues quickly. GWC describes this as a dynamic map of your data landscape, accelerating impact analysis and root cause identification.",
        },
        {
          q: 'How does GWC handle data privacy compliance?',
          a: 'GWC puts robust security measures in place to protect customer data from unauthorized access, disclosure, alteration, or destruction. These measures include encryption, access controls, and incident response plans. GWC also implements continuous monitoring to ensure adherence to data privacy laws and reduce the risk of costly regulatory fines.',
        },
        {
          q: "What is GWC's approach to metadata management?",
          a: "GWC establishes standards for consistent ways to describe and categorize data across the organization. GWC's metadata management integrates with existing data infrastructure, making metadata easily accessible across systems. The Active Metadata capability uses API-driven governance tools to create a dynamic, unified map of the entire data landscape.",
        },
      ],
    },
    {
      category: 'RISK, MONITORING & ENABLEMENT',
      questions: [
        {
          q: 'How does GWC approach data risk management?',
          a: "GWC's data risk management service demonstrates a commitment to protecting valuable data, fostering trust and confidence across the organization. It ensures adherence to data privacy laws and reduces the risk of costly fines. GWC also uses intelligent automation to stop manual metadata entry, automate enrichment, and boost efficiency and control across the data landscape.",
        },
        {
          q: "What does GWC's audit and monitoring service cover?",
          a: "GWC's audit and monitoring capability identifies areas of non-compliance and potential risks, focusing on data quality and consistency across the organization. GWC provides expertise in early detection and response to data issues before they cause significant harm to the business, helping leadership maintain a clear, ongoing view of governance health.",
        },
        {
          q: 'Does GWC provide training on data governance?',
          a: "Yes. GWC's training and awareness service uses online training platforms and knowledge management systems for easy access and continuous learning.",
        },
      ],
    },
  ];

  const toggleFAQ = id => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className='w-full py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-[#F1E9F7] overflow-hidden'>
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
