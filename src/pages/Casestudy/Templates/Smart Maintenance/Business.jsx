import Image from 'next/image';

const challenges = [
  {
    icon: '/images/Templates/template9/bu1.svg',
    title: 'Unplanned Downtimes',
    description: 'Frequent unplanned downtimes and delays in issue resolution',
  },
  {
    icon: '/images/Templates/template9/bu2.svg',
    title: 'Limited Insights',
    description: 'Limited insights into machine performance & maintenance history',
  },
  {
    icon: '/images/Templates/template9/bu3.svg',
    title: 'Inefficient Management',
    description: 'Inefficient spare part management and vendor coordination',
  },
  {
    icon: '/images/Templates/template9/bu4.svg',
    title: 'Poor Visibility',
    description: 'Poor visibility into AMC compliance and obsolete item handling',
  },
  {
    icon: '/images/Templates/template9/bu5.svg',
    title: 'No Predictive Analysis',
    description: 'Inability to analyze trends or predict recurring equipment failures',
  },
];

const Business = () => {
  return (
    <section className='py-16 md:py-20 px-4 md:px-12 bg-[#F6F6F6] overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-4'>Business Challenge</h2>
          <div className='h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-[#F97415] to-[#FAA52E]'></div>
          <p className='text-[#505050] mt-6 max-w-3xl mx-auto text-base md:text-lg leading-relaxed'>
            Manufacturing operations often rely on disconnected systems and manual tracking methods,
            leading to critical operational gaps
          </p>
        </div>

        {/* Challenges Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 mb-16'>
          {challenges.slice(0, 3).map((challenge, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start gap-4'
            >
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-r from-[#F91515] to-[#FAA52E]'>
                  <Image
                    src={challenge.icon}
                    alt={challenge.title}
                    width={24}
                    height={24}
                    className='object-contain brightness-0 invert'
                  />
                </div>
                <h3 className='font-bold text-lg text-[#1F1F1F]'>{challenge.title}</h3>
              </div>
              <p className='text-[#505050] text-sm leading-relaxed'>{challenge.description}</p>
            </div>
          ))}
          {/* Centering the last two items on large screens */}
          <div className='lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:max-w-4xl lg:mx-auto gap-6 w-full'>
            {challenges.slice(3, 5).map((challenge, index) => (
              <div
                key={index + 3}
                className='bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start gap-4'
              >
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-r from-[#F91515] to-[#FAA52E]'>
                    <Image
                      src={challenge.icon}
                      alt={challenge.title}
                      width={24}
                      height={24}
                      className='object-contain brightness-0 invert'
                    />
                  </div>
                  <h3 className='font-bold text-lg text-[#1F1F1F]'>{challenge.title}</h3>
                </div>
                <p className='text-[#505050] text-sm leading-relaxed'>{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Card Section */}
        <div className='relative mt-12'>
          {/* Car Image - Positioned absolutely to overlap */}
          <div className='absolute -top-36 -right-20 z-20 w-[300px] md:w-[400px]'>
            <Image
              src='/images/Templates/template9/car.svg'
              alt='Car illustration'
              width={400}
              height={200}
              className='object-contain'
            />
          </div>

          {/* Bottom Info Card */}
          <div className='w-full bg-[#EF43430D] border border-[#EF434333] rounded-2xl p-8 md:p-10 relative z-10'>
            <p className='text-[#1F1F1F] text-base md:text-lg leading-relaxed text-center max-w-5xl mx-auto'>
              These gaps resulted in{' '}
              <span className='font-bold'>
                inconsistent maintenance, higher costs, and low asset reliability
              </span>
              . A centralized digital platform was needed to enable real-time tracking, predictive
              insights, and preventive planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
