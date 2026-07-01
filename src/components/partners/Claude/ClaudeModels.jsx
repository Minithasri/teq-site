'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const ClaudeModels = () => {
  const cards = [
    {
      category: 'For your hardest problem',
      brand: 'Claude',
      model: 'Opus',
      desc: 'Deep reasoning for research, strategy and complex analysis.',
    },
    {
      category: 'The daily driver',
      brand: 'Claude',
      model: 'Sonnet',
      desc: 'Fast, smart and built for production agents.',
    },
    {
      category: 'Built for scale',
      brand: 'Claude',
      model: 'Haiku',
      desc: 'Instant responses for support, triage and real-time tasks.',
    },
  ];

  return (
    <section className='w-full py-20 px-4 sm:px-6 md:px-8 bg-[#FFFFFF] overflow-hidden'>
      <div className='max-w-6xl mx-auto flex flex-col items-center'>
        {/* Top Header Line with Sparks and Button */}
        <div className='w-full flex items-center justify-between gap-4 mb-12'>
          {/* Left Icon (decorative) */}
          <div className='w-14 h-14 rounded-xl bg-white shadow flex items-center justify-center shrink-0 border border-[#0000001C]'>
            <Image src='/images/Spark.svg' alt='' aria-hidden width={30} height={30} />
          </div>

          {/* Connector */}
          <div
            aria-hidden
            className='flex-1 h-[2px] bg-[linear-gradient(to_right,#1F1F1F_30%,rgba(0,0,0,0)_0%)] bg-[length:6px_2px] bg-repeat-x'
          />

          {/* CTA */}
          <Link
            href='/contact'
            className='px-8 py-3 rounded-full border font-medium hover:bg-purple-50 transition shrink-0 flex items-center gap-2'
            style={{ borderColor: '#6F2B8B', color: '#6F2B8B' }}
          >
            Talk to our experts
            <FiArrowRight className='w-4 h-4' aria-hidden />
          </Link>
        </div>

        {/* Headings Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16 items-start'>
          <div>
            <h2
              className='text-3xl sm:text-4xl md:text-[32px] font-medium tracking-tight leading-tight pb-1'
              style={{
                backgroundImage: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <span className='block mb-2'>One Ecosystem.</span>
              <span className='block'>The right model for every job.</span>
            </h2>
          </div>
          <div className='md:pt-2'>
            <p className='text-[#525252] text-sm sm:text-base md:text-[16px] font-medium leading-relaxed max-w-xl'>
              We follow a streamlined, value-driven process to build agents that solve real business
              problems with precision and scalability.
            </p>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full'>
          {cards.map((card, idx) => (
            <div
              key={idx}
              className='rounded-[24px] p-8 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(112,48,177,0.05)]'
              style={{
                background: '#FFFFFF',
                border: '2px solid #E5E5E5',
              }}
            >
              {/* Category Header with line */}
              <div className='flex items-center gap-4 mb-6'>
                <span className='text-[13px] font-bold text-[#737373] tracking-wider whitespace-nowrap'>
                  {card.category}
                </span>
                <div className='h-[2px] flex-grow bg-[#ECEAE6]' />
              </div>

              {/* Card Title */}
              <h4 className='text-2xl font-bold tracking-tight mb-4'>
                <span className='text-[#6F2B8B]'>{card.brand} </span>
                <span
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #6F2B8B 0%, #ED7200 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {card.model}
                </span>
              </h4>

              {/* Description */}
              <p className='text-[#525252] text-[16px] leading-relaxed font-medium font-sans'>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClaudeModels;
