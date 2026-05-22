import Image from 'next/image';

export default function Business() {
  const businessImpacts = [
    {
      metric: 'Information Retrieval Time',
      before: 'Manual keyword search',
      after: '70% faster retrieval',
    },
    {
      metric: 'Document Review Time',
      before: 'Time-intensive',
      after: '50% reduction',
    },
    {
      metric: 'Search Accuracy',
      before: 'Context-agnostic',
      after: '60% improvement',
    },
    {
      metric: 'Monitoring & Insights',
      before: 'Limited',
      after: 'Real-time via Azure Monitor',
    },
    {
      metric: 'Security & Compliance',
      before: 'Fragmented controls',
      after: 'Centralized Azure-native governance',
    },
  ];

  return (
    <section className='w-full pt-12 px-4 md:px-8 relative overflow-visible'>
      {/* Background Image */}
      <div className='absolute top-0 left-0 right-0 -bottom-72 z-0'>
        <Image
          src='/images/Templates/template10/busbg.svg'
          alt='Background'
          fill
          className='object-cover'
        />
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header Section */}
        <div className='flex items-center justify-center mb-16'>
          <div>
            <div className='flex items-center gap-3 mb-2 justify-center text-center'>
              <Image
                src='/images/Templates/template10/bustitle.svg'
                alt='Business Impact Icon'
                width={32}
                height={32}
              />
              <h2 className='text-3xl font-bold text-[#1D2530]'>Business Impact</h2>
            </div>
            <p className='text-gray-500 text-lg'>
              Measurable improvements across key operational metrics
            </p>
          </div>
          {/* Right Side Top Image */}
          <div className='hidden md:block -top-36 -right-20 absolute'>
            <Image
              src='/images/Templates/template10/busbar.svg'
              alt='Chart'
              width={300}
              height={150}
              className='drop-shadow-lg'
            />
          </div>
        </div>

        {/* Impact Table/List */}
        <div className='space-y-4'>
          {/* Table Header */}
          <div className='grid grid-cols-1 md:grid-cols-12 gap-6 px-8 mb-2'>
            <div className='md:col-span-4'>
              <span className='font-bold text-lg text-[#65758B]'>Metric</span>
            </div>
            <div className='md:col-span-4'>
              <span className='font-bold text-lg text-[#E11616]'>Before</span>
            </div>
            <div className='md:col-span-4'>
              <span className='font-bold text-lg text-[#21C45D]'>After</span>
            </div>
          </div>

          {/* Rows */}
          {businessImpacts.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)] grid grid-cols-1 md:grid-cols-12 gap-6 items-center'
            >
              {/* Metric */}
              <div className='md:col-span-4 font-bold text-[#1D2530] text-lg'>{item.metric}</div>

              {/* Before */}
              <div className='md:col-span-4 text-[#65758B]'>{item.before}</div>

              {/* After */}
              <div className='md:col-span-4 flex items-center gap-3 font-bold text-[#21C45D]'>
                <Image
                  src='/images/Templates/template10/SVG.svg'
                  alt='Arrow'
                  width={20}
                  height={20}
                />
                {item.after}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
