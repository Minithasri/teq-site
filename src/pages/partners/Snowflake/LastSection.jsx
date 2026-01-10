import Image from 'next/image';
import Link from 'next/link';

const LastSection = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-12'>
      <div
        className='relative p-6 sm:p-8 md:p-10 lg:p-12 rounded-[20px] md:rounded-[24px] border border-[#F2F2F2] bg-white text-center overflow-hidden flex items-center justify-center min-h-[280px] sm:min-h-[300px]'
        style={{
          background: 'linear-gradient(135deg, #FFF7EB 0%, #FAE0FA 100%)',
        }}
      >
        {/* Decorations - Left */}
        <div className='hidden sm:block absolute left-0 top-0 w-[120px] lg:w-[200px] h-full pointer-events-none opacity-50 lg:opacity-100'>
          <Image
            src='/images/HomePage/dot_left.svg'
            alt=''
            fill
            className='object-cover object-left'
          />
        </div>

        {/* Decorations - Right */}
        <div className='hidden sm:block absolute right-0 top-0 w-[120px] lg:w-[200px] h-full pointer-events-none opacity-50 lg:opacity-100'>
          <Image
            src='/images/HomePage/dot_right.svg'
            alt=''
            fill
            className='object-cover object-right'
          />
        </div>

        {/* Content */}
        <div className='relative z-10 max-w-3xl mx-auto'>
          <h2 className='font-semibold text-[#404040] leading-tight mb-3 md:mb-4 text-[24px] sm:text-[28px] md:text-[32px]'>
            Ready to transform your business?
          </h2>

          <p className='text-[#404040] mb-5 md:mb-6 max-w-3xl mx-auto text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed px-4'>
            Let's discuss how our partnership solutions can help you achieve your goals.
          </p>

          {/* Button */}
          <div className='flex justify-center'>
            <Link
              href='/contact'
              className='inline-flex items-center justify-center gap-2 text-white rounded-full font-medium text-[14px] sm:text-base hover:scale-105 transition-transform shadow-lg w-[180px] sm:w-[200px] md:w-[220px] h-[44px] sm:h-[48px] md:h-[50px]'
              style={{
                background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
