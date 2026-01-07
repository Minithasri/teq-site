import Image from 'next/image';

const LastSection = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24'>
      <div
        className='relative p-8 sm:p-10 lg:p-12 rounded-[24px] border border-[#F2F2F2] bg-white text-center overflow-hidden flex items-center justify-center'
        style={{
          background: 'linear-gradient(135deg, #FFF7EB 0%, #FAE0FA 100%)',
          height: '300px',
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
          <h2
            className='font-semibold text-[#404040] leading-tight mb-4'
            style={{ fontSize: '32px' }}
          >
            Explore more opportunities
          </h2>

          <p
            className='text-[#404040] mb-6 max-w-2xl mx-auto'
            style={{ fontSize: '18px', lineHeight: '1.5' }}
          >
            Couldn't find your ideal job? Build a profile, and let us assist you in your job search.
          </p>

          {/* Button */}
          <div className='flex justify-center'>
            <button
              className='inline-flex items-center justify-center gap-2 text-white rounded-full font-medium text-base hover:scale-105 transition-transform shadow-lg'
              style={{
                background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                width: '220px',
                height: '50px',
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
