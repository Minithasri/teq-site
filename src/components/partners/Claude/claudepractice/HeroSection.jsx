'use client';

import { FiArrowRight } from 'react-icons/fi';

const cards = [
  {
    title: 'STATUS',
    heading: 'Anthropic Claude Partner',
    text: 'Network member, announced 2026.',
  },
  {
    title: 'CERTIFIED TEAM',
    heading: '160+ people',
    text: 'Claude Certified Architect, Foundations.',
  },
  {
    title: 'WHAT WE DO',
    heading: 'Advisory to managed services',
    text: 'Strategy, build, integrate, govern, run.',
  },
  {
    title: "WHO IT'S FOR",
    heading: 'Mid-market to enterprise',
    text: 'Manufacturing, retail, BFSI, HR and All Industries.',
  },
];

export default function HeroSection() {
  const shadows = `
    0px 1.34px 4.15px 0px rgba(210, 208, 225, 0.07),
    0px 3.23px 9.98px 0px rgba(210, 208, 225, 0.1),
    0px 6.08px 18.8px 0px rgba(210, 208, 225, 0.12),
    0px 10.85px 33.53px 0px rgba(210, 208, 225, 0.14),
    0px 20.3px 62.72px 0px rgba(210, 208, 225, 0.17)
  `;

  return (
    <section className='px-4 py-10 md:py-16 md:px-8 lg:px-12 flex justify-center items-center w-full min-h-fit mt-[50px]'>
      <div
        className='relative w-full max-w-[1400px] lg:h-[696.5px] overflow-hidden rounded-[40px] border border-[#ece8e5] bg-white flex flex-col justify-between'
        style={{ boxShadow: shadows, opacity: 1 }}
      >
        {/* Upper Part (Image with Content) */}
        <div
          className='relative w-full lg:h-[500px] flex justify-center items-center text-center px-6 py-12 bg-white'
          style={{ opacity: 1 }}
        >
          {/* Background Video */}
          <div className='absolute inset-0 z-0 pointer-events-none opacity-40'>
            <video
              src='/images/partners/claude/video.mp4'
              autoPlay
              loop
              muted
              playsInline
              className='w-full h-full object-cover'
              style={{ objectPosition: 'center 10%' }}
            />
          </div>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,#fff7ec_0%,transparent_60%)] pointer-events-none' />

          {/* Content inside upper part */}
          <div className='relative z-10 max-w-[1200px] w-full flex flex-col items-center justify-center gap-[42px]'>
            <div>
              <h1 className='text-3xl font-medium leading-tight text-[#3c3c3c] md:text-4xl lg:text-5xl'>
                <span className='italic'>A Dedicated Practice for</span>
                <br />
                <span className='text-5xl font-bold bg-gradient-to-r from-[#6F2B8B] to-[#ED7200] bg-clip-text text-transparent inline-block mt-3 pb-2'>
                  Building Enterprise AI on Claude.
                </span>
              </h1>
              <p className='mx-auto mt-6 max-w-2xl text-base text-[#666] md:text-xl'>
                GWC Data.AI helps organizations build and scale AI with Claude, backed by a 160+
                certified team.
              </p>
            </div>

            <button className='inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7030B1] to-[#B56DD3] px-4 md:px-8 py-4 font-medium text-white shadow-lg transition hover:scale-105'>
              Book a Scoping Call
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Lower Part (Cards) */}
        <div
          className='relative w-full lg:h-[196.5px] bg-white border-t border-[#ece8e5] px-6 py-8 md:px-[28px]'
          style={{ opacity: 1 }}
        >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] h-full items-center'>
            {cards.map(card => (
              <div
                key={card.title}
                className='rounded-2xl p-4  flex flex-col justify-between h-full min-h-[100px]'
              >
                <div className='rounded-2xl border border-[#ECECEC] bg-white px-2 py-3 shadow-sm flex flex-col gap-2'>
                  <div>
                    <p className='text-[12px] font-semibold tracking-widest uppercase text-[#444] font-poppins'>
                      {card.title}
                    </p>

                    <h3 className='mt-1 text-[14px] font-bold leading-tight text-[#6F2DBD] font-poppins'>
                      {card.heading}
                    </h3>
                  </div>

                  <div className='border-t border-dashed border-[#D7C8FF] my-1' />

                  <p className='text-[12px] leading-normal text-[#555] font-poppins'>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
