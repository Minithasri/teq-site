import Image from 'next/image';

export default function BusinessImpact() {
  const impacts = [
    {
      icon: '/images/Templates/template5/iii1.svg',
      title: 'Unplanned Downtime',
      before: 'Frequent',
      after: '35% reduced',
      badge: '35% improvement',
    },
    {
      icon: '/images/Templates/template5/iii2.svg',
      title: 'Response Time',
      before: 'Slow manual',
      after: '25% faster',
      badge: '25% faster',
    },
    {
      icon: '/images/Templates/template5/iii3.svg',
      title: 'Spare Part Utilization',
      before: 'Inefficient',
      after: '20% improved',
      badge: '20% improvement',
    },
    {
      icon: '/images/Templates/template5/iii4.svg',
      title: 'Asset Reliability',
      before: 'Inconsistent',
      after: 'Predictable',
      badge: 'Improved MTBF',
    },
  ];

  return (
    <section
      className='w-full py-16 relative overflow-hidden'
      style={{
        background:
          'linear-gradient(180deg, #F6F6F6 0%, #E0EDD8 20%, #CFE5C0 40%, #A9DDA4 50%, #A9DDA4 70%, #F6F6F6 100%)',
        // Note: Adjusted gradient stops slightly for smoother visual flow top-to-bottom based on provided color palette
      }}
    >
      {/* Decorative Background Image - Top Right */}
      <div className='absolute top-0 right-10 lg:right-20 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] pointer-events-none z-20'>
        <Image
          src='/images/Templates/template5/rightimgs.png'
          alt='Growth Background'
          fill
          className='object-contain lg:object-right-top'
        />
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className='flex justify-center mb-6'>
          <div className='inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-sm'>
            <div className='w-5 h-5 relative'>
              <Image
                src='/images/Templates/template5/title.svg'
                alt='Title Icon'
                fill
                className='object-contain'
              />
            </div>
            <span className='font-semibold text-[#4B5563]'>Measurable Results</span>
          </div>
        </div>

        <div className='text-center mb-2'>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530]'>Business Impact</h2>
        </div>
        <p className='text-center text-[#64748B] text-lg mb-16'>
          Quantifiable improvements across all key performance indicators
        </p>

        {/* Impact Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-16'>
          {impacts.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col justify-between h-full'
            >
              <div className='flex items-start gap-4 mb-6'>
                <div
                  className='w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center'
                  style={{ backgroundColor: '#0846AA1A' }}
                >
                  <div className='relative w-6 h-6'>
                    <Image src={item.icon} alt='Icon' fill className='object-contain' />
                  </div>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-[#1D2530] mb-1'>{item.title}</h3>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-4 mb-4'>
                <div>
                  <p className='text-[#64748B] text-sm mb-1'>Before</p>
                  <p className='text-[#1D2530] font-bold text-lg'>{item.before}</p>
                </div>
                <div>
                  <p className='text-[#64748B] text-sm mb-1'>After</p>
                  <p className='text-xl font-bold' style={{ color: '#16A249' }}>
                    {item.after}
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className='mt-2'>
                <span className='inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#E3F9E5] text-[#16A249]'>
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Key Outcomes Box */}
        <div className='bg-white rounded-3xl p-8 lg:p-10 shadow-sm'>
          <h3 className='text-xl font-bold text-[#1D2530] mb-8'>Key Outcomes</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8'>
            <div className='flex items-start gap-3'>
              <div className='mt-1 w-5 h-5 rounded-full border border-[#16A249] flex items-center justify-center flex-shrink-0'>
                <div className='w-2.5 h-1.5 border-l-2 border-b-2 border-[#16A249] -rotate-45 mb-0.5'></div>
              </div>
              <p className='text-[#4B5563] text-lg'>35% reduction in unplanned downtime</p>
            </div>
            <div className='flex items-start gap-3'>
              <div className='mt-1 w-5 h-5 rounded-full border border-[#16A249] flex items-center justify-center flex-shrink-0'>
                <div className='w-2.5 h-1.5 border-l-2 border-b-2 border-[#16A249] -rotate-45 mb-0.5'></div>
              </div>
              <p className='text-[#4B5563] text-lg'>25% faster breakdown response times</p>
            </div>
            <div className='flex items-start gap-3'>
              <div className='mt-1 w-5 h-5 rounded-full border border-[#16A249] flex items-center justify-center flex-shrink-0'>
                <div className='w-2.5 h-1.5 border-l-2 border-b-2 border-[#16A249] -rotate-45 mb-0.5'></div>
              </div>
              <p className='text-[#4B5563] text-lg'>
                20% improvement in spare part utilization & cost control
              </p>
            </div>
            <div className='flex items-start gap-3'>
              <div className='mt-1 w-5 h-5 rounded-full border border-[#16A249] flex items-center justify-center flex-shrink-0'>
                <div className='w-2.5 h-1.5 border-l-2 border-b-2 border-[#16A249] -rotate-45 mb-0.5'></div>
              </div>
              <p className='text-[#4B5563] text-lg'>
                Enhanced asset reliability through predictive scheduling
              </p>
            </div>
            <div className='flex items-start gap-3 md:col-span-2'>
              <div className='mt-1 w-5 h-5 rounded-full border border-[#16A249] flex items-center justify-center flex-shrink-0'>
                <div className='w-2.5 h-1.5 border-l-2 border-b-2 border-[#16A249] -rotate-45 mb-0.5'></div>
              </div>
              <p className='text-[#4B5563] text-lg'>
                Comprehensive downtime visibility enabling data-driven IE reporting
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
