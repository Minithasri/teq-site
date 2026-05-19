import React from 'react';

export default function ClientOverview() {
  return (
    // Base container with a clean layout and background color split
    <section className='relative w-full bg-[#f8fafc] py-[64px] overflow-hidden min-h-[400px] flex items-center'>
      {/* Right-side Media Block:
          - Increased width to w-[52%] so it matches the deep overlap.
          - Changed backgroundPosition to 'center 28%' to pull the image content upward.
      */}
      <div
        className='absolute right-0 top-0 bottom-0 w-full md:w-[40%] bg-cover bg-no-repeat hidden md:block rounded-l-[16px] shadow-sm'
        style={{
          backgroundImage: 'url("/images/Templates/template13/bg2.png")',
          backgroundPosition: 'calc(50% + 5px) 200%',
        }}
      />

      {/* Main Content Area */}
      <div className='relative max-w-[1140px] mx-auto w-full px-6 z-10'>
        {/* Increased width from 640px to 760px to make the text box longer horizontally */}
        <div className='max-w-[760px] md:translate-x-[20px]'>
          {/* Left-Aligned Heading shifted to fit right over the overlap card */}
          <h2 className='text-left text-[28px] font-extrabold text-[#071326] tracking-tight mb-[20px] pl-[12px]'>
            Client Overview
          </h2>

          {/* Overlapping Card Layer: White text background card with a crisp high-depth shadow */}
          <div className='bg-white rounded-[12px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] px-[40px] py-[34px] border border-gray-100/50'>
            <p className='text-[16px] text-[#334155] font-medium leading-[1.5]'>
              A banking client, needed a modern analytics solution to monitor customer transactions,
              financial KPIs, and compliance metrics in real time. With high volumes of
              transactional data and strict regulatory requirements, leadership required centralized
              analytics to improve oversight and decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
