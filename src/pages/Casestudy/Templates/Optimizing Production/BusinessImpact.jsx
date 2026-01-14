import Image from 'next/image';

export default function BusinessImpact() {
  const impacts = [
    {
      icon: '/images/Templates/template6/b1.svg',
      title: 'Scrap Rate',
      before: 'High, inconsistent',
      after: '25% reduction',
      afterColor: 'text-[#16A249]',
    },
    {
      icon: '/images/Templates/template6/b2.svg',
      title: 'Data Accuracy',
      before: 'Manual, error-prone',
      after: '100% accuracy',
      afterColor: 'text-[#0846AA]',
    },
    {
      icon: '/images/Templates/template6/b3.svg',
      title: 'RCA Turnaround',
      before: '>2 days',
      after: '40% faster',
      afterColor: 'text-[#F99E1F]',
    },
    {
      icon: '/images/Templates/template6/b4.svg',
      title: 'Yield Visibility',
      before: 'Limited',
      after: 'Real-time tracking',
      afterColor: 'text-[#0846AA]',
    },
    {
      icon: '/images/Templates/template6/b5.svg',
      title: 'Reporting Efficiency',
      before: 'Manual',
      after: 'Automated',
      afterColor: 'text-[#16A249]',
    },
  ];

  const outcomes = [
    '25% reduction in scrap rate through real-time monitoring and targeted interventions',
    '100% data accuracy via automated ETL workflows',
    '40% faster root-cause identification',
    'Improved yield visibility linking production output to scrap generation',
    'Enhanced managerial decision-making through shift-wise and product-wise insights',
  ];

  return (
    <section className='w-full pt-12 pb-20 bg-[#E0FFEB] relative'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Top Overlapping Images */}
        <div className='relative w-full max-w-4xl mx-auto h-[300px] lg:h-[400px] mb-12'>
          {/* Back Image */}
          <div className='absolute -top-28 left-1/2 -translate-x-1/2 w-3/4 h-3/4 drop-shadow-xl z-20'>
            <Image
              src='/images/Templates/template6/center1.png'
              alt='Dashboard Detail'
              fill
              className='object-cover rounded-xl'
            />
          </div>
          {/* Front Image */}
          <div className='absolute bottom-20 left-1/2 -translate-x-[40%] translate-y-10 w-3/4 h-3/4 drop-shadow-2xl z-30'>
            <Image
              src='/images/Templates/template6/center2.png'
              alt='Dashboard Main'
              fill
              className='object-cover rounded-xl'
            />
          </div>
        </div>

        {/* Header */}
        <div className='text-center mb-16 mt-20'>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530] mb-4'>Business Impact</h2>
          <p className='text-[#64748B] text-lg lg:text-xl'>
            Measurable improvements across key operational metrics
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
          {impacts.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between'
            >
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-8 h-8 relative'>
                  <Image src={item.icon} alt={item.title} fill className='object-contain' />
                </div>
                <h3 className='text-lg font-bold text-[#1D2530]'>{item.title}</h3>
              </div>
              <div className='space-y-2'>
                <p className='text-sm text-[#64748B]'>
                  Before: <span className='text-[#EF4444] font-medium'>{item.before}</span>
                </p>
                <p className='text-sm text-[#64748B]'>
                  After: <span className={`font-bold ${item.afterColor}`}>{item.after}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Outcomes Box */}
        <div
          className='relative bg-[#D4F5E2] rounded-3xl p-8 lg:p-12 border-2 shadow-lg'
          style={{ borderColor: '#DAE0E7' }}
        >
          <h3 className='text-2xl font-bold text-[#1D2530] mb-8 relative z-10'>Key Outcomes</h3>
          <div className='relative z-10 grid grid-cols-1 gap-6 max-w-3xl'>
            {outcomes.map((outcome, i) => (
              <div key={i} className='flex items-start gap-4'>
                <div className='w-8 h-8 rounded-full bg-[#10B981] text-white font-bold flex items-center justify-center flex-shrink-0 mt-0.5'>
                  {i + 1}
                </div>
                <p className='text-[#374151] text-lg leading-relaxed'>{outcome}</p>
              </div>
            ))}
          </div>

          {/* Decorative Chart Image - Positioned Bottom Right */}
          <div className='absolute bottom-72 -right-20 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] pointer-events-none z-30'>
            <Image
              src='/images/Templates/template6/high.svg'
              alt='Impact Graph'
              fill
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
