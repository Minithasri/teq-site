import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AISolutions = () => {
  return (
    <section className='relative bg-[#FAFAFA] py-20 px-6 lg:px-20 overflow-hidden'>
      {/* ── Full-section grid background ── */}
      <div
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Fade edges so grid doesn't look cut off */}
      <div className='absolute inset-0 pointer-events-none bg-gradient-to-b from-[#FAFAFA] via-transparent to-[#FAFAFA]' />
      <div className='absolute inset-0 pointer-events-none bg-gradient-to-r from-[#FAFAFA] via-transparent to-[#FAFAFA]' />

      <div className='relative max-w-[1150px] mx-auto'>
        {/* ── Timeline Row ── */}
        <div className='relative flex flex-col lg:flex-row items-center lg:items-start justify-center gap-0 mb-16'>
          {/* Left Icon — Custom built */}
          <div className='flex flex-col items-center w-[200px] flex-shrink-0 z-10'>
            <div className='w-16 h-16 flex items-center justify-center mb-4'>
              <Image
                src='/images/technology_11199143 1.png'
                alt='Custom built'
                width={56}
                height={56}
                className='object-contain'
              />
            </div>
            <p className='text-[#222] text-sm font-semibold text-center leading-snug'>
              Custom built for
              <br />
              your business
            </p>
          </div>

          {/* Orange Line — Desktop */}
          <div className='hidden lg:flex flex-1 items-center self-start mt-[30px] px-2'>
            <div
              className='w-full h-[5px] rounded-full'
              style={{ background: 'linear-gradient(100.44deg, #F97316 41.13%, #43145E 119.62%)' }}
            />
          </div>
          {/* Orange Line — Mobile */}
          <div
            className='flex lg:hidden w-[4px] h-10 rounded-full my-3'
            style={{ background: 'linear-gradient(100.44deg, #F97316 41.13%, #43145E 119.62%)' }}
          />

          {/* Center Icon — Production ready (elevated, with glow) */}
          <div className='flex flex-col items-center w-[200px] flex-shrink-0 z-10 lg:-mt-4'>
            <div className='relative w-24 h-24 flex items-center justify-center mb-3'>
              {/* Purple radial glow */}
              <div className='absolute inset-0 scale-125 rounded-full bg-[#8B5CF6]/15 blur-xl' />
              {/* White Circle Background */}
              <div className='relative z-10 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100'>
                <Image
                  src='/images/Group 1261153862.png'
                  alt='Production ready'
                  width={56}
                  height={56}
                  className='object-contain'
                />
              </div>
            </div>
            {/* Dots row — White Capsule */}
            <div className='flex gap-2 mb-4 bg-white px-4 py-1.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-gray-100 transition-all hover:shadow-md'>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className='w-2.5 h-2.5 rounded-full shadow-sm'
                  style={{
                    background: 'linear-gradient(100.44deg, #F97316 41.13%, #43145E 119.62%)',
                  }}
                />
              ))}
            </div>
            <p className='text-[#222] text-sm font-semibold text-center leading-snug'>
              Production ready in weeks
            </p>
          </div>

          {/* Orange Line — Desktop */}
          <div className='hidden lg:flex flex-1 items-center self-start mt-[30px] px-2'>
            <div
              className='w-full h-[5px] rounded-full'
              style={{ background: 'linear-gradient(100.44deg, #F97316 41.13%, #43145E 119.62%)' }}
            />
          </div>
          {/* Orange Line — Mobile */}
          <div
            className='flex lg:hidden w-[4px] h-10 rounded-full my-3'
            style={{ background: 'linear-gradient(100.44deg, #F97316 41.13%, #43145E 119.62%)' }}
          />

          {/* Right Icon — Enterprise grade */}
          <div className='flex flex-col items-center w-[200px] flex-shrink-0 z-10'>
            <div className='w-16 h-16 flex items-center justify-center mb-4'>
              <Image
                src='/images/arcticons_eset-security.png'
                alt='Enterprise security'
                width={56}
                height={56}
                className='object-contain'
              />
            </div>
            <p className='text-[#222] text-sm font-semibold text-center leading-snug'>
              Enterprise grade
              <br />
              security
            </p>
          </div>
        </div>

        {/* ── Heading ── */}
        <h2 className='text-3xl lg:text-[40px] font-bold text-center text-[#1a1a2e] leading-tight mb-5'>
          <span className='bg-gradient-to-b from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent inline-block'>
            AI Solutions
          </span>{' '}
          that deliver
        </h2>

        {/* ── Subtext ── */}
        <p className='text-center text-[#666] text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-10'>
          Delivering tailored AI solutions designed to solve real business
          <br className='hidden lg:block' />
          challenges with speed, precision, and scalability
        </p>

        {/* ── CTA Button ── */}
        <div className='flex justify-center'>
          <Link
            href='/contact'
            className='flex items-center gap-2 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl'
            style={{
              background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
              boxShadow: 'inset 0px 0px 12px 0px #FFFFFF, 0px 0px 2px 0px rgba(0, 0, 0, 0.1)',
              borderRadius: '30px',
            }}
          >
            Explore solutions
            <ArrowRight className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;
