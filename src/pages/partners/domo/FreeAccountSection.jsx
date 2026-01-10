'use client';

export default function FreeAccountSection() {
  // Feature icons with different animations
  const FeatureIcon = ({ icon, gradient }) => (
    <div className='relative'>
      {/* Ripple effect */}
      <div className='absolute inset-0 rounded-full bg-current opacity-30 scale-100 hover:scale-110 transition-transform duration-300'></div>

      <div
        className='relative w-12 h-12  flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:shadow-xl'
        style={{ background: gradient }}
      >
        {icon}
      </div>
    </div>
  );

  const features = [
    {
      text: 'Unlimited Users',
      icon: (
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #662B8C, #8B5FBF)',
    },
    {
      text: '1200+ Connectors',
      icon: (
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M8 11h8m-8-4h8m4 4v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m18 0V9a2 2 0 00-2-2H4a2 2 0 00-2 2v2m18 0h-4M2 11h4m11 4v4m0 0l-2-2m2 2l2-2'
          />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #4988BF, #6A82FB)',
    },
    {
      text: 'Next Gen AI',
      icon: (
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
          />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #F28963, #FF6A88)',
    },
    {
      text: 'Workflow Automation',
      icon: (
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #10B981, #34D399)',
    },
    {
      text: 'Flexible Pricing',
      icon: (
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1'
          />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
    },
    {
      text: 'Reuse the Instance',
      icon: (
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
          />
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #8B5FBF, #C084FC)',
    },
  ];

  return (
    <section className='py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden'>
      {/* Background Animated Elements - Static now */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-[#662B8C]/10 to-[#4988BF]/10 rounded-full blur-xl'></div>
        <div className='absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-[#F28963]/10 to-[#F27166]/10 rounded-full blur-2xl'></div>
        <div className='absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-[#4988BF]/10 to-[#662B8C]/10 rounded-full blur-lg'></div>
        <div className='absolute bottom-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-[#10B981]/10 to-[#34D399]/10 rounded-full blur-xl'></div>
        <div className='absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-[#F59E0B]/10 to-[#FBBF24]/10 rounded-full blur-lg'></div>

        {/* Grid Pattern */}
        <div className='absolute inset-0 opacity-[0.02]'>
          <div className='absolute inset-0 bg-[length:100px_100px] bg-gradient-to-r from-[#662B8C] via-[#4988BF] to-[#F28963]'></div>
        </div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* Left Side - Text Content */}
            <div className='space-y-8'>
              {/* Title */}
              <div>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
                  Create Your Free Account Now &{' '}
                  <span
                    className='bg-clip-text text-transparent'
                    style={{ backgroundImage: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)' }}
                  >
                    Access It Forever
                  </span>
                </h2>
              </div>

              {/* Subtitle */}
              <p className='text-md text-gray-600 leading-relaxed bg-white/50 backdrop-blur-sm p-6 border border-white/20 shadow-sm'>
                Enjoy unlimited features and get an unlimited number of users - With no credit card!
              </p>

              {/* CTA Button */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <button className='group relative bg-gradient-to-r from-[#662B8C] to-[#4988BF] text-white px-8 py-4  font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden'>
                  <span className='relative z-10'>Get Started Free</span>

                  {/* Button hover effect */}
                  <div className='absolute inset-0 bg-gradient-to-r from-[#4988BF] to-[#662B8C] opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                  {/* Shine effect */}
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>
                </button>

                <button className='group border-2 border-gray-300 text-gray-700 px-8 py-4 font-semibold text-lg hover:border-[#662B8C] hover:text-[#662B8C] transition-all duration-300 transform hover:scale-105'>
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Side - Features Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='group flex items-center space-x-4 p-6 bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-white/80'
                >
                  <FeatureIcon icon={feature.icon} gradient={feature.gradient} />
                  <span className='text-gray-800 font-semibold text-lg group-hover:text-[#662B8C] transition-colors duration-300'>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badge */}
          <div className='text-center mt-12 pt-8 border-t border-gray-200/50'>
            <p className='text-gray-500 text-sm'>
              Trusted by 10,000+ companies worldwide • No credit card required • Free forever
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
