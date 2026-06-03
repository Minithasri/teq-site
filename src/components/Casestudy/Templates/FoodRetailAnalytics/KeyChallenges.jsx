const challenges = [
  {
    title: 'Disconnected Data Sources',
    description: 'Sales and outlet data were scattered across systems.',
  },
  {
    title: 'No Centralized Dashboard',
    description: 'No centralized dashboard for consolidated performance tracking.',
  },
  {
    title: 'Delayed Reporting',
    description: 'Manual reporting delayed visibility into daily sales and KPIs.',
  },
  {
    title: 'Limited Outlet Comparison',
    description: 'Limited ability to compare outlet-wise efficiency.',
  },
  {
    title: 'Lack of Actionable Insights',
    description: 'Executives lacked actionable insights to optimize operations.',
  },
];

export default function KeyChallenges() {
  return (
    <section className='relative bg-[#fff2f2] py-14 min-h-[420px] z-10'>
      {/* Container - constrained slightly to prevent text from crashing into images */}
      <div className='max-w-[1200px] mx-auto px-6 relative z-10'>
        <h2 className='text-center text-[26px] font-extrabold text-[#091124] tracking-tight mb-10'>
          Key Challenges
        </h2>

        {/* 3-Column Grid Layout matching the template structure */}
        <div className='grid md:grid-cols-3 gap-6 w-full relative z-10'>
          {challenges.map((item, index) => (
            <div
              key={index}
              className='bg-white rounded-[12px] border border-[#D51616] shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-5 flex gap-4 items-start'
            >
              {/* Softer number bubble style matching target template */}
              <div className='w-7 h-7 rounded-full bg-[#FFF0F0] text-[#DE350B] flex items-center justify-center text-[13px] font-extrabold shrink-0 mt-0.5'>
                {index + 1}
              </div>

              <div className='flex flex-col gap-1.5'>
                <h3 className='text-[15px] font-semibold text-[#DE350B] leading-[1.3]'>
                  {item.title}
                </h3>
                <p className='text-[13px] text-[#0F1729] font-medium leading-[1.5]'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Food Images Layer System - Positioned behind cards with bottom overlap */}
      <div className='hidden lg:block absolute right-[2%] bottom-[-50px] w-[420px] h-[350px] pointer-events-none z-0'>
        {/* Top/Right Image (bg3 - Burger) - Positioned in the background layer behind Card 3 */}
        <img
          src='/images/Templates/template17/bg3.png'
          alt='Burger'
          className='absolute right-2 top-8 w-[240px] h-auto rounded-[24px] shadow-xl z-0'
        />

        {/* Bottom/Left Image (bg4 - Fried Chicken) - Overlaps into the next section */}
        <img
          src='/images/Templates/template17/bg4.png'
          alt='Fried Chicken'
          className='absolute left-8 bottom-0 w-[230px] h-auto rounded-[24px] shadow-2xl z-20'
        />
      </div>
    </section>
  );
}
