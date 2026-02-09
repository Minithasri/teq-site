import Image from 'next/image';

export default function CurrentState() {
  const gaps = [
    'Manual logging of downtime and maintenance activities',
    'No unified view of asset health or downtime trends',
    'Reactive maintenance planning with limited preventive control',
    'Lack of real-time alerts or digital work order tracking',
    'Absence of KPIs such as MTTR and MTBF for performance evaluation',
  ];

  return (
    <section className='w-full py-16 bg-[#F6F6F6]'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='ml-12 mb-12'>
          <h2 className='text-[28px] lg:text-[36px] font-bold text-[#1D2530]'>
            Current State & Operational Gaps
          </h2>
        </div>

        {/* Gaps Grid */}
        <div className='flex flex-wrap justify-center gap-6'>
          {gaps.map((gap, index) => {
            // For the last item (5th), we want it centered if it's in a grid logic, but flex wrap center handles it perfectly for 2-2-1 layout if width cards are even.
            // We'll give cards a fixed width or flex-basis to force 2 per row on desktop.
            return (
              <div
                key={index}
                className='bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start gap-4 w-full md:w-[48%] lg:w-[45%]'
              >
                <div className='flex-shrink-0 mt-1'>
                  <Image
                    src='/images/Templates/template5/current.svg'
                    alt='Gap Icon'
                    width={24}
                    height={24}
                  />
                </div>
                <p className='text-[#4B5563] font-medium text-[14px] lg:text-[16px] leading-snug'>
                  {gap}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
