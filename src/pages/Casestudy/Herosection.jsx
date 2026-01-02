import React from 'react';

const Herosection = () => {
  return (
    <div
      className='relative w-full h-[60vh] flex flex-col justify-center items-center text-center px-4 md:px-20 bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/images/Casestudy/Frame case.png')" }}
    >
      <div className='absolute top-8 left-8 md:left-20 text-white/80 text-sm md:text-base font-light'>
        Home &gt; Case study
      </div>

      <div className='max-w-4xl mx-auto flex flex-col gap-6 items-center z-10'>
        <h1 className='text-4xl md:text-6xl font-bold text-white leading-tight'>
          Experience AI Agents at Work
        </h1>
        <p className='text-white/90 text-lg md:text-xl font-light max-w-3xl leading-relaxed'>
          Move beyond manual analysis and inconsistent data. Our Agentic AI platform standardizes
          startup assessments, reduces bias, and enables faster, more confident investment
          decisions.
        </p>
      </div>
    </div>
  );
};

export default Herosection;
