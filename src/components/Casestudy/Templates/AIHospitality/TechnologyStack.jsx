import Image from 'next/image';

export default function TechnologyStack() {
  const logos = [
    '/images/Templates/template12/tech1.svg',
    '/images/Templates/template12/tech2.svg',
    '/images/Templates/template12/tech3.svg',
    '/images/Templates/template12/tech4.svg',
  ];

  const techItems = [
    {
      text: 'AI/ML Models – personalization and predictive insights',
    },
    {
      text: 'Power BI / Domo – real-time operational dashboards',
    },
    {
      text: 'SQL / APIs – data integration across booking and feedback systems',
    },
    {
      text: 'NLP Tools – guest sentiment analysis',
    },
  ];

  return (
    <section className='pb-16 bg-[#f4f6f8]'>
      <div className='max-w-[1080px] mx-auto px-6 md:px-8'>
        <div className='bg-white rounded-[12px] shadow-lg p-[36px] max-w-[970px] mx-auto'>
          {/* Header & Logo Container */}
          <div className='flex flex-wrap items-center gap-[24px] mb-[28px]'>
            <h2 className='text-[26px] font-extrabold tracking-tight'>Technology Stack</h2>

            <div className='flex items-center gap-[18px]'>
              {logos.map((logo, index) => (
                <div key={index} className='relative shrink-0'>
                  <Image
                    src={logo}
                    alt='Technology Brand Logo'
                    width={52}
                    height={38}
                    className='object-contain'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Grid Layout Layer for Tech Items */}
          <div className='grid md:grid-cols-2 gap-[16px]'>
            {techItems.map((item, index) => (
              <div
                key={index}
                className='bg-[#f1f5f9] rounded-[10px] px-[20px] py-[14px] flex items-start gap-[12px]'
              >
                {/* Yellow Bullet Point matching the reference */}
                <span className='w-[6px] h-[6px] rounded-full bg-[#ffb21a] mt-[8px] shrink-0' />

                {/* Removed font-bold completely so it renders cleanly just like image 2 */}
                <p className='text-[15px] text-[#171717] font-normal leading-[1.4]'>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
