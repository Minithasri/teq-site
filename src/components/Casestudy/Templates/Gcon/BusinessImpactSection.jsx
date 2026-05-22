'use client';

const BusinessImpactSection = () => {
  return (
    <section className='w-full overflow-hidden bg-[#08244A]'>
      <div className='mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16'>
        {/* HEADER */}
        <div className='text-center'>
          {/* LABEL */}
          <h2 className='text-3xl md:text-5xl leading-none font-semibold text-white tracking-[1px]'>
            Business Impact
          </h2>

          {/* HEADING */}
          <h3 className='mt-5 text-xl md:text-3xl font-medium leading-[1.3] text-white'>
            Measurable Results, Immediate ROI
          </h3>
        </div>

        {/* STATS */}
        <div className='mt-12 grid grid-cols-2 gap-y-10 md:grid-cols-4'>
          {/* CARD 1 */}
          <div className='text-center'>
            <h4 className='text-[44px] md:text-[58px] font-light leading-none tracking-[-2px] text-[#21D4C3]'>
              75–85%
            </h4>

            <p className='mt-5 text-[14px] md:text-[16px] leading-[1.6] tracking-[1.5px] text-white uppercase'>
              Reduction in Manual Review Effort
            </p>
          </div>

          {/* CARD 2 */}
          <div className='text-center'>
            <h4 className='text-[44px] md:text-[58px] font-light leading-none tracking-[-2px] text-[#21D4C3]'>
              ~80%
            </h4>

            <p className='mt-5 text-[14px] md:text-[16px] leading-[1.6] tracking-[1.5px] text-white uppercase'>
              Faster Turnaround Time
            </p>
          </div>

          {/* CARD 3 */}
          <div className='text-center'>
            <h4 className='text-[44px] md:text-[58px] font-light leading-none tracking-[-2px] text-[#21D4C3]'>
              30–40%
            </h4>

            <p className='mt-5 text-[14px] md:text-[16px] leading-[1.6] tracking-[1.5px] text-white uppercase'>
              Improvement in Data Accuracy
            </p>
          </div>

          {/* CARD 4 */}
          <div className='text-center'>
            <h4 className='text-[44px] md:text-[58px] font-light leading-none tracking-[-2px] text-[#21D4C3]'>
              ∞
            </h4>

            <p className='mt-5 text-[14px] md:text-[16px] leading-[1.6] tracking-[1.5px] text-white uppercase'>
              Scalability Across Projects
            </p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className='mt-5 text-center'>
          <p className='text-[13px] md:text-[15px] leading-[2] text-[#C9D2E1]'>
            Processing time dropped from{' '}
            <span className='font-semibold text-white'>days to hours</span>, freeing teams to focus
            on high-value project management activities instead of repetitive document review.
          </p>

          <p className='mt-5 text-[13px] md:text-[15px] leading-[2] text-[#C9D2E1]'>
            The multi-agent architecture enables the organization to handle multiple projects
            simultaneously without proportional increases in headcount or overhead.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpactSection;
