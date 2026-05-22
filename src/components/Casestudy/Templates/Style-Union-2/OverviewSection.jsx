'use client';

import Image from 'next/image';

const challengeItems = [
  'Lack of visibility into fast-moving and slow-moving products',
  'Poor sell-through rates due to delayed actions',
  'Excess aging inventory increasing holding costs',
  'Inefficient replenishment and stock planning',
  'Limited coordination between store, merchandising, and warehouse teams',
  'No structured system to track execution outcomes across stores',
];

const OverviewSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#F7F7F7]'>
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
        {/* ================= CLIENT OVERVIEW ================= */}
        <div>
          {/* LABEL */}
          <h2 className='text-[28px] md:text-[48px] leading-none font-semibold tracking-[1px] text-[#262626]'>
            Client Overview
          </h2>

          {/* DESCRIPTION */}
          <p className='mt-5 text-[14px] md:text-[18px] leading-[1.9] text-[#748094]'>
            A leading retail organization operating multiple store locations sought to modernize the
            coordination between its store operations, merchandising teams, and warehouse functions.
            The goal was clear: improve inventory performance, enhance execution efficiency, and
            create a unified system that empowers teams across every level of the organization.
          </p>
        </div>

        {/* ================= CHALLENGE SECTION ================= */}
        <div className='mt-12 md:mt-14'>
          {/* LABEL */}
          <h2 className='text-[28px] md:text-[48px] leading-none font-semibold tracking-[1px] text-[#262626]'>
            The Challenge
          </h2>

          {/* GRID */}
          <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2'>
            {challengeItems.map((item, index) => (
              <div
                key={index}
                className='
                  min-h-[82px]
                  rounded-[12px]
                  border
                  border-[#F5F5F5]
                  bg-white
                  px-4
                  md:px-5
                  py-4
                  flex
                  items-start
                  gap-3
                  shadow-lg
                '
              >
                {/* ICON */}
                <div className='flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-[#F9252526]'>
                  <Image
                    src='/images/Templates/style-union-2/warning.svg'
                    alt='Challenge Icon'
                    width={14}
                    height={14}
                    className='h-[14px] w-[14px] object-contain'
                  />
                </div>

                {/* TEXT */}
                <p className='text-[14px] md:text-[16px] leading-[1.7] text-[#555F73]'>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
