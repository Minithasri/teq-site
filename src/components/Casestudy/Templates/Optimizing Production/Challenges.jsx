import Image from 'next/image';

export default function Challenges() {
  const challenges = [
    {
      icon: '/images/Templates/template6/icons61.svg',
      title: 'Manual Data Collection',
      description: 'Inconsistent data gathering across production lines and assembly stages',
    },
    {
      icon: '/images/Templates/template6/icons62.svg',
      title: 'No Standardization',
      description: 'Lack of unified scrap classification and reporting protocols',
    },
    {
      icon: '/images/Templates/template6/icons63.svg',
      title: 'Limited Visibility',
      description: 'Difficulty correlating scrap percentage with production output',
    },
    {
      icon: '/images/Templates/template6/icons64.svg',
      title: 'Delayed Analysis',
      description: 'No real-time alerts leading to reactive interventions',
    },
  ];

  return (
    <section className='w-full py-16 bg-white'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530] mb-4'>The Challenge</h2>
          <p className='text-[#64748B] text-lg lg:text-xl max-w-4xl mx-auto'>
            A leading phone manufacturer struggled with tracking and reducing scrap generation
            across multiple production lines without centralized visibility.
          </p>
        </div>

        {/* Challenge Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
          {challenges.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 shadow-sm border border-gray-100 ring-1 ring-gray-100/50 flex items-start gap-4 relative z-20'
            >
              <div
                className='w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0'
                style={{ backgroundColor: '#F42121D9' }}
              >
                <div className='relative w-6 h-6'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className='object-contain brightness-0 invert'
                  />
                </div>
              </div>
              <div>
                <h3 className='text-xl font-bold text-[#1D2530] mb-2'>{item.title}</h3>
                <p className='text-[#64748B]'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Impact & Image */}
        <div className='relative'>
          {/* Impact Box */}
          <div className='w-full lg:w-[60%] bg-white rounded-xl p-8 shadow-sm border border-gray-100 ring-1 ring-gray-100/50 relative z-10'>
            <h3 className='text-xl font-bold text-[#1D2530] mb-6'>Impact on Operations</h3>
            <ul className='space-y-4'>
              {[
                'Higher material wastage and production costs',
                'Inaccurate reporting and delayed insights',
                'Reduced production efficiency',
                'Scattered data sources hampering root-cause analysis',
              ].map((impact, i) => (
                <li key={i} className='flex items-start gap-3'>
                  <span className='w-1.5 h-1.5 rounded-full bg-[#EF4444] mt-2.5 flex-shrink-0'></span>
                  <p className='text-[#4B5563] text-lg'>{impact}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image - Absolutely Positioned */}
          <div className='absolute -top-44 -right-44 w-[400px] h-[500px] lg:w-[600px] lg:h-[700px] z-10'>
            <Image
              src='/images/Templates/template6/mobile.png'
              alt='Scrap Pile'
              fill
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
