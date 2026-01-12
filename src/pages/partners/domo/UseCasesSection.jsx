'use client';
import { domoData } from '@/data/partners/domo';
import {
  BarChart3,
  Brain,
  Link2,
  Palette,
  Rocket,
  Satellite,
  Search,
  Settings,
  Shield,
} from 'lucide-react';
import { useState } from 'react';

export default function UseCasesSection() {
  const [activeCategory, setActiveCategory] = useState('enterprise');

  // Use your actual data structure
  const useCases = domoData.useCases || [];

  const filteredUseCases = useCases.filter(useCase => useCase.category.includes(activeCategory));

  // Icon mapping for each use case with Lucide React components
  const useCaseIcons = {
    'Build & Deploy Apps': Rocket,
    'Domo Dashboards': BarChart3,
    'Integrate Data & Applications': Link2,
    'Data Governance & Security': Shield,
    'Self-Service Analytics': Search,
    'Internet of Things': Satellite,
    'Predictive Analytics (AI/ML)': Brain,
    'Stunning Visualization': Palette,
    'Embedded Analytics': Settings,
  };

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
        <div className='max-w-7xl mx-auto'>
          {/* Header Section */}
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
              When to use{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{ backgroundImage: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)' }}
              >
                Domo?
              </span>
            </h2>
            <p className='text-md text-gray-600 max-w-3xl mx-auto leading-relaxed bg-white/50 backdrop-blur-sm p-6  border border-white/20 shadow-sm'>
              Want actionable insights to make smart decisions? Try Domo!
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
            {filteredUseCases.map((useCase, index) => {
              const IconComponent = useCaseIcons[useCase.title] || Rocket;
              return (
                <div
                  key={useCase.title}
                  className='group bg-white/80 backdrop-blur-sm p-6 shadow-lg border border-white/40 cursor-pointer transition-all duration-300 relative overflow-hidden hover:translate-y-[-4px] hover:shadow-xl'
                >
                  <div className='relative z-10'>
                    {/* Icon */}
                    <div className='flex justify-center mb-4'>
                      <div
                        className={
                          'use-case-icon w-16 h-16 bg-[#662B8C] bg-gradient-to-br rounded-2xl flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6'
                        }
                      >
                        <IconComponent className='w-8 h-8' />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className='font-bold text-gray-800 text-center text-xl mb-3 group-hover:text-[#662B8C] transition-colors duration-300'>
                      {useCase.title}
                    </h3>

                    {/* Description */}
                    <p className='text-gray-600 text-center text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300'>
                      {useCase.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className='text-center'>
            <div className='bg-gradient-to-r from-[#662B8C] to-[#4988BF] rounded-xl p-8 text-white shadow-xl'>
              <h3 className='text-2xl font-bold mb-4'>Ready to Transform Your Data Strategy?</h3>
              <p className='text-white/90 mb-6 max-w-2xl mx-auto'>
                Discover how Domo can help your organization leverage data for better
                decision-making and accelerated growth.
              </p>
              <button className='bg-white text-[#662B8C] px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
                Get Started with Domo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
