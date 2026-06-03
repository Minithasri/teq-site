const cards = [
  {
    icon: '/images/Templates/template17/ind.svg',
    title: 'Industry',
    text: 'Food Retail (QSR)',
  },
  {
    icon: '/images/Templates/template17/geo.svg',
    title: 'Geography',
    text: 'Multi-location outlets',
  },
  {
    icon: '/images/Templates/template17/enga.svg',
    title: 'Engagement',
    text: 'Sales & Operations Performance Reporting',
  },
  {
    icon: '/images/Templates/template17/obj.svg',
    title: 'Objective',
    text: 'Provide leadership with real-time insights into outlet performance and KPIs',
  },
];

export default function ClientSnapshot() {
  return (
    <section className='bg-[#fcfdff] py-14'>
      <div className='max-w-[1040px] mx-auto px-4 sm:px-6'>
        <h2 className='text-center text-[26px] font-extrabold text-[#091124] mb-10 tracking-tight'>
          Client Snapshot
        </h2>

        <div className='grid md:grid-cols-2 gap-6'>
          {cards.map((item, index) => (
            <div
              key={index}
              className='bg-white border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)] rounded-[12px] p-4 sm:p-6 flex gap-3 sm:gap-4 items-start'
            >
              {/* Icon Container with precise blue accent background and border radius */}
              <div className='w-10 h-10 sm:w-11 sm:h-11 rounded-[10px] bg-[#eef4ff] flex items-center justify-center shrink-0 mt-0.5'>
                <img
                  src={item.icon}
                  alt={item.title}
                  className='w-[20px] h-[20px] sm:w-[22px] sm:h-[22px]'
                />
              </div>

              {/* Text Block matching the exact weight and clean text structure */}
              <div className='flex flex-col justify-start pt-0.5'>
                <h3 className='text-[16px] sm:text-[18px] font-extrabold text-[#65758B] leading-tight'>
                  {item.title}
                </h3>
                <p className='text-[14px] sm:text-[15px] text-[#0F1729] font-semibold mt-1 leading-[1.4] max-w-[260px] md:max-w-[360px]'>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
