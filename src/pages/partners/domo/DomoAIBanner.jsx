'use client';
import Image from 'next/image';

export default function DomoAIIntegration() {
  return (
    <section className='py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden'>
      {/* Background Animated Elements - Kept as static floating background but removed JS animation references */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-10 left-10 w-24 h-24 bg-gradient-to-r from-[#662B8C]/10 to-[#4988BF]/10 rounded-full blur-xl'></div>
        <div className='absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-[#F28963]/10 to-[#F27166]/10 rounded-full blur-2xl'></div>
        <div className='absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-[#4988BF]/10 to-[#662B8C]/10 rounded-full blur-lg'></div>
        <div className='absolute bottom-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-[#F27166]/10 to-[#F28963]/10 rounded-full blur-xl'></div>

        {/* Grid Pattern */}
        <div className='absolute inset-0 opacity-[0.03]'>
          <div className='absolute inset-0 bg-[length:100px_100px] bg-gradient-to-r from-[#662B8C] via-[#4988BF] to-[#F28963]'></div>
        </div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* Left Side - Text Content */}
            <div className='space-y-8'>
              {/* Title */}
              <div>
                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
                  AI-Powered Data Experiences with{' '}
                  <span
                    className='bg-clip-text text-transparent'
                    style={{ backgroundImage: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)' }}
                  >
                    Domo & GWC
                  </span>
                </h2>
              </div>

              {/* Text Content */}
              <div className='space-y-6 text-gray-700 text-md leading-relaxed'>
                <p className='bg-white/50 backdrop-blur-sm p-6 border border-white/20 shadow-sm'>
                  As the implementation partner for Domo, GWC provides intuitive experiences infused
                  with AI, data science, and a robust data foundation. Seamlessly integrating with
                  your current cloud and legacy systems, our solutions ignite curiosity and drive
                  substantial business impact.
                </p>

                <p className='bg-white/50 backdrop-blur-sm p-6 border border-white/20 shadow-sm'>
                  From user-friendly self-service dashboards to tailored pro-code applications, Domo
                  maximizes the returns on your data investments, providing timely insights to
                  empower everyone. Leverage public models, large language models, and generative AI
                  such as ChatGPT with Domo's reliable and flexible AI framework. This enables you
                  to expedite the speed to value without compromising on security.
                </p>
              </div>

              {/* Key Features */}
              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-gray-800 mb-4'>Key Capabilities:</h3>

                <div className='flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer group hover:bg-white/40'>
                  <div className='w-2 h-2 bg-gradient-to-r from-[#662B8C] to-[#4988BF] rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300'></div>
                  <div>
                    <h4 className='font-semibold text-gray-800 group-hover:text-[#662B8C] transition-colors duration-300'>
                      AI & Machine Learning Integration
                    </h4>
                    <p className='text-gray-600 text-sm mt-1'>
                      Leverage advanced AI models including ChatGPT and large language models
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer group hover:bg-white/40'>
                  <div className='w-2 h-2 bg-gradient-to-r from-[#4988BF] to-[#F28963] rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300'></div>
                  <div>
                    <h4 className='font-semibold text-gray-800 group-hover:text-[#4988BF] transition-colors duration-300'>
                      Self-Service Analytics
                    </h4>
                    <p className='text-gray-600 text-sm mt-1'>
                      User-friendly dashboards and tools for empowered decision-making
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer group hover:bg-white/40'>
                  <div className='w-2 h-2 bg-gradient-to-r from-[#F28963] to-[#F27166] rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300'></div>
                  <div>
                    <h4 className='font-semibold text-gray-800 group-hover:text-[#F27166] transition-colors duration-300'>
                      Enterprise Security
                    </h4>
                    <p className='text-gray-600 text-sm mt-1'>
                      Robust security framework ensuring data protection and compliance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className='relative'>
              <div className='relative bg-gradient-to-br from-white to-gray-50  p-4 shadow-2xl border border-white/20 group hover:shadow-3xl transition-all duration-500'>
                {/* Main Image Container */}
                <div className='relative h-[500px] overflow-hidden bg-gradient-to-br from-[#662B8C]/5 via-[#4988BF]/5 to-[#F28963]/5'>
                  {/* Replace with your actual image */}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='relative w-full h-full min-h-[450px] overflow-hidden'>
                      <Image
                        src='/images/domo/DomoAnalysis.png'
                        alt='Domo Platform Overview'
                        fill
                        className='object-cover'
                        priority
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw'
                      />
                    </div>
                  </div>
                </div>

                {/* Floating elements around image - static now */}
                <div className='absolute -top-4 -left-4 w-8 h-8 bg-[#662B8C]/20 rounded-full'></div>
                <div className='absolute -bottom-4 -right-4 w-6 h-6 bg-[#F27166]/30 rounded-full'></div>
                <div className='absolute top-1/2 -right-4 w-4 h-4 bg-[#4988BF]/25 rounded-full'></div>

                {/* Glow effect */}
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-[#662B8C]/10 via-[#4988BF]/10 to-[#F28963]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl'></div>
              </div>

              {/* Background decorative elements */}
              <div className='absolute -z-10 top-10 -right-10 w-64 h-64 bg-gradient-to-r from-[#662B8C]/5 to-[#4988BF]/5 rounded-full blur-3xl'></div>
              <div className='absolute -z-10 bottom-10 -left-10 w-56 h-56 bg-gradient-to-r from-[#F28963]/5 to-[#F27166]/5 rounded-full blur-3xl'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
