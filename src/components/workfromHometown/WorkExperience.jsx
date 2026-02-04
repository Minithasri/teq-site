'use client';

import Image from 'next/image';

const WorkExperience = () => {
  return (
    <section className='w-full py-12 px-4'>
      <div
        className='w-full max-w-[1440px] mx-auto flex flex-col items-center text-center rounded-[40px] py-16 px-4 md:px-8'
        style={{
          background:
            'linear-gradient(to bottom, #EBD8F3 0%, rgba(255,255,255,0) 50%, #EBD8F3 100%)',
        }}
      >
        {/* Title */}
        <div className='mb-4 relative inline-block'>
          {/* The pink box border effect from the image seems to be a design choice,
               or maybe just a highlight in the screenshot.
               I'll implement the text clearly. If a border is needed, I can add it.
               The screenshot shows a pink box around the title. */}
          <h2 className='text-[28px] md:text-[40px] font-medium text-[#404040] px-6 py-2  backdrop-blur-sm'>
            Revolutionizing Work Experience
          </h2>
        </div>

        {/* Central Image */}
        <div
          className='relative w-full max-w-[1210px] h-[300px] md:h-[350px] rounded-xl overflow-hidden mb-12 border-[1px] border-[#E5E5E5]'
          style={{
            boxShadow:
              '2px 7px 20px 0px rgba(0, 0, 0, 0.3), inset 0px 4px 26px 0px rgba(0, 0, 0, 0.5)',
          }}
        >
          <Image
            src='/images/WFH/expimg1.webp'
            alt='Revolutionizing Work Experience'
            fill
            className='object-cover'
          />
        </div>

        {/* Description */}
        <p className='max-w-6xl text-[#737373] text-[14px] md:text-[16px] leading-relaxed font-medium'>
          Presenting our groundbreaking and proven model Work from Hometown. We revolutionize the
          conventional work environment, forging a distinctive synergy between remote work,
          work-life harmony, and cost-effective benefits. Our initiative is centred on
          decentralizing workspaces and catalyzing development in India&apos;s burgeoning tier 2 and
          3 cities.
        </p>
      </div>
    </section>
  );
};

export default WorkExperience;
