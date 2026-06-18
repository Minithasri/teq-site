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
          q: "What does GWC's Business Intelligence & Analytics service offer?",
          a: "GWC's Business Intelligence & Analytics services help enterprises turn data into actionable insights using industry-leading platforms like Tableau, Power BI, Looker, and Domo.\n\nOur services include:\n• Dashboard & Reporting Development – Real-time visualizations for faster decisions\n• BI Migration & Modernization – Seamless transition from legacy to modern BI platforms\n• Data Integration & Automation – Unified view across all your data sources\n• Self-Service Analytics – Empowering teams to explore data independently\n\nFrom strategy to implementation, GWC delivers scalable data analytics solutions tailored to your business goals across Healthcare, Retail, Banking, Manufacturing, and more.",
        },
        {
          q: 'How does GWC turn data into a business asset?',
          a: 'Most organizations sit on vast amounts of untapped data. GWC changes that.\n\nThrough a combination of Data Strategy, Engineering, Governance, and Cloud Solutions, we help businesses build a solid data foundation — one that powers smarter decisions, operational efficiency, and sustainable growth.\n\nUsing modern platforms like Snowflake, GCP and dbt, GWC designs scalable data pipelines and governance frameworks that ensure your data is accurate, accessible, and always working for your business, not against it.\n\nFrom raw data to real business value, GWC makes every data point count.',
        },
        {
          q: "What is GWC's approach to custom reporting?",
          a: 'Most reporting projects fail not because of bad tools but because of a disconnect between data teams and business users.\n\nGWC bridges that gap. Our reporting specialists embed your teams to map out decision workflows, data sources, and report hierarchies before writing a single query.\n\nThis means every report, whether built on Power BI, Tableau, Looker, or Domo is architected around how your business operates, not just how your data is structured.\n\nWe also ensure reports scale with you with automated data refresh cycles, role-based access, and cross-platform compatibility baked in from day one.',
        },
      ],
    },
    {
      category: 'CORE CAPABILITIES',
      questions: [
        {
          q: 'How does GWC handle data collection and exploration?',
          a: "GWC's data engineers begin every engagement by auditing your existing data landscape identifying sources, gaps, redundancies, and quality issues before any pipeline is built.\n\nWe design automated ingestion pipelines that pull data from disparate sources, CRMs, ERPs, IoT devices, third-party APIs into a unified, analytics-ready layer.\n\nFrom there, our analysts use exploratory data analysis (EDA) techniques to surface patterns, anomalies, and opportunities that often go unnoticed in traditional reporting. The outcome is a clean, well-documented data foundation that your BI and AI teams can trust and build on confidently.",
        },
        {
          q: 'What advanced analytics capabilities does GWC provide?',
          a: 'GWC goes beyond standard reporting to deliver predictive, prescriptive, and AI-augmented analytics that help businesses stay ahead of the curve.\n\nOur advanced analytics practice covers:\n• Predictive Modeling – Forecasting demand, churn, risk, and revenue using machine learning algorithms\n• Natural Language Processing (NLP) – Extracting insights from unstructured data like customer feedback, documents, and support tickets\n• Generative AI Integration – Embedding LLM-powered intelligence into your analytics workflows for faster, conversational data exploration\n• Computer Vision & IoT Analytics – Real-time monitoring and anomaly detection for manufacturing and industrial use cases\n• Statistical Analysis & Data Science – Custom models built by domain experts across Healthcare, Retail, Banking, and Telecom\n\nWhat sets GWC apart is our ability to operationalize these models moving from prototype to production, ensuring your advanced analytics investments deliver measurable ROI, not just interesting experiments.',
        },
        {
          q: 'How does GWC support performance monitoring?',
          a: "We build end-to-end performance monitoring frameworks that give business and operations teams a live pulse on critical metrics whether that's sales pipeline health, supply chain efficiency, patient outcomes, or financial KPIs.\n\nUsing platforms like Domo, Tableau, Power BI, and Snowflake, GWC delivers always-on monitoring solutions with automated alerts, threshold triggers, and anomaly detection so your teams spend less time hunting for problems and more time solving them.",
        },
      ],
    },
    {
      category: 'INSIGHT, COLLABORATION & INTEGRATION',
      questions: [
        {
          q: 'How does GWC generate actionable insights from data?',
          a: 'GWC interprets data findings to uncover actionable business insights and translates these into clear recommendations for strategic decision-making. GWC also assists in formulating data-driven strategies, ensuring that the organization is always well-informed and strategically aligned through a data-driven approach to strategy development.',
        },
        {
          q: 'How does GWC enable collaboration and knowledge sharing?',
          a: 'From day one, we design our engagements to foster cross-functional collaboration bringing together your data teams, business stakeholders, and IT leadership around a shared understanding of goals, metrics, and outcomes.',
        },
        {
          q: 'How does GWC integrate analytics into existing business workflows?',
          a: 'GWC integrates analytics directly into existing business processes, making insights available within the tools and workflows teams already use. This helps employees make data-driven decisions as part of their daily work, rather than relying on separate reporting systems.',
        },
        {
          q: 'What data visualization expertise does GWC bring?',
          a: "GWC navigates complex data landscapes using advanced data visualization tools that transform intricate datasets into intuitive visualizations, providing clarity and actionable insights into business metrics. Comprehensive data visualization is a core pillar of GWC's BI & Analytics expertise, sitting alongside advanced analytics integration, real-time reporting and dashboards, and data-driven strategy development.",
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
