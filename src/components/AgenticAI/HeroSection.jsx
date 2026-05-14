'use client';

import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      className='relative pt-40 pb-24 px-6 md:px-16 lg:px-24 text-center overflow-hidden bg-cover bg-center'
      style={{ backgroundImage: 'url(/images/videosbg.png)' }}
    >
      {/* Background Overlay if needed for readability */}
      <div className='absolute inset-0 bg-white/40 z-0' />

      <div className='relative z-10 max-w-5xl mx-auto'>
        <h1
          className='text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent pb-2'
          style={{
            backgroundImage: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Watch Our Agents Come to Life
        </h1>
        <p
          className='max-w-5xl mx-auto text-lg md:text-xl mb-12 leading-relaxed'
          style={{ color: '#737373' }}
        >
          Move beyond manual analysis and inconsistent data. Our Agentic AI platform standardizes
          startup assessments, reduces bias, and enables faster, more confident investment
          decisions.
        </p>

        {/* Search Bar */}
        <div className='relative max-w-3xl mx-auto'>
          <div className='flex items-center bg-white rounded-full shadow-lg px-8 py-4 border border-white transition-all hover:shadow-xl'>
            <Search className='w-6 h-6 text-gray-400 mr-4' />
            <input
              type='text'
              placeholder='Search Agentic use case'
              className='w-full bg-transparent outline-none text-gray-700 text-lg'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
