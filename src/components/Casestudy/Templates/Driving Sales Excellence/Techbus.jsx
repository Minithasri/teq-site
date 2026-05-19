'use client';

import { BarChart3, Clock, Database, Link2, ShieldCheck, Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function TechStackAndBusinessImpact() {
  return (
    <div className="w-full bg-white select-none overflow-hidden flex flex-col font-['Poppins']">
      {/* SECTION 1: TECHNOLOGY STACK */}
      <section className='w-full bg-white pb-24 sm:pb-28 md:pb-24 px-4 sm:px-6 relative flex flex-col items-center'>
        {/* Header Container */}
        <div className='w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 lg:gap-12 mb-10'>
          {/* Left Logos */}
          <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-4 opacity-85'>
            <div className='relative w-[105px] sm:w-[115px] h-[80px] sm:h-[85px]'>
              <Image
                src='/images/Templates/templatez/drivingsales/tableau.svg'
                alt='Tableau'
                fill
                className='object-contain'
              />
            </div>

            <div className='relative w-[75px] sm:w-[85px] h-[40px] sm:h-[45px]'>
              <Image
                src='/images/Templates/templatez/realestate/domo.svg'
                alt='Domo'
                fill
                className='object-contain'
              />
            </div>

            <div className='relative w-[55px] sm:w-[65px] h-[40px] sm:h-[45px]'>
              <Image
                src='/images/Templates/templatez/realestate/bi.svg'
                alt='Power BI'
                fill
                className='object-contain'
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className='text-[#0F172A] font-bold text-[28px] sm:text-[32px] md:text-[36px] tracking-tight text-center m-0'>
            Technology Stack
          </h2>

          {/* Right Logos */}
          <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-4 opacity-85'>
            <div className='relative w-[75px] sm:w-[85px] h-[40px] sm:h-[45px]'>
              <Image
                src='/images/Templates/templatez/realestate/sql.svg'
                alt='SQL Server'
                fill
                className='object-contain'
              />
            </div>

            <div className='relative w-[75px] sm:w-[85px] h-[40px] sm:h-[45px]'>
              <Image
                src='/images/Templates/templatez/realestate/etl.svg'
                alt='ETL Pipelines'
                fill
                className='object-contain'
              />
            </div>

            <div className='relative w-[75px] sm:w-[85px] h-[48px] sm:h-[55px]'>
              <Image
                src='/images/Templates/templatez/drivingsales/erp.svg'
                alt='ERP Systems'
                fill
                className='object-contain'
              />
            </div>
          </div>
        </div>

        {/* Stack Cards */}
        <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-[1200px] px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 z-20'>
          {/* Card 1 */}
          <div className='bg-white p-5 sm:p-6 flex flex-col items-center text-center border border-slate-100 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)]'>
            <div className='w-[48px] h-[48px] bg-[#2563EB] rounded-full flex items-center justify-center text-white mb-4 shadow-sm'>
              <BarChart3 size={20} />
            </div>

            <h4 className='text-[#0F172A] font-bold text-[17px] sm:text-[18px] mb-1'>
              Visualization & Dashboards
            </h4>

            <p className='text-slate-400 text-[13px] sm:text-[14px] font-normal m-0'>
              Power BI / Tableau / Domo
            </p>
          </div>

          {/* Card 2 */}
          <div className='bg-white p-5 sm:p-6 flex flex-col items-center text-center border border-slate-100 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)]'>
            <div className='w-[48px] h-[48px] bg-[#2563EB] rounded-full flex items-center justify-center text-white mb-4 shadow-sm'>
              <Database size={20} />
            </div>

            <h4 className='text-[#0F172A] font-bold text-[17px] sm:text-[18px] mb-1'>
              Data Integration & Validation
            </h4>

            <p className='text-slate-400 text-[13px] sm:text-[14px] font-normal m-0'>
              SQL / ERP Systems
            </p>
          </div>

          {/* Card 3 */}
          <div className='bg-white p-5 sm:p-6 flex flex-col items-center text-center border border-slate-100 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)]'>
            <div className='w-[48px] h-[48px] bg-[#2563EB] rounded-full flex items-center justify-center text-white mb-4 shadow-sm'>
              <Link2 size={20} />
            </div>

            <h4 className='text-[#0F172A] font-bold text-[17px] sm:text-[18px] mb-1'>
              Data Cleansing & Automation
            </h4>

            <p className='text-slate-400 text-[13px] sm:text-[14px] font-normal m-0'>ETL Tools</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: BUSINESS IMPACT */}
      <section
        className='w-full mt-20 md:mt-6 pt-40 sm:pt-44 md:pt-36 pb-16 sm:pb-18 md:pb-20 px-4 sm:px-6 flex flex-col items-center'
        style={{
          background: 'linear-gradient(156deg, #9cd7d9ff 0%, #DDEAF7 45%, #9cd7d9ff 100%)',
        }}
      >
        <div className='w-full max-w-[840px] flex flex-col items-center'>
          {/* Heading */}
          <h3 className='text-[#0F172A] font-bold text-[28px] sm:text-[30px] md:text-[34px] tracking-tight text-center mb-8 sm:mb-10'>
            Business Impact
          </h3>

          {/* Operational Impact */}
          <div className='bg-white w-full rounded-xl p-5 sm:p-6 md:p-8 mb-5 sm:mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50/50'>
            <div className='flex items-center gap-2 mb-5 text-[#22C55E]'>
              <TrendingUp size={22} />
              <h4 className='text-[#14532D] font-bold text-[17px] sm:text-[18px] m-0'>
                Operational Impact
              </h4>
            </div>

            <ul className='flex flex-col gap-4 m-0 p-0 list-none'>
              <li className='flex items-center gap-4'>
                <div className='w-[28px] h-[28px] rounded-full bg-[#22C55E] text-white flex items-center justify-center shrink-0'>
                  <Clock size={15} />
                </div>

                <span className='text-slate-700 text-[14px] sm:text-[15px]'>
                  Reporting cycle reduced from days → real-time
                </span>
              </li>

              <li className='flex items-center gap-4'>
                <div className='w-[28px] h-[28px] rounded-full bg-[#22C55E] text-white flex items-center justify-center shrink-0'>
                  <ShieldCheck size={15} />
                </div>

                <span className='text-slate-700 text-[14px] sm:text-[15px]'>
                  Improved trust in data with automated validation checks
                </span>
              </li>

              <li className='flex items-center gap-4'>
                <div className='w-[28px] h-[28px] rounded-full bg-[#22C55E] text-white flex items-center justify-center shrink-0'>
                  <TrendingUp size={15} />
                </div>

                <span className='text-slate-700 text-[14px] sm:text-[15px]'>
                  Reduced manual effort for reporting teams
                </span>
              </li>
            </ul>
          </div>

          {/* Financial Impact */}
          <div className='bg-white w-full rounded-xl p-5 sm:p-6 md:p-8 mb-5 sm:mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50/50'>
            <div className='flex items-center gap-2 mb-4 text-[#22C55E]'>
              <span className='font-bold text-[22px] leading-none'>$</span>

              <h4 className='text-[#14532D] font-bold text-[17px] sm:text-[18px] m-0'>
                Financial Impact
              </h4>
            </div>

            <ul className='flex flex-col gap-3 m-0 p-0 list-none pl-1'>
              <li className='flex items-start gap-3'>
                <span className='w-[6px] h-[6px] rounded-full bg-[#22C55E] mt-[9px] shrink-0' />

                <span className='text-slate-700 text-[14px] sm:text-[15px]'>
                  Improved accuracy in sales reporting, reducing costly misinterpretations
                </span>
              </li>

              <li className='flex items-start gap-3'>
                <span className='w-[6px] h-[6px] rounded-full bg-[#22C55E] mt-[9px] shrink-0' />

                <span className='text-slate-700 text-[14px] sm:text-[15px]'>
                  Enabled leadership to respond quickly to sales trends and anomalies
                </span>
              </li>
            </ul>
          </div>

          {/* Strategic Impact */}
          <div className='bg-white w-full rounded-xl p-5 sm:p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-blue-50/50'>
            <div className='flex items-center gap-2 mb-4 text-[#2563EB]'>
              <Target size={22} />

              <h4 className='text-[#1E3A8A] font-bold text-[17px] sm:text-[18px] m-0'>
                Strategic Impact
              </h4>
            </div>

            <ul className='flex flex-col gap-3 m-0 p-0 list-none pl-1'>
              <li className='flex items-start gap-3'>
                <span className='w-[6px] h-[6px] rounded-full bg-[#2563EB] mt-[9px] shrink-0' />

                <span className='text-slate-700 text-[14px] sm:text-[15px]'>
                  Built a single source of truth for sales performance
                </span>
              </li>

              <li className='flex items-start gap-3'>
                <span className='w-[6px] h-[6px] rounded-full bg-[#2563EB] mt-[9px] shrink-0' />

                <span className='text-slate-700 text-[14px] sm:text-[15px]'>
                  Positioned as a data-driven retail organization
                </span>
              </li>

              <li className='flex items-start gap-3'>
                <span className='w-[6px] h-[6px] rounded-full bg-[#2563EB] mt-[9px] shrink-0' />

                <span className='text-slate-700 text-[14px] sm:text-[15px]'>
                  Strengthened leadership decision-making with validated insights
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
