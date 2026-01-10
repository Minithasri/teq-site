'use client';
import { domoData } from '@/data/partners/domo';
import Image from 'next/image';

export default function DomoDashboard() {
  return (
    <section className='py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30'>
      <div className='container mx-auto px-4'>
        <div className='max-w-7xl mx-auto'>
          {/* Header Section */}
          <div className='text-center mb-16'>
            <h2
              className='text-[24px] md:text-[32px] lg:text-[40px] font-bold mb-6 leading-tight text-transparent bg-clip-text'
              style={{ backgroundImage: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)' }}
            >
              <span className='text-[#404040]'>Powerful </span>Domo Dashboards
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-sm'>
              Explore our collection of interactive dashboards designed to transform your data into
              actionable insights. From business intelligence to operational analytics, Domo
              delivers powerful visualization tools.
            </p>
          </div>

          {/* Dashboard Images Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {domoData.dashboardData.map((dashboard, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden'
              >
                {/* Image Container */}
                <div className='relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden'>
                  {/* Placeholder for image - replace with actual Image component */}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='text-center p-6'>
                      <div className='w-16 h-16 bg-gradient-to-r from-[#662B8C] to-[#4988BF] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg'>
                        <svg
                          className='w-8 h-8 text-white'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                          />
                        </svg>
                      </div>
                      <p className='text-gray-700 font-semibold text-xl mb-2'>{dashboard.title}</p>
                      <p className='text-gray-500'>Dashboard Preview</p>

                      {/* Mock Dashboard Elements */}
                      <div className='mt-4 grid grid-cols-2 gap-2 max-w-xs mx-auto'>
                        <div className='h-3 bg-[#662B8C] rounded'></div>
                        <div className='h-3 bg-[#4988BF] rounded'></div>
                        <div className='h-3 bg-[#F28963] rounded'></div>
                        <div className='h-3 bg-[#F27166] rounded'></div>
                        <div className='h-3 bg-[#673091] rounded col-span-2'></div>
                      </div>
                    </div>
                  </div>

                  {/* Actual Image Component (commented out for now) */}
                  <Image
                    src={dashboard.src}
                    alt={dashboard.title}
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw'
                  />
                </div>

                {/* Content */}
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-[#662B8C] mb-2'>{dashboard.title}</h3>
                  <p className='text-gray-600 leading-relaxed'>{dashboard.description}</p>

                  {/* Features */}
                  <div className='flex flex-wrap gap-2 mt-4'>
                    <span className='bg-[#662B8C]/10 text-[#662B8C] px-2 py-1 rounded text-xs font-medium'>
                      Real-time
                    </span>
                    <span className='bg-[#4988BF]/10 text-[#4988BF] px-2 py-1 rounded text-xs font-medium'>
                      Interactive
                    </span>
                    <span className='bg-[#F28963]/10 text-[#F28963] px-2 py-1 rounded text-xs font-medium'>
                      Customizable
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className='text-center mt-12'>
            <div className='bg-gradient-to-r from-[#662B8C] to-[#4988BF] rounded-2xl p-8 text-white shadow-xl'>
              <h3 className='text-[28px] font-medium mb-4'>
                Want to gain actionable insights from your data?
              </h3>
              <p className='text-white/90 mb-6 max-w-2xl mx-auto'>
                Empower your business & drive success with our advanced BI and analytics solutions.
              </p>
              <button className='bg-white text-[#673091] px-8 py-4 rounded-2xl font-semibold shadow-lg hover:bg-[#5a2a7d] hover:text-white transition-colors duration-300'>
                Start Building Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
