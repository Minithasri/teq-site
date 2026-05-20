import Image from 'next/image';
import Link from 'next/link';

const LastSection = ({ pdfUrl }) => {
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
            Want results like this for your business?
          </h2>

          <p className='text-[#404040] mb-5 md:mb-6 max-w-3xl mx-auto text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed px-4'>
            Partner with GWC to accelerate your digital transformation and drive impact.
          </p>

          {/* Button */}
          {/* Buttons */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6'>
            {/* Schedule Call Button */}
            <Link
              href='/contact'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-[14px] sm:text-[16px] transition-transform hover:scale-105 border'
              style={{
                borderColor: '#6F2B8B',
                color: '#6F2B8B',
              }}
            >
              <Image
                src='/images/last1.svg'
                alt=''
                width={20}
                height={20}
                className='w-4 h-4 sm:w-5 sm:h-5'
              />
              Schedule a Strategy Call
            </Link>

            {/* Download Brochure Button */}
            <a
              href={pdfUrl || '#'}
              target='_blank'
              rel='noopener noreferrer'
              className='w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-medium text-[14px] sm:text-[16px] transition-transform hover:scale-105 shadow-md'
              style={{
                background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                cursor: pdfUrl ? 'pointer' : 'not-allowed',
                opacity: pdfUrl ? 1 : 0.7,
              }}
            >
              <Image
                src='/images/last2.svg'
                alt=''
                width={20}
                height={20}
                className='w-4 h-4 sm:w-5 sm:h-5 brightness-0 invert'
              />
              Download Case Study
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
