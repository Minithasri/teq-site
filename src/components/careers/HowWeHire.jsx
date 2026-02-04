'use client';
import Image from 'next/image';

const HowWeHire = () => {
  const steps = [
    {
      number: 1,
      title: 'Job Opportunities &\nApplication Submission',
    },
    {
      number: 2,
      title: 'Shortlisting',
    },
    {
      number: 3,
      title: 'Business/Technical\nInterview',
    },
    {
      number: 4,
      title: 'HR Interview',
    },
    {
      number: 5,
      title: 'Decision & Offer',
    },
  ];

  return (
    <section className='w-full py-16 lg:py-16 bg-white relative overflow-hidden'>
      {/* Semi-circle background - ends before process flow section */}
      <div className='absolute top-[4%] left-0 right-0 h-[61%] z-1'>
        <Image
          src='/images/Careers/semi_bgimage.webp'
          alt='Background'
          fill
          className='object-cover object-top'
        />
        {/* Fadeout gradient overlay at the top */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 90%)',
          }}
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Top Section */}
        <div className='mb-12'>
          <header className='hidden md:flex flex-row items-center mb-12 md:mb-16 gap-4'>
            <div className='w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0'>
              <Image src='/images/Spark.svg' alt='' aria-hidden width={24} height={24} />
            </div>
            <div
              aria-hidden
              className='flex-1 h-[2px] bg-[linear-gradient(to_right,#1F1F1F_30%,rgba(0,0,0,0)_0%)] bg-[length:6px_2px] bg-repeat-x'
            />
            {/* Button with gradient border */}
            <div
              className='rounded-full p-[2px] shrink-0 hover:scale-105 transition-transform'
              style={{
                background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
              }}
            >
              <button className='w-[200px] sm:w-[220px] md:w-[246px] h-[40px] md:h-[46px] rounded-full bg-white font-medium flex items-center justify-center gap-2 text-[12px] sm:text-sm'>
                <span style={{ color: '#6F2B8B' }}>Explore opportunities</span>
                <Image src='/images/Careers/arrow1.svg' alt='Arrow' width={12} height={12} />
              </button>
            </div>
          </header>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start'>
            <h2 className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium text-[#1F1F1F]'>
              How We Hire
            </h2>
            <div className='flex justify-start'>
              <p className='text-[#525252] text-[14px] sm:text-[15px] md:text-base max-w-xl leading-relaxed text-left'>
                Empower your career journey. At GWC, we seek skilled individuals who are ready to
                enrich their abilities with our expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Center Image with rounded background */}
        <div className='flex justify-center mb-12 px-4'>
          <div className='relative w-full max-w-3xl'>
            <div className='relative mx-auto rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl w-full h-[180px] sm:h-[220px] md:h-[260px]'>
              <Image
                src='/images/Careers/howwehire_image.svg'
                alt='How We Hire'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>

        {/* Subtitle below image */}
        <div className='text-center mb-12 px-4'>
          <p className='text-[#525252] text-[14px] sm:text-[15px] md:text-[16px] max-w-3xl mx-auto leading-relaxed'>
            A Recruiter/Technical panel will screen your application. We will contact you for
            further details if your credentials match our requirements.
          </p>
        </div>

        {/* Process Flow - Using Image */}
        <div className='flex justify-center px-4 overflow-x-auto no-scrollbar pb-4 md:pb-0'>
          <div className='relative w-full max-w-5xl min-w-[310px] md:min-w-0'>
            <Image
              src='/images/Careers/wehire_bg.webp'
              alt='How We Hire Process'
              width={1200}
              height={400}
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHire;
