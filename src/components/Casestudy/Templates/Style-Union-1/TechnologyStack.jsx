import React from 'react';

const TechnologyStack = () => {
  return (
    <section className='w-full py-20 bg-white'>
      <div className='max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header with Logos */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-10'>
          <div className='flex items-center gap-4 md:gap-6'>
            <img
              src='/images/Templates/style-union-1/tableau.png'
              alt='Tableau'
              className='h-16 md:h-24 object-contain'
            />
            <img
              src='/images/Templates/style-union-1/Domo.png'
              alt='Domo'
              className='h-12 md:h-16 object-contain'
            />
            {/* Using a placeholder for PowerBI since filename wasn't explicitly shown, but assuming powerbi.png */}
            <img
              src='/images/Templates/style-union-1/google.png'
              alt='Power BI'
              className='h-12 md:h-16 object-contain'
            />
          </div>

          <h2 className='text-[32px] md:text-[40px] font-bold text-[#0F1729]'>Technology Stack</h2>

          <div className='flex items-center gap-4 md:gap-6'>
            <img
              src='/images/Templates/style-union-1/sql.png'
              alt='SQL'
              className='h-12 md:h-14 object-contain'
            />
            <img
              src='/images/Templates/style-union-1/etl.png'
              alt='ETL Tools'
              className='h-12 md:h-16 object-contain'
            />
            <img
              src='/images/Templates/style-union-1/erp.png'
              alt='ERP Systems'
              className='h-16 md:h-20 object-contain'
            />
          </div>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto'>
          {/* Card 1 */}
          <div className='bg-white rounded-[16px] border border-[#E1E7EF] shadow-sm p-6'>
            <h3 className='font-bold text-[24px] text-[#262626] mb-6'>
              Dashboards & Visualization
            </h3>
            <div className='flex flex-wrap gap-3'>
              <span className='bg-[#344256] text-white rounded-full px-3 py-0.5 text-[18px] font-medium'>
                Power BI
              </span>
              <span className='bg-[#344256] text-white rounded-full px-3 py-0.5 text-[18px] font-medium'>
                Tableau
              </span>
              <span className='bg-[#344256] text-white rounded-full px-3 py-0.5 text-[18px] font-medium'>
                Domo
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className='bg-white rounded-[16px] border border-[#E1E7EF] shadow-sm p-6'>
            <h3 className='font-bold text-[24px] text-[#262626] mb-6'>Data Integration</h3>
            <div className='flex flex-wrap gap-3'>
              <span className='bg-[#344256] text-white rounded-full px-3 py-0.5 text-[18px] font-medium'>
                SQL
              </span>
              <span className='bg-[#344256] text-white rounded-full px-3 py-0.5 text-[18px] font-medium'>
                ERP Systems
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className='bg-white rounded-[16px] border border-[#E1E7EF] shadow-sm p-6'>
            <h3 className='font-bold text-[24px] text-[#262626] mb-6'>Automation</h3>
            <div className='flex flex-wrap gap-3'>
              <span className='bg-[#344256] text-white rounded-full px-3 py-0.5 text-[18px] font-medium'>
                ETL Tools
              </span>
              <span className='bg-[#344256] text-white rounded-full px-3 py-0.5 text-[18px] font-medium'>
                Pipeline Automation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
