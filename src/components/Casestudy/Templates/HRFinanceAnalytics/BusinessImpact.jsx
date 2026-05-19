import Image from 'next/image';

export default function BusinessImpact() {
  const impacts = [
    {
      icon: '/images/Templates/template11/impact1.svg',
      title: '60%+',
      subtitle: 'Reduction in Manual Data Consolidation',
      text: 'Eliminated repetitive data gathering and reconciliation across disconnected systems.',
    },
    {
      icon: '/images/Templates/template11/impact2.svg',
      title: 'Real-Time',
      subtitle: 'Cross-Functional Reporting',
      text: 'Enabled live reporting across HR and Finance operations from a single platform.',
    },
    {
      icon: '/images/Templates/template11/impact3.svg',
      title: 'Unified',
      subtitle: 'Operational Planning',
      text: 'Improved decision-making through consolidated workforce and financial insights.',
    },
  ];

  return (
    <section className='bg-[#f4f5f7] py-9 border-b border-[#e5e7eb]'>
      <div className='max-w-[1120px] mx-auto px-5 sm:px-8'>
        <h2 className='text-[#24f000] text-[20px] sm:text-[24px] md:text-[28px] font-extrabold tracking-widest uppercase'>
          BUSINESS IMPACT
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-9'>
          {impacts.map((item, index) => (
            <div
              key={index}
              className='relative bg-white rounded-[8px] p-7 overflow-hidden min-h-[188px]'
            >
              <div className='absolute -top-7 -right-7 w-[96px] h-[96px] rounded-full bg-[#fff2da]' />

              <div className='relative z-10 flex items-center gap-5 md:gap-7'>
                <div className='w-[34px] h-[34px] bg-[#24f000] rounded-[6px] flex items-center justify-center p-2 shrink-0'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={18}
                    height={18}
                    className='object-contain brightness-0 invert'
                  />
                </div>

                <h3 className='text-[#24f000] text-[24px] md:text-[26px] font-extrabold tracking-tight'>
                  {item.title}
                </h3>
              </div>

              <p className='relative z-10 text-[#24f000] text-[11px] font-bold mt-5'>
                {item.subtitle}
              </p>

              <p className='relative z-10 text-[#8b8b8b] text-[14px] leading-[1.35] mt-7 max-w-[320px]'>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
