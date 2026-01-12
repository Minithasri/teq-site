'use client';
import { domoData } from '@/data/partners/domo';
import Image from 'next/image';
import { useState } from 'react';

export default function FeaturesList() {
  const [activeFeature, setActiveFeature] = useState(0);

  const handleFeatureClick = index => {
    setActiveFeature(index);
  };

  return (
    <section className='py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden'>
      {/* Background Animated Elements - Static now */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-[#662B8C]/10 to-[#4988BF]/10 rounded-full blur-xl'></div>
        <div className='absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-[#F28963]/10 to-[#F27166]/10 rounded-full blur-2xl'></div>
        <div className='absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-[#4988BF]/10 to-[#662B8C]/10 rounded-full blur-lg'></div>

        {/* Grid Pattern */}
        <div className='absolute inset-0 opacity-[0.02]'>
          <div className='absolute inset-0 bg-[length:100px_100px] bg-gradient-to-r from-[#662B8C] via-[#4988BF] to-[#F28963]'></div>
        </div>
      </div>

      <div className=' mx-auto relative z-10'>
        <div className='max-w-7xl mx-auto'>
          {/* Header Section */}
          <div className='text-center'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight'>
              Features of{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{ backgroundImage: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)' }}
              >
                Domo
              </span>
            </h2>
            <p className='text-md mb-5 text-gray-600 max-w-3xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm p-6 border border-white/20 shadow-sm'>
              Leveraging more than 1,000 pre-built connectors and numerous alternative data
              connection options, Domo eradicates the need for time-consuming and expensive
              engineering projects.
            </p>
          </div>

          {/* Interactive Features Grid */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-10'>
            {domoData.featureList.map((feature, index) => (
              <div
                key={index}
                onClick={() => handleFeatureClick(index)}
                className={`bg-white p-6  shadow-md border-2 cursor-pointer transition-all duration-300 group ${
                  activeFeature === index
                    ? 'border-[#662B8C] shadow-lg scale-105'
                    : 'border-gray-200 hover:border-[#4988BF]'
                }`}
              >
                <div className='text-center'>
                  <h4
                    className={`font-semibold text-sm md:text-base transition-colors duration-300 ${
                      activeFeature === index
                        ? 'text-[#662B8C]'
                        : 'text-gray-700 group-hover:text-[#4988BF]'
                    }`}
                  >
                    {feature.title}
                  </h4>
                </div>

                {/* Active indicator */}
                {activeFeature === index && (
                  <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-gradient-to-r from-[#662B8C] to-[#4988BF] rounded-full'></div>
                )}
              </div>
            ))}
          </div>

          {/* Interactive Feature Detail Section */}
          <div className='bg-white/80 backdrop-blur-sm shadow-xl border border-white/40 overflow-hidden'>
            <div className='grid lg:grid-cols-2 gap-8 p-8'>
              {/* Left Side - Image */}
              <div className='relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50/50 p-8'>
                <div className='relative h-80 overflow-hidden bg-gradient-to-br from-[#662B8C]/5 via-[#4988BF]/5 to-[#F28963]/5 flex items-center justify-center'>
                  {/* Feature Image Placeholder */}
                  <div className='text-center'>
                    <div className='w-24 h-24 bg-gradient-to-r from-[#662B8C] to-[#4988BF]  flex items-center justify-center mx-auto mb-6 shadow-lg'>
                      <span className='text-3xl text-white'>
                        {domoData.featureList[activeFeature].icon}
                      </span>
                    </div>
                    <p className='text-gray-700 font-semibold text-xl'>
                      {domoData.featureList[activeFeature].title}
                    </p>
                    <p className='text-gray-500 text-sm mt-2'>Interactive Feature Preview</p>
                  </div>

                  {/* You can replace with actual image */}
                  <Image
                    src={domoData.featureList[activeFeature].image}
                    alt={domoData.featureList[activeFeature].title}
                    fill
                    className='object-cover'
                  />
                </div>

                {/* Floating decorative elements */}

                {/* Background pattern */}
                <div className='absolute inset-0 opacity-5 bg-gradient-to-r from-[#662B8C] via-[#4988BF] to-[#F28963]'></div>
              </div>

              {/* Right Side - Content */}
              <div className='flex flex-col justify-center space-y-6'>
                <div>
                  <div className='flex items-center space-x-3 mb-4'>
                    <div className='w-3 h-3 rounded-full bg-gradient-to-r from-[#662B8C] to-[#4988BF]'></div>
                    <h3 className='text-2xl md:text-3xl font-bold text-gray-900'>
                      {domoData.featureList[activeFeature].title}
                    </h3>
                  </div>
                  <p className='text-gray-600 text-md leading-relaxed'>
                    {domoData.featureList[activeFeature].description}
                  </p>
                </div>

                {/* CTA Button */}
                <button className='group bg-gradient-to-r from-[#662B8C] to-[#4988BF] text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-fit'>
                  <span className='flex items-center space-x-2'>
                    <span>Learn More</span>
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
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
