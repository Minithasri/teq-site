import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';

export default function Solution() {
  const capabilities = [
    'Centralized scrap and production data integration',
    'Line-wise, machine-wise, operator-wise tracking',
    'Interactive dashboards with proactive alerts',
    'Correlation between scrap trends and production variables',
  ];

  const solutions = [
    {
      icon: '/images/Templates/template6/icons65.svg',
      title: 'ETL Automation with SSIS',
      description: 'Integrated data from MES, Trace, and manual sources into a unified model',
    },
    {
      icon: '/images/Templates/template6/icons66.svg',
      title: 'Centralized SQL Repository',
      description: 'Standardized data tables for production, rework, and scrap classification',
    },
    {
      icon: '/images/Templates/template6/icons67.svg',
      title: 'Dynamic Tableau Dashboards',
      description: 'Visualized trends by line, machine, operator, and product type',
    },
    {
      icon: '/images/Templates/template6/icons68.svg',
      title: 'Automated Ratio Calculation',
      description: 'Real-time computation by shift, line, and product',
    },
    {
      icon: '/images/Templates/template6/icons69.svg',
      title: 'Root Cause Correlation',
      description: 'Identified defect contributors through linkage with production variables',
    },
    {
      icon: '/images/Templates/template6/icons65.svg', // Reusing icon 65
      title: 'Automated Refresh & Alerts',
      description: 'Daily data synchronization and deviation-based alerting',
    },
  ];

  return (
    <section className='w-full py-16 bg-white'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-12 relative'>
          {/* Decorative Left Image */}
          <div className='absolute left-0 lg:left-[-10px] -top-52 w-[350px] h-[350px] hidden lg:block pointer-events-none'>
            <Image
              src='/images/Templates/template6/leftimg.svg'
              alt='Solution Left Decor'
              fill
              className='object-contain'
            />
          </div>

          <h2 className='text-3xl lg:text-4xl font-bold text-[#1D2530] mb-4'>The Solution</h2>
          <p className='text-[#64748B] text-lg lg:text-xl max-w-4xl mx-auto'>
            An Automated Scrap Percentage Tracking System integrating ETL automation, SQL Server,
            and Tableau Dashboards for unified visibility.
          </p>
        </div>

        {/* Key Capabilities Box (Blue Gradient) */}
        <div
          className='rounded-2xl p-8 lg:p-12 mb-16 shadow-lg text-white'
          style={{
            background: 'linear-gradient(90deg, #0846AA 0%, #0B64F4 100%)',
          }}
        >
          <h3 className='text-2xl font-bold mb-8'>Key Capabilities</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8'>
            {capabilities.map((cap, index) => (
              <div key={index} className='flex items-start gap-3'>
                <FiCheckCircle className='w-6 h-6 text-white flex-shrink-0 mt-0.5' />
                <p className='text-white/90 text-lg'>{cap}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {solutions.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 border-2 border-[#F5F5F5] shadow-[0px_8px_22px_rgba(0,0,0,0.08)] flex flex-col items-start'
            >
              <div className='w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-[#0846AA]/60'>
                <div className='relative w-6 h-6'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className='object-contain brightness-0 invert'
                  />
                </div>
              </div>
              <h3 className='text-lg font-bold text-[#0F1729]/80 mb-2'>{item.title}</h3>
              <p className='text-[#64748B]'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
