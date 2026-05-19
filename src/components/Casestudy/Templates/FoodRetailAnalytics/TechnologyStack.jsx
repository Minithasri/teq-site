// Left wing logos grouped exactly as shown in the target image from left to right
const leftLogos = [
  '/images/Templates/template17/tech-4.svg', // Tableau
  '/images/Templates/template17/tech1.svg', // Domo
  '/images/Templates/template17/tech2.svg', // Power BI
];

// Right wing logos grouped exactly as shown in the target image from left to right
const rightLogos = [
  '/images/Templates/template17/tech3.svg', // SQL
  '/images/Templates/template17/tech5.svg', // ETL Pipelines
  '/images/Templates/template17/erp.svg', // ERP
];

const technologies = [
  { tag: 'Power BI', sub: 'Visualization' },
  { tag: 'Tableau', sub: 'Visualization' },
  { tag: 'Domo', sub: 'Dashboards' },
  { tag: 'POS Systems', sub: 'Data Source' },
  { tag: 'SQL', sub: 'Data Integration' },
  { tag: 'ETL Pipelines', sub: 'Automation' },
];

export default function TechnologyStack() {
  return (
    <section className='bg-white py-16 w-full'>
      <div className='max-w-[1140px] mx-auto px-6'>
        {/* Fixed Header Layout: Keeps everything strictly on a single horizontal axis */}
        <div className='flex items-center justify-center gap-4 md:gap-7 mb-12 w-full select-none'>
          {/* Left Wing Logos */}
          <div className='flex items-center gap-3 md:gap-5 shrink-0'>
            {leftLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt='Tech Left'
                className='h-7 sm:h-8 md:h-[38px] w-auto object-contain vertical-middle'
              />
            ))}
          </div>

          {/* Centered Heading Title Text - Perfectly centered */}
          <h2 className='text-[20px] sm:text-[24px] md:text-[28px] font-extrabold text-[#091124] tracking-tight shrink-0 text-center px-1 font-sans leading-none'>
            Key Technologies Used
          </h2>

          {/* Right Wing Logos */}
          <div className='flex items-center gap-3 md:gap-5 shrink-0'>
            {rightLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt='Tech Right'
                className='h-7 sm:h-8 md:h-[38px] w-auto object-contain vertical-middle'
              />
            ))}
          </div>
        </div>

        {/* Outer Tech Tags Container Box */}
        <div className='bg-white border border-[#e2e8f0]/80 rounded-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.015)] p-8 md:p-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-6'>
          {technologies.map((item, index) => (
            <div key={index} className='flex flex-col items-center min-w-[125px]'>
              {/* Tag Pill Badge */}
              <span className='px-6 py-2.5 bg-[#edf4fe] text-[#0d4eb9] rounded-full text-[13.5px] font-extrabold tracking-wide border border-[#dbecfe]/50 text-center w-full block shadow-[0_2px_6px_rgba(13,78,185,0.02)]'>
                {item.tag}
              </span>

              {/* Functional Subtitle Role Label */}
              <span className='text-[11px] text-[#718096] font-medium mt-2 tracking-normal text-center'>
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
