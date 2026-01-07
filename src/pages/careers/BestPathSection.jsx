'use client';
import Image from 'next/image';

const BestPathSection = () => {
  const paths = [
    {
      id: 1,
      image: '/images/Careers/best_1.svg',
      title: 'College Graduates',
      description:
        'Advance into a career with new terms and discover all we can offer, including learning opportunities, global projects and the freedom to explore.',
    },
    {
      id: 2,
      image: '/images/Careers/best_2.svg',
      title: 'Experienced Professionals',
      description:
        "If you're looking for new opportunities to ignite or reignite your career, your experience matters here. Discover how you can begin to make a difference.",
    },
    {
      id: 3,
      image: '/images/Careers/best_3.svg',
      title: 'Career Restart',
      description:
        'Getting back to work after taking a break can be overwhelming, our Career Restart program help you feel self-assured while pursuing your professional aspirations.',
    },
  ];

  return (
    <section
      className='w-full py-16 lg:py-24 relative'
      style={{
        backgroundImage: 'url(/images/Careers/bestpath_image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Heading */}
        <h2
          className='text-[24px] sm:text-[28px] md:text-[32px] text-center font-medium mb-12 lg:mb-16 bg-clip-text text-transparent'
          style={{
            background: 'linear-gradient(180deg, #7030B1 0%, #B56DD3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Find Your Best Path
        </h2>

        {/* Cards Grid */}
        <div className='flex flex-wrap justify-center gap-6 lg:gap-8'>
          {paths.map(path => (
            <div
              key={path.id}
              className='rounded-2xl p-[2px] shadow-lg hover:shadow-xl transition-shadow w-full sm:w-[340px] md:w-[370px] min-h-[440px] md:min-h-[460px]'
              style={{
                background: 'linear-gradient(135deg, #D9B8FF 0%, #FAE0FA 100%)',
              }}
            >
              {/* Inner card with white background */}
              <div className='bg-white rounded-2xl h-full overflow-hidden flex flex-col'>
                {/* Image with padding on all sides */}
                <div className='p-3 md:p-4'>
                  <div className='relative w-full h-[260px] sm:h-[260px] md:h-[260px] rounded-2xl overflow-hidden'>
                    <Image
                      src={path.image}
                      alt={path.title}
                      fill
                      className='object-cover rounded-2xl'
                    />
                  </div>
                </div>

                {/* Content */}
                <div className='px-4 md:px-6 pb-4 md:pb-6 flex-1'>
                  <h3
                    className='font-semibold text-[#1F1F1F] mb-3 text-[16px] md:text-[18px]'
                    style={{ lineHeight: '1.4' }}
                  >
                    {path.title}
                  </h3>
                  <p
                    className='text-[#525252] text-[13px] md:text-[14px]'
                    style={{ lineHeight: '1.6' }}
                  >
                    {path.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestPathSection;
