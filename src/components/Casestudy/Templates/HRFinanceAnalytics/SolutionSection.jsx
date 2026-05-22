import Image from 'next/image';

export default function SolutionSection() {
  const steps = [
    {
      icon: '/images/Templates/template11/api.svg',
      title: 'API Integration',
      text: 'Connected Deputy and Lightspeed using custom API integrations through Jupyter Workspace for seamless data flow.',
    },
    {
      icon: '/images/Templates/template11/data.svg',
      title: 'Data Ingestion',
      text: 'Automated ingestion of workforce and POS transactions into the Domo warehouse, including historical POS records.',
    },
    {
      icon: '/images/Templates/template11/elt.svg',
      title: 'ETL Transformation',
      text: 'Used Domo Magic ETL to transform and unify both datasets into a single, clean reporting model.',
    },
    {
      icon: '/images/Templates/template11/unified.svg',
      title: 'Unified Dashboards',
      text: 'Built consolidated HR and Finance dashboards enabling cross-functional visibility for leadership.',
    },
  ];

  return (
    <section className='border-b border-[#e5e7eb]'>
      <div className='bg-white py-9'>
        <div className='max-w-[1120px] mx-auto px-5 sm:px-8 text-center'>
          <h2 className='text-[20px] sm:text-[24px] md:text-[28px] font-extrabold tracking-widest'>
            The Solution
          </h2>

          <h3 className='text-[#111827] text-[24px] sm:text-[28px] md:text-[30px] mt-3 font-normal tracking-tight'>
            An Integrated Data Framework
          </h3>

          <p className='text-[13px] md:text-[14px] leading-[1.8] text-[#4b5563] max-w-[1050px] mt-5'>
            We developed a centralized analytics solution connecting both platforms through
            automated pipelines delivering a single source of truth for HR and financial reporting.
          </p>
        </div>
      </div>

      <div
        className='relative py-8 bg-cover bg-center overflow-hidden'
        style={{
          backgroundImage: "url('/images/Templates/template11/bg-2.png')",
        }}
      >
        <div className='absolute inset-0 bg-white/82'></div>

        <div className='relative z-10 max-w-[1120px] mx-auto px-5 sm:px-8'>
          <div className='relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4'>
            <div className='hidden lg:block absolute top-[31px] left-[12%] right-[12%] border-t-2 border-dashed border-[#008cff]/45 z-0'></div>

            {steps.map((step, index) => (
              <div key={index} className='relative z-10 flex flex-col items-center'>
                <div className='w-[62px] h-[62px] rounded-full bg-[#0846AA]/60 flex items-center justify-center shadow-md'>
                  <Image
                    src={step.icon}
                    alt=''
                    width={24}
                    height={24}
                    className='object-contain brightness-0 invert'
                  />
                </div>

                <p className='text-[12px] font-normal text-black mt-4 text-center'>{step.title}</p>

                <div className='bg-white border-2 border-[#F5F5F5] rounded-[6px] mt-5 lg:mt-7 p-4 min-h-[115px] w-full shadow-[0px_8px_22px_rgba(0,0,0,0.08)]'>
                  <p className='text-[12px] leading-[1.6] text-[#6b7280] font-normal'>
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
