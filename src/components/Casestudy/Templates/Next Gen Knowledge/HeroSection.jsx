import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='relative w-full h-[74vh]'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/Templates/template10/hero10.webp'
          alt='Next Gen Knowledge Background'
          fill
          className='object-cover'
        />
        {/* Overlay */}
        <div className='absolute inset-0 bg-[#1A1852C2]'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center px-4'>
        {/* Logo */}
        <div className='mb-8 mt-12'>
          <Image
            src='/images/Templates/template10/logo10.png'
            alt='GWC Data.ai Solution Matters'
            width={200}
            height={100}
            className='object-contain'
          />
        </div>

        {/* Title */}
        <h1
          className='text-[44px] md:text-[52px] lg:text-[56px] font-bold mb-2 tracking-tight leading-tight text-transparent bg-clip-text'
          style={{
            backgroundImage: 'linear-gradient(90deg, #A2D0FF 0%, #00C0FF 100%)',
          }}
        >
          Next-Gen Knowledge
          <br />
          Engine on Azure
        </h1>

        {/* Description */}
        <p className='text-white text-[18px] md:text-[22px] max-w-4xl leading-relaxed font-light mb-12'>
          Transforming Enterprise Knowledge Access with AI-Powered Retrieval
        </p>

        {/* Bottom Pills/Cards */}
        <div className='flex flex-wrap justify-center gap-4'>
          {['Azure OpenAI', 'RAG Architecture', '70% Faster Retrieval'].map((item, index) => (
            <div
              key={index}
              className='px-6 py-2 rounded-full font-semibold text-sm md:text-base'
              style={{
                backgroundColor: '#EBF5FF',
                color: '#004D99',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
