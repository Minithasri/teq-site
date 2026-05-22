import React from 'react';

export default function ClientContext() {
  return (
    // Base section wrapper using a pure white background
    <section className='w-full bg-[#FAFAFA] pb-[48px] relative overflow-hidden sm:overflow-visible'>
      {/* Top Banner Accent Container: Height shifts on mobile to frame the title perfectly */}
      <div className='w-full h-[160px] sm:h-[240px] bg-[#f8fafc] border-b border-gray-100 absolute top-0 left-0 right-0 z-0' />

      {/* Main Content Layout Container */}
      <div className='max-w-[1140px] mx-auto px-4 sm:px-6 relative z-10 pt-[32px] sm:pt-[44px]'>
        {/* CONTENT CARD WRAPPER FRAME TRACK */}
        <div className='w-full max-w-[1040px] relative'>
          {/* Correctly centered Header Title on all viewports */}
          <h2 className='text-center text-[24px] sm:text-[26px] md:text-[28px] font-extrabold text-[#071326] tracking-tight mb-[20px] sm:mb-[24px] w-full sm:max-w-[640px] md:max-w-[780px]'>
            Client Context
          </h2>

          {/* Floating Description Block Layer */}
          <div className='bg-white rounded-[16px] sm:rounded-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-5 sm:p-8 md:p-[50px] border-2 border-[#F5F5F5] w-full sm:max-w-[640px] md:max-w-[780px] relative z-10'>
            <div className='space-y-[16px] sm:space-y-[26px] text-[14.5px] sm:text-[15px] md:text-[16px] text-[#475569] font-medium leading-[1.65] sm:leading-[1.8] md:leading-[2] tracking-tight text-left'>
              <p>
                A leader in manufacturing and electronics, manages highly complex production
                processes where defect tracking, yield monitoring, and machine performance analysis
                play a critical role in operational efficiency.
              </p>
              <p>
                For years, production teams relied on manual reporting methods for defect
                classification, assembly yield tracking, and machine parameter analysis. This
                limited leadership{"'"}s ability to gain real-time visibility into performance and
                slowed down corrective actions.
              </p>
            </div>
          </div>
        </div>

        {/* FLOATING IMAGE PANEL:
            - Absolute layout behavior on tablet/desktop widths.
            - Drops seamlessly into a neat standalone image card element on small mobile screen views.
        */}
        <div
          className='relative top-0 right-0 mt-6 sm:mt-0 w-full sm:w-[300px] md:w-[352px] h-[180px] sm:h-[210px] md:h-[224px] bg-cover bg-center bg-no-repeat block sm:absolute sm:right-0 sm:-top-[30px] rounded-[16px] shadow-[0_12px_32px_rgba(0,0,0,0.08)] z-20'
          style={{
            backgroundImage: 'url("/images/Templates/template14/bg2.png")',
          }}
        />
      </div>
    </section>
  );
}
