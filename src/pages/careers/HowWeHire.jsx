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
    <section className='w-full py-16 lg:py-24 bg-white relative overflow-hidden'>
      {/* Semi-circle background - covers from top to bottom */}
      <div className='absolute top-6 left-0 right-0 w-full h-full z-1'>
        <Image
          src='/images/Careers/semi_bg.svg'
          alt='Background'
          fill
          className='object-cover object-center'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Top Section */}
        <div className='mb-12'>
          <header className='flex items-center mb-16 gap-4'>
            <div className='w-14 h-14 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0'>
              <Image src='/images/Spark.svg' alt='' aria-hidden width={28} height={28} />
            </div>
            <div
              aria-hidden
              className='flex-1 h-[2px] bg-[linear-gradient(to_right,#E5E7EB_50%,rgba(0,0,0,0)_0%)] bg-[length:12px_2px] bg-repeat-x'
            />
            {/* Button with gradient border */}
            <div
              className='rounded-full p-[2px] shrink-0 hover:scale-105 transition-transform'
              style={{
                background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
              }}
            >
              <button className='w-[246px] h-[46px] rounded-full bg-white font-medium flex items-center justify-center gap-2 text-sm'>
                <span style={{ color: '#6F2B8B' }}>Explore opportunities</span>
                <Image src='/images/Careers/arrow1.svg' alt='Arrow' width={12} height={12} />
              </button>
            </div>
          </header>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start'>
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-900'>How We Hire</h2>
            <div className='flex justify-start'>
              <p className='text-gray-600 max-w-xl leading-relaxed text-left'>
                Empower your career journey. At GWC, we seek skilled individuals who are ready to
                enrich their abilities with our expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Center Image with rounded background */}
        <div className='flex justify-center mb-12'>
          <div className='relative w-full max-w-3xl'>
            <div
              className='relative mx-auto rounded-3xl overflow-hidden shadow-2xl'
              style={{ width: '740px', height: '260px' }}
            >
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
        <div className='text-center mb-12'>
          <p className='text-gray-600 text-sm lg:text-base max-w-3xl mx-auto'>
            A Recruiter/Technical panel will screen your application. We will contact you for
            further details if your credentials match our requirements.
          </p>
        </div>

        {/* Process Flow */}
        <div className='relative'>
          {/* "How we Hire" label in center */}
          <div className='flex justify-center -mb-20'>
            <h3
              className='font-semibold text-2xl bg-clip-text text-transparent'
              style={{
                background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              How we Hire
            </h3>
          </div>

          {/* Steps */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8'>
            {steps.map(step => (
              <div key={step.number} className='flex flex-col items-center text-center '>
                {/* Number Circle with gradient background */}
                <div
                  className='w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg'
                  style={{
                    background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
                  }}
                >
                  <div className='w-12 h-12 rounded-3xl bg-gray-200/40 flex items-center justify-center '>
                    <span className='text-2xl font-bold' style={{ color: '#7131B2' }}>
                      {step.number}
                    </span>
                  </div>
                </div>
                {/* Title */}
                <p className='text-gray-900 font-medium text-sm whitespace-pre-line'>
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHire;
