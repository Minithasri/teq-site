import Image from 'next/image';

export default function ChallengeSection() {
  const challenges = [
    'Guest preferences and booking data were stored in disparate systems',
    'No unified framework for personalized recommendations or service optimization',
    'Manual tracking of guest experience metrics delayed action on feedback',
    'Leadership lacked real-time visibility into operational performance across properties',
    'Growing competition in the hospitality industry made customer experience a key differentiator',
  ];

  const metrics = [
    { label: 'Guest feedback analysis', value: 'Post-stay only, reactive' },
    { label: 'Personalization', value: 'Limited to loyalty programs' },
    { label: 'Operational efficiency', value: 'Tracked in silos' },
    { label: 'Improvement planning', value: 'Heavy reliance on manual surveys' },
  ];

  return (
    <section
      className='relative py-[56px] bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage:
          'linear-gradient(rgba(15, 23, 42, 0.15), rgba(15, 23, 42, 0.15)), url("/images/Templates/template12/ai-bg3.png")',
      }}
    >
      <div className='max-w-[1080px] mx-auto px-6'>
        {/* Header Block */}
        <div className='text-center mb-[32px]'>
          <h2 className='text-[26px] font-extrabold tracking-tight'>The Challenge</h2>
          <p className='text-[16px] font-extrabold text-[#071326] mt-2'>
            Fragmented Guest Insights Hindering Experience Excellence
          </p>
        </div>

        {/* Content Columns */}
        <div className='grid md:grid-cols-2 gap-[24px] items-stretch'>
          {/* LEFT COLUMN: KEY CHALLENGES */}
          <div className='bg-white rounded-[12px] shadow-xl px-[36px] py-[32px] flex flex-col justify-between'>
            <div>
              {/* Header section with your exact yellow star logo asset setup */}
              <div className='flex items-center gap-[16px] mb-[24px]'>
                <div className='w-[48px] h-[48px] rounded-[10px] bg-[#ef4444]/10 flex items-center justify-center shrink-0'>
                  <Image
                    src='/images/Templates/template12/key.svg'
                    alt='Key Challenges'
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className='text-[20px] font-extrabold text-[#071326] leading-tight'>
                    Key Challenges
                  </h3>
                  <p className='text-[14px] text-[#718096] font-medium mt-0.5'>
                    Critical pain points affecting operations
                  </p>
                </div>
              </div>

              {/* Precise Red Bullet Lists */}
              <div className='space-y-[16px]'>
                {challenges.map((item, index) => (
                  <div key={index} className='flex items-start gap-[12px]'>
                    {/* Perfect mini bullet dot */}
                    <span className='w-[6px] h-[6px] rounded-full bg-[#ef4444] mt-[8px] shrink-0' />
                    <p className='text-[14.5px] text-[#334155] font-medium leading-[1.4]'>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CURRENT STATE METRICS */}
          <div className='bg-white rounded-[12px] shadow-xl px-[36px] py-[32px]'>
            <h3 className='text-[20px] font-extrabold text-[#071326] leading-tight'>
              Current State Metrics
            </h3>
            <p className='text-[14px] text-[#718096] font-medium mt-0.5 mb-[24px]'>
              Performance before transformation
            </p>

            {/* Title stacked above light gray metric capsules */}
            <div className='space-y-[18px]'>
              {metrics.map((item, index) => (
                <div key={index} className='space-y-1.5'>
                  <h4 className='text-[15.5px] font-extrabold text-[#071326]'>{item.label}</h4>
                  <div className='bg-[#f1f5f9] rounded-[6px] px-[16px] py-[10px] text-[14px] font-semibold text-[#64748b]'>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
