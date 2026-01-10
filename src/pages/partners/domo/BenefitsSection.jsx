'use client';
import { domoData } from '@/data/partners/domo';
import {
  BarChart3,
  Link2,
  Palette,
  Rocket,
  Settings,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
} from 'lucide-react';

export default function BenefitsSection() {
  // Benefit icons mapping with Lucide React components
  const benefitIcons = [
    BarChart3,
    Link2,
    Shield,
    Users,
    TrendingUp,
    Smartphone,
    Palette,
    Settings,
    Rocket,
  ];

  return (
    <section className='py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden'>
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
        <div className='max-w-6xl mx-auto'>
          {/* Header Section */}
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
              Top Benefits of{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{ backgroundImage: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)' }}
              >
                Domo
              </span>
            </h2>
            <p className='text-md text-gray-600 max-w-3xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm p-6 border border-white/20 shadow-sm'>
              {domoData.benefits.description}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {domoData.benefits.points.map((point, index) => {
              const IconComponent = benefitIcons[index] || Rocket;
              return (
                <div
                  key={index}
                  className='group bg-white/80 backdrop-blur-sm p-6  shadow-lg border border-white/40 cursor-pointer transition-all duration-300 relative overflow-hidden hover:translate-y-[-4px] hover:shadow-xl'
                >
                  {/* Background gradient on hover */}
                  <div className='absolute inset-0 bg-gradient-to-br from-[#662B8C]/5 via-[#4988BF]/5 to-[#F28963]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                  <div className='relative z-10'>
                    {/* Icon */}
                    <div className='flex justify-center mb-4'>
                      <div className='benefit-icon w-16 h-16 bg-[#662B8C] bg-gradient-to-br rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6'>
                        <IconComponent className='w-8 h-8 text-white' />
                      </div>
                    </div>

                    {/* Benefit Text */}
                    <h4 className='font-semibold text-gray-800 text-center text-lg group-hover:text-[#662B8C] transition-colors duration-300 leading-tight'>
                      {point}
                    </h4>
                  </div>

                  {/* Decorative elements */}
                  <div className='absolute top-2 right-2 w-3 h-3 bg-[#4988BF]/20 rounded-full'></div>
                  <div className='absolute bottom-2 left-2 w-2 h-2 bg-[#F28963]/20 rounded-full'></div>
                </div>
              );
            })}
          </div>

          {/* Additional Info Section */}
          <div className='mt-16 bg-gradient-to-r from-[#662B8C] to-[#4988BF] p-8 text-white shadow-xl'>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              <div>
                <h3 className='text-md font-bold mb-4'>Why Choose Domo?</h3>
                <p className='text-white/90 leading-relaxed'>
                  Domo is renowned for its compelling and visually appealing data representations.
                  The application empowers users to visualize data according to their preferences
                  while retaining complete control.
                </p>
              </div>
              <div className='space-y-3'>
                <div className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-white rounded-full'></div>
                  <span className='text-white/90'>
                    Distinctive social element fostering valuable conversations
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-white rounded-full'></div>
                  <span className='text-white/90'>
                    Seamless user behavior tracking and integration
                  </span>
                </div>
                <div className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-white rounded-full'></div>
                  <span className='text-white/90'>
                    Natural and integrated data merging capabilities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
