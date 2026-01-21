import Image from 'next/image';

const Overview = () => {
  return (
    <section className='w-full py-16 px-4 md:px-12 lg:px-20 relative overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/template9/overview9.png'
          alt='Overview Background'
          fill
          className='object-cover'
        />
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Left Content Card */}
        <div className='relative z-20 max-w-4xl'>
          <div className='mb-8'>
            <h2 className='text-4xl font-bold text-[#1F1F1F] mb-4'>Overview</h2>
            <div
              className='h-1 w-24 rounded-full ml-8'
              style={{ background: 'linear-gradient(90deg, #F97415 0%, #FAA52E 100%)' }}
            ></div>
          </div>

          <div className='bg-white rounded-[20px] p-8 md:p-10 shadow-xl border border-gray-100'>
            <p className='text-[#505050] text-[16px] leading-relaxed mb-6'>
              The Smart Maintenance Management Solution modernizes the traditional maintenance
              process in the manufacturing industry using the Microsoft Power Platform. It replaces
              manual, paper-based workflows with an integrated digital system that enhances
              visibility, accountability, and decision-making across all maintenance operations.
            </p>

            <div className='w-full h-[2px] bg-gray-100 mb-6'></div>

            <p className='text-[#505050] text-[16px] leading-relaxed mb-6'>
              The solution brings together modules for{' '}
              <span className='font-bold text-gray-900'>Breakdown Management</span>,{' '}
              <span className='font-bold text-gray-900'>Maintenance Scheduling</span>,{' '}
              <span className='font-bold text-gray-900'>Spare</span>,{' '}
              <span className='font-bold text-gray-900'>Vendor and Part Tracking</span>, AMC
              Management, and Obsolete Item Handling, all powered by real-time analytics through
              Power BI dashboards.
            </p>

            <div className='w-full h-[2px] bg-gray-100 mb-6'></div>

            <p className='text-[#505050] text-[16px] leading-relaxed'>
              By leveraging historical maintenance data and performance trends, the system helps
              manufacturing units transition from reactive maintenance to{' '}
              <span className='font-bold' style={{ color: '#F97415' }}>
                predictive and preventive maintenance practices
              </span>
              , driving operational efficiency and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
