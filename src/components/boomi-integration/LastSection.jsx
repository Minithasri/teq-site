import Image from 'next/image';
import Link from 'next/link';

const LastSection = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-12'>
      <div
        className='relative p-6 sm:p-8 md:p-10 lg:p-12 rounded-[20px] md:rounded-[24px] border border-[#F2F2F2] overflow-hidden flex items-center justify-center min-h-[350px]'
        style={{
          background: 'linear-gradient(90deg, #FFF7EB 0%, #FAE0FA 100%)',
        }}
      >
        {/* BACKGROUND VIDEO */}
        <div className='absolute inset-0' style={{ opacity: 0.22 }}>
          <video autoPlay loop muted playsInline className='w-full h-full object-cover'>
            <source src='/images/solutions/agent_video.mp4' type='video/mp4' />
          </video>
        </div>

        {/* Content */}
        <div className='relative z-10 max-w-4xl mx-auto text-center'>
          <h2 className='font-semibold text-[#404040] mb-4 text-[20px] sm:text-[28px] md:text-[32px]'>
            Ready to integrate smarter?
          </h2>

          <p className='text-[#727272] mb-8 max-w-2xl mx-auto text-[14px] sm:text-[14px] md:text-[16px] leading-relaxed'>
            Accelerate your digital transformation with GWC + Boomi. Let's connect your apps,
            automate your workflows, and deliver insights that drive real business outcomes.
          </p>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6'>
            {/* Schedule Call Button */}
            <Link
              href='/contact'
              className='inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-[15px] transition-transform hover:scale-105 border'
              style={{
                borderColor: '#6F2B8B',
                color: '#6F2B8B',
              }}
            >
              <Image src='/images/last1.svg' alt='' width={20} height={20} className='w-4 h-4' />
              Schedule a Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
