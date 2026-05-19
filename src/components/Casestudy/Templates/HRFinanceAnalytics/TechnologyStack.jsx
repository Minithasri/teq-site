import Image from 'next/image';

export default function TechnologyStack() {
  const stacks = [
    {
      img: '/images/Templates/template11/stack1.svg',
      title: 'Domo',
      text: 'Business intelligence & data warehouse platform',
    },
    {
      img: '/images/Templates/template11/stack2.svg',
      title: 'Jupyter Workspace',
      text: 'Data exploration & API integration scripting',
    },
    {
      img: '/images/Templates/template11/stack3.svg',
      title: 'API Integrations',
      text: 'Custom connectors for Deputy & Lightspeed',
    },
  ];

  return (
    <section className='relative bg-[#f4f5f7] pt-12 pb-24 overflow-hidden'>
      <div className='max-w-[1120px] mx-auto px-5 sm:px-8 relative'>
        <h2 className='text-black text-[24px] md:text-[30px] font-extrabold tracking-[1px] uppercase'>
          TECHNOLOGY STACK
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-9 max-w-[900px] relative z-10'>
          {stacks.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[8px] min-h-[76px] flex items-center gap-5 px-6 py-4 border border-[#d9dce2] shadow-sm'
            >
              <div className='w-[68px] h-[48px] relative shrink-0'>
                <Image src={item.img} alt={item.title} fill className='object-contain' />
              </div>

              <div>
                <h3 className='text-[18px] font-extrabold text-[#111827] leading-none'>
                  {item.title}
                </h3>

                <p className='text-[12px] text-[#6b7280] leading-snug mt-2'>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='absolute right-[-40px] sm:right-[-10px] bottom-[-95px] w-[260px] sm:w-[360px] h-[220px] sm:h-[280px] opacity-60 sm:opacity-75 pointer-events-none'>
          <Image
            src='/images/Templates/template11/footer-img.png'
            alt=''
            fill
            className='object-contain object-bottom'
          />
        </div>
      </div>
    </section>
  );
}
