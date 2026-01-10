'use client';
import { domoData } from '@/data/partners/domo';

export default function PricingSection() {
  return (
    <section className='py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          {/* Header Section */}
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
              {domoData.pricing.title}
            </h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              {domoData.pricing.description}
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {domoData.pricing.credits.map((credit, index) => (
              <div
                key={index}
                className='group bg-white rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden'
              >
                {/* Background Gradient Effect */}
                <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                <div className='relative z-10 p-8'>
                  {/* Header */}
                  <div className='text-center mb-6'>
                    <h3 className='text-2xl font-bold text-gray-900 mb-2'>{credit.title}</h3>
                    <div className='w-12 h-1 bg-gradient-to-r from-[#662B8C] to-[#4988BF] mx-auto rounded-full'></div>
                  </div>

                  {/* Price Display */}
                  <div className='bg-gradient-to-r from-[#662B8C] to-[#4988BF] text-white p-6 rounded-xl text-center mb-6 shadow-lg'>
                    <p className='text-3xl font-bold mb-1'>{credit.cost}</p>
                    <p className='text-white/80 text-sm'>One-time credit</p>
                  </div>

                  {/* Description */}
                  <div className='text-center'>
                    <p className='text-gray-600 leading-relaxed mb-6'>{credit.description}</p>

                    {/* Features List */}
                    <div className='space-y-2 mb-6'>
                      <div className='flex items-center justify-center space-x-2 text-gray-700'>
                        <div className='w-2 h-2 bg-[#4988BF] rounded-full'></div>
                        <span className='text-sm'>Flexible usage</span>
                      </div>
                      <div className='flex items-center justify-center space-x-2 text-gray-700'>
                        <div className='w-2 h-2 bg-[#4988BF] rounded-full'></div>
                        <span className='text-sm'>No expiration</span>
                      </div>
                      <div className='flex items-center justify-center space-x-2 text-gray-700'>
                        <div className='w-2 h-2 bg-[#4988BF] rounded-full'></div>
                        <span className='text-sm'>Enterprise support</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className='w-full bg-[#673091] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#5a2a7d] transition-colors duration-300'>
                      Get Started
                    </button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className='absolute top-4 right-4 w-3 h-3 bg-[#662B8C]/20 rounded-full'></div>
                <div className='absolute bottom-4 left-4 w-4 h-4 bg-[#4988BF]/20 rounded-full'></div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className='text-center mt-12'>
            <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50 max-w-4xl mx-auto'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                Flexible Pricing for Every Need
              </h3>
              <p className='text-gray-600 mb-6'>
                All plans include access to Domo's complete platform features, 1200+ connectors, and
                enterprise-grade security. Scale your credits as your business grows.
              </p>
              <button className='bg-[#673091] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#5a2a7d] transition-colors duration-300'>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
