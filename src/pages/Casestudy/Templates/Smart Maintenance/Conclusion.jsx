import Image from 'next/image';

const Conclusion = () => {
  return (
    <section
      className='w-full py-16 md:py-24 px-4 md:px-12'
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)',
      }}
    >
      <div className='max-w-6xl mx-auto'>
        <div
          className='rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-lg'
          style={{
            backgroundColor: '#D0F2D4',
            border: '1px solid #B0E5B9',
          }}
        >
          {/* Top Right Gradient Blur */}
          <div
            className='absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-60'
            style={{
              background: 'linear-gradient(135deg, #F97415 0%, #FAA52E 100%)',
              transform: 'translate(30%, -30%)',
            }}
          ></div>

          <div className='relative z-10 text-center'>
            {/* Header */}
            <div className='mb-10'>
              <h2 className='text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-4'>Conclusion</h2>
              <div className='h-1 w-16 mx-auto rounded-full bg-[#F97415]'></div>
            </div>

            <p className='text-[#505050] text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-12'>
              This Power Platform-based Maintenance Management Solution empowers manufacturers to
              move beyond traditional reactive maintenance toward predictive and preventive
              operations.
            </p>

            {/* Points Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 max-w-5xl mx-auto text-left'>
              <div className='flex items-start gap-4'>
                <div className='mt-1 shrink-0 w-6 h-6 relative'>
                  <Image
                    src='/images/Templates/template9/tick.svg'
                    alt='Check'
                    width={24}
                    height={24}
                    className='object-contain'
                  />
                </div>
                <p className='text-[#505050] text-base font-medium'>
                  Move beyond reactive maintenance to predictive and preventive operations
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <div className='mt-1 shrink-0 w-6 h-6 relative'>
                  <Image
                    src='/images/Templates/template9/tick.svg'
                    alt='Check'
                    width={24}
                    height={24}
                    className='object-contain'
                  />
                </div>
                <p className='text-[#505050] text-base font-medium'>
                  Connect data, processes, and people seamlessly
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <div className='mt-1 shrink-0 w-6 h-6 relative'>
                  <Image
                    src='/images/Templates/template9/tick.svg'
                    alt='Check'
                    width={24}
                    height={24}
                    className='object-contain'
                  />
                </div>
                <p className='text-[#505050] text-base font-medium'>
                  Ensure higher uptime and optimized maintenance costs
                </p>
              </div>

              <div className='flex items-start gap-4'>
                <div className='mt-1 shrink-0 w-6 h-6 relative'>
                  <Image
                    src='/images/Templates/template9/tick.svg'
                    alt='Check'
                    width={24}
                    height={24}
                    className='object-contain'
                  />
                </div>
                <p className='text-[#505050] text-base font-medium'>
                  Position for long-term operational excellence and digital transformation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
