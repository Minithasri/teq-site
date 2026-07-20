'use client';

const AutomateFunctions = () => {
  const cards = [
    {
      category: 'Manufacturing',
      desc: 'Predictive maintenance agents that read plant and supply data.',
      image: '/images/partners/claude/img1.jpg',
    },
    {
      category: 'Customer Experience',
      desc: 'Voice and chat agents that audit tone and compliance.',
      image: '/images/partners/claude/img2.jpg',
    },
    {
      category: 'Retail',
      desc: "Pricing and inventory agents powered by Claude's reasoning.",
      image: '/images/partners/claude/img3.jpg',
    },
    {
      category: 'Finance',
      desc: 'Invoice and supplier intelligence pulled from your documents.',
      image: '/images/partners/claude/img4.jpg',
    },
    {
      category: 'HR',
      desc: 'Resume screening with real language understanding, not keywords.',
      image: '/images/partners/claude/img5.jpg',
    },
    {
      category: 'Marketing',
      desc: 'Campaign and SEO copilots built on your own data.',
      image: '/images/partners/claude/img6.jpg',
    },
  ];

  return (
    <section className='w-full py-10 px-4 sm:px-6 md:px-8 bg-[#FFFFFF] overflow-hidden'>
      <div className='max-w-full mx-auto'>
        {/* Large Rounded Card Container */}
        <div
          className='w-full rounded-[32px] py-16 px-6 sm:px-12 md:px-16 overflow-hidden relative flex flex-col items-center shadow-lg'
          style={{ backgroundColor: 'rgba(215, 108, 72, 0.21)' }}
        >
          {/* Background Image */}
          <div
            className='absolute inset-0 pointer-events-none'
            style={{
              backgroundImage: "url('/images/partners/claude/bgclaude2.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.25,
            }}
          />

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
                className='rounded-[20px] overflow-hidden shadow-sm transition-all duration-300 hover:scale-[1.03] flex flex-col'
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  border: '1.5px solid rgba(255, 255, 255, 0.7)',
                }}
              >
                {/* Card Image */}
                <div className='w-full h-[180px] overflow-hidden p-2  '>
                  <img
                    src={card.image}
                    alt={card.category}
                    className='w-full h-full object-cover rounded-xl'
                  />
                </div>

                {/* Card Content */}
                <div className='p-5 flex flex-col gap-3'>
                  {/* Category */}
                  <span
                    className='text-[15px] font-bold tracking-wide block'
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {card.category}
                  </span>

                  {/* Description */}
                  <p className='text-[#525252] text-sm sm:text-[15px] leading-relaxed font-semibold font-sans'>
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomateFunctions;
