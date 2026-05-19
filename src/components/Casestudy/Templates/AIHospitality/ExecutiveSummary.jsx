import Image from 'next/image';

export default function ExecutiveSummary() {
  const cards = [
    {
      icon: '/images/Templates/template12/personal.svg',
      title: 'AI Personalization',
      text: 'Delivering tailored guest experiences through advanced machine learning',
    },
    {
      icon: '/images/Templates/template12/real.svg',
      title: 'Real-Time Analytics',
      text: 'Actionable insights from unified guest data and operational metrics',
    },
    {
      icon: '/images/Templates/template12/scalable.svg',
      title: 'Scalable Framework',
      text: 'Enterprise-grade solution for multi-property global operations',
    },
  ];

  return (
    // Clean base background for the overall section
    <section className='relative py-[64px] bg-[#f4f6f8] overflow-hidden'>
      {/* Absolute background element that ONLY controls the top building image */}
      {/* Absolute background element with precise X and Y adjustments */}
      <div
        className='absolute top-0 right-0 w-full h-[370px] bg-no-repeat pointer-events-none'
        style={{
          backgroundImage:
            'linear-gradient(rgba(244,246,248,0.72), rgba(244,246,248,0.12)), url("/images/Templates/template12/ai-bg2.png")',
          backgroundSize: '760px auto',

          /* First value: Horizontal (X-axis) -> 'calc(100% + 80px)' pushes it 80px past the right edge
      Second value: Vertical (Y-axis) -> '-80px' pulls it upward
    */
          backgroundPosition: 'calc(110% + 70px) -70px',
        }}
      />

      {/* Main Content stays relative so it sits beautifully on top */}
      <div className='relative max-w-[1080px] mx-auto px-6'>
        <h2 className='text-center text-[26px] font-extrabold text-[#071d3a] mb-[34px]'>
          Executive Summary
        </h2>

        <div className='bg-white rounded-[8px] shadow-lg px-[40px] py-[34px] max-w-[970px] mx-auto'>
          <p className='text-[17px] text-[#171717] leading-[1.32]'>
            A global leader in the hotel and hospitality industry, wanted to strengthen its guest
            experience strategy by leveraging AI and analytics. With customer expectations evolving
            rapidly, Accor required a solution that could deliver personalized services, optimize
            operations, and provide real-time insights into guest behavior.
          </p>

          <p className='text-[17px] text-[#071326] font-extrabold mt-[22px] leading-[1.32]'>
            GWC partnered with the client to design an AI-powered hospitality solution that
            integrated guest data, operational systems, and analytics, enabling Accor to deliver
            smarter, data-driven experiences.
          </p>
        </div>

        {/* This module will now remain completely clean of the building graphic */}
        <div className='grid md:grid-cols-3 gap-[22px] mt-[40px]'>
          {cards.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[8px] shadow-md px-[22px] py-[20px] min-h-[176px]'
            >
              <div className='flex items-center gap-[20px] mb-[18px]'>
                <div className='w-[48px] h-[48px] rounded-[10px] bg-[#ffb21a] flex items-center justify-center shrink-0'>
                  <Image src={item.icon} alt={item.title} width={24} height={24} />
                </div>

                <h3 className='text-[15px] font-extrabold text-[#071326]'>{item.title}</h3>
              </div>

              <p className='text-[15px] text-[#60708a] leading-[1.35] max-w-[260px]'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
