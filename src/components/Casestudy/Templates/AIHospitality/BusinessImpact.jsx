import Image from 'next/image';

export default function BusinessImpact() {
  const impacts = [
    {
      icon: '/images/Templates/template12/imp1.svg',
      iconBg: 'bg-[#f1f5f9]', // Light soft gold badge
      title: 'Guest Experience Impact',
      points: [
        'Enhanced personalization improved guest satisfaction and loyalty',
        'Faster response to guest issues with real-time feedback insights',
      ],
    },
    {
      icon: '/images/Templates/template12/imp2.svg',
      iconBg: 'bg-[#f1f5f9]', // Light clean gray badge
      title: 'Operational Impact',
      points: [
        'Improved efficiency with real-time operational KPIs',
        'Better alignment of resources with guest demand',
      ],
    },
    {
      icon: '/images/Templates/template12/imp3.svg',
      iconBg: 'bg-[#f1f5f9]', // Light clean gray badge
      title: 'Strategic Impact',
      points: [
        'Positioned Accor as a hospitality innovator leveraging AI',
        'Built a scalable AI-driven platform for global operations',
      ],
    },
  ];

  return (
    <section
      className='relative py-[64px] bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.45), rgba(255,255,255,0.45)), url("/images/Templates/template12/ai-bg4.png")',
      }}
    >
      <div className='max-w-[1120px] mx-auto px-6'>
        {/* Main Section Header */}
        <div className='text-center mb-[40px]'>
          <h2 className='text-[28px] font-extrabold tracking-tight'>Business Impact</h2>
          <p className='text-[16px] text-[#1e293b] font-medium mt-2'>
            Transformative results across guest experience, operations, and strategy
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className='grid md:grid-cols-3 gap-[24px]'>
          {impacts.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[12px] border-2 border-[#f5f5f5] shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-[28px] flex flex-col'
            >
              {/* Row Header alignment (Icon next to Text) */}
              <div className='flex items-center gap-[14px] mb-[24px]'>
                <div
                  className={`w-[48px] h-[48px] rounded-[10px] ${item.iconBg} flex items-center justify-center shrink-0`}
                >
                  <Image src={item.icon} alt={item.title} width={24} height={24} />
                </div>
                <h3 className='text-[16.5px] font-extrabold text-[#071326] tracking-tight leading-tight max-w-[160px]'>
                  {item.title}
                </h3>
              </div>

              {/* Point Lists with Your New Custom imp4.svg Logo */}
              <div className='space-y-[18px] mt-auto'>
                {item.points.map((point, i) => (
                  <div key={i} className='flex items-start gap-[12px]'>
                    {/* Render custom trend logo dynamically */}
                    <div className='w-[14px] h-[14px] mt-[4px] shrink-0 relative flex items-center justify-center'>
                      <Image
                        src='/images/Templates/template12/imp4.svg'
                        alt='Trend Icon'
                        width={14}
                        height={14}
                        className='object-contain'
                      />
                    </div>
                    <p className='text-[14px] text-[#475569] font-medium leading-[1.45]'>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
