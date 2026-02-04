import Image from 'next/image';

export default function Problem() {
  const problems = [
    {
      icon: '/images/Templates/template8/ticon1.svg',
      text: 'Difficulty tracking tools across departments and production lines',
    },
    {
      icon: '/images/Templates/template8/ticon2.svg',
      text: 'Manual data entry leading to delays, inaccuracies, and poor accountability',
    },
    {
      icon: '/images/Templates/template8/ticon3.svg',
      text: 'Limited visibility into tool lifecycle, maintenance history, and utilization metrics',
    },
    {
      icon: '/images/Templates/template8/ticon4.svg',
      text: 'Dependence on legacy systems with no integration or analytics capabilities',
    },
    {
      icon: '/images/Templates/template8/ticon5.svg',
      text: 'Lack of a centralized data repository and digital traceability',
    },
    {
      icon: '/images/Templates/template8/ticon6.svg',
      text: 'Unplanned downtime, maintenance delays, and suboptimal resource utilization',
    },
  ];

  return (
    <section className='w-full'>
      {/* Top Section: Header with Solid Background */}
      <div
        className='w-full py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center'
        style={{ background: '#F6F6F6' }}
      >
        <div className='max-w-4xl mx-auto mb-12 lg:mb-20'>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530] mb-4'>Problem Statement</h2>
          <p className='text-xl text-[#64748B] font-medium mb-6'>
            Manual, Fragmented Tool Lifecycle Management
          </p>
          <p className='text-[#64748B] text-lg leading-relaxed'>
            The client managed its manufacturing tool data using manual registers, Excel sheets, and
            disconnected systems. This led to significant inefficiencies in tracking, maintenance,
            and utilization.
          </p>
        </div>
      </div>

      {/* Bottom Section: Image Background with Overlapping Content */}
      <div className='relative w-full pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8'>
        {/* Background Image and Overlay */}
        <div className='absolute top-20 inset-0 z-0'>
          <Image
            src='/images/Templates/template8/laptop.webp'
            alt='Background'
            fill
            className='object-cover'
          />
          {/* Blue/Purple Overlay to match the reference image tone */}
          <div className='absolute inset-0 bg-[#2e1d5ba6] mix-blend-multiply'></div>
        </div>

        <div className='max-w-7xl mx-auto relative z-10'>
          {/* Problem Cards Grid - Negative Margin for Overlap */}
          <div className='-mt-20 lg:-mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20'>
            {problems.map((problem, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow'
              >
                <div className='flex items-start gap-4'>
                  <div
                    className='shrink-0 w-10 h-10 rounded-xl flex items-center justify-center'
                    style={{ backgroundColor: '#EF4444' }}
                  >
                    <div className='relative w-5 h-5'>
                      <Image
                        src={problem.icon}
                        alt={`Problem ${index + 1}`}
                        fill
                        className='object-contain brightness-0 invert'
                      />
                    </div>
                  </div>
                  <p className='text-[#1D2530] text-sm lg:text-base leading-relaxed font-medium'>
                    {problem.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Our Solution Section */}
          <div className='text-center'>
            <h3 className='text-3xl lg:text-4xl font-bold text-white mb-8 drop-shadow-md'>
              Our Solution
            </h3>
            <div
              className='rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto shadow-2xl'
              style={{ backgroundColor: '#B4F5ED' }}
            >
              <p className='text-[#1D2530] text-lg lg:text-xl leading-relaxed font-semibold'>
                We implemented a Tool Management Solution leveraging the Microsoft Power Platform to
                digitize and optimize the complete tool lifecycle — from issuance to maintenance and
                retirement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
