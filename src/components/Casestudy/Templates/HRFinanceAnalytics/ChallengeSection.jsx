import Image from 'next/image';

export default function ChallengeSection() {
  const cards = [
    {
      icon: '/images/Templates/template11/card1logo.svg',
      text: 'Lightspeed POS and Deputy HR systems Operated in complete isolation',
    },
    {
      icon: '/images/Templates/template11/card2logo.svg',
      text: 'No unified reporting across financial and workforce data',
    },
    {
      icon: '/images/Templates/template11/card3logo.svg',
      text: 'Limited leadership visibility into cross-functional performance',
    },
  ];

  return (
    <section className='bg-[#f4f5f7] py-10 md:py-12 border-b border-[#e5e7eb] overflow-hidden'>
      <div className='max-w-[1120px] mx-auto px-5 sm:px-8 text-center'>
        <h2 className='text-[20px] sm:text-[24px] md:text-[28px] font-extrabold tracking-[1.7px]'>
          The Challenge
        </h2>

        <h3 className='text-[#111827] text-[24px] sm:text-[28px] md:text-[30px] mt-4 md:mt-5 font-normal tracking-[-0.6px] leading-tight'>
          Disconnected Systems, Fragmented Insights
        </h3>

        <div className='grid grid-cols-1 lg:grid-cols-[1fr_270px] gap-8 mt-6 items-start'>
          <div>
            <p className='text-[14px] sm:text-[15px] md:text-[13px] leading-[1.55] text-black max-w-[780px] font-normal'>
              The client relied on Lightspeed for transaction data and Deputy for workforce
              management, but both systems operated independently. This created a critical
              disconnect between financial performance and workforce metrics making unified
              reporting and aligned operational planning nearly impossible.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8 md:mt-14'>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className='min-h-[100px] md:h-[116px] bg-[#fffafb] border-2 border-[#F5F5F5] rounded-[8px] px-4 flex items-center gap-4 shadow-[0px_8px_22px_rgba(0,0,0,0.08)]'
                >
                  <div className='w-[34px] h-[34px] shrink-0 bg-[#0846AA]/60 rounded-[6px] flex items-center justify-center'>
                    <Image
                      src={card.icon}
                      alt=''
                      width={15}
                      height={15}
                      className='object-contain brightness-0 invert'
                    />
                  </div>

                  <p className='text-[13px] md:text-[14px] text-[#374151] leading-[1.35] font-normal'>
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='relative w-full max-w-[270px] h-[190px] ml-auto lg:mr-[-245px] mt-2 lg:mt-0'>
            <Image
              src='/images/Templates/template11/side-img.png'
              alt='Analytics'
              fill
              className='rounded-[16px] object-cover shadow-sm'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
