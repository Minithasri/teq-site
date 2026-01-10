'use client';
import Image from 'next/image';

export default function ExecutionCredits() {
  return (
    <section className='py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30'>
      <div className='container mx-auto px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-5 gap-12 lg:gap-16 items-center'>
            {/* Left Side - Text Content (Reduced width) */}
            <div className='lg:col-span-2 space-y-8'>
              {/* Title */}
              <div>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight'>
                  How Execution Credits{' '}
                  <span
                    className='bg-clip-text text-transparent'
                    style={{ backgroundImage: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)' }}
                  >
                    Works
                  </span>
                </h2>
              </div>

              {/* Text Content */}
              <div className='space-y-6 text-gray-700 leading-relaxed'>
                <div className='bg-white/50 backdrop-blur-sm p-5 rounded-xl border border-white/20 shadow-sm transition-transform duration-300 hover:scale-[1.02]'>
                  <p className='font-semibold text-[#662B8C] mb-2 text-sm'>
                    Purchase tailored credit packages
                  </p>
                  <p className='text-gray-600 text-sm'>
                    Buy a credit package that perfectly matches your business requirements.
                  </p>
                </div>

                <div className='bg-white/50 backdrop-blur-sm p-5 rounded-xl border border-white/20 shadow-sm transition-transform duration-300 hover:scale-[1.02]'>
                  <p className='font-semibold text-[#662B8C] mb-2 text-sm'>Use with confidence</p>
                  <p className='text-gray-600 text-sm'>
                    Credits are deducted only when you actively use Domo's features.
                  </p>
                </div>

                <div className='bg-white/50 backdrop-blur-sm p-5 rounded-xl border border-white/20 shadow-sm transition-transform duration-300 hover:scale-[1.02]'>
                  <p className='font-semibold text-[#662B8C] mb-2 text-sm'>Monitor and control</p>
                  <p className='text-gray-600 text-sm'>
                    Track your credit consumption through built-in utilization reports.
                  </p>
                </div>
              </div>

              {/* Product Feature Badge */}
              <div className='bg-gradient-to-r from-[#662B8C] to-[#4988BF] rounded-xl p-4 text-white text-center shadow-md'>
                <div className='flex items-center justify-center space-x-2 mb-2'>
                  <span className='bg-white/20 px-2 py-1 rounded-full text-xs'>
                    Product Feature
                  </span>
                  <span className='bg-white/20 px-2 py-1 rounded-full text-xs'>
                    Credit Utilization
                  </span>
                </div>
                <p className='text-lg font-bold mb-1'>Get the full product experience</p>
                <div className='flex items-center justify-center space-x-2 text-white/80 text-sm'>
                  <span>Used Credits</span>
                  <span className='bg-white/20 px-1 py-0.5 rounded text-xs'>New 2x</span>
                </div>
              </div>

              {/* CTA Section */}
              <div className='text-center lg:text-left'>
                <p className='text-gray-600 mb-4 text-base'>
                  Fully Featured. Unlimited number of Users. Only pay for what you use
                </p>
                <button className='bg-[#673091] text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#5a2a7d] w-full lg:w-auto transform hover:translate-y-[-2px]'>
                  Create Your Free Account
                </button>
              </div>
            </div>

            {/* Right Side - Image (Increased width) */}
            <div className='lg:col-span-3 relative'>
              <div className='relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-2xl border border-white/20 transition-all duration-300 hover:shadow-3xl'>
                {/* Main Image Container */}
                <div className='relative h-[550px] rounded-xl overflow-hidden bg-gradient-to-br from-[#662B8C]/5 via-[#4988BF]/5 to-[#F28963]/5'>
                  {/* Actual Image Component */}
                  <Image
                    src='/images/domo/creditUtilization.webp'
                    alt='Execution Credits Dashboard'
                    className='object-cover rounded-lg'
                    fill
                    priority
                  />
                </div>

                {/* Floating elements around image */}
                <div className='absolute -top-4 -left-4 w-10 h-10 bg-[#662B8C]/20 rounded-full animate-pulse'></div>
                <div className='absolute -bottom-4 -right-4 w-8 h-8 bg-[#F27166]/30 rounded-full animate-pulse delay-75'></div>
                <div className='absolute top-1/2 -right-4 w-6 h-6 bg-[#4988BF]/25 rounded-full animate-pulse delay-150'></div>
              </div>

              {/* Background decorative elements */}
              <div className='absolute -z-10 top-10 -right-10 w-80 h-80 bg-gradient-to-r from-[#662B8C]/5 to-[#4988BF]/5 rounded-full blur-3xl'></div>
              <div className='absolute -z-10 bottom-10 -left-10 w-72 h-72 bg-gradient-to-r from-[#F28963]/5 to-[#F27166]/5 rounded-full blur-3xl'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
