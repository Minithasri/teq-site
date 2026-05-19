'use client';

import Image from 'next/image';

const challengeCards = [
  {
    title: 'Payment Mismatch Issues',
    desc: 'Discrepancies between external provider data and internal systems',
    icon: '/images/Templates/take2eton-1/warning.svg',
  },
  {
    title: 'Limited Visibility',
    desc: 'Difficulty tracking pending commissions and financial gaps',
    icon: '/images/Templates/take2eton-1/warning.svg',
  },
  {
    title: 'Manual Reconciliation',
    desc: 'Time-consuming and error-prone comparison processes',
    icon: '/images/Templates/take2eton-1/warning.svg',
  },
  {
    title: 'Inconsistent Data',
    desc: 'Fragmented financial records across systems',
    icon: '/images/Templates/take2eton-1/warning.svg',
  },
  {
    title: 'No Forecasting Capability',
    desc: 'Lack of predictive insights for revenue planning',
    icon: '/images/Templates/take2eton-1/warning.svg',
  },
];

const BusinessChallengesSection = () => {
  return (
    <section className='w-full overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 md:px-6'>
        {/* ================= TOP HEADING ================= */}
        <div className='flex flex-col gap-4 md:flex-row md:items-start md:gap-8'>
          {/* NUMBER */}
          <div className='leading-none text-[#2A1EC8] text-[58px] md:text-[88px] font-bold tracking-[-4px]'>
            01
          </div>

          {/* TITLE */}
          <h1 className='text-2xl md:text-5xl leading-[1.2] font-semibold leading-[1.2] text-[#2A1EC8]'>
            Hotel Commission Reconciliation & Revenue
            <br />
            Forecasting Platform
          </h1>
        </div>

        {/* ================= SECTION TITLE ================= */}
        <div className='mt-10 md:mt-14'>
          <h2 className='text-2xl md:text-5xl leading-none font-semibold uppercase tracking-[2px] text-[#FF2A2A]'>
            BUSINESS CHALLENGES
          </h2>
        </div>

        {/* ================= CARDS ================= */}
        <div className='mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-3 md:gap-5'>
          {challengeCards.map((item, index) => (
            <div
              key={index}
              className='
                rounded-[16px]
                border-2
                border-[#FF3B3B]
                bg-white
                px-5
                md:px-6
                py-5
                md:py-6
                shadow-[0px_6px_18px_rgba(0,0,0,0.04)]
              '
            >
              {/* HEADER */}
              <div className='flex items-center gap-4'>
                {/* ICON */}
                <div className='flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[12px] bg-[#FFE8E8]'>
                  <Image
                    src={item.icon}
                    alt='Warning'
                    width={18}
                    height={18}
                    className='h-[18px] w-[18px] object-contain'
                  />
                </div>

                {/* TITLE */}
                <h3 className='text-[16px] md:text-[20px] leading-[1.35] font-semibold text-[#FF2A2A]'>
                  {item.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className='mt-4 text-[12px] md:text-[15px] leading-[1.8] text-[#6F7686]'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessChallengesSection;
