'use client';
import Link from 'next/link';
import { useState } from 'react';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const faqData = [
    {
      category: 'GETTING STARTED',
      questions: [
        {
          q: 'What is BI migration and modernization?',
          a: 'BI migration is the process of moving from a legacy business intelligence platform to a modern solution — enabling better analytics, scalability, AI-powered insights, and improved data governance. BI Modernization goes further by optimizing your data architecture and workflows on the new platform.',
        },
        {
          q: 'When should my organization consider migrating its BI platform?',
          a: 'BI migration is needed when your current BI tool is old, costly, lacks AI features, cannot integrate data easily, or does not support real-time analytics and cloud collaboration.',
        },
        {
          q: 'What is the first step when working with GWC?',
          a: "GWC starts by reviewing your current BI infrastructure, including your data sources, reports, dashboards, users roles, and business goals. This helps define the migration plan, identify potential challenges early, and ensure the new platform meets your organization's needs.",
        },
        {
          q: 'Are there situations where migration is not recommended?',
          a: 'Yes. Avoid initiating a migration during peak business cycles (e.g. year-end closes, major product launches) or if your current platform fully meets all business needs. GWC will advise you honestly during the assessment phase if migration is premature.',
        },
      ],
    },
    {
      category: 'GWC PROCESS',
      questions: [
        {
          q: "What does GWC's end-to-end migration process look like?",
          a: 'GWC follows a structured ten-phase methodology powered by the GWC Data Migration Accelerator framework:\n\n1. Assessment & planning\n2. Data inventory & analysis\n3. Data migration\n4. Report & dashboard migration\n5. Integration with existing systems\n6. Security & access control\n7. Training & change management\n8. Testing & quality assurance\n9. Deployment\n10. Post-migration optimization',
        },
        {
          q: 'How does GWC minimize business disruption during migration?',
          a: 'GWC uses a phased deployment approach with parallel-run strategies and real-time monitoring throughout the migration. An incremental migration method ensures data integrity at every step, while dedicated support during go-live reduces the risk of downtime impacting daily operations.',
        },
        {
          q: 'How does GWC handle data quality and cleansing?',
          a: 'During the data inventory phase, GWC identifies dependencies between sources, reports, and dashboards, then cleanses and transforms data as needed before migration begins. This ensures the migrated BI solution is built on accurate, reliable, and consistent information from day one.',
        },
        {
          q: 'What does security and access control migration involve?',
          a: "GWC maps existing user roles and permissions to the new platform, applies encryption to sensitive data in transit and at rest, and addresses any security gaps identified during the assessment. The goal is to maintain — or improve — your organization's security posture throughout the transition.",
        },
        {
          q: 'Does GWC provide user training and change management support?',
          a: 'Yes. GWC provides customized training and clear communication to help teams adapt to the new BI platform. After deployment, GWC gathers user feedback and continuously improves the solution to increase adoption and long-term success.',
        },
      ],
    },
    {
      category: 'COST & TIMELINE',
      questions: [
        {
          q: 'How long does a typical BI migration take?',
          a: "With the legacy BI platform, most BI migrations take between 3 and 9 months. Smaller projects may be completed in a few weeks, while large enterprise migrations can take a year or more. GWC's Accelerator framework helps speed up the process without sacrificing quality.",
        },
        {
          q: 'What factors influence BI migration costs?',
          a: 'Key cost drivers include:\n• New platform licensing fees\n• Data extraction, transformation, and loading (ETL) complexity\n• Number and complexity of existing integrations\n• Volume of reports and dashboards to migrate\n• User training and change management scope\n• Post-migration support requirements\n\nGWC recommends getting a tailored assessment to receive accurate scoping before budgeting.',
        },
        {
          q: 'What are the most common causes of cost overruns?',
          a: 'BI migration delays are often caused by complex data mapping, unexpected data quality issues, and inadequate change management planning. GWC identifies these risks early through a detailed assessment to create realistic project timelines and budgets.',
        },
      ],
    },
    {
      category: 'TECHNICAL',
      questions: [
        {
          q: 'What BI platforms and tools does GWC support?',
          a: 'GWC works with all major platforms, including migrations from Tableau, SAP BusinessObjects, and Microsoft SSRS. On the destination side, GWC partners with Domo, Snowflake, Databricks, and Google Cloud, enabling cloud-native, AI-ready BI environments.',
        },
        {
          q: 'What is the GWC Data Migration Accelerator?',
          a: "The GWC Data Migration Accelerator is GWC's proprietary framework for BI migration. It standardizes and automates key stages of the migration lifecycle to accelerate delivery, reduce manual error, and ensure maximum business value from the transformation — all while keeping teams in control at every step.",
        },
        {
          q: 'Does GWC support cloud-based BI solutions?',
          a: 'Yes. GWC specializes in cloud-based BI solutions that unlock real-time analytics, enhanced team collaboration, and cost-effective scalability. Cloud migrations also open the door to AI-infused analytics — including machine learning-powered predictive insights — that are not available on traditional on-premise platforms.',
        },
        {
          q: 'How does GWC handle integration with existing systems post-migration?',
          a: 'GWC integrates the new BI solution with your existing databases, applications, and systems as a dedicated phase of the migration. The aim is seamless data flow and interoperability — ensuring a clean IT landscape with minimal redundancy and no broken data pipelines after go-live.',
        },
        {
          q: 'What testing and quality assurance does GWC perform?',
          a: 'GWC develops a comprehensive testing strategy covering data integrity, functional accuracy, performance benchmarks, and security validation. Results are used to optimize the environment before deployment, ensuring a seamless user experience from day one and reducing post-launch issues.',
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
