'use client';

import Image from 'next/image';

const techStack = [
  {
    logo: (
      <div className='relative w-20 md:w-24 h-10 md:h-12'>
        <Image src='/images/Domo.png' alt='Python' fill className='object-contain' />
      </div>
    ),
    name: 'Domo',
    roles: ['Magic ETL, Reporting, PDP'],
  },
  {
    logo: (
      <div className='relative w-10 md:w-12 h-10 md:h-12'>
        <Image
          src='/images/Templates/z-bay/python-logo.png'
          alt='Python'
          fill
          className='object-contain'
        />
      </div>
    ),
    name: 'Python',
    roles: ['Data Processing &', 'Automation'],
  },
  {
    logo: (
      <div className='relative w-10 md:w-12 h-10 md:h-12'>
        <Image
          src='/images/Templates/z-bay/js-logo.png'
          alt='JavaScript'
          fill
          className='object-contain'
        />
      </div>
    ),
    name: 'JavaScript',
    roles: ['Custom', 'Visualizations'],
  },
  {
    logo: (
      <div className='relative w-10 md:w-12 h-10 md:h-12'>
        <Image
          src='/images/Templates/z-bay/oracle-logo.png'
          alt='Oracle ADWC'
          fill
          className='object-contain'
        />
      </div>
    ),
    name: 'Oracle ADWC',
    roles: ['Data', 'Warehouse'],
  },
];

const Technology = () => {
  return (
    <section className='bg-[#FAFAFB] py-20 md:py-24'>
      <div className='max-w-6xl mx-auto px-4 md:px-6'>
        {/* HEADING */}
        <div className='text-center'>
          <p className='text-[32px] md:text-[42px] font-semibold tracking-[2px]'>
            Technology Stack
          </p>

          <h2 className='text-[32px] md:text-[38px] font-semibold text-[#0F1729]/80'>
            Tools & technologies
          </h2>
        </div>

        {/* CARDS */}
        <div className='mt-14 grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6'>
          {techStack.map((tech, index) => (
            <div
              key={index}
              className='
                bg-white
                border-2
                border-[#F5F5F5]
                rounded-[18px]
                h-[150px] md:h-[170px]
                px-4 md:px-6
                py-5 md:py-7
                pb-6 md:pb-8
                flex
                flex-col
                items-center
                justify-center
                text-center
                shadow-[0px_8px_22px_rgba(0,0,0,0.08)]
              '
            >
              {/* LOGO */}
              <div className='mb-5 mt-5'>{tech.logo}</div>

              {/* NAME */}
              <h3 className='text-[18px] md:text-[20px] font-semibold text-[#161C2D]'>
                {tech.name}
              </h3>

              {/* ROLES */}
              <div className='mt-2 space-y-1'>
                {tech.roles.map((role, roleIndex) => (
                  <p
                    key={roleIndex}
                    className='text-[12px] md:text-[13px] leading-4 md:leading-5 text-[#8B90A0]'
                  >
                    {role}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
