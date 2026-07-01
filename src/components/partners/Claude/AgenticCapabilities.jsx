'use client';
import Image from 'next/image';

const AgenticCapabilities = () => {
  const cards = [
    {
      category: 'AUTONOMOUS AGENTS',
      title: 'Multi-Agent Orchestration',
      desc: 'Agents that plan, delegate and act, with checkpoints where you need them.',
    },
    {
      category: 'ENGINEERING',
      title: 'Claude Code',
      desc: 'We modernise and ship your codebase faster, without cutting corners.',
    },
    {
      category: 'INTEGRATION',
      title: 'MCP & Systems',
      desc: 'Claude wired into Domo, Snowflake, Databricks, Salesforce and Boomi.',
    },
    {
      category: 'DOCUMENTS',
      title: 'Document Intelligence',
      desc: 'Contracts, invoices and reports turned into structured data, instantly.',
    },
    {
      category: 'COPILOTS',
      title: 'Knowledge Copilots',
      desc: 'Assistants grounded in your knowledge base, with answers you can trust.',
    },
    {
      category: 'GOVERNANCE',
      title: 'Responsible AI',
      desc: 'Guardrails, audit trails and access controls, built from day one.',
    },
  ];

  return (
    <section className='relative w-full pb-10 sm:pb-20 px-4 sm:px-6 md:px-8 bg-white overflow-visible'>
      {/* Background Graphic with seamless top edge blur fading into the previous section */}
      <div
        className='absolute inset-0 pointer-events-none z-0 overflow-visible hidden md:block'
        style={{ bottom: '-400px' }}
      >
        <div
          className='w-full h-full relative'
          style={{
            backgroundImage: 'url("/images/partners/claude/claude2.png")',
            backgroundPosition: 'bottom center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
          }}
        ></div>
      </div>

      {/* Standard background for mobile view */}
      <div className='absolute inset-0 pointer-events-none z-0 md:hidden block'>
        <div
          className='w-full h-full'
          style={{
            backgroundImage: 'url("/images/partners/claude/claude2.png")',
            backgroundPosition: 'top center, top center',
            backgroundRepeat: 'no-repeat, no-repeat',
            backgroundSize: '100% auto, 100% auto',
          }}
        />
      </div>

      <div className='max-w-6xl mx-auto flex flex-col items-center relative z-10 w-full'>
        {/* Dynamic spacer that preserves layout layout geometry */}
        <div className='w-full h-[40px] sm:h-[180px] md:h-[20px] mb-6 sm:mb-12 flex items-center justify-center pointer-events-none' />

        {/* Section Heading */}
        <div className='flex items-center gap-2 mb-10 px-4 text-center justify-center flex-wrap z-10'>
          <div className='w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 relative'>
            <Image
              src='/images/partners/claude/Icon.svg'
              alt='Claude Spark Star'
              fill
              className='object-contain'
            />
          </div>
          <h2
            className='text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold tracking-tight'
            style={{
              backgroundImage: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Agentic AI, built with Claude by Anthropic.
          </h2>
        </div>

        {/* 3x2 Grid Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full z-10'>
          {cards.map((card, idx) => (
            <div
              key={idx}
              className='bg-white rounded-2xl border-2 border-[#ECEAE6] shadow-xl flex flex-col justify-between overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)]'
            >
              {/* Top White Area */}
              <div className='p-6 pb-4 bg-white'>
                <span
                  className='text-[14px] font-bold tracking-wider block'
                  style={{
                    backgroundImage: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {card.category}
                </span>
              </div>

              {/* Bottom Gradient Area */}
              <div
                className='mx-2 mb-2 p-6 flex-grow flex flex-col justify-start rounded-2xl'
                style={{
                  background:
                    'radial-gradient(circle, rgba(110, 43, 139, 0) 0%, rgba(217, 109, 66, 0.08) 100%)',
                }}
              >
                <h3 className='text-[#404040] text-lg sm:text-[20px] font-semibold tracking-tight mb-2 leading-snug'>
                  {card.title}
                </h3>
                <p className='text-[#737373] text-sm leading-relaxed font-medium'>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgenticCapabilities;
