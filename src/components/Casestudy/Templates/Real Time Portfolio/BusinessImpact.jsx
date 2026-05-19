'use client';

import { CheckCircle2, Clock, Eye, Rocket, Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function MeasurableBusinessImpact() {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col items-center py-12 md:py-16 px-4 md:px-6 select-none font-['Poppins']"
      style={{
        minHeight: '1070px',
        backgroundColor: '#F8FAFC',
      }}
    >
      {/* ===== BACKDROP LANDSCAPE INDUSTRIAL BACKGROUND LAYER ===== */}
      <div className='absolute inset-0 pointer-events-none z-0'>
        <Image
          src='/images/Templates/templatez/rtportfolio/bi.png'
          alt='Hydrogen Plant Processing Infrastructure Site Visual Background'
          fill
          priority
          className='object-cover'
          style={{ opacity: 0.62 }}
        />
      </div>

      {/* ===== CORE CONTENT GRID FRAME WORKSPACE ===== */}
      <div className='w-full max-w-[1200px] z-10 flex flex-col items-center gap-6 mt-0'>
        {/* Headings Row Header Block */}
        <div className='text-center mb-4 px-2'>
          <h2 className='text-[28px] md:text-[34px] font-bold text-[#1D2530] tracking-tight mb-2'>
            Measurable Business Impact
          </h2>
          <p className='text-[18px] md:text-[22px] text-[#000000] font-normal'>
            Transforming hydrogen investment management across all dimensions
          </p>
        </div>

        {/* ================= CARD 1: OPERATIONAL IMPACT ================= */}
        <div className='w-full bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-[12px] border border-[#DADFE7] shadow-sm flex flex-col gap-5'>
          <h3 className='text-[24px] md:text-[26px] font-bold text-[#1D2530] pl-0 md:pl-10'>
            Operational Impact
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-start w-full mt-1'>
            <div className='flex items-start gap-5'>
              <Clock size={18} className='text-[#1DACC9] shrink-0 mt-1' />
              <p className='text-[16px] md:text-[18px] leading-[22px] text-[#1D2530]'>
                Reduced reporting cycle from weeks → real-time
              </p>
            </div>
            <div className='flex items-start gap-5'>
              <Eye size={18} className='text-[#1DACC9] shrink-0 mt-1' />
              <p className='text-[16px] md:text-[18px] leading-[22px] text-[#1D2530]'>
                Improved visibility into asset-level and portfolio performance
              </p>
            </div>
            <div className='flex items-start gap-5'>
              <CheckCircle2 size={18} className='text-[#1DACC9] shrink-0 mt-1' />
              <p className='text-[16px] md:text-[18px] leading-[22px] text-[#1D2530]'>
                Faster alignment of investments with sustainability goals
              </p>
            </div>
          </div>
        </div>

        {/* ================= CARD 2: FINANCIAL IMPACT ================= */}
        <div className='w-full bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-[12px] border border-[#DADFE7] shadow-sm flex flex-col gap-5'>
          <h3 className='text-[24px] md:text-[26px] font-bold text-[#1D2530] pl-0 md:pl-10'>
            Financial Impact
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-start w-full mt-1'>
            <div className='flex items-start gap-5'>
              <TrendingUp size={18} className='text-[#000000] shrink-0 mt-1' />
              <p className='text-[16px] md:text-[18px] leading-[22px] text-[#1D2530]'>
                Enhanced ROI tracking for hydrogen investments
              </p>
            </div>
            <div className='flex items-start gap-5'>
              <Target size={18} className='text-[#000000] shrink-0 mt-1' />
              <p className='text-[16px] md:text-[18px] leading-[22px] text-[#1D2530]'>
                Improved ability to evaluate investment risks and opportunities
              </p>
            </div>
          </div>
        </div>

        {/* ================= CARD 3: STRATEGIC IMPACT ================= */}
        <div className='w-full bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-[12px] border border-[#DADFE7] shadow-sm flex flex-col gap-5'>
          <h3 className='text-[24px] md:text-[26px] font-bold text-[#1D2530] pl-0 md:pl-10'>
            Strategic Impact
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-start w-full mt-1'>
            <div className='flex items-start gap-5'>
              <Target size={18} className='text-[#000000] shrink-0 mt-1' />
              <p className='text-[16px] md:text-[18px] leading-[22px] text-[#1D2530]'>
                Positioned HY24 as a digitally enabled clean hydrogen leader
              </p>
            </div>
            <div className='flex items-start gap-5'>
              <Rocket size={18} className='text-[#000000] shrink-0 mt-1' />
              <p className='text-[16px] md:text-[18px] leading-[22px] text-[#1D2530]'>
                Created a scalable framework for future hydrogen investments
              </p>
            </div>
            <div className='flex items-start gap-5'>
              <CheckCircle2 size={18} className='text-[#000000] shrink-0 mt-1' />
              <p className='text-[16px] md:text-[18px] leading-[22px] text-[#1D2530]'>
                Strengthened confidence in decision-making for global clean energy strategies
              </p>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM CAPSULE: KEY TRANSFORMATION ================= */}
        <div className='mt-10 relative flex justify-center w-full px-4'>
          {/* Main Container Pill with exact border layout simulation */}
          <div
            className="bg-white flex flex-col items-center justify-center p-6 text-center relative font-['Poppins'] w-full max-w-[380px]"
            style={{
              height: '170px',
              borderRadius: '16px',
              /* Dual background handles gradient border with perfect rounded corners */
              background:
                'linear-gradient(white, white) padding-box, linear-gradient(135deg, #1A365D 0%, #1DACC9 50%, #22C55E 100%) border-box',
              border: '5px solid transparent',
            }}
          >
            {/* Header Title */}
            <h4
              className='font-bold text-[#1D2530] mb-1 text-[20px] tracking-tight'
              style={{ lineHeight: '1.2' }}
            >
              Key Transformation
            </h4>

            {/* Transformation Typography with correct colors and line breaks */}
            <div className='flex flex-col items-center justify-center'>
              <div className='text-[32px] font-bold tracking-tight flex items-center gap-2 leading-none'>
                <span className='text-[#1DACC9]'>Weeks</span>
                <span className='text-[#10B981]'>→</span>
                <span className='text-[#10B981]'>Real-</span>
              </div>
              <div className='text-[32px] font-bold tracking-tight text-[#10B981] leading-none mt-1'>
                Time
              </div>
            </div>

            {/* Footer Description */}
            <p className='text-[14px] text-[#676F7E] font-normal mt-2 tracking-normal'>
              Portfolio reporting and insights
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
