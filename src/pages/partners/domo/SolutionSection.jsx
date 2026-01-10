'use client';
import { domoData } from '@/data/partners/domo';
import Image from 'next/image';

export default function SolutionsSection() {
  return (
    <section className='py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden min-h-screen'>
      {/* Background Animated Elements - Static now */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-[#662B8C]/10 to-[#4988BF]/10 rounded-full blur-xl'></div>
        <div className='absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-[#F28963]/10 to-[#F27166]/10 rounded-full blur-2xl'></div>
        <div className='absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-[#4988BF]/10 to-[#662B8C]/10 rounded-full blur-lg'></div>
        <div className='absolute bottom-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-[#10B981]/10 to-[#34D399]/10 rounded-full blur-xl'></div>

        {/* Grid Pattern */}
        <div className='absolute inset-0 opacity-[0.02]'>
          <div className='absolute inset-0 bg-[length:100px_100px] bg-gradient-to-r from-[#662B8C] via-[#4988BF] to-[#F28963]'></div>
        </div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
            Domo Solutions for{' '}
            <span
              className='bg-clip-text text-transparent'
              style={{ backgroundImage: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)' }}
            >
              Every Industry
            </span>
          </h2>
          <p className='text-md text-gray-600 max-w-3xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm p-6  border border-white/20 shadow-sm'>
            Discover how Domo transforms data into actionable insights across various industries and
            platforms. From healthcare to retail, manufacturing to cloud platforms - Domo delivers
            tailored solutions.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {domoData.solutions.map(solution => (
            <div
              key={solution.title}
              className='solution-card bg-white/80 backdrop-blur-sm shadow-xl border border-white/40 overflow-hidden group cursor-pointer transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl'
            >
              {/* Image Container */}
              <div className='container relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200'>
                {/* Placeholder for image - replace with actual Image component */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='text-center'>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
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
                    <p className='text-gray-700 font-semibold text-lg'>{solution.title}</p>
                    <p className='text-gray-500 text-sm mt-2'>Industry Solution</p>
                  </div>
                </div>

                {/* Actual Image Component */}
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-500'
                  sizes='300px'
                />
              </div>

              {/* Content Container */}
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-[#662B8C] transition-colors duration-300'>
                  {solution.title}
                </h3>

                <p className='text-gray-600 mb-4 leading-relaxed text-sm'>{solution.description}</p>

                {/* Features List */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {solution.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className='inline-block bg-gray-100 text-gray-700 px-2 py-1  text-xs font-medium'
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={
                    'w-full bg-[#673091] text-white py-3  font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center space-x-2'
                  }
                >
                  <span>Explore Solution</span>
                  <svg
                    className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed CTA Section */}
      <div className='container mx-auto px-4 mt-16'>
        <div className='bg-gradient-to-r from-[#662B8C] to-[#4988BF] p-8 text-white shadow-xl text-center'>
          <h3 className='text-2xl font-bold mb-4'>Ready to Find Your Perfect Domo Solution?</h3>
          <p className='text-white/90 mb-6 max-w-2xl mx-auto'>
            Whether you're in healthcare, retail, manufacturing, or using cloud platforms like AWS
            and Snowflake, Domo has a tailored solution for your unique challenges.
          </p>
          <button className='bg-white text-[#662B8C] px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
            Get Custom Solution Demo
          </button>
        </div>
      </div>
    </section>
  );
}
