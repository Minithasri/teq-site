export default function HeroSection() {
  return (
    <section
      className='relative h-[420px] bg-cover bg-center border-t-[5px] border-[#0999ff]'
      style={{
        backgroundImage:
          'linear-gradient(rgba(6,26,34,0.75), rgba(6,26,34,0.75)), url("/images/Templates/template12/ai-bg.png")',
      }}
    >
      <div className='relative z-10 max-w-[1080px] mx-auto h-full px-6 md:px-8 flex flex-col justify-center'>
        <h1 className='text-[32px] md:text-[58px] font-extrabold text-white leading-tight'>
          Enhancing Guest Experience with
          <br />
          <span className='text-[#eaff22]'>AI-Powered Hospitality</span>
        </h1>

        <p className='text-white/90 text-[15px] md:text-[15px] mt-5 max-w-[560px] leading-relaxed'>
          How GWC partnered with the client to revolutionize hotel operations and deliver smarter,
          data-driven experiences for guests worldwide.
        </p>
      </div>
    </section>
  );
}
