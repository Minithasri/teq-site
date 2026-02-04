import Image from 'next/image';
import Link from 'next/link';

const Business = () => {
  return (
    <div className='w-full  mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-6'>
      <div
        className='relative p-6 sm:p-8 md:p-10 lg:p-16 rounded-[24px] border border-[#F2F2F2] bg-white text-center overflow-hidden'
        style={{ background: 'linear-gradient(135deg, #FFF7EB 0%, #FAE0FA 100%)' }}
      >
        {/* Decorations - Adjusted for responsiveness */}
        <div className='hidden sm:block absolute left-0 top-0 w-[120px] lg:w-[200px] h-full pointer-events-none opacity-50 lg:opacity-100'>
          <Image
            src='/images/HomePage/dot_left.svg'
            alt=''
            fill
            className='object-cover object-left'
          />
        </div>

        <div className='hidden sm:block absolute right-0 top-0 w-[120px] lg:w-[200px] h-full pointer-events-none opacity-50 lg:opacity-100'>
          <Image
            src='/images/HomePage/dot_right.svg'
            alt=''
            fill
            className='object-cover object-right'
          />
        </div>

        {/* Content */}
        <div className='relative z-10 max-w-4xl mx-auto'>
          <h2 className='text-[24px] md:text-[36px] font-medium text-gray-900 leading-tight mb-8 sm:mb-12'>
            Ready to <span className='text-[#914DC1]'>Activate Agentic AI</span>
            <br />
            <span className='block sm:inline'> in your Business?</span>
          </h2>

          {/* BUTTONS */}
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center'>
            <button
              onClick={() => {
                const element = document.getElementById('agent-building');
                if (element) {
                  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - 100; // Scroll 100px above the section

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                  });
                }
              }}
              className='w-full sm:w-[200px] h-[50px] rounded-full border-2 font-medium hover:bg-purple-50 transition-colors duration-300 text-sm sm:text-base border-[#6F2B8B] text-[#6F2B8B]'
            >
              Explore use cases
            </button>
            <Link
              href='/contact'
              className='inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] text-white w-full sm:w-[200px] h-[50px] rounded-full font-medium text-sm sm:text-base hover:scale-105 transition-transform shadow-lg'
            >
              <Image src='/images/solutions/phone.svg' alt='Phone' width={20} height={20} />
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
