import Image from 'next/image';

export default function Problem() {
  const problemCards = [
    {
      title: 'Ineffective Search',
      description: 'Keyword-based search incapable of semantic understanding',
      icon: '/images/Templates/template10/icon2.svg',
    },
    {
      title: 'High Manual Effort',
      description: 'Time-consuming reviews leading to delays and inconsistency',
      icon: '/images/Templates/template10/icon3.svg',
    },
    {
      title: 'Fragmented Data',
      description: 'Lacking centralized access and integration across sources',
      icon: '/images/Templates/template10/icon4.svg',
    },
  ];

  const currentStateGaps = [
    'Document repositories fragmented across multiple sources',
    'Keyword-based search with no contextual understanding',
    'Manual data ingestion and content extraction',
    'Lack of unified access and centralized retrieval system',
    'Limited visibility into usage, access, and performance metrics',
    'Security compliance risks due to non-uniform governance',
  ];

  return (
    <section className='w-full py-12 px-4 sm:px-6 lg:px-8' style={{ backgroundColor: '#F6F6F6' }}>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='flex items-center gap-3 mb-6 text-center justify-center'>
          <Image
            src='/images/Templates/template10/icon1.svg'
            alt='Problem'
            width={32}
            height={32}
            className='w-8 h-8'
          />
          <h2 className='text-3xl font-bold text-gray-900'>Problem Statement</h2>
        </div>

        <p className='text-gray-600 text-lg mb-12 max-w-5xl leading-relaxed mx-auto text-center'>
          A leading manufacturing enterprise managed over{' '}
          <span className='text-[#0073E6] font-bold'>80,000+ documents</span> in multiple
          formats—PDFs, Word, Excel, and image-based records. However, retrieving accurate,
          context-aware information was time-consuming and inconsistent.
        </p>

        {/* Top Cards Row */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
          {problemCards.map((card, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)] relative min-h-[140px]'
            >
              <div className='pr-12'>
                <h3 className='font-bold text-gray-900 text-lg mb-2'>{card.title}</h3>
                <p className='text-gray-500 text-sm leading-snug'>{card.description}</p>
              </div>
              <div className='absolute top-6 right-6'>
                <Image src={card.icon} alt={card.title} width={32} height={32} />
              </div>
            </div>
          ))}
        </div>

        {/* Business Impact Card */}
        <div
          className='rounded-2xl p-8 md:p-12 relative flex flex-col md:flex-row items-center overflow-visible mb-24'
          style={{
            backgroundColor: '#EF43430D',
            borderColor: '#EF434333',
            borderWidth: '1px',
            borderStyle: 'solid',
          }}
        >
          <div className='w-full md:w-1/2 z-10'>
            <h3 className='text-2xl font-bold text-gray-900 mb-6'>Business Impact</h3>
            <ul className='space-y-4'>
              {[
                'Employees spent excessive time locating the right information',
                'Decision-making was delayed and inconsistent',
                'Productivity and efficiency were negatively impacted',
              ].map((item, idx) => (
                <li key={idx} className='flex items-center gap-3 text-gray-700'>
                  <span className='w-1.5 h-1.5 rounded-full bg-red-500 shrink-0' />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Decorative Motor Image */}
          <div className='absolute -right-20 top-8 w-[740px] h-[360px] z-10'>
            <Image
              src='/images/Templates/template10/motor.png'
              alt='Motor Components'
              fill
              className='object-contain drop-shadow-[0_10px_30px_#00000040]'
            />
          </div>
        </div>

        {/* Current State & Operational Gaps */}
        <div className='mt-20'>
          <h2 className='text-3xl font-bold text-gray-900 mb-2 text-center'>
            Current State & Operational Gaps
          </h2>
          <p className='text-gray-500 text-lg mb-10 text-center'>
            Analysis revealed critical inefficiencies in the existing knowledge management system
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {currentStateGaps.map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)]'
              >
                <div className='shrink-0'>
                  <Image
                    src='/images/Templates/template10/icons.svg'
                    alt='Error Icon'
                    width={20}
                    height={20}
                  />
                </div>
                <span className='text-gray-700 text-sm md:text-base font-medium'>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
