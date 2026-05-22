'use client';

import Image from 'next/image';

const techStack = [
  {
    title: 'Domo',
    subtitle: 'Magic ETL · Reporting · Jupyter',
  },
  {
    title: 'Python',
    subtitle: 'Data transformation & processing',
  },
  {
    title: 'SFTP Server',
    subtitle: 'Secure file ingestion',
  },
];

const ValueDeliveredSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      {/* ================= TECHNOLOGY STACK ================= */}
      <div className='mx-auto max-w-7xl px-4 md:px-6 pt-10 md:pt-14'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold text-[#262626]'>
          <span className='mr-3'>05</span>· Technology Stack
        </h2>

        {/* CONTENT */}
        <div className='mt-10 flex flex-col gap-10 md:flex-row'>
          {/* STACK CARDS */}
          <div className='grid flex-1 grid-cols-1 gap-5 md:grid-cols-3'>
            {techStack.map((item, index) => (
              <div
                key={index}
                className='
                  rounded-[20px]
                  border-2
                  border-[#F5F5F5]
                  bg-white
                  px-6
                  py-7
                  shadow-md
                '
              >
                {/* TITLE */}
                <h3 className='text-[24px] md:text-[32px] leading-none font-semibold tracking-[-1px] text-[#0B1526]'>
                  {item.title}
                </h3>

                {/* SUBTITLE */}
                <p className='mt-5 text-[13px] md:text-[16px] leading-[1.7] text-[#7A8394]'>
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* ICONS */}
          <div className='flex items-center gap-5 md:gap-7 lg:pt-3'>
            <Image
              src='/images/Templates/tig-golf/domo.png'
              alt='Domo'
              width={72}
              height={72}
              className='h-[52px] w-[52px] md:h-[72px] md:w-[72px] object-contain'
            />

            <Image
              src='/images/Templates/tig-golf/python.png'
              alt='Python'
              width={72}
              height={72}
              className='h-[52px] w-[52px] md:h-[72px] md:w-[72px] object-contain'
            />

            <Image
              src='/images/Templates/tig-golf/sftp.png'
              alt='SFTP'
              width={72}
              height={72}
              className='h-[52px] w-[52px] md:h-[72px] md:w-[72px] object-contain'
            />
          </div>
        </div>
      </div>

      {/* ================= VALUE DELIVERED ================= */}
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16'>
        {/* TITLE */}
        <h2 className='text-2xl md:text-5xl leading-none font-semibold text-[#262626]'>
          <span className='mr-3'>06</span>· Value Delivered
        </h2>

        {/* MAIN CARD */}
        <div
          className='
          mt-10
          rounded-[28px]
          border
          border-[#D9E3EA]
          bg-gradient-to-br
          from-[#EEF8FF]
          to-[#FFFFFF]
          px-6
          md:px-10
          py-8
          md:py-10
          shadow-[0px_10px_24px_rgba(0,0,0,0.05)]
        '
        >
          <div className='flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between'>
            {/* LEFT CONTENT */}
            <div className='mt-10 md:ms-10'>
              {/* BIG TEXT */}
              <h3 className='text-[38px] md:text-[72px] leading-[1.0] font-semibold tracking-[-3px] text-[#071120]'>
                A pipeline that
                <br />
                turned reporting
                <br />
                from a bottleneck
                <br />
                into a{' '}
                <span className='text-[#1495E7]'>
                  strategic
                  <br />
                  advantage
                </span>
                .
              </h3>

              {/* DESCRIPTION */}
              <p className='mt-8 text-[13px] md:text-[18px] leading-[2] text-[#6D7686]'>
                Delivered a fully automated and scalable data pipeline that transformed
                semi-structured Excel data into reliable, analysis-ready datasets. The result:
                faster reporting, improved accuracy, and stronger decision-making across retail
                operations.
              </p>
            </div>

            {/* RIGHT BLUE CARD */}
            <div
              className='
              w-full
              max-w-[380px]
              rounded-[22px]
              bg-gradient-to-br
              from-[#091B31]
              to-[#003D74]
              px-7
              py-7
            '
            >
              {/* QUOTE SVG */}
              <div className='opacity-40'>
                <Image
                  src='/images/Templates/tig-golf/quotes.svg'
                  alt='Python'
                  width={72}
                  height={72}
                  className='h-[52px] w-[52px] md:h-[72px] md:w-[72px] object-contain'
                />
              </div>

              {/* TEXT */}
              <p className='mt-2 text-[14px] md:text-[18px] leading-[1.8] text-white'>
                Semi-structured Excel data became a fully automated, real-time reporting backbone —
                without losing the nuance of the original source.
              </p>

              {/* LINE */}
              <div className='mt-8 h-[1px] w-full bg-white/10' />

              {/* STATS */}
              <div className='mt-6 grid grid-cols-2 gap-6'>
                {/* LEFT */}
                <div>
                  <h4 className='text-[32px] md:text-[40px] leading-none font-semibold text-white'>
                    80%
                  </h4>

                  <p className='mt-2 text-[10px] uppercase tracking-[2px] text-[#9BB8D8]'>
                    Less Manual Work
                  </p>
                </div>

                {/* RIGHT */}
                <div>
                  <h4 className='text-[32px] md:text-[40px] leading-none font-semibold text-white'>
                    40%
                  </h4>

                  <p className='mt-2 text-[10px] uppercase tracking-[2px] text-[#9BB8D8]'>
                    More Accurate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueDeliveredSection;
