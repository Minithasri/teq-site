export default function HeroSection() {
  return (
    <section
      className='relative h-[90px] md:h-[420px] bg-cover bg-center border-t-[4px] border-[#0999ff]'
      style={{
        backgroundImage: 'url("/images/Templates/template11/bg-1.png")',
      }}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-[#061a36]/70 to-[#061a36]/75'></div>
      <div className='relative z-10 max-w-[1080px] mx-auto h-full px-8 flex flex-col justify-center'>
        <h1 className='text-[28px] md:text-[44px] font-extrabold text-white leading-tight tracking-wide'>
          Unified <span className='text-[#efff25]'>HR & Finance Analytics</span> Integration
        </h1>

        <p className='text-white text-[10px] md:text-[16px] mt-4 max-w-[1100px] leading-relaxed opacity-90'>
          How we connected workforce management and POS data into a single analytics platform
          enabling real-time insights for leadership decision-making.
        </p>
      </div>
    </section>
  );
}
