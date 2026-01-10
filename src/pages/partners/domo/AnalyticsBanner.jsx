'use client';
import Image from 'next/image';

export default function Banner() {
  return (
    <section className='mt-16 mb-20 h-[36rem] w-full relative overflow-hidden shadow-lg bg-gradient-to-r from-[#662B8C] via-[#4988BF] to-[#F28963]'>
      {/* Background Image with gaps on each side */}
      <div className='absolute inset-6'>
        {' '}
        {/* This creates gaps on all sides */}
        <Image
          src='/images/domo/DomoAnalyticsImg.png'
          alt='Domo Platform Banner'
          fill
          className='object-contain h-96 opacity-30' /* Changed to object-contain to show full image */
        />
      </div>

      {/* Banner Content */}
      <div className='relative z-10 h-full flex flex-col justify-center items-center text-center banner-content px-8'>
        <h3 className='text-3xl md:text-4xl font-bold text-white mb-4'>
          Transform Your Business with Domo
        </h3>
        <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
          Join thousands of companies leveraging Domo's powerful platform for data-driven decision
          making
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <button className='bg-white text-[#662B8C] hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg'>
            Start Free Trial
          </button>
          <button className='border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105'>
            Schedule Demo
          </button>
        </div>
      </div>

      {/* Light Shadow Effect */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent pointer-events-none'></div>
    </section>
  );
}
