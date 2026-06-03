export default function TechnologyStack() {
  return (
    <section className='bg-white py-16 w-full'>
      <div className='max-w-[850px] mx-auto px-6'>
        {/* Centered Heading Title Text */}
        <h2 className='text-center text-[26px] font-extrabold text-[#091124] mb-12 tracking-tight'>
          Key Technologies Used
        </h2>

        {/* 2-Column Grid for the 2 Cards */}
        <div className='grid md:grid-cols-2 gap-6'>
          {/* Card 1: Domo */}
          <div className='bg-white rounded-[16px] border border-[#E1E7EF] p-8 flex justify-start items-center gap-10 shadow-[0_4px_12px_rgba(0,0,0,0.02)] min-h-[140px]'>
            <div className='flex flex-col items-start gap-3'>
              {/* Tag Pill */}
              <span className='px-6 py-2 rounded-full text-[13.5px] font-extrabold tracking-wide bg-[#0846AA1A] text-[#0846AA]'>
                Domo
              </span>
              {/* Role Subtitle */}
              <span className='text-[13.5px] text-[#55607a] font-semibold pl-1'>Visualization</span>
            </div>
            {/* Domo Logo */}
            <img
              src='/images/Templates/template17/tech1.svg'
              alt='Domo'
              className='h-12 w-auto object-contain'
            />
          </div>

          {/* Card 2: Xilnex */}
          <div className='bg-white rounded-[16px] border border-[#E1E7EF] p-8 flex justify-start items-center gap-10 shadow-[0_4px_12px_rgba(0,0,0,0.02)] min-h-[140px]'>
            <div className='flex flex-col items-start gap-3'>
              {/* Tag Pill */}
              <span className='px-6 py-2 rounded-full text-[13.5px] font-extrabold tracking-wide bg-[#0846AA1A] text-[#0846AA]'>
                Xilnex
              </span>
              {/* Role Subtitle */}
              <span className='text-[13.5px] text-[#55607a] font-semibold pl-1'>
                API Integration
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
