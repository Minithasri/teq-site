import Image from 'next/image';

export default function Problem() {
  return (
    <section className='w-full py-16 bg-[#F6F6F6] relative overflow-hidden'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Floating Bulbs - Positioned independently */}
        {/* Faint Bulb */}
        <div className='absolute top-2 right-20 lg:right-56 w-32 h-32 opacity-60 hidden md:block'>
          <Image
            src='/images/Templates/template5/4bulb1.webp'
            alt='Idea'
            fill
            className='object-contain'
          />
        </div>
        {/* Colored Bulb */}
        <div className='absolute top-6 right-0 lg:right-10 w-52 h-52 hidden md:block z-30'>
          <Image
            src='/images/Templates/template5/4bulb2.webp'
            alt='Idea'
            fill
            className='object-contain'
          />
        </div>

        {/* Header Content */}
        <div className='mb-12'>
          <div className='flex items-center gap-4 mb-2'>
            <div className='w-12 h-12 relative flex-shrink-0'>
              <Image
                src='/images/Templates/template5/4icons1.svg'
                alt='Problem Icon'
                fill
                className='object-contain'
              />
            </div>
            <h2 className='text-[28px] lg:text-[36px] font-bold text-[#1D2530]'>
              Problem Statement
            </h2>
          </div>
          <p className='text-[#64748B] text-[16px] lg:text-[18px] ml-16'>
            Manual Tracking and Poor Downtime Visibility
          </p>
        </div>

        {/* Main Content Card */}
        <div className='bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 relative z-20'>
          <p className='text-[#4B5563] text-[16px] leading-relaxed mb-10'>
            An electronics manufacturing enterprise specializing in mobile phones, relied on manual
            logs and spreadsheets for maintenance operations, resulting in missed preventive
            schedules, delayed breakdown responses, and limited visibility into equipment downtime
            causes.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-12'>
            <div className='flex items-start gap-3'>
              <span className='w-2 h-2 rounded-full bg-[#CA3E29] mt-2.5 flex-shrink-0'></span>
              <p className='text-[#CA3E29] font-medium text-[16px]'>
                Preventive maintenance schedules were often missed
              </p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='w-2 h-2 rounded-full bg-[#CA3E29] mt-2.5 flex-shrink-0'></span>
              <p className='text-[#CA3E29] font-medium text-[16px]'>
                Breakdown resolution times were inconsistent and slow
              </p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='w-2 h-2 rounded-full bg-[#CA3E29] mt-2.5 flex-shrink-0'></span>
              <p className='text-[#CA3E29] font-medium text-[16px]'>
                Downtime data lacked accuracy and traceability
              </p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='w-2 h-2 rounded-full bg-[#CA3E29] mt-2.5 flex-shrink-0'></span>
              <p className='text-[#CA3E29] font-medium text-[16px]'>
                Maintenance cost tracking was manual and error-prone
              </p>
            </div>
          </div>

          {/* Result Box */}
          <div className='bg-[#EF43430D] rounded-xl p-6 border-l-4 border-[#EF4444]'>
            <p className='text-[#1F2937] font-medium text-[16px]'>
              <span className='font-bold text-[#1D2530]'>Result:</span> Prolonged equipment
              downtime, reduced reliability, and higher maintenance expenses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
