const challenges = [
  'Sales and outlet data were scattered across systems.',
  'No centralized dashboard for consolidated performance tracking.',
  'Manual reporting delayed visibility into daily sales and KPIs.',
  'Limited ability to compare outlet-wise efficiency.',
  'Executives lacked actionable insights to optimize operations.',
];

export default function KeyChallenges() {
  return (
    <section className='relative bg-[#fff2f2] py-14 overflow-hidden min-h-[420px]'>
      {/* Container - constrained slightly to prevent text from crashing into images */}
      <div className='max-w-[1200px] mx-auto px-6 relative z-10'>
        <h2 className='text-center text-[26px] font-extrabold text-[#091124] tracking-tight mb-10'>
          Key Challenges
        </h2>

        {/* 3-Column Grid Layout matching the template structure */}
        <div className='grid md:grid-cols-3 gap-6 max-w-[85%] lg:max-w-[78%] xl:max-w-[960px]'>
          {challenges.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[12px] border-2 border-[#F5F5F5] shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-5 flex gap-4 items-start'
            >
              {/* Softer number bubble style matching target template */}
              <div className='w-7 h-7 rounded-full bg-[#fff0f0] text-[#ff4d4d] flex items-center justify-center text-[13px] font-extrabold shrink-0 mt-0.5'>
                {index + 1}
              </div>

              <p className='text-[13.5px] text-[#2d3748] font-medium leading-[1.5]'>{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Food Images Layer System - Positioned further left as requested */}
      {/* Changed `right-0` to `right-[6%]` or a pixel value to pull it leftward */}
      <div className='hidden lg:block absolute right-[6%] bottom-0 w-[420px] h-[320px] pointer-events-none z-0'>
        {/* Top/Right Image (bg3 - Burger) - Positioned in the background layer */}
        <img
          src='/images/Templates/template17/bg3.png'
          alt='Burger'
          className='absolute right-1 top-5 w-[240px] h-auto rounded-[24px] shadow-xl z-0'
        />

        {/* Bottom/Left Image (bg4 - Fried Chicken) - Positioned in the foreground layer */}
        <img
          src='/images/Templates/template17/bg4.png'
          alt='Fried Chicken'
          className='absolute left-4 bottom-1 w-[210px] h-auto rounded-[24px] shadow-2xl z-10 border-1 border-[#fff2f2]'
        />
      </div>
    </section>
  );
}
