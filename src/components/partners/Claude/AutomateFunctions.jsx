'use client';

const AutomateFunctions = () => {
  const cards = [
    {
      category: 'MANUFACTURING',
      desc: 'Predictive maintenance agents that read plant and supply data.',
    },
    {
      category: 'CUSTOMER EXPERIENCE',
      desc: 'Voice and chat agents that audit tone and compliance.',
    },
    {
      category: 'RETAIL',
      desc: "Pricing and inventory agents powered by Claude's reasoning.",
    },
    {
      category: 'FINANCE',
      desc: 'Invoice and supplier intelligence pulled from your documents.',
    },
    {
      category: 'HR',
      desc: 'Resume screening with real language understanding, not keywords.',
    },
    {
      category: 'MARKETING',
      desc: 'Campaign and SEO copilots built on your own data.',
    },
  ];

  return (
    <section className='w-full py-10 px-4 sm:px-6 md:px-8 bg-[#FFFFFF] overflow-hidden'>
      <div className='max-w-full mx-auto'>
        {/* Large Rounded Card Container */}
        <div
          className='w-full rounded-[32px] py-16 px-6 sm:px-12 md:px-16 overflow-hidden relative flex flex-col items-center shadow-lg'
          style={{
            backgroundImage: `
              linear-gradient(rgba(215, 108, 72, 0.21), rgba(215, 108, 72, 0.21)),
              url('/images/partners/claude/bgclaude2.jpg')
            `,
            backgroundSize: 'cover, cover',
            backgroundPosition: 'center, center',
            backgroundRepeat: 'no-repeat, no-repeat',
          }}
        >
          {/* Headings */}
          <div className='text-center max-w-5xl mb-16 px-4 relative z-10'>
            <h2
              className='text-2xl sm:text-3xl md:text-[36px] font-medium tracking-tight mb-4 leading-tight'
              style={{
                backgroundImage: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              Across every function you automate.
            </h2>
            <p className='text-[#404040] text-sm sm:text-base md:text-[17px] font-regular leading-relaxed'>
              Every agent below runs on Claude, built by Anthropic, wired into the systems your
              teams already use.
            </p>
          </div>

          {/* 3x2 Grid Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative z-10'>
            {cards.map((card, idx) => (
              <div
                key={idx}
                className='rounded-[20px] p-6 shadow-sm transition-all duration-300 hover:scale-[1.03] flex flex-col justify-start'
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.7)',
                }}
              >
                {/* Card Category Header */}
                <span
                  className='text-lg sm:text-[15px] font-bold tracking-wider block mb-3 uppercase'
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {card.category}
                </span>

                {/* Center Line Divider */}
                <div className='h-[1px] bg-white/70 mb-4 w-full' />

                {/* Card Description / Sub-text */}
                <p className='text-[#525252] text-sm sm:text-[16px] leading-relaxed font-semibold font-sans'>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomateFunctions;
