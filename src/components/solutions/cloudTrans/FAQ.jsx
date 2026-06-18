'use client';
import Link from 'next/link';
import { useState } from 'react';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const faqData = [
    {
      category: 'OVERVIEW & APPROACH',
      questions: [
        {
          q: 'Why should an organization choose GWC for cloud transformation?',
          a: 'GWC drives digital resilience, helping businesses adapt fast, embrace innovation, and unlock the full potential of cloud technologies. GWC delivers two core business outcomes:\n\n• Agile business response: helping organizations respond swiftly to market changes and evolving business needs for continuous growth and competitiveness\n• Digital adoption and innovation: guiding teams to seamlessly adopt new cloud technologies and modern ways of working while fostering a culture of innovation and efficiency.',
        },
        {
          q: 'What cloud transformation services does GWC provide?',
          a: "GWC's cloud transformation service covers ten capability areas:\n\n• Operate & optimize dev capabilities\n• Transform cloud operations\n• Application migration\n• Integrate hybrid solutions\n• Setup & optimize security operations\n• Compliance management\n• Data governance\n• Data migration\n• Data & analytics solutions\n• Custom AI solutions\n\nGWC designs and delivers data-driven transformation, powered by breakthrough technology and operational excellence — bridging business challenges and guiding organizations toward their goals.",
        },
      ],
    },
    {
      category: 'MIGRATION & OPERATIONS',
      questions: [
        {
          q: 'How does GWC approach application migration to the cloud?',
          a: "GWC establishes the essentials for cloud-native application development and modernizing legacy applications. GWC also utilizes cloud platform services including AI/ML, data analytics, and APIs — to unlock new functionalities and data-driven insights. The goal is seamless cloud migration with minimal downtime and maximum efficiency, guided by GWC's cloud migration expertise.",
        },
        {
          q: 'How does GWC help optimize cloud operations?',
          a: 'GWC sets up and implements service management, operations monitoring, and talent development for cloud environments. GWC also regularly reviews and assesses cloud operations to identify areas for improvement and iterate on strategy — ensuring the cloud environment remains efficient and aligned with evolving business needs.',
        },
        {
          q: "What is GWC's approach to hybrid cloud integration?",
          a: 'GWC helps organizations harness the agility and reach of the cloud while preserving the security and control of on-premises systems. This includes:\n• Implementing comprehensive disaster recovery and backup strategies that encompass both on-premises and cloud components\n• Giving businesses the flexibility of cloud with the reassurance of proven on-premises controls.',
        },
      ],
    },
    {
      category: 'SECURITY, COMPLIANCE & DATA',
      questions: [
        {
          q: 'How does GWC handle cloud security operations?',
          a: 'GWC sets up security monitoring, investigations, and response, and establishes a security posture using a zero trust model. GWC also integrates security into the DevOps pipeline and fosters collaboration between security, development, and operations teams. Broader cloud security expertise covers safeguarding digital assets to the highest standards of security and compliance, protecting data at every level.',
        },
        {
          q: 'How does GWC manage compliance in cloud environments?',
          a: 'GWC streamlines compliance processes and optimizes resource allocation using best-in-class tools and expertise. GWC regularly reviews the compliance posture and adapts strategies as regulations and cloud environments evolve, ensuring organizations remain compliant in a dynamic regulatory landscape.',
        },
        {
          q: 'What data migration capabilities does GWC provide for cloud?',
          a: 'GWC assesses, develops, transforms, and modernizes Enterprise Data Warehouses and Databases as part of cloud transformation. GWC leverages cloud tools for data enrichment and transformation to unlock greater value from migrated data, and implements comprehensive data catalogs across all environments to locate, understand, and track data lineage.',
        },
        {
          q: 'Does GWC build custom AI solutions as part of cloud transformation?',
          a: 'Yes. GWC assesses feasibility, builds and trains models, and develops machine learning solutions as part of cloud transformation engagements.',
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
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-serif text-[#1C1917] tracking-tight leading-tight mb-4'>
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
                        <div className='flex-shrink-0 w-8 h-8 rounded-full bg-[#FAF9F5] border-[#EBE8E0] border flex items-center justify-center transition-colors duration-300'>
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
                          maxHeight: isOpen ? '650px' : '0px',
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
