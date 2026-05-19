export default function HeroSection() {
  return (
    <section
      className='relative min-h-[440px] md:min-h-[460px] bg-cover bg-center w-full flex items-center'
      style={{
        // Corrected gradient color profiles and transparency layers to precisely match the target design
        // Slightly reduced opacity here to make the background image more visible
        backgroundImage:
          'linear-gradient(to right, rgba(38, 98, 245, 0.85), rgba(134, 38, 245, 0.90)), url("/images/Templates/template15/bg1.png")',
      }}
    >
      {/* Increased top padding (pt-32) and lowered bottom padding (pb-16) to push content down perfectly */}
      <div className='max-w-[1140px] mx-auto px-4 md:px-6 pt-[110px] md:pt-[130px] pb-[60px] md:pb-[70px] text-center w-full'>
        {/* Main Heading Group */}
        <h1 className='text-white text-[32px] md:text-[46px] lg:text-[52px] font-extrabold leading-[1.15] tracking-tight'>
          Building Unified Finance & HR
          <br />
          <span className='text-[#fff236] block mt-1 md:mt-2'>Performance Insights</span>
        </h1>

        {/* Subtitle Description */}
        <p className='text-white/85 text-[14px] md:text-[15.5px] mt-6 md:mt-7 max-w-[720px] mx-auto leading-relaxed font-medium tracking-tight'>
          Transforming siloed finance and HR data into unified, real-time performance insights that
          drive strategic decision-making across global operations.
        </p>
      </div>
    </section>
  );
}
