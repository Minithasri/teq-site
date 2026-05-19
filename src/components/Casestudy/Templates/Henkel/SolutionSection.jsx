'use client';

import Image from 'next/image';

const solutionCards = [
  {
    icon: '/images/Templates/henkel/unified.svg',
    title: 'Unified Marketing Data Integration',
    desc: 'Consolidated data from Salesforce, SharePoint, Excel, and marketing platforms into Power BI.',
  },
  {
    icon: '/images/Templates/henkel/structured.svg',
    title: 'Structured Conversion Funnel Model',
    desc: 'Designed a data model to track Contacts, Leads, MQLs, and SQLs with full funnel visibility.',
  },
  {
    icon: '/images/Templates/henkel/interactive.svg',
    title: 'Interactive Analytics Dashboards',
    desc: 'Built dynamic dashboards for campaign performance, funnel analysis, and CTA tracking.',
  },
  {
    icon: '/images/Templates/henkel/cta.svg',
    title: 'CTA Performance Insights',
    desc: 'Enabled detailed evaluation of CTA owners and their contribution to conversions.',
  },
  {
    icon: '/images/Templates/henkel/advanced.svg',
    title: 'Advanced Time-Based Analysis',
    desc: 'Implemented monthly and yearly trend tracking for performance comparison.',
  },
  {
    icon: '/images/Templates/henkel/drill-down.svg',
    title: 'Drill-Down & Comparative Analytics',
    desc: 'Enabled deep-dive analysis with current vs previous period comparisons for better insights.',
  },
];

const SolutionSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-10'>
        {/* ================= HEADER ================= */}
        <div>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#1E49D8]'>
            OUR SOLUTION
          </h2>

          {/* DESCRIPTION */}
          <p className='mt-4 text-[12px] md:text-[18px] leading-[1.8] text-[#7B8597]'>
            We designed and delivered a comprehensive Campaign Performance & Conversion Analytics
            Platform — unifying fragmented data sources, modeling the full marketing funnel, and
            enabling real-time, self-service analytics for the marketing team.
          </p>
        </div>

        {/* ================= SOLUTION GRID ================= */}
        <div className='mt-12 grid grid-cols-1 gap-3 md:grid-cols-3'>
          {solutionCards.map((item, index) => (
            <div
              key={index}
              className='
                rounded-[24px]
                border-2
                border-[#2450E3]
                bg-white
                px-5
                md:px-6
                py-5
                md:py-6
                shadow-[0px_10px_24px_rgba(0,0,0,0.06)]
              '
            >
              {/* HEADER */}
              <div className='flex items-center gap-4'>
                {/* ICON */}
                <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[14px] border border-[#2450E3] bg-[#F4F7FF]'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={22}
                    height={22}
                    className='h-[22px] w-[22px] object-contain'
                  />
                </div>

                {/* TITLE */}
                <h3 className='text-[12px] md:text-[17px] leading-[1.45] font-semibold tracking-[-0.4px] text-[#2148D8]'>
                  {item.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className='mt-4 text-[12px] md:text-[15px] leading-[1.9] text-[#7D8697]'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
