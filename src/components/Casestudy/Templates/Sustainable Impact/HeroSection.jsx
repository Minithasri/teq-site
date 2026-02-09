import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative w-full py-20 lg:py-28 overflow-hidden'>
      {/* Background with Gradient and Image */}
      <div
        className='absolute inset-0 z-0'
        style={{
          background: `linear-gradient(180deg, #085E12E5 0%, #F6F6F6 100%), url('/images/Templates/template7/bg7.webp') center/cover no-repeat`,
        }}
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center'>
        {/* Top Logo Area */}
        <div className='flex flex-col items-center justify-center mb-8'>
          {/* Assuming logo asset exists or using text representation as fallback matching the visual style */}
          <div className='flex items-center gap-2 mb-1'>
            <div className='relative w-56 h-20'>
              <Image
                src='/images/Templates/template7/logonew.png'
                alt='GWC Logo'
                fill
                className='object-contain'
              />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className='text-4xl lg:text-5xl font-bold text-white mb-6'>
          <span className='text-[#EDEA39]'>Sustainable</span> Impact in Manufacturing
        </h1>

        {/* Subheading */}
        <p className='text-white/90 text-lg lg:text-xl max-w-3xl mx-auto mb-16 leading-relaxed'>
          Driving sustainability, compliance, and operational efficiency through Power Platform
          automation
        </p>

        {/* Stats Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
          {/* Card 1 */}
          <div className='bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-sm'>
            <h3 className='text-4xl font-bold text-[#1D2530] mb-2'>60%</h3>
            <p className='text-[#475569] font-medium'>Reduction in Manual Effort</p>
          </div>

          {/* Card 2 */}
          <div className='bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-sm'>
            <h3 className='text-4xl font-bold text-[#1D2530] mb-2'>100%</h3>
            <p className='text-[#475569] font-medium'>Compliance Visibility</p>
          </div>

          {/* Card 3 */}
          <div className='bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl p-6 shadow-sm'>
            <h3 className='text-2xl lg:text-3xl font-bold text-[#1D2530] mb-2 pt-1'>AI-Driven</h3>
            <p className='text-[#475569] font-medium'>Data Accuracy</p>
          </div>
        </div>
      </div>
    </section>
  );
}
