'use client';

import Image from 'next/image';

const impactStats = [
  {
    value: '10–20%',
    desc: 'Potential reduction in transportation costs',
  },
  {
    value: '~70%',
    desc: 'Faster scenario evaluation for strategic planning',
  },
  {
    value: 'Improved',
    desc: 'Network efficiency through better lane & DC utilization',
  },
  {
    value: 'Enhanced',
    desc: 'Routing decisions improving service levels & reducing variability',
  },
];

const techTags = ['Domo (Magic ETL, Webforms)', 'Amazon Redshift', 'Excel'];

const ImpactStackSection = () => {
  return (
    <section className='w-full overflow-hidden mt-14'>
      {/* ================= BUSINESS IMPACT ================= */}
      <div className='bg-gradient-to-r from-[#0B1D56] to-[#123E67]'>
        <div className='mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-white'>
            Business Impact
          </h2>

          {/* IMPACT GRID */}
          <div className='mt-12 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-10'>
            {impactStats.map((item, index) => (
              <div key={index}>
                {/* VALUE */}
                <h3 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-white'>
                  {item.value}
                </h3>

                {/* DESCRIPTION */}
                <p className='mt-5 whitespace-pre-line text-[12px] md:text-[15px] leading-[1.7] text-[#C7D0E3]'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= TECHNOLOGY STACK ================= */}
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-12'>
        <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
          {/* LEFT CONTENT */}
          <div>
            {/* TITLE */}
            <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#1D1F28]'>
              Technology Stack
            </h2>

            <div className='flex flex-col md:flex-row gap-6'>
              {/* TAGS */}
              <div className='mt-8 flex flex-wrap gap-3'>
                {techTags.map((item, index) => (
                  <div
                    key={index}
                    className='
                    rounded-full
                    bg-[#ECEEF4]
                    px-5
                    md:px-6
                    py-2.5
                    text-[11px]
                    md:text-[14px]
                    font-medium
                    text-[#5F6878]
                  '
                  >
                    {item}
                  </div>
                ))}
              </div>
              {/* LOGOS */}
              <div className='flex flex-wrap items-center gap-5 md:gap-7'>
                <Image
                  src='/images/Templates/bissell-3/domo.png'
                  alt='Domo'
                  width={70}
                  height={70}
                  priority
                  className='h-[52px] w-[52px] object-contain md:h-[70px] md:w-[70px]'
                />

                <Image
                  src='/images/Templates/bissell-3/redshift.png'
                  alt='Redshift'
                  width={70}
                  height={70}
                  priority
                  className='h-[52px] w-[52px] object-contain md:h-[70px] md:w-[70px]'
                />

                <Image
                  src='/images/Templates/bissell-3/excel.png'
                  alt='Excel'
                  width={70}
                  height={70}
                  priority
                  className='h-[52px] w-[52px] object-contain md:h-[70px] md:w-[70px]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= VALUE DELIVERED ================= */}
      <div className='bg-[#F6F6F6]'>
        <div className='mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-12'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px] text-[#1D1F28]'>
            Value Delivered
          </h2>

          {/* CONTENT CARD */}
          <div
            className='
              mt-8
              rounded-[18px]
              border
              border-[#ECEEF3]
              bg-white
              px-6
              md:px-8
              py-7
              md:py-9
              shadow-[0px_10px_24px_rgba(0,0,0,0.05)]
            '
          >
            <p className='text-[14px] md:text-[20px] leading-[2] text-[#7E8797]'>
              By centralizing logistics data and enabling scenario-based network modeling, we
              empowered the organization to make faster, more informed decisions — unlocking
              significant cost savings, improving distribution efficiency, and building a scalable
              foundation for continuous supply chain optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStackSection;
