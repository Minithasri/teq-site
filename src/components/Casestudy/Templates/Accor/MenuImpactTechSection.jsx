'use client';

import Image from 'next/image';

const impactStats = [
  {
    value: '~80%',
    title: 'Reduction in manual\nprocessing effort',
  },
  {
    value: '~95%',
    title: 'Accuracy in license\nclassification',
  },
  {
    value: '10×',
    title: 'Scalability for menu\nsubmissions',
  },
  {
    value: '50%+',
    title: 'Faster reporting &\nnotifications',
  },
];

const techTags = ['React', 'Node.js', 'Gemini API', 'NodeMailer', 'Google Cloud Platform'];

const techLogos = [
  '/images/Templates/accor/react.png',
  '/images/Templates/accor/js.png',
  '/images/Templates/accor/gemini.png',
  '/images/Templates/accor/nodeMailer.png',
  '/images/Templates/accor/gCloud.png',
];

const MenuImpactTechSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#F7F7F7]'>
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-10 md:py-14'>
        {/* ================= BUSINESS IMPACT ================= */}
        <div className='text-center'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px]'>
            Business Impact
          </h2>

          {/* SUBTITLE */}
          <p className='mt-5 text-[12px] md:text-[18px] leading-[1.7] text-[#8690A2]'>
            Measurable outcomes that transformed operational efficiency and compliance management.
          </p>

          {/* IMPACT CARDS */}
          <div className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-4'>
            {impactStats.map((item, index) => (
              <div
                key={index}
                className='
                  flex
                  min-h-[150px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[18px]
                  border-2
                  border-[#F5F5F5]
                  bg-white
                  px-5
                  py-6
                  text-center
                  shadow-[0px_8px_22px_rgba(0,0,0,0.08)]
                '
              >
                {/* VALUE */}
                <h3 className='text-[32px] md:text-[44px] leading-none font-semibold tracking-[-1px] text-[#0F1729]/80'>
                  {item.value}
                </h3>

                {/* TITLE */}
                <p className='mt-5 whitespace-pre-line text-[13px] md:text-[17px] leading-[1.5] text-[#8891A1]'>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= TECHNOLOGY STACK ================= */}
        <div className='mt-16 text-center'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px]'>
            Technology Stack
          </h2>
          {/* TOP ROW */}
          <div className='flex flex-col gap-8 md:flex-row md:items-center md:justify-between'>
            {/* LEFT */}
            <div>
              <div className='flex flex-col md:flex-row items-center gap-5 md:gap-6 mt-8'>
                {/* TAGS */}
                <div className='mt-8 flex flex-wrap gap-3'>
                  {techTags.map((item, index) => (
                    <div
                      key={index}
                      className='
                      rounded-full
                      border-2
                      border-[#F5F5F5]
                      bg-white
                      px-5
                      md:px-6
                      py-2
                      text-[11px]
                      md:text-[14px]
                      font-medium
                      text-[#0F1729]/80
                      shadow-[0px_4px_12px_rgba(0,0,0,0.08)]
                    '
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* LOGOS */}
                <div className='flex flex-wrap gap-3'>
                  {techLogos.map((logo, index) => (
                    <Image
                      key={index}
                      src={logo}
                      alt='Technology'
                      width={70}
                      height={70}
                      priority
                      className='h-[42px] w-auto object-contain md:h-[56px]'
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= VALUE DELIVERED ================= */}
        <div className='mt-16 text-center'>
          {/* TITLE */}
          <h2 className='text-2xl md:text-5xl leading-none font-semibold tracking-[-1px]'>
            Value Delivered
          </h2>

          {/* DESCRIPTION */}
          <div className='mt-8'>
            <p className='text-[14px] md:text-[19px] leading-[2] text-[#8891A1]'>
              By combining AI-powered document intelligence with a robust full-stack platform, we
              enabled a leading hospitality organization to automate menu analysis, ensure licensing
              compliance, and dramatically reduce processing time delivering a scalable foundation
              for continued operational excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuImpactTechSection;
