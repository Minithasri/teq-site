'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function CurrentStateMetrics() {
  const tableData = [
    { metric: 'Sales Reporting', before: 'Weekly', after: 'Real-time' },
    { metric: 'Data Accuracy', before: 'Inconsistent', after: 'Standardized' },
    { metric: 'Decision-Making', before: 'Delayed', after: 'Immediate' },
    {
      metric: 'Sales Insights',
      before: 'Limited',
      after: 'Detailed & Actionable',
    },
  ];

  return (
    <section className="relative w-full font-['Poppins'] py-14 md:py-16 px-4 md:px-8 overflow-hidden flex flex-col items-center justify-start">
      {/* Background */}
      <div className='absolute inset-0 z-0 opacity-90'>
        <Image
          src='/images/Templates/templatez/titan22/currentstate.png'
          alt='Background Visual Architecture'
          fill
          priority
          className='object-cover object-top'
        />
      </div>

      <div className='relative z-10 w-full max-w-[1152px] mx-auto flex flex-col items-center'>
        {/* Header */}
        <div className='text-center mb-8 md:mb-10'>
          <h2 className='font-bold text-[28px] sm:text-[34px] leading-[120%] text-white mb-3'>
            Current State Metrics
          </h2>

          <p className='font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[160%] text-white/80'>
            Before our solution was implemented
          </p>
        </div>

        {/* Desktop Table */}
        <div className='w-full overflow-x-auto bg-white rounded-[12px] border border-[#DADFE7] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] mb-6'>
          <table className='w-full min-w-[700px] text-left border-collapse'>
            <thead>
              <tr className='border-b border-[#DADFE7] bg-slate-50/50'>
                <th className='py-4 px-6 lg:px-8 font-bold text-[18px] lg:text-[22px] text-[#1D2530] w-[35%]'>
                  Metric
                </th>

                <th className='py-4 px-6 lg:px-8 font-bold text-[18px] lg:text-[22px] text-[#1D2530] w-[35%]'>
                  Before
                </th>

                <th className='py-4 px-6 lg:px-8 font-bold text-[18px] lg:text-[22px] text-[#1D2530] w-[30%]'>
                  After
                </th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className='border-b border-[#00000014] last:border-b-0'>
                  {/* Metric */}
                  <td className='py-5 px-6 lg:px-8 font-normal text-[16px] lg:text-[18px] text-[#1D2530]'>
                    {row.metric}
                  </td>

                  {/* Before */}
                  <td className='py-5 px-6 lg:px-8 font-medium text-[16px] lg:text-[18px] text-[#F92020]'>
                    <div className='flex items-center justify-between max-w-[350px]'>
                      <span>{row.before}</span>

                      <ArrowRight size={20} className='text-[#F92020] stroke-[2.5] pl-1' />
                    </div>
                  </td>

                  {/* After */}
                  <td className='py-5 px-6 lg:px-8'>
                    <div className='inline-block w-full max-w-[240px] px-4 py-2 bg-[#0FEB2D] bg-opacity-40 rounded-full text-start font-medium text-[16px] lg:text-[18px] text-[#068A11]'>
                      {row.after}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className='hidden sm:flex md:hidden w-full flex-col gap-4 mb-6'>
          {tableData.map((row, index) => (
            <div
              key={index}
              className='bg-white rounded-[12px] border border-[#DADFE7] p-5 shadow-[0px_4px_10px_rgba(0,0,0,0.08)]'
            >
              <h3 className='font-bold text-[18px] text-[#1D2530] mb-4'>{row.metric}</h3>

              <div className='flex items-center justify-between gap-3 mb-4'>
                <div>
                  <p className='text-[13px] text-[#7B899D] mb-1'>Before</p>

                  <p className='font-medium text-[16px] text-[#F92020]'>{row.before}</p>
                </div>

                <ArrowRight size={20} className='text-[#F92020] shrink-0' />

                <div>
                  <p className='text-[13px] text-[#7B899D] mb-1'>After</p>

                  <div className='px-3 py-2 bg-[#0FEB2D]/40 rounded-full text-[14px] font-medium text-[#068A11] whitespace-nowrap'>
                    {row.after}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 w-full mt-2'>
          {/* Card 1 */}
          <div className='bg-white rounded-[12px] border border-[#DADFE7] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] min-h-[114px] flex flex-col items-center justify-center px-4 py-5 text-center'>
            <span className='text-[15px] md:text-[16px] text-[#000000] font-normal mb-1'>
              Reporting Cycle
            </span>

            <h4 className='text-[18px] md:text-[20px] font-bold text-[#1D2530] leading-[140%]'>
              Weekly <span className='mx-1 text-[#000000] font-bold'>→</span> Real-time
            </h4>
          </div>

          {/* Card 2 */}
          <div className='bg-white rounded-[12px] border border-[#DADFE7] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] min-h-[114px] flex flex-col items-center justify-center px-4 py-5 text-center'>
            <span className='text-[15px] md:text-[16px] text-[#000000] font-normal mb-1'>
              Excel-Based Reporting
            </span>

            <h4 className='text-[18px] md:text-[20px] font-bold text-[#F92020] leading-[140%]'>
              High Dependency
            </h4>
          </div>

          {/* Card 3 */}
          <div className='bg-white rounded-[12px] border border-[#DADFE7] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] min-h-[114px] flex flex-col items-center justify-center px-4 py-5 text-center sm:col-span-2 lg:col-span-1'>
            <span className='text-[15px] md:text-[16px] text-[#000000] font-normal mb-1'>
              Data Integration
            </span>

            <h4 className='text-[18px] md:text-[20px] font-bold text-[#F92020] leading-[140%]'>
              No Integration
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
