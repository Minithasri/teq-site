import Image from 'next/image';

export default function SolutionSection() {
  const topCards = [
    {
      icon: '/images/Templates/template12/guest.svg',
      title: 'Guest 360 View',
      text: 'Integrated booking, preferences, and feedback data into a unified model for complete visibility',
    },
    {
      icon: '/images/Templates/template12/ai.svg',
      title: 'AI Personalization',
      text: 'Delivered tailored recommendations for services, dining, and amenities using machine learning',
    },
    {
      icon: '/images/Templates/template12/oper.svg',
      title: 'Operational Dashboards',
      text: 'Provided managers with real-time KPIs on occupancy, service quality, and efficiency',
    },
  ];

  const bottomCards = [
    {
      icon: '/images/Templates/template12/feedback.svg',
      title: 'Feedback Analytics',
      text: 'Automated sentiment analysis on guest reviews and surveys for proactive improvements',
    },
    {
      icon: '/images/Templates/template12/exe.svg',
      title: 'Executive Reporting',
      text: 'Leadership gained visibility into guest satisfaction and operational excellence metrics',
    },
  ];

  return (
    <section className='bg-[#f4f6f8] py-[64px]'>
      <div className='max-w-[1120px] mx-auto px-6'>
        {/* Module Headers */}
        <div className='text-center mb-[34px]'>
          <h2 className='text-[28px] font-extrabold text-[#071326] tracking-tight'>The Solution</h2>
          <p className='text-[16px] text-[#60708a] font-semibold mt-1'>
            AI-Powered Hospitality Platform
          </p>
        </div>

        {/* Central Executive Highlight Banner */}
        <div className='bg-[#112240] text-white rounded-[12px] shadow-xl px-[40px] py-[32px] max-w-[960px] mx-auto mb-[40px]'>
          <p className='text-[15.5px] leading-[1.45] font-medium text-slate-200 text-left md:text-center'>
            GWC implemented a comprehensive customer experience transformation solution powered by
            AI, creating a unified platform that connects guest data, operational systems, and
            analytics to deliver exceptional, personalized hospitality experiences.
          </p>
        </div>

        {/* Top Grid Layer: 3 Cards */}
        <div className='grid md:grid-cols-3 gap-[24px] max-w-[1040px] mx-auto mb-[24px]'>
          {topCards.map((card, index) => (
            <div
              key={index}
              className='bg-white rounded-[10px] border-2 border-[#f5f5f5] shadow-[0_4px_24px_rgba(0,0,0,0.08)] px-[24px] py-[28px] min-h-[170px]'
            >
              <div className='flex items-center gap-[14px] mb-[16px]'>
                <div className='w-[44px] h-[44px] rounded-[8px] bg-[#e2e8f0] flex items-center justify-center shrink-0'>
                  <Image src={card.icon} alt={card.title} width={22} height={22} />
                </div>
                <h3 className='text-[16.5px] font-extrabold text-[#071326] tracking-tight'>
                  {card.title}
                </h3>
              </div>
              <p className='text-[14px] text-[#60708a] font-medium leading-[1.42]'>{card.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom Layer: 2 Symmetrically Centered Cards */}
        <div className='grid md:grid-cols-2 gap-[24px] max-w-[686px] mx-auto'>
          {bottomCards.map((card, index) => (
            <div
              key={index}
              className='bg-white rounded-[10px] shadow-md px-[24px] py-[28px] min-h-[170px]'
            >
              <div className='flex items-center gap-[14px] mb-[16px]'>
                <div className='w-[44px] h-[44px] rounded-[8px] bg-[#e2e8f0] flex items-center justify-center shrink-0'>
                  <Image src={card.icon} alt={card.title} width={22} height={22} />
                </div>
                <h3 className='text-[16.5px] font-extrabold text-[#071326] tracking-tight'>
                  {card.title}
                </h3>
              </div>
              <p className='text-[14px] text-[#60708a] font-medium leading-[1.42]'>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
