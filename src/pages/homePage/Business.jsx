import Image from 'next/image';

const Business = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-8 lg:px-12 pt-16 pb-8'>
      <div className='w-full'>
        <div
          className='relative p-8 sm:p-12 md:p-16 lg:p-20 rounded-[20px] sm:rounded-[25px] border-[2px] border-[#F2F2F2] bg-white text-center overflow-hidden'
          style={{ background: 'linear-gradient(135deg, #FFF7EB 0%, #FAE0FA 100%)' }}
        >
          {/* Left dot decoration */}
          <div className='absolute left-0 top-0 w-[200px] h-full pointer-events-none opacity-100'>
            <Image src='/images/HomePage/dot_left.svg' alt='' fill className='object-cover' />
          </div>

          {/* Right dot decoration */}
          <div className='absolute right-0 top-0 w-[200px] h-full pointer-events-none opacity-100'>
            <Image src='/images/HomePage/dot_right.svg' alt='' fill className='object-cover' />
          </div>

          {/* Content */}
          <div className='relative z-10'>
            <h1 className='text-[32px] text-black leading-[38px] font-semibold mb-4 md:mb-6 break-words'>
              Ready to <span className='text-[#914DC1]'>Activate Agentic AI</span>
            </h1>

            <h2 className='text-[24px] text-black leading-[32px] sm:text-[28px] sm:leading-[38px] md:text-[32px] md:leading-[20px] font-semibold mb-10 md:mb-14 break-words'>
              in Your Business?
            </h2>

            {/* BUTTONS */}
            <div className='flex flex-col sm:flex-row gap-4 items-center justify-center'>
              <button
                className='w-[200px] h-[48px] rounded-full border-2 font-medium hover:bg-purple-50 transition text-[15px]'
                style={{ borderColor: '#6F2B8B', color: '#6F2B8B' }}
              >
                Explore Use Cases
              </button>
              <button className='inline-flex items-center gap-2 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white w-[200px] h-[48px] rounded-full font-medium text-[15px] justify-center hover:scale-105 transition-transform shadow-lg'>
                <Image src='/images/solutions/phone.svg' alt='Phone' width={18} height={18} />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
