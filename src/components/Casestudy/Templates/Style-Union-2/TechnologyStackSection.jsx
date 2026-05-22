'use client';

import Image from 'next/image';

const techStack = [
  {
    title: 'Domo',
    subtitle: 'Data platform & analytics',
  },
  {
    title: 'Magic ETL',
    subtitle: 'Data integration & transformation',
  },
  {
    title: 'React',
    subtitle: 'Frontend framework',
  },
  {
    title: 'Tailwind CSS',
    subtitle: 'Utility-first styling',
  },
  {
    title: 'React PWA',
    subtitle: 'Progressive Web App',
  },
  {
    title: 'Domo Datasets',
    subtitle: 'Centralized data layer',
  },
];

const valueTags = ['Efficiency', 'Visibility', 'Scalability', 'Data-Driven Operations'];

const TechnologyStackSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#F7F7F7]'>
      {/* TOP SECTION */}
      <div className='mx-auto max-w-7xl px-4 md:px-6 pt-10 md:pt-14'>
        {/* HEADING */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#262626]'>
          Technology Stack
        </h2>
      </div>

      {/* BACKGROUND IMAGE SECTION */}
      <div className='relative mt-8 overflow-hidden py-8 md:h-[320px]'>
        {/* BACKGROUND IMAGE */}
        <div className='hidden md:block absolute inset-0 z-0'>
          <Image
            src='/images/Templates/style-union-2/tech-stack-bg.png'
            alt='Retail Background'
            fill
            priority
            className='object-fit object-center'
          />
        </div>

        {/* OVERLAY */}
        <div className='absolute inset-0 bg-white/60 z-0' />

        {/* CARDS */}
        <div className='relative z-10 mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-10'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {techStack.map((item, index) => (
              <div
                key={index}
                className='
            rounded-[14px]
            border
            border-[#F5F5F5]
            bg-white
            px-5
            py-5
            text-center
            shadow-lg
          '
              >
                {/* TITLE */}
                <h3 className='text-[18px] md:text-[20px] leading-none font-medium text-[#1F2635]'>
                  {item.title}
                </h3>

                {/* SUBTITLE */}
                <p className='mt-3 text-[12px] md:text-[13px] leading-[1.5] text-[#8A93A6]'>
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VALUE DELIVERED */}
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
        {/* LABEL */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[1px]text-[#262626]'>
          Value Delivered
        </h2>

        {/* DESCRIPTION */}
        <p className='mt-7 max-w-6xl text-[14px] md:text-[18px] leading-[1.9] text-[#748094]'>
          By combining mobile-first design with powerful data intelligence, this solution
          transformed how a leading retail organization manages its inventory, executes in-store
          operations, and collaborates across teams. The result is a scalable, data-driven operating
          model that delivers measurable improvements in efficiency, visibility, and business
          performance.
        </p>

        {/* TAGS */}
        <div className='mt-10 flex flex-wrap gap-4 md:gap-5'>
          {valueTags.map((tag, index) => (
            <div
              key={index}
              className='
                rounded-full
                bg-[#E4F1EE]
                px-8
                md:px-12
                py-2.5
                text-[12px]
                md:text-[14px]
                font-medium
                text-[#55B9AF]
              '
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;
